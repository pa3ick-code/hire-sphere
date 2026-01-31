"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FlowLayout from "@/components/interview/FlowLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, User, Code, Headphones, Shirt, Calculator, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
    { id: "frontend", title: "Frontend Developer", icon: Code, description: "React, CSS, Performance optimization" },
    { id: "support", title: "Customer Support", icon: Headphones, description: "Conflict resolution, Empathy, CRM tools" },
    { id: "marketing", title: "Social Media Intern", icon: User, description: "Content creation, Trends, Analytics" },
    { id: "sales", title: "Sales Representative", icon: Briefcase, description: "Negotiation, Prospecting, Closing" },
    { id: "retail", title: "Retail Associate", icon: Shirt, description: "Customer service, Inventory, POS" },
    { id: "finance", title: "Junior Accountant", icon: Calculator, description: "Bookkeeping, Excel, Auditing" },
];

export default function RolePage() {
    const router = useRouter();
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const handleSelect = (roldId: string) => {
        setSelectedRole(roldId);
    };

    const handleContinue = () => {
        if (selectedRole) {
            localStorage.setItem("interview_role", selectedRole);
            router.push("/interview/mode");
        }
    };

    return (
        <FlowLayout currentStep={2} totalSteps={4}>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Choose your role</h1>
                <p className="text-slate-500 dark:text-slate-400">
                    We'll ask questions specific to this position.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {roles.map((role) => (
                    <motion.div
                        key={role.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelect(role.id)}
                    >
                        <Card className={`cursor-pointer transition-all border-2 h-full ${selectedRole === role.id ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-200 dark:border-slate-800 hover:border-blue-400'}`}>
                            <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center relative">
                                {selectedRole === role.id && (
                                    <div className="absolute top-3 right-3 text-blue-600 bg-white dark:bg-slate-950 rounded-full p-1 shadow-sm">
                                        <Check className="size-4" />
                                    </div>
                                )}
                                <div className={`p-3 rounded-xl mb-4 ${selectedRole === role.id ? 'bg-blue-200 text-blue-700 dark:bg-blue-800 dark:text-blue-100' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                                    <role.icon className="size-6" />
                                </div>
                                <h3 className="font-bold text-lg mb-1">{role.title}</h3>
                                <p className="text-xs text-slate-500">{role.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center">
                <Button
                    size="lg"
                    onClick={handleContinue}
                    disabled={!selectedRole}
                    className={`px-12 rounded-full h-12 text-base ${!selectedRole ? 'opacity-50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20'}`}
                >
                    Continue <ArrowRight className="ml-2 size-4" />
                </Button>
            </div>
        </FlowLayout>
    );
}
