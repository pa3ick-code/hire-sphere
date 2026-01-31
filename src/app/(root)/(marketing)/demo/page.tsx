import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import { Play } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Demo - Prepfluss',
    description: 'See Prepfluss in action.',
};

export default function DemoPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-6">Experience Prepfluss in Action</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Watch how our AI coach analyzes your responses and provides instant feedback to help you improve.
            </p>

            <div className="aspect-video bg-slate-100 dark:bg-slate-900 rounded-2xl mb-12 flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group">
                <div className="size-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                    <Play className="size-8 text-white fill-white ml-1" />
                </div>
                <span className="sr-only">Play Demo Video</span>
            </div>

            <div className="flex justify-center gap-4">
                <Button size="lg" className="rounded-full px-8" asChild>
                    <Link href="/interview">Try it Yourself</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                    <Link href="/contact">Book a Live Demo</Link>
                </Button>
            </div>
        </div>
    );
}
