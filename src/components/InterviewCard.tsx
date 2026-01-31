"use client";

import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Star, ArrowRight } from "lucide-react";

import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";

import { cn, getRandomInterviewCover } from "@/lib/utils";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";
import { useEffect, useState } from "react";

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  skills,
  createdAt,
}: InterviewCardProps) => {
  const [feedback, setFeedback] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      if (userId && interviewId) {
        try {
          const res = await getFeedbackByInterviewId({
            interviewId,
            userId,
          });
          setFeedback(res);
        } catch (error) {
          console.error("Error fetching feedback:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchFeedback();
  }, [userId, interviewId]);

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  const badgeColor =
    {
      Behavioral: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      Mixed: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      Technical: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    }[normalizedType] || "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="modern-card group w-full min-h-[380px] flex flex-col justify-between p-6 relative"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <div className="size-14 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
              <Image
                src={getRandomInterviewCover()}
                alt="cover-image"
                width={56}
                height={56}
                className="object-cover size-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div
            className={cn(
              "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide",
              badgeColor
            )}
          >
            {normalizedType}
          </div>
        </div>

        <h3 className="text-xl font-bold capitalize text-slate-900 dark:text-white mb-3 line-clamp-1">{role} Interview</h3>

        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="size-4" />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Star className={cn("size-4", feedback?.totalScore ? "text-yellow-500 fill-yellow-500" : "text-slate-300")} />
            <span className="font-medium">{feedback?.totalScore || "--"}/100</span>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 min-h-[40px]">
          {feedback?.finalAssessment ||
            "You haven't taken this interview yet. Complete it to get detailed AI feedback and imporve your skills."}
        </p>
      </div>

      <div>
        <div className="mb-6">
          <DisplayTechIcons skills={skills} />
        </div>

        <Link
          href={
            feedback
              ? `/interview/${interviewId}/feedback`
              : `/interview/${interviewId}`
          }
          className="w-full"
        >
          <Button
            className="w-full rounded-full bg-slate-900 text-white hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 group-hover:shadow-lg"
          >
            {feedback ? "View Analysis" : "Start Interview"}
            <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default InterviewCard;