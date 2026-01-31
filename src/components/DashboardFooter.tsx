"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook } from "lucide-react";

const DashboardFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12 text-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex size-6 items-center justify-center rounded bg-blue-600 font-bold text-white text-xs">P</div>
                            <span className="font-bold text-lg text-slate-900 dark:text-white">Prepfluss</span>
                        </div>
                        <p className="text-slate-500 max-w-xs mb-6">
                            AI-powered mock interviews that provide real-time feedback and track progress to increase user confidence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="size-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors text-slate-600 dark:text-slate-400">
                                <Linkedin className="size-4" />
                            </Link>
                            <Link href="#" className="size-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors text-slate-600 dark:text-slate-400">
                                <Twitter className="size-4" />
                            </Link>
                            <Link href="#" className="size-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors text-slate-600 dark:text-slate-400">
                                <Github className="size-4" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Product</h3>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Demo</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Company</h3>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Support</h3>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
                    <p>&copy; {currentYear} Prepfluss. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default DashboardFooter;
