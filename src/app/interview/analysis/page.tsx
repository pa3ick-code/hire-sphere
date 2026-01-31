"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FlowLayout from "@/components/interview/FlowLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Star, Zap, TrendingUp, CheckCircle, Loader2 } from "lucide-react";

export default function AnalysisPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [role, setRole] = useState("Candidate");

    useEffect(() => {
        const savedRole = localStorage.getItem("interview_role");
        if (savedRole) {
            // Simple mapping for display
            const roleMap: Record<string, string> = {
                'frontend': 'Frontend Developer',
                'support': 'Customer Support',
                'marketing': 'Social Media Intern',
                'sales': 'Sales Representative',
                'retail': 'Retail Associate',
                'finance': 'Junior Accountant'
            };
            setRole(roleMap[savedRole] || savedRole);
        }
    }, []);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate signup API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Clear temp storage
        localStorage.removeItem("interview_role");
        localStorage.removeItem("interview_mode");
        localStorage.removeItem("interview_cv_name");

        // Redirect to dashboard (or onboarding)
        router.push("/");
    };

    return (
        <FlowLayout>
            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Interview Analysis</h1>
                    <p className="text-slate-500">Based on your session for <span className="font-semibold text-slate-900 dark:text-slate-100">{role}</span></p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Teaser Scorecard */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Score Overview */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-900">
                                <CardContent className="p-6 text-center">
                                    <div className="text-sm font-medium text-slate-500 mb-1">Overall Score</div>
                                    <div className="text-4xl font-bold text-blue-600">8.2<span className="text-lg text-slate-400">/10</span></div>
                                </CardContent>
                            </Card>
                            <Card className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-slate-100/10 backdrop-blur-[2px] z-10 flex items-center justify-center">
                                    <Lock className="text-slate-400 size-6" />
                                </div>
                                <CardContent className="p-6 text-center opacity-50">
                                    <div className="text-sm font-medium text-slate-500 mb-1">Confidence</div>
                                    <div className="text-4xl font-bold text-green-600">??<span className="text-lg text-slate-400">%</span></div>
                                </CardContent>
                            </Card>
                            <Card className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-slate-100/10 backdrop-blur-[2px] z-10 flex items-center justify-center">
                                    <Lock className="text-slate-400 size-6" />
                                </div>
                                <CardContent className="p-6 text-center opacity-50">
                                    <div className="text-sm font-medium text-slate-500 mb-1">Clarity</div>
                                    <div className="text-4xl font-bold text-purple-600">??<span className="text-lg text-slate-400">%</span></div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Feedback Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Zap className="size-5 text-yellow-500" /> Key Strengths
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <CheckCircle className="size-5 text-green-500 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300">Great energy in the introduction, set a positive tone immediately.</span>
                                    </li>
                                    <li className="flex gap-3 relative">
                                        <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-[1px] z-10" />
                                        <CheckCircle className="size-5 text-green-500 shrink-0 opacity-20" />
                                        <span className="text-slate-700 dark:text-slate-300 opacity-20 filter blur-sm select-none">Your answer to the conflict question showed good emotional intelligence.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <TrendingUp className="size-5 text-blue-500" /> Areas for Improvement
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative">
                                <div className="absolute inset-0 bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center">
                                    <Lock className="size-8 text-slate-400 mb-2" />
                                    <p className="font-semibold text-slate-800 dark:text-slate-200">Unlock your personalized growth plan</p>
                                    <p className="text-sm text-slate-500">Detailed feedback on your answers is locked.</p>
                                </div>
                                <ul className="space-y-3 opacity-30 filter blur-sm select-none">
                                    <li className="flex gap-3">
                                        <div className="size-2 rounded-full bg-red-400 mt-2" />
                                        <span className="text-slate-700 dark:text-slate-300">You used 'um' 12 times during the technical explanation.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="size-2 rounded-full bg-red-400 mt-2" />
                                        <span className="text-slate-700 dark:text-slate-300">The closing statement lacked a clear call to action.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="size-2 rounded-full bg-red-400 mt-2" />
                                        <span className="text-slate-700 dark:text-slate-300">Structure your STAR method answers more clearly.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Sneaky Signup Form */}
                    <div className="md:sticky md:top-24 h-fit">
                        <Card className="border-2 border-blue-600 shadow-2xl shadow-blue-900/20 overflow-hidden">
                            <div className="bg-blue-600 p-4 text-white text-center">
                                <h3 className="font-bold text-lg flex items-center justify-center gap-2">
                                    <Star className="fill-white size-4" /> You're almost there!
                                </h3>
                                <p className="text-blue-100 text-sm">Save your results & unlock full feedback.</p>
                            </div>
                            <CardContent className="p-6">
                                <form onSubmit={handleSignup} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" placeholder="Min 8 characters" required />
                                    </div>

                                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 size-4 animate-spin" /> Unlocking...
                                            </>
                                        ) : (
                                            "Unlock Full Report"
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-slate-500 mt-4">
                                        By clicking "Unlock", you agree to our Terms. <br />
                                        Already have an account? <Link href="/sign-in" className="text-blue-600 hover:underline">Log in</Link>
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </FlowLayout>
    );
}
