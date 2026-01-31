"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mic, Star, Loader2 } from "lucide-react";
import { useState } from "react";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { signIn, signUp } from "@/lib/actions/auth.action";
import FormField from "./FormField";
import { Badge } from "./ui/badge";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        const { name, email, password } = data;

        const result = await signUp({
          name: name!,
          email,
          password,
          uid: "", // uid is handled by supabase
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success(result.message);
        router.push("/sign-in");
      } else {
        const { email, password } = data;

        const result = await signIn({
          email,
          password,
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success("Signed in successfully.");
        router.push("/");
      }
    } catch (error) {
      toast.error(`There was an error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const isSignIn = type === "sign-in";

  return (
    <div className="flex h-screen md:min-h-screen w-full">
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

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              {isSignIn ? "Welcome back." : "Start your training."}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {isSignIn ? "Ready to train? Let's get you signed in." : "Create an account to start practicing."}
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {!isSignIn && (
                <FormField
                  control={form.control}
                  name="name"
                  label="Full Name"
                  placeholder="e.g. Tunde Johnson"
                  type="text"
                  disabled={isLoading}
                />
              )}

              <FormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="name@example.com"
                type="email"
                disabled={isLoading}
              />

              <div>
                <FormField
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  disabled={isLoading}
                />
                {isSignIn && (
                  <div className="mt-2 text-right">
                    <Link
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:underline font-medium"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className="w-full rounded-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />
                      {isSignIn ? "Signing In..." : "Creating Account..."}
                    </>
                  ) : (
                    <>
                      {isSignIn ? "Sign In" : "Create Account"}
                      <ArrowRight className="ml-2 size-4" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>

          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            <p className="mb-4">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
              <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="text-blue-600 hover:underline font-semibold">
                {isSignIn ? "Sign up" : "Sign in"}
              </Link>
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 mt-8">
              <span className="flex items-center gap-1"><Check className="size-3" /> Secure Data</span>
              <span className="flex items-center gap-1"><Check className="size-3" /> No Credit Card</span>
            </div>
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
          <div className="absolute -top-12 -left-12 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce delay-700">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Check className="size-4" /></div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Great Tone!</p>
                <p className="text-[10px] text-slate-500">Confidence: 98%</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-yellow-400" />
                <div className="size-3 rounded-full bg-green-400" />
              </div>
              <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto" />
            </div>
            <div className="p-8 flex flex-col items-center text-center gap-6">
              <div className="size-24 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center relative">
                <Mic className="size-10" />
                <span className="absolute top-0 right-0 flex size-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-4 bg-blue-500"></span>
                </span>
              </div>
              <div className="space-y-3 w-full">
                <div className="h-3 w-3/4 bg-slate-100 dark:bg-slate-900 rounded-full mx-auto" />
                <div className="h-3 w-1/2 bg-slate-100 dark:bg-slate-900 rounded-full mx-auto" />
              </div>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">AI Analysis in Progress...</Badge>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-pulse">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center"><Star className="size-4" /></div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Gold Badge</p>
                <p className="text-[10px] text-slate-500">Achieved!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-12 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Train. Track. Win.</h2>
          <p className="text-slate-600 dark:text-slate-400">Join thousands of candidates using Prepfluss to land their dream jobs.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthForm;