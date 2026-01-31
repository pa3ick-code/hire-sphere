"use client";

import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, Play, FileText, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const RecommendedActions = () => {
    const actions = [
        {
            title: "Work on filler words",
            description: "You used 'um' 12 times in your last session.",
            icon: Target,
            color: "text-amber-600 dark:text-amber-400",
            bg: "bg-amber-50 dark:bg-amber-900/10",
            action: "Practice Now",
            href: "/interview"
        },
        {
            title: "Review Behavioral Questions",
            description: "Prepare for 'Tell me about a time...' questions.",
            icon: FileText,
            color: "text-blue-600 dark:text-blue-400",
            bg: "bg-blue-50 dark:bg-blue-900/10",
            action: "See Guide",
            href: "/interview"
        },
        {
            title: "Improve Confidence",
            description: "Your tone confidence score is slightly low.",
            icon: Play,
            color: "text-purple-600 dark:text-purple-400",
            bg: "bg-purple-50 dark:bg-purple-900/10",
            action: "Start Session",
            href: "/interview"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="modern-card p-6 h-full"
        >
            <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="size-5 text-yellow-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Recommended Actions</h3>
            </div>

            <div className="space-y-4">
                {actions.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-sm transition-all cursor-pointer group"
                    >
                        <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${item.bg}`}>
                                <item.icon className={`size-4 ${item.color}`} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                                    {item.description}
                                </p>
                                <Link href={item.href} className="text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:underline">
                                    {item.action} <ArrowRight className="size-3" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default RecommendedActions;
