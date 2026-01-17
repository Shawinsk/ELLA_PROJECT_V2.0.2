import React, { useEffect, useRef } from 'react';

const TopAudioBar = ({ audioData }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const draw = () => {
            const width = canvas.width;
            const height = canvas.height;
            ctx.clearRect(0, 0, width, height);
            
            // Draw background pill
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.beginPath();
            ctx.roundRect(0, 0, width, height, height/2);
            ctx.fill();
            ctx.strokeStyle = 'rgba(34, 211, 238, 0.1)';
            ctx.lineWidth = 1;
            ctx.stroke();

            const barWidth = 4;
            const gap = 2;
            const totalBars = Math.floor((width - 20) / (barWidth + gap)); // Subtract padding
            const center = width / 2;

            for (let i = 0; i < totalBars / 2; i++) {
                const value = audioData[i % audioData.length] || 0;
                // Direct mapping (Responsive)
                const percent = Math.max(0.1, value / 255); // Minimum 10% height
                const barHeight = percent * (height - 10); // Leave some padding

                ctx.fillStyle = `rgba(34, 211, 238, ${0.4 + percent * 0.6})`; // Brighter Cyan

                // Right side
                ctx.fillRect(center + i * (barWidth + gap), (height - barHeight) / 2, barWidth, barHeight);
                // Left side
                ctx.fillRect(center - (i + 1) * (barWidth + gap), (height - barHeight) / 2, barWidth, barHeight);
            }
        };

        const animationId = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(animationId);
    }, [audioData]);

    return (
        <canvas
            ref={canvasRef}
            width={300}
            height={40}
            className="opacity-80"
        />
    );
};

export default TopAudioBar;
