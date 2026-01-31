"use client";

import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-background p-4 text-center">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 pattern opacity-20 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="relative z-10 flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-primary-200/20 blur-3xl rounded-full" />
                <div className="bg-dark-200/50 backdrop-blur-md border border-white/10 p-8 rounded-full shadow-2xl relative">
                    <FileQuestion className="size-20 text-primary-200" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10 flex flex-col items-center gap-4 max-w-md"
            >
                <h1 className="text-6xl font-bold tracking-tight text-white">
                    404
                </h1>
                <h2 className="text-2xl font-semibold text-primary-100">
                    Page Not Found
                </h2>
                <p className="text-light-100">
                    Oops! The page you are looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                <Link
                    href="/"
                    className="btn-primary flex items-center gap-2 mt-4"
                >
                    Return Home
                </Link>
            </motion.div>
        </div>
    );
}
