"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Bell, LayoutDashboard, FileText, BarChart2, User, LogOut } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/actions/auth.action";
import { ModeToggle } from "./ModeToggle";

const DashboardNav = () => {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    const links = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Practice", href: "/interview", icon: FileText },
        { name: "Analysis", href: "/analysis", icon: BarChart2 },
    ];

    return (
        <motion.header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                        P
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                        PrepFluss
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-900/50 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
                    {links.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname?.startsWith(link.href));

                        return (
                            <Link key={link.name} href={link.href}>
                                <div
                                    className={cn(
                                        "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2",
                                        isActive
                                            ? "text-blue-600 dark:text-blue-400"
                                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-nav"
                                            className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full shadow-sm"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Icon className="size-4" />
                                        {link.name}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Button variant="ghost" size="icon" className="relative rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
                        <Bell className="size-5" />
                        <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-black" />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative size-9 rounded-full p-0 overflow-hidden ring-2 ring-white dark:ring-black ring-offset-2 ring-offset-blue-500/20">
                                <div className="size-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                    <User className="size-5 text-slate-500 dark:text-slate-400" />
                                </div>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard" className="cursor-pointer">
                                    <LayoutDashboard className="mr-2 size-4" />
                                    <span>Dashboard</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/interview" className="cursor-pointer">
                                    <FileText className="mr-2 size-4" />
                                    <span>Practice Interviews</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="text-red-500 focus:text-red-500 cursor-pointer focus:bg-red-50 dark:focus:bg-red-950/20"
                                onClick={async () => {
                                    await signOut();
                                    window.location.href = "/";
                                }}
                            >
                                <LogOut className="mr-2 size-4" />
                                <span>Sign Out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </motion.header>
    );
};

export default DashboardNav;
