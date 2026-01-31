import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Metadata } from 'next';
import { Mail, MessageSquare, Twitter, MapPin, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us - Prepfluss',
    description: 'Get in touch with the Prepfluss team for support, partnerships, or just to say hi.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Let&apos;s <span className="text-blue-600">Connect.</span></h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Whether you need help with your account, want to discuss a partnership, or just want to Share a success story, we&apos;re here for you.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="bg-white dark:bg-slate-950 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none">
                            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-bold text-slate-700 dark:text-slate-300">First Name</label>
                                        <Input id="first-name" placeholder="John" className="h-12 rounded-xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Last Name</label>
                                        <Input id="last-name" placeholder="Doe" className="h-12 rounded-xl" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                                    <Input id="subject" placeholder="How can we help?" className="h-12 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                                    <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[150px] rounded-xl pt-4" />
                                </div>
                                <Button className="w-full h-14 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-bold text-lg shadow-lg shadow-blue-500/25">
                                    Submit Inquiry
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col justify-center">
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h3>
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="flex gap-4">
                                            <div className="size-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center shrink-0">
                                                <Mail className="size-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Email Support</h4>
                                                <p className="text-sm text-slate-500">support@prepfluss.com</p>
                                                <p className="text-xs text-slate-400 mt-1">24h response time</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="size-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center shrink-0">
                                                <Twitter className="size-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Direct Message</h4>
                                                <p className="text-sm text-slate-500">@prepfluss</p>
                                                <p className="text-xs text-slate-400 mt-1">Quickest for quick questions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Our Hubs</h3>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
                                                <MapPin className="size-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Lagos, Nigeria</h4>
                                                <p className="text-sm text-slate-500">VGC, Lekki Phase 1</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
                                                <Globe className="size-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Remote Office</h4>
                                                <p className="text-sm text-slate-500">Everywhere there is Wifi.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 rounded-3xl bg-slate-900 text-white">
                                    <h4 className="font-bold mb-2 flex items-center gap-2">
                                        <MessageSquare className="size-4 text-blue-400" />
                                        For Partnerships
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-4">Looking to bring Prepfluss to your university or recruitment agency?</p>
                                    <a href="mailto:partners@prepfluss.com" className="text-blue-400 font-bold hover:underline">partners@prepfluss.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
