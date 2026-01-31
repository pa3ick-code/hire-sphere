"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FlowLayout from "@/components/interview/FlowLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, FileText, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CVPage() {
    const router = useRouter();
    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleProcess = async () => {
        setIsProcessing(true);
        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Store mock data in localStorage
        localStorage.setItem("interview_cv_name", file ? file.name : "skipped");
        localStorage.setItem("interview_cv_keywords", JSON.stringify(["React", "TypeScript", "Leadership"]));

        setIsProcessing(false);
        router.push("/interview/role");
    };

    return (
        <FlowLayout currentStep={1} totalSteps={4}>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Upload your CV</h1>
                <p className="text-slate-500 dark:text-slate-400">
                    We'll analyze your resume to tailor the interview questions.
                </p>
            </div>

            <Card className="border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 shadow-none">
                <CardContent
                    className={`flex flex-col items-center justify-center p-12 transition-colors ${isDragOver ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-400' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    {file ? (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="size-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                                <FileText className="size-8" />
                            </div>
                            <p className="font-medium text-lg mb-1">{file.name}</p>
                            <p className="text-sm text-slate-500 mb-6">{(file.size / 1024).toFixed(0)} KB</p>
                            <Button variant="outline" size="sm" onClick={() => setFile(null)} className="text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200">
                                Remove
                            </Button>
                        </motion.div>
                    ) : (
                        <>
                            <div className="size-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 text-slate-400">
                                <UploadCloud className="size-8" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Drag & Drop your CV here</h3>
                            <p className="text-slate-500 text-sm mb-6 max-w-xs text-center">
                                Supports PDF, DOCX (Max 5MB)
                            </p>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="cv-upload"
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                />
                                <Button variant="outline" asChild className="cursor-pointer">
                                    <label htmlFor="cv-upload">Browse Files</label>
                                </Button>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>

            <div className="flex justify-between items-center mt-8">
                <Button variant="ghost" onClick={() => handleProcess()} className="text-slate-500">
                    Skip for now
                </Button>
                <Button
                    size="lg"
                    onClick={handleProcess}
                    disabled={!file && !isProcessing}
                    className={`px-8 rounded-full ${!file ? 'opacity-50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20'}`}
                >
                    {isProcessing ? (
                        <>
                            <Loader2 className="mr-2 size-4 animate-spin" /> Analyzing...
                        </>
                    ) : (
                        <>
                            Continue <ArrowRight className="ml-2 size-4" />
                        </>
                    )}
                </Button>
            </div>
        </FlowLayout>
    );
}
