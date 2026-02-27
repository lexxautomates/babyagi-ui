"use client";

import React, { useEffect } from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useAgentStore } from '@/store/useAgentStore';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'CEO Core' }, type: 'input' },
];
const initialEdges: any[] = [];

export default function AutonomyMatrix() {
    const { nodes: storeNodes, edges: storeEdges } = useAgentStore();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    useEffect(() => {
        if (storeNodes.length > 0) {
            setNodes(storeNodes.map(n => ({
                id: n.id,
                data: { label: n.label },
                position: { x: Math.random() * 400, y: Math.random() * 400 },
            })));
        }
        if (storeEdges.length > 0) {
            setEdges(storeEdges.map(e => ({
                id: e.id,
                source: e.source,
                target: e.target,
                animated: true,
            })));
        }
    }, [storeNodes, storeEdges, setNodes, setEdges]);

    return (
        <div className="h-full w-full glass rounded-2xl overflow-hidden relative">
            <div className="absolute top-4 left-4 z-10">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Autonomy Matrix</h2>
            </div>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                className="bg-transparent"
                colorMode="dark"
            >
                <Background color="#333" gap={20} />
                <Controls showLib={false} className="fill-foreground" />
            </ReactFlow>
        </div>
    );
}
