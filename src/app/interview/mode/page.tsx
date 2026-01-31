"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FlowLayout from "@/components/interview/FlowLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Play, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ModePage() {
    const router = useRouter();
    const [isPlaying, setIsPlaying] = useState(false);

    const handleContinue = () => {
        localStorage.setItem("interview_mode", "corporate");
        router.push("/interview/session");
    };

    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
        // In a real app, this would play an audio element
        if (!isPlaying) {
            setTimeout(() => setIsPlaying(false), 3000); // Simulate simple playback
        }
    };

    return (
        <FlowLayout currentStep={3} totalSteps={4}>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Set the Tone</h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Choose your interviewer's personality.
                </p>
            </div>

            <div className="max-w-2xl mx-auto grid gap-6">
                {/* Corporate Mode (Active) */}
                <Card className="border-2 border-blue-600 bg-white dark:bg-slate-900 relative overflow-hidden shadow-xl shadow-blue-900/10">
                    <div className="absolute top-0 right-0 p-2">
                        <Badge className="bg-blue-600 hover:bg-blue-700">Recommended</Badge>
                    </div>
                    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                        <div className="size-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border-4 border-white dark:border-slate-700 shadow-sm">
                            <Building2 className="size-8 text-slate-700 dark:text-slate-300" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="font-bold text-xl mb-1 flex items-center justify-center md:justify-start gap-2">
                                Corporate
                            </h3>
                            <p className="text-slate-500 mb-4">Professional, structured, and serious. Just like a real panel interview.</p>
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                onClick={toggleAudio}
                            >
                                {isPlaying ? <Volume2 className="size-3 animate-pulse text-blue-500" /> : <Play className="size-3" />}
                                {isPlaying ? "Playing preview..." : "Hear preview"}
                            </div>
                        </div>
                        <div className="shrink-0">
                            <div className="size-6 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center">
                                <div className="size-2.5 rounded-full bg-white" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Gen Z Mode (Locked) */}
                <Card className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 opacity-60">
                    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                        <div className="size-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 grayscale">
                            <span className="text-2xl">🔥</span>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <h3 className="font-bold text-xl text-slate-400">Gen Z Mode</h3>
                                <Badge variant="outline" className="text-xs border-slate-300 text-slate-400">Coming Soon</Badge>
                            </div>
                            <p className="text-slate-400 text-sm">"No cap, let's keep it 100." High energy, slang-heavy, informal.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-center mt-12">
                <Button
                    size="lg"
                    onClick={handleContinue}
                    className="px-12 rounded-full h-12 text-base bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                >
                    Start Interview <ArrowRight className="ml-2 size-4" />
                </Button>
            </div>
        </FlowLayout>
    );
}
