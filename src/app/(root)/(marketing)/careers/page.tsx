import { Metadata } from 'next';
import { Briefcase, Heart, Coffee, Laptop, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Careers - Prepfluss',
    description: 'Join the team building the future of career preparation. We are looking for passionate individuals to help us scale.',
};

export default function CareersPage() {
    const benefits = [
        { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs for you and your family." },
        { icon: Coffee, title: "Modern Workspace", desc: "A vibrant, creative environment with all the tools (and snacks) you need." },
        { icon: Laptop, title: "Remote First", desc: "We believe in results over desk time. Work from anywhere in the world." },
        { icon: ShieldCheck, title: "Equity & Ownership", desc: "Every employee is an owner. We grow together with stock options." }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Help Us Build the <br /> <span className="text-blue-400">Future of Work.</span></h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        We're a small, diverse team of dreamers and doers on a mission to make career outcomes more equitable for everyone.
                    </p>
                </div>
            </section>

            {/* Culture / Values */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Why Prepfluss?</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                At Prepfluss, we don't just build software. We build confidence. Working here means solving complex AI challenges that have a direct impact on people's livelihoods.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                we value autonomy, fast iteration, and radical empathy. We're looking for people who are curious, kind, and ready to challenge the status quo of career coaching.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm font-bold">#RemoteFirst</span>
                                <span className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm font-bold">#AIFirst</span>
                                <span className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm font-bold">#ImpactDriven</span>
                            </div>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl aspect-[4/3] relative overflow-hidden flex items-center justify-center p-12">
                            <Briefcase className="size-32 text-slate-200 dark:text-slate-800" />
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-center mb-12">Perks & Benefits</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <div className="size-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm">
                                        <benefit.icon className="size-6 text-blue-600" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3">{benefit.title}</h4>
                                    <p className="text-slate-500 text-sm">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hiring Process */}
                    <div className="max-w-4xl mx-auto mb-24">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
                        <div className="relative">
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block" />
                            <div className="space-y-12">
                                {[
                                    { step: "Application Review", desc: "We look for potential, not just pedigree. Every application is reviewed by a human." },
                                    { step: "Initial Screen", desc: "A brief chat to align on values, mission, and the role's scope." },
                                    { step: "Practical Assessment", desc: "A realistic task that reflects the work you'll actually do at Prepfluss." },
                                    { step: "Final Interview", desc: "Meet the team and leadership to ensure a mutual cultural fit." }
                                ].map((phase, i) => (
                                    <div key={i} className="flex gap-8 relative">
                                        <div className="size-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0 z-10">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{phase.step}</h4>
                                            <p className="text-slate-500 leading-relaxed">{phase.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Don't see a role that fits?</h2>
                        <p className="text-blue-100 mb-8 max-w-xl mx-auto">We're always looking for talented people. Send us your portfolio or CV and we'll keep you in mind for future openings.</p>
                        <a href="mailto:careers@prepfluss.com" className="inline-flex h-12 items-center px-8 rounded-full bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors">
                            Send Open Application
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
