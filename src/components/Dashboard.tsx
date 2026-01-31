import Link from "next/link";
import Image from "next/image";
import {
    Trophy,
    Target,
    Clock,
    TrendingUp,
    Plus,
    ArrowRight
} from "lucide-react";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import DashboardNav from "@/components/DashboardNav";
import StatsCard from "./StatsCard";
import ProgressChart from "@/components/ProgressChart";
import RecommendedActions from "@/components/RecommendedActions";
import DashboardFooter from "@/components/DashboardFooter";

import {
    getInterviewsByUserId,
    getLatestInterviews,
} from "@/lib/actions/general.action";

async function Dashboard({ userId }: { userId: string }) {
    const [userInterviews, allInterview] = await Promise.all([
        getInterviewsByUserId(userId),
        getLatestInterviews({ userId: userId }),
    ]);

    const hasPastInterviews = (userInterviews?.length ?? 0) > 0;
    const hasUpcomingInterviews = (allInterview?.length ?? 0) > 0;
    const totalInterviews = userInterviews?.length ?? 0;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
            <DashboardNav />

            <main className="container mx-auto px-4 md:px-6 py-8 space-y-12 max-w-7xl">

                {/* Welcome & Stats Section */}
                <section>
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                            Dashboard
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400">
                            Track your progress and keep the momentum going.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <StatsCard
                            title="Total Sessions"
                            value={totalInterviews}
                            icon={<Trophy className="size-6" />}
                            trend={{ value: 12, isPositive: true }}
                            delay={0}
                        />
                        <StatsCard
                            title="Avg. Confidence"
                            value="85%"
                            icon={<Target className="size-6" />}
                            trend={{ value: 5, isPositive: true }}
                            delay={1}
                        />
                        <StatsCard
                            title="Practice Hours"
                            value="12.5"
                            icon={<Clock className="size-6" />}
                            trend={{ value: 2, isPositive: true }}
                            delay={2}
                            suffix="h"
                        />
                        <StatsCard
                            title="Skill Growth"
                            value="+24%"
                            icon={<TrendingUp className="size-6" />}
                            trend={{ value: 8, isPositive: true }}
                            delay={3}
                        />
                    </div>
                </section>

                {/* Call to Action - Start Interview */}
                <section className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-blue-950 p-8 md:p-12 text-white shadow-xl">
                    <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl space-y-4 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                                Ready to level up your interview skills?
                            </h2>
                            <p className="text-blue-100 text-lg">
                                Take a mock interview with our advanced AI coach and get instant, actionable feedback.
                            </p>
                        </div>
                        <Button asChild size="lg" className="h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 shadow-lg shadow-blue-900/20 hover:scale-105 transition-all duration-300">
                            <Link href="/interview" className="flex items-center gap-2">
                                <Plus className="size-5" />
                                Start New Interview
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Charts & Actions Grid */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Progress Chart */}
                        <ProgressChart />

                        {/* Recent Activity */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    Recent Activity
                                </h2>
                                <Link href="/interview" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 group">
                                    View All <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {hasPastInterviews ? (
                                    userInterviews?.slice(0, 4).map((interview) => (
                                        <InterviewCard
                                            key={interview.id}
                                            userId={userId}
                                            interviewId={interview.id}
                                            role={interview.role}
                                            type={interview.type}
                                            skills={interview.skills}
                                            country={interview.country}
                                            createdAt={interview.createdAt}
                                        />
                                    ))
                                ) : (
                                    <div className="col-span-full py-12 text-center bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                                        <p className="text-slate-500">You haven&apos;t taken any interviews yet</p>
                                        <Button variant="link" asChild className="mt-2 text-blue-600">
                                            <Link href="/interview">Take your first interview</Link>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Recommended Actions */}
                        <RecommendedActions />

                        {/* Available Interviews */}
                        <div className="sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    Popular Roles
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {hasUpcomingInterviews ? (
                                    allInterview?.slice(0, 3).map((interview) => (
                                        <div key={interview.id} className="scale-90 origin-top-left w-full">
                                            <InterviewCard
                                                userId={userId}
                                                interviewId={interview.id}
                                                role={interview.role}
                                                type={interview.type}
                                                skills={interview.skills}
                                                country={interview.country}
                                                createdAt={interview.createdAt}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-slate-500 text-sm">No new interviews available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <DashboardFooter />
        </div>
    );
}

export default Dashboard;
