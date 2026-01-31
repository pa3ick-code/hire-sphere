import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import { createClient } from "@/lib/supabase/server";
import { getRandomInterviewCover } from "@/lib/utils";

export async function POST(request: Request) {
  const { type, role, level, skills, amount, userid, country } = await request.json();
  const supabase = await createClient();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `
        You are an experience recruiter, 
        preparing candidates for interview in ${country},
        Prepare real life questions for a job interview in ${country}.
        Make it sound so real.
        The job role is ${role}.
        The job experience level is ${level}.
        The skills required in the job is: ${skills}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you!
    `,
    });

    const interview = {
      role: role,
      type: type,
      level: level,
      country: country,
      skills: skills.split(","),
      questions: JSON.parse(questions),
      user_id: userid,
      finalized: true,
      cover_image: getRandomInterviewCover(),
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('interviews').insert(interview);
    if (error) throw error;

    return Response.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return Response.json({ success: false, error: error.message || error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}
