"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import FlowLayout from "@/components/interview/FlowLayout";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Square, PhoneOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InterviewRoom from "@/components/InterviewRoom";

// Mock Questions Database
const questions = [
    "Tell me about a time you had to handle a difficult situation at work.",
    "Where do you see yourself in five years?",
    "Why do you want to work for our company?",
    "What is your greatest strength and weakness?"
];

export default function SessionPage() {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [sessionState, setSessionState] = useState<'intro' | 'asking' | 'listening' | 'processing' | 'completed'>('intro');
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Initial Intro
    useEffect(() => {
        const timer = setTimeout(() => {
            setSessionState('asking');
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Timer logic
    useEffect(() => {
        if (isRecording) {
            intervalRef.current = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setTimer(0);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRecording]);

    const toggleRecording = () => {
        if (isRecording) {
            // Stop recording -> Process -> Next Question
            setIsRecording(false);
            setSessionState('processing');
            setTimeout(() => {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(prev => prev + 1);
                    setSessionState('asking');
                } else {
                    setSessionState('completed');
                    setTimeout(() => {
                        router.push("/interview/analysis");
                    }, 1500);
                }
            }, 2000);
        } else {
            // Start recording
            setSessionState('listening');
            setIsRecording(true);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <FlowLayout currentStep={4} totalSteps={4}>
            <InterviewRoom
                status={
                    sessionState === 'intro' ? 'CONNECTING' :
                        sessionState === 'completed' ? 'FINISHED' : 'ACTIVE'
                }
                isSpeaking={sessionState === 'asking' || sessionState === 'processing'}
                lastMessage={
                    sessionState === 'asking' ? questions[currentQuestionIndex] :
                        sessionState === 'listening' ? "I'm listening..." :
                            sessionState === 'processing' ? "Analyzing your response..." : undefined
                }
                userName="Guest User"
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                onStart={toggleRecording}
                onEnd={() => setSessionState('completed')}
            />
        </FlowLayout>
    );
}
