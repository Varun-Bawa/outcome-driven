import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

export const NetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const nodeCount = 80;
    const nodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
      });
    }

    // Create connections based on distance
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) + 
          Math.pow(nodes[i].y - nodes[j].y, 2)
        );
        if (distance < 120) {
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }

    nodesRef.current = nodes;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update node positions
      nodesRef.current.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.offsetWidth) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.offsetHeight) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.offsetWidth, node.x));
        node.y = Math.max(0, Math.min(canvas.offsetHeight, node.y));
      });

      // Draw connections
      ctx.strokeStyle = 'hsl(188, 100%, 50%)'; // Electric cyan
      ctx.lineWidth = 0.8;
      ctx.globalAlpha = 0.15;

      nodesRef.current.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          if (connectionIndex > i) { // Avoid drawing the same line twice
            const connectedNode = nodesRef.current[connectionIndex];
            const distance = Math.sqrt(
              Math.pow(node.x - connectedNode.x, 2) + 
              Math.pow(node.y - connectedNode.y, 2)
            );
            
            if (distance < 120) {
              const opacity = 1 - (distance / 120);
              ctx.globalAlpha = opacity * 0.3;
              
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(connectedNode.x, connectedNode.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw nodes
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = 'hsl(188, 100%, 50%)'; // Electric cyan
      
      nodesRef.current.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect for some nodes
        if (Math.random() > 0.98) {
          ctx.globalAlpha = 0.3;
          ctx.fillStyle = 'hsl(324, 100%, 70%)'; // Electric magenta
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'hsl(188, 100%, 50%)';
          ctx.globalAlpha = 0.6;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};
