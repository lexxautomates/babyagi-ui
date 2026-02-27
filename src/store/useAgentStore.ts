import { create } from 'zustand';

interface AgentLog {
    id: string;
    type: 'info' | 'success' | 'error' | 'thought';
    message: string;
    timestamp: string;
}

interface GraphNode {
    id: string;
    label: string;
    type: string;
}

interface GraphEdge {
    id: string;
    source: string;
    target: string;
}

interface AgentStore {
    isRunning: boolean;
    logs: AgentLog[];
    nodes: GraphNode[];
    edges: GraphEdge[];
    availableTools: string[];
    setRunning: (status: boolean) => void;
    addLog: (log: Omit<AgentLog, 'id' | 'timestamp'>) => void;
    updateGraph: (nodes: GraphNode[], edges: GraphEdge[]) => void;
    setTools: (tools: string[]) => void;
}

export const useAgentStore = create<AgentStore>((set) => ({
    isRunning: false,
    logs: [],
    nodes: [],
    edges: [],
    availableTools: ['Web Search', 'Email Automation', 'Disk Scan', 'Report Gen', 'n8n Automation'],
    setRunning: (status) => set({ isRunning: status }),
    setTools: (tools) => set({ availableTools: tools }),
    addLog: (log) => set((state) => ({
        logs: [
            {
                ...log,
                id: Math.random().toString(36).substring(7),
                timestamp: new Date().toLocaleTimeString(),
            },
            ...state.logs,
        ].slice(0, 100),
    })),
    updateGraph: (nodes, edges) => set({ nodes, edges }),
}));
