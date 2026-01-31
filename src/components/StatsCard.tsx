"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    delay?: number;
    suffix?: string;
    className?: string;
}

const StatsCard = ({
    title,
    value,
    icon,
    trend,
    delay = 0,
    suffix = "",
    className
}: StatsCardProps) => {
    const [displayValue, setDisplayValue] = useState(0);

    // Parse numeric value for animation if possible
    const numericValue = typeof value === 'number'
        ? value
        : parseFloat(value.toString().replace(/[^0-9.-]+/g, ""));

    const isNumber = !isNaN(numericValue);

    useEffect(() => {
        if (!isNumber) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = numericValue / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += stepValue;
            if (current >= numericValue) {
                setDisplayValue(numericValue);
                clearInterval(timer);
            } else {
                setDisplayValue(current);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [numericValue, isNumber]);

    const finalDisplay = isNumber
        ? displayValue.toLocaleString(undefined, { maximumFractionDigits: 1 })
        : value;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            className={cn(
                "relative overflow-hidden rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all duration-300 group",
                className
            )}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                {trend && (
                    <div className={cn(
                        "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                        trend.isPositive
                            ? "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20"
                            : "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20"
                    )}>
                        {trend.isPositive ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                        <span>{trend.value}%</span>
                    </div>
                )}
            </div>

            <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {finalDisplay}{suffix}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {title}
                </p>
            </div>

            <div className="absolute -bottom-4 -right-4 size-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500" />
        </motion.div>
    );
};

export default StatsCard;
