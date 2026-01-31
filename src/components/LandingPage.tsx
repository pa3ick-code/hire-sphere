"use client";

import Image from 'next/image';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Check, ArrowRight, Zap, Target, BarChart, Mic, Play, X, Star, Briefcase, Building2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ModeToggle } from './ModeToggle';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function LandingPage() {
    return (
        <div className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth bg-white text-slate-900 font-sans selection:bg-blue-100 dark:bg-slate-950 dark:text-slate-100">

            {/* Header/Navigation */}
            <Navbar />

            {/* Hero Section */}

            {/* Hero Section */}
            <section className="snap-start min-h-screen md:h-screen md:min-h-[800px] flex items-center justify-center relative overflow-hidden pt-10 mb-10 md:mb-0">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="container mx-auto px-4 md:px-6 z-10"
                >
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mt-20 md:mt-0">
                        <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:gap-6 lg:items-start text-center lg:text-left">
                            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-50 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
                                <Zap className="mr-1 size-3 fill-blue-700" /> AI-Powered Interview Coach
                            </Badge>
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                Nail Your Next Interview<span className="text-blue-600">.</span> <br className="hidden lg:block" />
                                <span className="text-slate-500 text-2xl md:text-4xl block mt-2 font-semibold">Before You Even Show Up.</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-[600px] mx-auto lg:mx-0">
                                Practice real interviews with AI. Get instant feedback on your tone, clarity, and answers. Walk in calm, clear, and confident.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-12 text-base" asChild>
                                    <Link href="/interview/cv">Try a Free Mock Interview</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 px-8 h-12 text-base" asChild>
                                    <Link href="/interview/cv">
                                        <Play className="mr-2 size-4" /> Explore Demo
                                    </Link>
                                </Button>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="size-10 rounded-full border-2 border-white dark:border-slate-950 relative overflow-hidden">
                                            <Image
                                                src={`/avatar-${i}.png`}
                                                alt={`User ${i}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <span className="font-medium">Trusted by 10,000+ candidates</span>
                            </div>
                        </motion.div>

                        {/* Hero Visual */}
                        <motion.div variants={fadeInUp} className="relative mx-auto lg:ml-auto w-full max-w-[500px] lg:max-w-none">
                            <div className="relative rounded-2xl border border-slate-200 bg-slate-50/50 p-2 shadow-2xl dark:border-slate-800 dark:bg-slate-900/50">
                                <Image
                                    src="/hero-visual.png"
                                    alt="Prepfluss Interview Interface"
                                    width={800}
                                    height={600}
                                    className="rounded-xl w-full h-auto"
                                    priority
                                />
                                {/* Floating UI Elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="size-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Check className="size-4" /></div>
                                        <div>
                                            <p className="text-xs font-bold">Great Answer!</p>
                                            <p className="text-[10px] text-slate-500">Clarity Score: 98%</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Problem Section */}
            <section className="snap-start min-h-screen md:h-screen md:min-h-[800px] flex items-center justify-center bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4 md:px-6 pt-14 md:pt-0 mb-14 md:mb-0">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why interviews still feel like final bosses.</motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400">Most candidates fail not because they lack skills, but because they lack practice.</motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
                    >
                        {[
                            { icon: Mic, title: "No Oral Practice", desc: "You've never practiced answering questions out loud." },
                            { icon: BarChart, title: "Mind Blanks", desc: "Your mind blanks on simple questions under pressure." },
                            { icon: X, title: "Zero Feedback", desc: "Rejections come with generic emails and zero useful feedback." },
                            { icon: Target, title: "Anxiety Sabotage", desc: "Anxiety sabotages answers you actually know perfectly." }
                        ].map((item, i) => (
                            <motion.div variants={fadeInUp} key={i} className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                                <div className="size-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
                                    <item.icon className="size-6" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center border-t border-slate-200 dark:border-slate-800 pt-12"
                    >
                        <p className="text-xl font-medium text-slate-700 dark:text-slate-300">
                            You&apos;re not underqualified. <span className="text-blue-600 font-bold">You&apos;re under-prepared.</span> We fix that.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="snap-start min-h-screen md:h-screen md:min-h-[800px] flex items-center justify-center pt-14 md:pt-0 mb-14 md:mb-0">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex flex-col items-center text-center mb-16"
                    >
                        <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200 bg-blue-50">Simple Process</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Train like it’s a game. <br className="hidden md:block" /> Win like it’s a job.</h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-12 relative"
                    >
                        {/* Connecting Line (Desktop) */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-700 dark:to-blue-900 origin-left"
                        />

                        {[
                            {
                                step: "01",
                                title: "Mock Interviews",
                                desc: "Simulated interviews by role & industry using advanced AI.",
                                icon: Mic
                            },
                            {
                                step: "02",
                                title: "Instant Feedback",
                                desc: "Get feedback on tone, filler words, clarity, and confidence.",
                                icon: Zap
                            },
                            {
                                step: "03",
                                title: "Progress Reports",
                                desc: "See your interview muscle grow with detailed analytics.",
                                icon: BarChart
                            }
                        ].map((item, i) => (
                            <motion.div variants={fadeInUp} key={i} className="relative flex flex-col items-center text-center group">
                                <div className="size-24 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-xl mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                                    <item.icon className="size-10 text-blue-600" />
                                    <div className="absolute -top-3 -right-3 size-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-4 border-white dark:border-slate-950">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed max-w-xs">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Job Seekers Section */}
            <section id="job-seekers" className="snap-start min-h-screen md:h-screen md:min-h-[800px] flex items-center justify-center bg-slate-50 dark:bg-slate-900 pt-14 md:pt-0 mb-14 md:mb-0">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="container mx-auto px-4 md:px-6"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative">
                            {/* Visual Placeholder */}
                            {/* Visual Placeholder */}
                            <div className="aspect-square rounded-2xl bg-blue-100 dark:bg-blue-900/20 relative overflow-hidden shadow-2xl">
                                <Image
                                    src="/job-seeker-visual.png"
                                    alt="Job Seeker Progress Dashboard"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                        <div className="order-1 lg:order-2">
                            <motion.div variants={fadeInUp}>
                                <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-300 border-none">For Job Seekers</Badge>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">From “um…” to unstoppable.</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                                    Stop practicing in the mirror. Get the actionable feedback you need to land the job.
                                </p>
                            </motion.div>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Tailored questions for your specific role & industry",
                                    "Actionable feedback on tone, pace, and content",
                                    "Unlimited practice sessions until you feel ready",
                                    "Access anywhere, anytime — practice on your schedule"
                                ].map((feature, i) => (
                                    <motion.li variants={fadeInUp} key={i} className="flex items-center gap-3">
                                        <div className="size-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                            <Check className="size-3.5" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.div variants={fadeInUp}>
                                <Button size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                                    <Link href="/interview">Practice My First Interview Free</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* For Companies Section */}
            <section className="snap-start min-h-screen md:h-screen md:min-h-[800px] flex items-center justify-center pt-14 md:pt-0 mb-14 md:mb-0">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="container mx-auto px-4 md:px-6"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div variants={fadeInUp}>
                                <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300 border-none">For Companies</Badge>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Interview at scale. <br /> Without burnout.</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                                    Automate your initial screening process. Let AI handle the first round so you can focus on the best candidates.
                                </p>
                            </motion.div>

                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <motion.div variants={fadeInUp} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <Briefcase className="size-6 text-orange-600 mb-3" />
                                    <h3 className="font-bold mb-1">AI Pre-screenings</h3>
                                    <p className="text-sm text-slate-500">Conduct hundreds of first-round interviews simultaneously.</p>
                                </motion.div>
                                <motion.div variants={fadeInUp} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <BarChart className="size-6 text-orange-600 mb-3" />
                                    <h3 className="font-bold mb-1">Candidate Scorecards</h3>
                                    <p className="text-sm text-slate-500">Get objective ranking based on performance metrics.</p>
                                </motion.div>
                            </div>

                            <motion.div variants={fadeInUp}>
                                <Button size="lg" variant="outline" className="rounded-full border-slate-200 hover:bg-slate-100 dark:border-slate-800">
                                    Request a Recruiter Demo <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </motion.div>
                        </div>
                        <motion.div variants={fadeInUp} className="relative">
                            {/* Company Visual Placeholder */}
                            {/* Company Visual Placeholder */}
                            <div className="aspect-[4/3] rounded-2xl bg-slate-900 text-white relative overflow-hidden shadow-2xl border border-slate-800">
                                <Image
                                    src="/company-visual.png"
                                    alt="Recruiter Dashboard Pipeline"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Social Proof Section */}
            <section className="snap-start min-h-screen md:h-screen md:min-h-[800px] flex items-center justify-center bg-slate-50 dark:bg-slate-900 pt-14 md:pt-0 mb-14 md:mb-0">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="container mx-auto px-4 md:px-6 text-center"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-16">It’s working. And they’re working.</motion.h2>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {[
                            { quote: "I finally understood why I was failing interviews. The feedback on my filler words was eye-opening.", name: "Chinedu", role: "Frontend Dev" },
                            { quote: "This replaced my ₦100k/month interview coach. I can practice anytime I want.", name: "Aisha", role: "Product Manager" },
                            { quote: "I got 3 callbacks in two weeks after using Prepfluss. It gave me the confidence I needed.", name: "Tunde", role: "Graduate Trainee" }
                        ].map((testimonial, i) => (
                            <motion.div variants={fadeInUp} key={i} className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <div className="flex text-yellow-500 mb-4">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="size-4 fill-current" />)}
                                </div>
                                <p className="text-lg mb-6 leading-relaxed text-slate-700 dark:text-slate-300">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="snap-start min-h-screen md:h-screen md:min-h-[800px] flex items-center justify-center pt-14 md:pt-0 mb-14 md:mb-0">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="container mx-auto px-4 md:px-6"
                >
                    <div className="text-center mb-16">
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">No stress. Just progress.</motion.h2>
                        <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400">Choose the plan that fits your career goals.</motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Starter */}
                        <motion.div variants={fadeInUp} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col">
                            <h3 className="text-xl font-bold mb-2">Starter</h3>
                            <div className="text-4xl font-bold mb-6">Free</div>
                            <p className="text-slate-500 mb-6">Perfect for testing the waters.</p>
                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> 3 mock interviews/month</li>
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> Basic feedback report</li>
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> Standard questions</li>
                            </ul>
                            <Button variant="outline" className="w-full rounded-full">Get Started</Button>
                        </motion.div>

                        {/* Pro */}
                        <motion.div variants={fadeInUp} className="rounded-2xl border-2 border-blue-600 bg-blue-50/10 dark:bg-blue-900/10 p-8 flex flex-col relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
                            <h3 className="text-xl font-bold mb-2 text-blue-600">Pro</h3>
                            <div className="text-4xl font-bold mb-6">₦5,000<span className="text-sm font-normal text-slate-500">/mo</span></div>
                            <p className="text-slate-500 mb-6">For serious job seekers.</p>
                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> Unlimited mock interviews</li>
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> Advanced feedback & analytics</li>
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> Progress tracking</li>
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> Priority support</li>
                            </ul>
                            <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white">Start Free Trial</Button>
                        </motion.div>

                        {/* Teams */}
                        <motion.div variants={fadeInUp} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col">
                            <h3 className="text-xl font-bold mb-2">Teams</h3>
                            <div className="text-4xl font-bold mb-6">Custom</div>
                            <p className="text-slate-500 mb-6">For recruitment agencies.</p>
                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> Candidate dashboard</li>
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> Team analytics</li>
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> Video reviews</li>
                                <li className="flex items-center gap-2"><Check className="size-4 text-blue-600" /> API Access</li>
                            </ul>
                            <Button variant="outline" className="w-full rounded-full">Contact Sales</Button>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Final CTA */}
            <section className="snap-start min-h-screen md:h-screen md:min-h-[600px] flex items-center justify-center bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="container mx-auto px-4 md:px-6 relative z-10 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">The only thing scarier than interviews? <br /> <span className="text-blue-400">Not preparing.</span></h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Get interview-ready in hours, not months. Join the thousands of candidates who stopped guessing and started winning.</p>
                    <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 h-14 text-lg">
                        <Link href="/interview">Start Practicing for Free</Link>
                    </Button>
                </motion.div>
            </section>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="snap-start"
            >
                <Footer />
            </motion.div>
        </div>
    );
}
