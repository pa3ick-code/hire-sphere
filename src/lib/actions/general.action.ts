"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";

import { createClient } from "@/lib/supabase/server";
import { feedbackSchema } from "@/constants";

export async function createFeedback(params: CreateFeedbackParams) {
  const { interviewId, userId, transcript, feedbackId } = params;
  const supabase = await createClient();

  try {
    const formattedTranscript = transcript
      .map(
        (sentence: { role: string; content: string }) =>
          `- ${sentence.role}: ${sentence.content}\n`
      )
      .join("");

    const { object } = await generateObject({
      model: google("gemini-2.0-flash-001", {
        structuredOutputs: false,
      }),
      schema: feedbackSchema,
      prompt: `
        You are an experienced recruiter analyzing a real-time interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
        Transcript:
        ${formattedTranscript}

        Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts and tools relevant for the role.
        - **Problem-Solving**: Ability to analyze problems, reason logically, and propose effective solutions.
        - **Cultural & Role Fit**: Alignment with company values, team dynamics, and expectations of the role..
        - **Confidence & Clarity**: Confidence in delivery, steady engagement, and clear explanations.
        - **Pacing & Flow**: Smooth delivery without rushing or dragging; balanced timing in responses.
        - **Expression Skills**: Use of appropriate tone, facial expressions, and body language to convey ideas effectively.
        - **Motivation & Interest**: Genuine enthusiasm for the role, company, and industry.
        - **Adaptability & Learning Agility**: Openness to feedback, willingness to learn, and ability to adjust to change.
        - **Professionalism**: Punctuality, preparedness, respectfulness, and polished conduct.
        - **Track Record & Achievements**: Concrete accomplishments that show impact and capability.
        - **Growth Potential**: Signs of leadership ability, curiosity, and long-term value to the company.
        `,

      system:
        "You are an experienced recruiter analyzing a real-time interview. Your task is to evaluate the candidate based on structured categories",
    });

    const feedback = {
      interview_id: interviewId,
      user_id: userId,
      total_score: object.totalScore,
      category_scores: object.categoryScores,
      strengths: object.strengths,
      areas_for_improvement: object.areasForImprovement,
      final_assessment: object.finalAssessment,
      created_at: new Date().toISOString(),
    };

    if (feedbackId) {
      const { error } = await supabase
        .from('feedback')
        .update(feedback)
        .eq('id', feedbackId);
      if (error) throw error;
      return { success: true, feedbackId };
    } else {
      const { data, error } = await supabase
        .from('feedback')
        .insert(feedback)
        .select()
        .single();
      if (error) throw error;
      return { success: true, feedbackId: data.id };
    }
  } catch (error) {
    return { success: false, error: error };
  }
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('interviews')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) return null;

  // Map Supabase snake_case to camelCase if necessary (User type uses camelCase)
  return {
    ...data,
    userId: data.user_id,
    createdAt: data.created_at,
  } as Interview;
}

export async function getFeedbackByInterviewId(
  params: GetFeedbackByInterviewIdParams
): Promise<Feedback | null> {
  const { interviewId, userId } = params;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('feedback')
    .select('*')
    .eq('interview_id', interviewId)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data) return null;

  return {
    ...data,
    interviewId: data.interview_id,
    userId: data.user_id,
    totalScore: data.total_score,
    categoryScores: data.category_scores,
    areasForImprovement: data.areas_for_improvement,
    finalAssessment: data.final_assessment,
    createdAt: data.created_at,
  } as Feedback;
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('interviews')
    .select('*')
    .eq('finalized', true)
    .neq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error || !data) return [];

  return data.map((item) => ({
    ...item,
    userId: item.user_id,
    createdAt: item.created_at,
  })) as Interview[];
}

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('interviews')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error || !data) return [];

  return data.map((item) => ({
    ...item,
    userId: item.user_id,
    createdAt: item.created_at,
  })) as Interview[];
}
