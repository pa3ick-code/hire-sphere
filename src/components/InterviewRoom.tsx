"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mic,
    MicOff,
    PhoneOff,
    Settings,
    Maximize2,
    Minimize2,
    Video,
    VideoOff,
    User,
    Building2,
    MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InterviewRoomProps {
    status: "INACTIVE" | "CONNECTING" | "ACTIVE" | "FINISHED";
    isSpeaking: boolean;
    lastMessage?: string;
    userName: string;
    onStart: () => void;
    onEnd: () => void;
    currentQuestionIndex?: number;
    totalQuestions?: number;
}

export default function InterviewRoom({
    status,
    isSpeaking,
    lastMessage,
    userName,
    onStart,
    onEnd,
    currentQuestionIndex,
    totalQuestions
}: InterviewRoomProps) {
    const [isMicOn, setIsMicOn] = useState(true);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);

    // Camera handling
    useEffect(() => {
        if (isCameraOn && status !== "FINISHED") {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                .then(stream => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                        streamRef.current = stream;
                    }
                })
                .catch(err => console.error("Error accessing camera:", err));
        } else {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        }
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, [isCameraOn, status]);

    const toggleMic = () => setIsMicOn(!isMicOn);
    const toggleCamera = () => setIsCameraOn(!isCameraOn);
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <div className={cn(
            "relative w-full aspect-video md:aspect-[16/9] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl transition-all duration-500",
            isFullscreen && "fixed inset-0 z-[100] rounded-none aspect-auto h-screen"
        )}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-black/40" />

            {/* AI Interviewer View (Large) */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex flex-col items-center gap-6">
                    <motion.div
                        animate={isSpeaking ? {
                            scale: [1, 1.05, 1],
                            borderColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.8)", "rgba(59, 130, 246, 0.2)"]
                        } : {}}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="relative size-32 md:size-48 rounded-full border-4 border-blue-500/20 bg-slate-800 flex items-center justify-center overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/ai-avatar.png"
                            alt="AI Interviewer"
                            fill
                            className="object-cover scale-110"
                        />
                        {isSpeaking && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="absolute inset-0 animate-ping bg-blue-500/20 rounded-full" />
                            </div>
                        )}
                    </motion.div>

                    <div className="text-center space-y-2">
                        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">AI Interview Coach</h2>
                        <div className="flex items-center justify-center gap-2">
                            <span className={cn(
                                "size-2 rounded-full",
                                status === "ACTIVE" ? "bg-green-500 animate-pulse" : "bg-slate-500"
                            )} />
                            <span className="text-sm font-medium text-slate-400 capitalize">
                                {status.toLowerCase()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* User Camera Preview (PIP) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-6 right-6 w-32 md:w-48 aspect-video rounded-xl overflow-hidden glass-morphism shadow-2xl z-20"
            >
                {isCameraOn ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover mirror scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 gap-2">
                        <User className="size-8 text-slate-500" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">{userName}</span>
                    </div>
                )}
                <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                    You
                </div>
            </motion.div>

            {/* Transcript Overlay */}
            <AnimatePresence>
                {lastMessage && status === "ACTIVE" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute left-1/2 -translate-x-1/2 bottom-28 w-[90%] md:w-[70%] z-20"
                    >
                        <div className="glass-morphism rounded-2xl p-4 md:p-6 shadow-2xl">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                                    <MessageSquare className="size-4 text-blue-400" />
                                </div>
                                <p className="text-sm md:text-lg text-blue-100/90 leading-relaxed font-medium line-clamp-3">
                                    {lastMessage}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Bar Info */}
            <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                {currentQuestionIndex !== undefined && totalQuestions !== undefined && (
                    <div className="glass-morphism rounded-full px-4 py-1.5 flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-400">Q{currentQuestionIndex + 1}</span>
                        <div className="h-3 w-px bg-white/20" />
                        <span className="text-xs font-medium text-white/70">Progress {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%</span>
                    </div>
                )}
            </div>

            {/* Controls Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 md:gap-6 px-6 py-3 rounded-full glass-morphism shadow-2xl">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMic}
                    className={cn(
                        "rounded-full transition-all duration-300",
                        isMicOn ? "bg-white/10 text-white hover:bg-white/20" : "bg-red-500/20 text-red-500 hover:bg-red-500/30"
                    )}
                >
                    {isMicOn ? <Mic className="size-5" /> : <MicOff className="size-5" />}
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleCamera}
                    className={cn(
                        "rounded-full transition-all duration-300",
                        isCameraOn ? "bg-white/10 text-white hover:bg-white/20" : "bg-red-500/20 text-red-500 hover:bg-red-500/30"
                    )}
                >
                    {isCameraOn ? <Video className="size-5" /> : <VideoOff className="size-5" />}
                </Button>

                <div className="h-8 w-px bg-white/10 mx-1 md:mx-2" />

                {status === "INACTIVE" || status === "FINISHED" ? (
                    <Button
                        onClick={onStart}
                        className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 animate-pulse shadow-lg shadow-blue-500/20"
                    >
                        Join Call
                    </Button>
                ) : (
                    <Button
                        onClick={onEnd}
                        variant="destructive"
                        className="rounded-full font-bold px-8 shadow-lg shadow-red-500/20 group hover:scale-105 transition-all duration-300"
                    >
                        <PhoneOff className="size-4 mr-2 group-hover:rotate-12 transition-transform" />
                        End Session
                    </Button>
                )}

                <div className="h-8 w-px bg-white/10 mx-1 md:mx-2" />

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleFullscreen}
                    className="rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                    {isFullscreen ? <Minimize2 className="size-5" /> : <Maximize2 className="size-5" />}
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                    <Settings className="size-5" />
                </Button>
            </div>
        </div>
    );
}
