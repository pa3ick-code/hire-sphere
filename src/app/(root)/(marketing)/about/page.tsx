import { Metadata } from 'next';
import { Target, Users, Zap, Shield, Globe, Award } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About Us - Prepfluss',
    description: 'Learn more about our mission to help job seekers ace their interviews through AI-powered coaching.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            Democratizing Career <span className="text-blue-600">Success.</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            Prepfluss was born out of a simple realization: the gap between a great candidate and a great employee is often just a single interview. We're here to bridge that gap.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                Founded in 2024, Prepfluss started as a side project by a group of engineers and career coaches who were frustrated by the opaque and anxiety-inducing nature of job interviews.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                We saw brilliant developers, marketers, and managers getting rejected not because of their skills, but because they didn't know how to "play the game" of interviewing.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Today, Prepfluss helps thousands of candidates worldwide gain the confidence they need to articulate their value clearly and authentically.
                            </p>
                        </div>
                        <div className="bg-blue-100 dark:bg-blue-900/20 rounded-3xl aspect-video relative overflow-hidden flex items-center justify-center">
                            <Image
                                src="/hero-visual.png"
                                alt="Prepfluss Story"
                                width={600}
                                height={400}
                                className="object-cover opacity-80"
                            />
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        <div className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                            <div className="size-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                                <Target className="size-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                To make high-quality interview preparation accessible to everyone, regardless of their background, language, or location.
                            </p>
                        </div>
                        <div className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                            <div className="size-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                                <Globe className="size-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                A world where career advancement is determined by talent and merit, not by who has the most expensive career coach.
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">The Values We Live By</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Our values guide every line of code we write and every piece of feedback our AI provides.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: "User First", desc: "If it doesn't help the candidate, we don't build it." },
                            { icon: Shield, title: "Radical Privacy", desc: "Your interview data belongs to you. We never sell your recordings." },
                            { icon: Zap, title: "Impact over Activity", desc: "We focus on real-world results: callbacks and offers." },
                            { icon: Award, title: "Excellence", desc: "We aim for AI feedback that matches the quality of a human pro." },
                            { icon: Shield, title: "Transparency", desc: "We are honest about our AI's capabilities and its limitations." },
                            { icon: Users, title: "Community", desc: "We learn from our users to build the best prep tool on earth." }
                        ].map((value, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8">
                                <div className="size-16 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-6">
                                    <value.icon className="size-6 text-blue-600" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                                <p className="text-slate-500">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
