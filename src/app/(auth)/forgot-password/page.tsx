"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Loader2, Mail } from "lucide-react";
import { useState } from "react";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormField from "@/components/FormField";

const forgotPasswordSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

const ForgotPasswordPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const form = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
        setIsLoading(true);
        const supabase = createClient();
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
                redirectTo: `${window.location.origin}/auth/callback?next=/auth/reset-password`,
            });
            if (error) throw error;
            setEmailSent(true);
            toast.success("Password reset email sent! Check your inbox.");
        } catch (error: any) {
            toast.error(error.message || "Failed to send reset email. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen w-full">
            {/* Left Side: Form */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex lg:w-1/2 w-full flex-col justify-center px-8 sm:px-12 lg:px-24 py-12 bg-white dark:bg-slate-950"
            >
                <div className="flex flex-col gap-8 max-w-md mx-auto w-full">
                    <Link href="/" className="flex items-center gap-2 w-fit">
                        <Image src="/logo.png" alt="Prepfluss Logo" width={32} height={32} className="rounded-lg" />
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Prepfluss</span>
                    </Link>

                    {!emailSent ? (
                        <>
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                                    Forgot Password?
                                </h1>
                                <p className="text-slate-600 dark:text-slate-400 text-lg">
                                    No worries! Enter your email and we'll send you reset instructions.
                                </p>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        label="Email"
                                        placeholder="name@example.com"
                                        type="email"
                                        disabled={isLoading}
                                    />

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            className="w-full rounded-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold"
                                            type="submit"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="mr-2 size-4 animate-spin" />
                                                    Sending Reset Link...
                                                </>
                                            ) : (
                                                <>
                                                    Send Reset Link
                                                    <ArrowRight className="ml-2 size-4" />
                                                </>
                                            )}
                                        </Button>
                                    </motion.div>
                                </form>
                            </Form>

                            <div className="text-center">
                                <Link
                                    href="/sign-in"
                                    className="text-sm text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
                                >
                                    <ArrowLeft className="size-4" />
                                    Back to Sign In
                                </Link>
                            </div>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="text-center space-y-6"
                        >
                            <div className="size-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                                <Mail className="size-10" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                                    Check Your Email
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400">
                                    We've sent password reset instructions to <span className="font-semibold text-slate-900 dark:text-white">{form.getValues("email")}</span>
                                </p>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 rounded-lg p-4 text-sm text-slate-600 dark:text-slate-400">
                                <p className="mb-2 font-medium text-slate-900 dark:text-white">Didn't receive the email?</p>
                                <ul className="space-y-1 text-left list-disc list-inside">
                                    <li>Check your spam or junk folder</li>
                                    <li>Make sure you entered the correct email</li>
                                    <li>Wait a few minutes and check again</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Button
                                    onClick={() => setEmailSent(false)}
                                    variant="outline"
                                    className="w-full rounded-full h-12 text-base font-semibold"
                                >
                                    Try Another Email
                                </Button>

                                <Link href="/sign-in">
                                    <Button
                                        variant="ghost"
                                        className="w-full rounded-full h-12 text-base font-semibold"
                                    >
                                        <ArrowLeft className="mr-2 size-4" />
                                        Back to Sign In
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}

                    <div className="flex items-center justify-center gap-4 text-xs text-slate-400 mt-8">
                        <span className="flex items-center gap-1"><Check className="size-3" /> Secure Data</span>
                        <span className="flex items-center gap-1"><Check className="size-3" /> No Credit Card</span>
                    </div>
                </div>
            </motion.div>

            {/* Right Side: Visual */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:flex w-1/2 bg-slate-50 dark:bg-slate-900 flex-col items-center justify-center p-12 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />

                <div className="relative z-10 max-w-lg">
                    <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden p-12">
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="size-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Mail className="size-10" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Secure Reset</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    We'll send you a secure link to reset your password. The link expires in 1 hour for your security.
                                </p>
                            </div>
                            <div className="w-full space-y-2 text-left">
                                <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                    <Check className="size-5 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white text-sm">Email Verification</p>
                                        <p className="text-xs text-slate-500">Confirm your identity</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                    <Check className="size-5 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white text-sm">Secure Link</p>
                                        <p className="text-xs text-slate-500">One-time use only</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                    <Check className="size-5 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white text-sm">New Password</p>
                                        <p className="text-xs text-slate-500">Set a strong password</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-12 text-center max-w-md">
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">We've Got You Covered</h2>
                    <p className="text-slate-600 dark:text-slate-400">Account security is our top priority. Reset your password safely and get back to training.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPasswordPage;
