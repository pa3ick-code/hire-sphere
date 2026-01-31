import { Button } from '@/components/ui/button';
import { Check, HelpCircle, Star, X } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Pricing - Prepfluss',
    description: 'Choose the plan that fits your career goals. Clear, transparent pricing for every stage of your job hunt.',
};

export default function PricingPage() {
    const faqs = [
        { q: "Is there really a free version?", a: "Yes! Our Starter plan is free forever and includes 3 mock interviews per month to help you get started." },
        { q: "Can I cancel my subscription anytime?", a: "Absolutely. You can cancel your Pro subscription at any time from your settings with no hidden fees or penalties." },
        { q: "Do you offer student discounts?", a: "We do! If you're currently a student, contact our support team with a valid school ID for 50% off the Pro plan." },
        { q: "What industries do you cover?", a: "We cover over 50+ roles across Tech, Marketing, Sales, Finance, Operations, and Customer Support." }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Invest in Your <span className="text-blue-600">Future.</span></h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Join 10,000+ candidates who used Prepfluss to boost their confidence and land competitive offers.
                    </p>
                </div>
            </section>

            {/* Plans */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                        {/* Starter */}
                        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-10 flex flex-col bg-white dark:bg-slate-950">
                            <h3 className="text-xl font-bold mb-2">Starter</h3>
                            <div className="text-5xl font-black mb-6">Free</div>
                            <p className="text-slate-500 mb-8">Perfect for testing the waters and getting initial feedback.</p>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3"><Check className="size-5 text-blue-600 shrink-0" /> 3 mock interviews /mo</li>
                                <li className="flex items-center gap-3"><Check className="size-5 text-blue-600 shrink-0" /> Basic feedback report</li>
                                <li className="flex items-center gap-3"><Check className="size-5 text-blue-600 shrink-0" /> Core question bank</li>
                                <li className="flex items-center gap-3 text-slate-400"><X className="size-5 shrink-0" /> Custom role generation</li>
                            </ul>
                            <Button variant="outline" className="w-full rounded-full h-12 font-bold" asChild>
                                <Link href="/interview/cv">Get Started Free</Link>
                            </Button>
                        </div>

                        {/* Pro */}
                        <div className="rounded-3xl border-2 border-blue-600 bg-blue-50/10 dark:bg-blue-900/10 p-10 flex flex-col relative shadow-2xl shadow-blue-500/10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">MOST POPULAR</div>
                            <h3 className="text-xl font-bold mb-2 text-blue-600">Pro</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-5xl font-black">₦5,000</span>
                                <span className="text-slate-500 font-medium">/month</span>
                            </div>
                            <p className="text-slate-500 mb-8">For serious job seekers aiming for top-tier companies.</p>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3 font-medium"><Check className="size-5 text-blue-600 shrink-0" /> Unlimited mock interviews</li>
                                <li className="flex items-center gap-3 font-medium"><Check className="size-5 text-blue-600 shrink-0" /> Advanced AI analytics</li>
                                <li className="flex items-center gap-3 font-medium"><Check className="size-5 text-blue-600 shrink-0" /> Progress tracking dashboard</li>
                                <li className="flex items-center gap-3 font-medium"><Check className="size-5 text-blue-600 shrink-0" /> Priority support</li>
                            </ul>
                            <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white h-12 font-bold shadow-lg shadow-blue-500/25" asChild>
                                <Link href="/interview/cv">Start Pro Trial</Link>
                            </Button>
                        </div>

                        {/* Teams */}
                        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-10 flex flex-col bg-white dark:bg-slate-950">
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Enterprise</h3>
                            <div className="text-5xl font-black mb-6">Custom</div>
                            <p className="text-slate-500 mb-8">Scale your recruitment and internal mobility engine.</p>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3"><Check className="size-5 text-blue-600 shrink-0" /> Custom branding</li>
                                <li className="flex items-center gap-3"><Check className="size-5 text-blue-600 shrink-0" /> Team management</li>
                                <li className="flex items-center gap-3"><Check className="size-5 text-blue-600 shrink-0" /> API Access</li>
                                <li className="flex items-center gap-3"><Check className="size-5 text-blue-600 shrink-0" /> Dedicated Account Manager</li>
                            </ul>
                            <Button variant="outline" className="w-full rounded-full h-12 font-bold" asChild>
                                <Link href="/contact">Contact Sales</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Comparison */}
                    <div className="max-w-4xl mx-auto mb-24 hidden md:block">
                        <h2 className="text-3xl font-bold text-center mb-12">Detailed Comparison</h2>
                        <div className="border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden">
                            <table className="w-full text-left bg-white dark:bg-slate-950">
                                <thead>
                                    <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                                        <th className="p-6 font-bold">Features</th>
                                        <th className="p-6 font-bold">Starter</th>
                                        <th className="p-6 font-bold">Pro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-100 dark:border-slate-900">
                                        <td className="p-6">Interviews per month</td>
                                        <td className="p-6">3</td>
                                        <td className="p-6 font-bold">Unlimited</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-900">
                                        <td className="p-6">Role Customization</td>
                                        <td className="p-6">Basic</td>
                                        <td className="p-6 font-bold">Advanced</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-900">
                                        <td className="p-6">Progress Analytics</td>
                                        <td className="p-6"><X className="size-4 text-slate-300" /></td>
                                        <td className="p-6"><Check className="size-4 text-blue-600" /></td>
                                    </tr>
                                    <tr>
                                        <td className="p-6">Email Support</td>
                                        <td className="p-6">Standard</td>
                                        <td className="p-6 font-bold">Priority</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <div className="grid gap-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                                    <h4 className="font-bold flex items-center gap-2 mb-2">
                                        <HelpCircle className="size-4 text-blue-600" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-500">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
