
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

const generateClusterCoordinates = (width: number, height: number, hubX: number, hubY: number, radius: number) => {
    const angle = Math.random() * 2 * Math.PI;
    const r = radius * Math.sqrt(Math.random());
    return {
        x: hubX + r * Math.cos(angle),
        y: hubY + r * Math.sin(angle),
    };
};

export function GlobalAnomalyGraph() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  const width = 1200;
  const height = 600;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const hubDetails = [
      { id: 'North America Hub', x: width * 0.2, y: height * 0.4, radius: 180 },
      { id: 'Europe Hub', x: width * 0.45, y: height * 0.3, radius: 160 },
      { id: 'Asia Hub', x: width * 0.8, y: height * 0.5, radius: 200 },
      { id: 'South America Hub', x: width * 0.25, y: height * 0.75, radius: 150 },
      { id: 'Africa Hub', x: width * 0.55, y: height * 0.65, radius: 170 },
      { id: 'Oceania Hub', x: width * 0.9, y: height * 0.8, radius: 140 },
    ];

    const generatedNodes: Node[] = hubDetails.map(h => ({ id: h.id, type: 'hub', x: h.x, y: h.y }));

    const regions = ['USA', 'Canada', 'Mexico', 'UK', 'Germany', 'France', 'India', 'China', 'Japan', 'Brazil', 'Argentina', 'Nigeria', 'South Africa', 'Kenya', 'Australia', 'Russia', 'Indonesia', 'Pakistan', 'Egypt', 'Vietnam', 'Turkey', 'Iran', 'Thailand', 'Spain', 'Colombia', 'Poland', 'Italy', 'South Korea', 'Saudi Arabia', 'Malaysia'];
    regions.forEach(r => {
        const hub = hubDetails[Math.floor(Math.random() * hubDetails.length)];
        generatedNodes.push({ id: r, type: 'region', ...generateClusterCoordinates(width, height, hub.x, hub.y, hub.radius) });
    });

    const generatedLinks: Link[] = [];
    const linkCount = 200;
    for (let i = 0; i < linkCount; i++) {
        let sourceNode = generatedNodes[Math.floor(Math.random() * generatedNodes.length)];
        let targetNode = generatedNodes[Math.floor(Math.random() * generatedNodes.length)];

        if (sourceNode.id === targetNode.id) continue;
        
        let sourceId = sourceNode.id;
        let targetId = targetNode.id;

        if (sourceNode.type !== 'hub' && Math.random() > 0.3) {
            sourceId = hubDetails[Math.floor(Math.random() * hubDetails.length)].id;
        }
        if (targetNode.type !== 'hub' && Math.random() > 0.5) {
            targetId = hubDetails[Math.floor(Math.random() * hubDetails.length)].id;
        }

        if (sourceId === targetId || generatedLinks.some(l => (l.source === sourceId && l.target === targetId) || (l.source === targetId && l.target === sourceId))) {
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

  }, [isClient]);
  
  const getLinkProps = (riskScore: number) => {
    if (riskScore > 0.95) return { className: 'stroke-destructive', strokeWidth: 1.5, filter: 'url(#glow-destructive)' };
    if (riskScore > 0.8) return { className: 'stroke-accent', strokeWidth: 1, filter: 'url(#glow-accent)' };
    return { className: 'stroke-primary/20', strokeWidth: 0.5, filter: '' };
  }

  const getNodeById = (id: string) => nodes.find(n => n.id === id);

  return (
    <div className="w-full max-w-7xl h-[600px] rounded-xl border bg-black/50 p-4 shadow-2xl shadow-primary/20 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_60%)] flex items-center justify-center">
      {isClient && nodes.length > 0 ? (
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
            <defs>
                <filter id="glow-accent" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                 <filter id="glow-destructive" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
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
                  className={cn("transition-opacity", className)}
                  strokeWidth={strokeWidth}
                  style={{ filter: filter ? filter : undefined }}
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
              const packetColor = link.riskScore > 0.95 ? 'fill-destructive' : link.riskScore > 0.8 ? 'fill-accent' : 'fill-primary/50';
              const packetSize = isHighRisk ? 2 : 1.5;
              const duration = `${Math.random() * 8 + 5}s`;
              
              return (
                <circle cx={0} cy={0} r={packetSize} className={packetColor} key={`p-${link.id}`} style={{ filter: isHighRisk ? getLinkProps(link.riskScore).filter : undefined }}>
                    <animateMotion
                        dur={duration}
                        repeatCount="indefinite"
                        begin={`${index * 0.05}s`}
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
                {node.type === 'hub' ? (
                  <>
                    <circle r={12} className="fill-primary/70 stroke-primary/90 stroke-2" />
                    <circle r={20} className="fill-transparent stroke-primary/30 animate-pulse" style={{ transformOrigin: 'center', animationDuration: '3s' }} />
                  </>
                ) : (
                  <circle
                    r={5}
                    className={cn(
                        "fill-background stroke-border group-hover:stroke-accent group-hover:fill-accent/20 transition-all",
                    )}
                  />
                )}
                <text
                  textAnchor="middle"
                  dy={node.type === 'hub' ? -28 : -15}
                  className={cn(
                      "transition-opacity text-[10px] select-none fill-muted-foreground opacity-0 group-hover:opacity-100 font-semibold pointer-events-none",
                      node.type === 'hub' && "font-bold text-base fill-foreground"
                  )}
                >
                  {node.id}
                </text>
              </g>
            ))}
          </g>
        </svg>
      ) : (
         <p className="text-muted-foreground animate-pulse">Initializing Global Network...</p>
      )}
    </div>
  );
}
