
'use client';

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

// Spreads nodes in a cluster around a central point
const generateClusterCoordinates = (width: number, height: number, hubX: number, hubY: number, radius: number) => {
    const angle = Math.random() * 2 * Math.PI;
    const r = radius * Math.sqrt(Math.random()); // Use sqrt for more even distribution
    return {
        x: hubX + r * Math.cos(angle),
        y: hubY + r * Math.sin(angle),
    };
};

export function GlobalAnomalyGraph() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  
  const width = 1200;
  const height = 600;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hubDetails = [
      { id: 'North America Hub', x: width * 0.2, y: height * 0.4, radius: 180 },
      { id: 'Europe Hub', x: width * 0.45, y: height * 0.3, radius: 160 },
      { id: 'Asia Hub', x: width * 0.8, y: height * 0.5, radius: 200 },
      { id: 'South America Hub', x: width * 0.25, y: height * 0.75, radius: 150 },
      { id: 'Africa Hub', x: width * 0.55, y: height * 0.65, radius: 170 },
    ];

    const generatedNodes: Node[] = hubDetails.map(h => ({ id: h.id, type: 'hub', x: h.x, y: h.y }));

    const regions = ['USA', 'Canada', 'Mexico', 'UK', 'Germany', 'France', 'India', 'China', 'Japan', 'Brazil', 'Argentina', 'Nigeria', 'South Africa', 'Kenya', 'Australia', 'Russia', 'Indonesia', 'Pakistan', 'Egypt', 'Vietnam', 'Turkey', 'Iran', 'Thailand', 'Spain', 'Colombia'];
    regions.forEach(r => {
        const hub = hubDetails[Math.floor(Math.random() * hubDetails.length)];
        generatedNodes.push({ id: r, type: 'region', ...generateClusterCoordinates(width, height, hub.x, hub.y, hub.radius) });
    });

    const generatedLinks: Link[] = [];
    for (let i = 0; i < 150; i++) { // More links
        let sourceNode = generatedNodes[Math.floor(Math.random() * generatedNodes.length)];
        let targetNode = generatedNodes[Math.floor(Math.random() * generatedNodes.length)];

        while (sourceNode.id === targetNode.id) {
            targetNode = generatedNodes[Math.floor(Math.random() * generatedNodes.length)];
        }
        
        // Encourage hub-centric connections
        let sourceId = (Math.random() < 0.5 && sourceNode.type !== 'hub') 
            ? hubDetails[Math.floor(Math.random() * hubDetails.length)].id 
            : sourceNode.id;
        
        let targetId = (Math.random() < 0.7 && targetNode.type !== 'hub')
            ? hubDetails[Math.floor(Math.random() * hubDetails.length)].id
            : targetNode.id;

        if (sourceId === targetId || generatedLinks.some(l => (l.source === sourceId && l.target === targetId) || (l.source === targetId && l.target === sourceId))) {
            i--; // try again
            continue;
        }

        generatedLinks.push({
            id: `l-${i}`,
            source: sourceId,
            target: targetId,
            riskScore: Math.random(),
        });
    }

    setNodes(generatedNodes);
    setLinks(generatedLinks);

  }, []);
  
  const getLinkProps = (riskScore: number) => {
    if (riskScore > 0.95) return { className: 'stroke-destructive/80', strokeWidth: 2, filter: 'drop-shadow(0 0 3px hsl(var(--destructive)))' };
    if (riskScore > 0.8) return { className: 'stroke-accent/70', strokeWidth: 1.5, filter: 'drop-shadow(0 0 2px hsl(var(--accent)))' };
    return { className: 'stroke-primary/20', strokeWidth: 1, filter: '' };
  }

  const getNodeById = (id: string) => nodes.find(n => n.id === id);

  return (
    <div className="w-full max-w-7xl rounded-xl border bg-background/50 p-2 shadow-inner bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]">
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
          <g>
            {links.map((link) => {
              const source = getNodeById(link.source);
              const target = getNodeById(link.target);
              if (!source || !target) return null;
              const { className, strokeWidth, filter } = getLinkProps(link.riskScore);
              
              return (
                <line
                  key={link.id}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  className={className}
                  strokeWidth={strokeWidth}
                  style={{ filter }}
                />
              );
            })}
          </g>
           <g>
            {links.map((link, index) => {
              const source = getNodeById(link.source);
              const target = getNodeById(link.target);
              if (!source || !target) return null;

              const isHighRisk = link.riskScore > 0.8;
              const packetColor = link.riskScore > 0.95 ? 'fill-destructive' : link.riskScore > 0.8 ? 'fill-accent' : 'fill-primary/70';
              const packetSize = isHighRisk ? 2.5 : 2;
              const duration = `${Math.random() * 5 + 4}s`; // 4-9s duration
              
              return (
                <circle cx={0} cy={0} r={packetSize} className={packetColor} key={`p-${link.id}`}>
                    <animateMotion
                        dur={duration}
                        repeatCount="indefinite"
                        begin={`${index * 0.1}s`} // Stagger start times
                        path={`M${source.x},${source.y} L${target.x},${target.y}`}
                    />
                </circle>
              )
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
                  r={node.type === 'hub' ? 14 : 7}
                  className={cn(
                    "stroke-2",
                    node.type === 'hub' 
                        ? "fill-primary/80 stroke-primary animate-pulse" 
                        : "fill-background stroke-border",
                  )}
                   style={{
                     animationDuration: '4s',
                     animationDelay: `${Math.random() * 2}s`
                   }}
                />
                <text
                  textAnchor="middle"
                  dy={node.type === 'hub' ? -22 : -15}
                  className={cn(
                      "transition-all text-[10px] select-none fill-muted-foreground opacity-0 group-hover:opacity-100 font-semibold pointer-events-none",
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
