
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { Transaction } from "./transaction-history";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


interface TransactionNetworkGraphProps {
  transactions: Transaction[];
}

interface Node {
  id: string;
  x: number;
  y: number;
  isCenter: boolean;
}

interface Link {
  source: Node;
  target: Node;
  id: string | number;
  riskScore: number;
}

export function TransactionNetworkGraph({ transactions }: TransactionNetworkGraphProps) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  
  const currentUser = "You";

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const uniqueRecipients = [...new Set(transactions.map(t => t.recipient))];
    
    const graphNodes: Node[] = [
      { id: currentUser, x: 250, y: 150, isCenter: true },
      ...uniqueRecipients.map((recipient, index) => {
        const angle = (index / uniqueRecipients.length) * 2 * Math.PI;
        const radiusX = uniqueRecipients.length > 1 ? 200 : 0;
        const radiusY = uniqueRecipients.length > 1 ? 120 : 0;
        return {
          id: recipient,
          x: 250 + radiusX * Math.cos(angle),
          y: 150 + radiusY * Math.sin(angle),
          isCenter: false,
        };
      })
    ];

    const graphLinks: Link[] = transactions.map(tx => {
      const sourceNode = graphNodes.find(n => n.id === currentUser)!;
      const targetNode = graphNodes.find(n => n.id === tx.recipient)!;
      return {
        source: sourceNode,
        target: targetNode,
        id: tx.id,
        riskScore: tx.riskScore,
      };
    }).filter(link => link.source && link.target);

    setNodes(graphNodes);
    setLinks(graphLinks);

  }, [transactions]);
  
  const getLinkColor = (riskScore: number) => {
    if (riskScore > 0.75) return 'stroke-destructive/70';
    if (riskScore > 0.4) return 'stroke-accent/70';
    return 'stroke-muted-foreground/30';
  }

  if (transactions.length === 0) {
      return (
        <Card>
            <CardHeader>
                <CardTitle>Transaction Network</CardTitle>
                <CardDescription>A visual representation of your sent transactions.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-[320px] text-muted-foreground">
                <p>Send money to see your network grow.</p>
            </CardContent>
        </Card>
      )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Network</CardTitle>
        <CardDescription>Visual representation of your transactions. Hover over a node to see details.</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <TooltipProvider>
          <svg width="500" height="320" viewBox="0 0 500 320">
            <g>
              {links.map((link) => (
                <line
                  key={link.id}
                  x1={link.source.x}
                  y1={link.source.y}
                  x2={link.target.x}
                  y2={link.target.y}
                  className={cn(
                      "transition-all stroke-2",
                      getLinkColor(link.riskScore),
                      (hoveredNode === link.source.id || hoveredNode === link.target.id) && "stroke-primary/80 !stroke-[3px]"
                  )}
                />
              ))}
            </g>
            <g>
              {nodes.map((node) => (
                <Tooltip key={node.id} delayDuration={100}>
                  <TooltipTrigger asChild>
                    <g 
                      transform={`translate(${node.x},${node.y})`}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer group"
                    >
                      <circle
                        r={node.isCenter ? 20 : 15}
                        className={cn(
                          "transition-all stroke-2",
                          node.isCenter ? "fill-primary" : "fill-card",
                          (hoveredNode === node.id || links.some(l => (l.source.id === node.id && l.target.id === hoveredNode) || (l.target.id === node.id && l.source.id === hoveredNode))) ? "stroke-accent" : "stroke-border",
                          (hoveredNode === node.id) && "stroke-[3px]",
                        )}
                      />
                      <text
                        textAnchor="middle"
                        dy={node.isCenter ? "0.35em" : "0.35em"}
                        className={cn(
                            "transition-all text-xs select-none pointer-events-none",
                            node.isCenter ? "fill-primary-foreground" : "fill-card-foreground",
                            "group-hover:font-bold"
                        )}
                      >
                        {node.id.length > 10 ? node.id.substring(0, 7) + '...' : node.id}
                      </text>
                    </g>
                  </TooltipTrigger>
                   <TooltipContent>
                    <p>{node.id}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </g>
          </svg>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
