import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog - Prepfluss',
    description: 'Expert tips on interview preparation, career growth, and the future of work.',
};

export default function BlogPage() {
    const posts = [
        {
            title: "How to Answer 'Tell Me About Yourself' Like a Pro",
            excerpt: "The first question is often the most important. Learn how to craft a narrative that grabs attention from the start.",
            author: "Sarah Chen",
            date: "Jan 28, 2024",
            readTime: "5 min",
            category: "General"
        },
        {
            title: "Mastering the STAR Method for Behavioral Questions",
            excerpt: "Behavioral interviews can be tricky. We break down the STAR method to help you provide structured, impactful answers.",
            author: "Michael Obi",
            date: "Jan 24, 2024",
            readTime: "8 min",
            category: "Technical"
        },
        {
            title: "The Future of AI in Recruitment: What You Need to Know",
            excerpt: "AI is changing how companies hire. Discover how you can leverage AI tools like Prepfluss to stay ahead of the curve.",
            author: "David Lee",
            date: "Jan 20, 2024",
            readTime: "6 min",
            category: "Tech Trends"
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">The Prepfluss <span className="text-blue-600">Journal.</span></h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            Insights, guides, and stories to help you navigate your career journey with confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Feed */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <div key={i} className="group flex flex-col bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
                                    <Image
                                        src="/logo.png"
                                        alt={post.title}
                                        fill
                                        className="object-contain p-12 opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all"
                                    />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-3 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                                        {post.category}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 mb-8 flex-1 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between text-xs text-slate-400">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1"><Calendar className="size-3" /> {post.date}</span>
                                            <span className="flex items-center gap-1"><Clock className="size-3" /> {post.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                                            Read More <ArrowRight className="size-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="mt-16 flex justify-center">
                        <Button variant="outline" className="rounded-full px-8">Load More Posts</Button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-blue-600 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Get Career Tips in Your Inbox</h2>
                    <p className="text-blue-100 mb-8 max-w-md mx-auto">Join 5,000+ subscribers who get our weekly guide to mastering interviews and career growth.</p>
                    <form className="max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="flex-1 h-12 rounded-full px-6 bg-blue-700 border-none text-white placeholder:text-blue-300 focus:ring-2 focus:ring-white outline-none"
                        />
                        <Button className="rounded-full bg-white text-blue-600 hover:bg-blue-50 h-12 px-8 font-bold">Subscribe</Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
