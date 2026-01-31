"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FlowLayoutProps {
    children: React.ReactNode;
    currentStep?: number;
    totalSteps?: number;
}

export default function FlowLayout({ children, currentStep, totalSteps }: FlowLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans">
            {/* Simplified Header */}
            <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md fixed top-0 w-full z-10">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Prepfluss Logo" width={34} height={34} className="rounded-md" />
                        <span className="font-bold text-lg tracking-tight">Prepfluss</span>
                    </Link>

                    <Button variant="ghost" size="icon" asChild className="rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                        <Link href="/">
                            <X className="size-5" />
                        </Link>
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center pt-20 pb-12 px-4">
                {totalSteps && currentStep && (
                    <div className="w-full max-w-md mb-8 flex gap-2">
                        {[...Array(totalSteps)].map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 flex-1 rounded-full text-xs font-medium transition-colors duration-300 ${i + 1 <= currentStep ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'
                                    }`}
                            />
                        ))}
                    </div>
                )}
                <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {children}
                </div>
            </main>
        </div>
    );
}
