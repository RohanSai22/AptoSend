
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Node {
  id: string;
  x: number;
  y: number;
  type: 'hub' | 'region';
}

interface Link {
  source: string;
  target: string;
  id: string | number;
  riskScore: number;
}

const generateRandomCoordinates = (width: number, height: number, margin: number) => {
    return {
        x: Math.random() * (width - margin * 2) + margin,
        y: Math.random() * (height - margin * 2) + margin,
    };
};

export function GlobalAnomalyGraph() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  
  const width = 800;
  const height = 450;
  const margin = 40;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const generatedNodes: Node[] = [
      { id: 'North America Hub', type: 'hub', ...generateRandomCoordinates(width, height, margin) },
      { id: 'Europe Hub', type: 'hub', ...generateRandomCoordinates(width, height, margin) },
      { id: 'Asia Hub', type: 'hub', ...generateRandomCoordinates(width, height, margin) },
      { id: 'South America Hub', type: 'hub', ...generateRandomCoordinates(width, height, margin) },
      { id: 'Africa Hub', type: 'hub', ...generateRandomCoordinates(width, height, margin) },
    ];

    const regions = ['USA', 'Canada', 'Mexico', 'UK', 'Germany', 'France', 'India', 'China', 'Japan', 'Brazil', 'Argentina', 'Nigeria', 'South Africa', 'Kenya'];
    regions.forEach(r => {
        generatedNodes.push({ id: r, type: 'region', ...generateRandomCoordinates(width, height, margin) });
    });

    const generatedLinks: Link[] = [];
    for (let i = 0; i < 40; i++) {
        const sourceNode = generatedNodes[Math.floor(Math.random() * generatedNodes.length)];
        let targetNode = generatedNodes[Math.floor(Math.random() * generatedNodes.length)];

        // Ensure source and target are not the same
        while (sourceNode.id === targetNode.id) {
            targetNode = generatedNodes[Math.floor(Math.random() * generatedNodes.length)];
        }
        
        // Make hubs more central
        const source = (Math.random() > 0.3) ? sourceNode.id : generatedNodes.find(n => n.type === 'hub')!.id
        const target = targetNode.id

        // Avoid duplicate links
        if (generatedLinks.some(l => (l.source === source && l.target === target) || (l.source === target && l.target === source))) {
            continue;
        }

        generatedLinks.push({
            id: `l-${i}`,
            source,
            target,
            riskScore: Math.random(), // 0 to 1
        });
    }

    setNodes(generatedNodes);
    setLinks(generatedLinks);

  }, []);
  
  const getLinkColor = (riskScore: number) => {
    if (riskScore > 0.95) return 'stroke-destructive/80';
    if (riskScore > 0.8) return 'stroke-accent/80';
    return 'stroke-muted-foreground/30';
  }

  const getNodeById = (id: string) => nodes.find(n => n.id === id);

  return (
    <div className="w-full max-w-5xl rounded-xl border bg-card/50 p-2 shadow-inner">
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" className="fill-muted-foreground/30" />
            </marker>
          </defs>
          <g>
            {links.map((link) => {
              const source = getNodeById(link.source);
              const target = getNodeById(link.target);
              if (!source || !target) return null;
              
              return (
                <line
                  key={link.id}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  className={cn(
                      "transition-all stroke-[1.5px]",
                      getLinkColor(link.riskScore)
                  )}
                />
              );
            })}
          </g>
          <g>
            {nodes.map((node) => (
              <g 
                key={node.id} 
                transform={`translate(${node.x},${node.y})`}
                className="group"
              >
                <circle
                  r={node.type === 'hub' ? 12 : 7}
                  className={cn(
                    "transition-all stroke",
                    node.type === 'hub' 
                        ? "fill-primary/80 stroke-primary" 
                        : "fill-background stroke-border",
                  )}
                />
                <text
                  textAnchor="middle"
                  dy={node.type === 'hub' ? -20 : -15}
                  className={cn(
                      "transition-all text-[10px] select-none fill-muted-foreground opacity-0 group-hover:opacity-100 font-medium",
                  )}
                >
                  {node.id}
                </text>
              </g>
            ))}
          </g>
        </svg>
    </div>
  );
}
