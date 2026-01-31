"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';
import { motion } from 'framer-motion';

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Prepfluss Logo" width={32} height={32} className="rounded-lg" />
                    <span className="text-xl font-bold tracking-tight md:block hidden">Prepfluss</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <Link href="/#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How it Works</Link>
                    <Link href="/#job-seekers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Job Seekers</Link>
                    <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</Link>
                </div>

                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Link href="/sign-in" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                        Log in
                    </Link>
                    <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6">
                        <Link href="/interview/cv">Get Started</Link>
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
