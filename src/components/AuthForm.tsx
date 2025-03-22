'use client';
import Image from 'next/image'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form";
import Link from 'next/link';
import FormField from './FormField';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up'? z.string().min(2).max(50) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(8)
    })
}

export const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter();

    const formSchema = authFormSchema(type);
      // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
       try {
            if(type === 'sign-in'){
                toast.success('Signed in successfully');
                router.push('/')
            } else {
                toast.success('Signed up successfully, Please sign in.');
                router.push('/sign-in')
            }
       } catch (error) {
            console.log(error);
            toast.error(`Something went wrong: ${error}`)
       }
    }

    const isSignIn = type === 'sign-in'
    
  return (
    <div>
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.svg" alt="logo" height={32} width={38} />
                    <h2 
                        className="text-primary-100 text-center"
                    >
                        HireSphere
                    </h2>
                </div>

                <h3>Practice job interview with AI</h3>
                <Form {...form} >
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)} 
                        className="w-full space-y-6 mt-4 form" 
                    >
                    {!isSignIn && (
                        <FormField
                            control={form.control}
                            name="name"
                            label="Name"
                            placeholder="Your Name"
                            type="text"
                        />
                        )}

                        <FormField
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="Your email address"
                        type="email"
                        />

                        <FormField
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        />

                        <Button type="submit" className="btn">
                            { isSignIn? 'Sign in' : 'Create an account' }
                        </Button>

                        <p className='text-center'>
                            { isSignIn? "Don't have an account yet?" : "Already have an account?" }
                            <Link 
                                href={isSignIn? '/sign-up' : '/sign-in'}
                                className='font-bold text-user-primary ml-1'
                            >
                                { isSignIn? 'Sign up' : 'Sign In'}
                            </Link>
                        </p>
                    </form>
                </Form>
            </div>
        </div>
    </div>
  )
}
