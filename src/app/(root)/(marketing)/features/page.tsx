import { Metadata } from 'next';
import { Mic, Zap, BarChart, Target, Brain, Languages, Clock, MousePointer2, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Features - Prepfluss',
    description: 'Explore the powerful AI-driven features that help you master your interview skills.',
};

export default function FeaturesPage() {
    const featureModules = [
        {
            icon: Brain,
            title: "Advanced AI Feedback",
            description: "Our proprietary engine analyzes sentiment, vocabulary, and relevance. It doesn't just check what you said, but how you said it.",
            details: ["Filler word detection", "Tone analysis", "Answer structure (STAR method)"]
        },
        {
            icon: Mic,
            title: "Voice Analysis",
            description: "Practice speaking out loud. Our low-latency vocal analyzer tracks your pacing, clarity, and confidence levels.",
            details: ["Words per minute tracking", "Clarity scoring", "Natural language processing"]
        },
        {
            icon: BarChart,
            title: "Progress Dashboard",
            description: "Watch your confidence grow with every session. Track your progress across different industries and difficulty levels.",
            details: ["Historical performance trends", "Category-wise scoring", "Goal setting"]
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        The Tech Behind Your <span className="text-blue-600">Confidence.</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        We've combined state-of-the-art LLMs with speech analytics to create the world's most responsive interview coach.
                    </p>
                </div>
            </section>

            {/* Feature Deep Dive */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {featureModules.map((module, i) => (
                            <div key={i} className="bg-white dark:bg-slate-950 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                <div className="size-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6">
                                    <module.icon className="size-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{module.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed">{module.description}</p>
                                <ul className="space-y-3">
                                    {module.details.map((detail, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                            <ChevronRight className="size-4 text-blue-600" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* How it Works / Tech Showcase */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">How the Magic Happens</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="size-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">1</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Simulated Context</h4>
                                        <p className="text-slate-600 dark:text-slate-400">We don't just ask random questions. We simulate the pressure and specific context of your target company and role.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="size-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">2</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Dynamic Probing</h4>
                                        <p className="text-slate-600 dark:text-slate-400">Our AI listens to your answer and asks follow-up "probing" questions, just like a real human interviewer would.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="size-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">3</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Multidimensional Scoring</h4>
                                        <p className="text-slate-600 dark:text-slate-400">Receive scores on confidence, technical accuracy, and storytelling, allowing you to focus your prep where it matters most.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-center">
                                <Image
                                    src="/job-seeker-visual.png"
                                    alt="Tech Visualization"
                                    width={500}
                                    height={600}
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to see it in action?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="rounded-full bg-blue-600 px-8" asChild>
                            <Link href="/interview/cv">Start Free Interview</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                            <Link href="/pricing">View Pricing</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
