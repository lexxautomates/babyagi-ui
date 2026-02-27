"use client";

import React, { useState } from 'react';
import { useAgentStore } from '@/store/useAgentStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Cpu, Play, Square, Command as CommandIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CEOOverlook() {
    const { isRunning, setRunning, addLog, availableTools } = useAgentStore();
    const [prompt, setPrompt] = useState("");

    const handleStart = () => {
        if (!prompt) return;
        setRunning(true);
        addLog({ type: 'info', message: `Initializing objective: ${prompt}` });
        addLog({ type: 'thought', message: "Neural pathways active. Initializing Productivity Pack + n8n Automation tools..." });
        addLog({ type: 'success', message: "Registered skills: Web Search, Email Automation, Disk Scan, Report Gen, n8n Automation." });
    };

    const handleStop = () => {
        setRunning(false);
        addLog({ type: 'error', message: "System termination sequence initiated." });
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-light tracking-tight text-white mb-2">
                        CEO <span className="text-muted-foreground font-thin italic">Overlook</span>
                    </h1>
                    <div className="flex gap-4 items-center">
                        <p className="text-muted-foreground text-sm font-light">Self-building autonomy core v1.0</p>
                        <div className="flex gap-2">
                            {availableTools.map(tool => (
                                <span key={tool} className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-tighter">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="glass px-6 py-3 rounded-xl flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Active Agents</p>
                            <p className="text-xl font-mono leading-none">04</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-right">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Systems Built</p>
                            <p className="text-xl font-mono leading-none">12</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative glass p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1 w-full space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground ml-1">Universal Objective</label>
                        <div className="relative">
                            <CommandIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Declare an autonomous objective..."
                                className="bg-black/20 border-white/5 pl-12 h-14 text-lg focus-visible:ring-white/10"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col gap-3">
                        {!isRunning ? (
                            <Button
                                onClick={handleStart}
                                className="bg-white text-black hover:bg-white/90 h-14 px-8 rounded-xl transition-all hover:scale-[1.02]"
                            >
                                <Play className="w-4 h-4 mr-2 fill-black" />
                                Initialize
                            </Button>
                        ) : (
                            <Button
                                onClick={handleStop}
                                variant="destructive"
                                className="h-14 px-8 rounded-xl"
                            >
                                <Square className="w-4 h-4 mr-2 fill-white" />
                                Terminate
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Neural Load', value: '12%', status: 'nominal' },
                    { label: 'LLM Sync', value: '100.104.168.24', status: 'connected' },
                    { label: 'Data Throughput', value: '420 kb/s', status: 'stable' },
                ].map((stat, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={stat.label}
                        className="glass p-6 rounded-2xl border-white/5"
                    >
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{stat.label}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-mono">{stat.value}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-white/10 uppercase tracking-tighter">{stat.status}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
