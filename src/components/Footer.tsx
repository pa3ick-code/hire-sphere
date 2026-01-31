import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-12 bg-slate-50 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-sm">
            <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image src="/logo.png" alt="Prepfluss Logo" width={34} height={34} className="rounded" />
                            <span className="font-bold text-lg">Prepfluss</span>
                        </Link>
                        <p className="text-slate-500 max-w-xs mb-6">
                            AI-powered mock interviews that provide real-time feedback and track progress to increase user confidence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://twitter.com/prepfluss" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                                <Twitter className="size-5" />
                            </Link>
                            <Link href="https://linkedin.com/company/prepfluss" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                                <Linkedin className="size-5" />
                            </Link>
                            <Link href="https://instagram.com/prepfluss" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors">
                                <Instagram className="size-5" />
                            </Link>
                            <Link href="https://facebook.com/prepfluss" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                                <Facebook className="size-5" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Product</h3>
                        <ul className="space-y-2 text-slate-500">
                            <li><Link href="/features" className="hover:text-blue-600 transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
                            <li><Link href="/demo" className="hover:text-blue-600 transition-colors">Demo</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Company</h3>
                        <ul className="space-y-2 text-slate-500">
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Support</h3>
                        <ul className="space-y-2 text-slate-500">
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Prepfluss. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
