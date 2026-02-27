"use client";

import React from 'react';
import { useAgentStore } from '@/store/useAgentStore';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function HiveTerminal() {
    const { logs } = useAgentStore();

    return (
        <div className="h-full w-full glass rounded-2xl overflow-hidden flex flex-col p-4">
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Hive Terminal</h2>
                <div className="flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
            </div>
            <ScrollArea className="flex-1">
                <div className="space-y-3 font-mono text-[13px] leading-relaxed">
                    {logs.map((log) => (
                        <div key={log.id} className="animate-in fade-in slide-in-from-left-2 duration-300">
                            <span className="text-muted-foreground mr-2">[{log.timestamp}]</span>
                            <span className={
                                log.type === 'error' ? 'text-red-400' :
                                    log.type === 'success' ? 'text-cyan-400' :
                                        log.type === 'thought' ? 'text-purple-400 italic' :
                                            'text-foreground'
                            }>
                                {log.message}
                            </span>
                        </div>
                    ))}
                    {logs.length === 0 && (
                        <div className="text-muted-foreground/30 italic">Awaiting neural initialization...</div>
                    )}
                </div>
            </ScrollArea>
        </div>
    );
}
