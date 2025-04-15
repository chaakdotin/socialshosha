import React, { useEffect, useRef } from "react";
import "./App.css";
import { style } from "framer-motion/client";

function AutoTypingCode() {
  const canvasRef = useRef(null);
  const codeContainerRef = useRef(null);

  useEffect(() => {
    // Set up the canvas for background particle animation
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.01;
      }
      draw() {
        ctx.fillStyle = "rgba(255, 215, 0, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
          particles.push(new Particle());
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // handleParticles();
      requestAnimationFrame(animate);
    };

    // Create initial particles and start the animation
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Set up code typing animation
    const codeSnippets = [
      `// Star Animation
class Star {
    twinkle() {
        return "Shine!";
    }
}
const star = new Star();
console.log(star.twinkle());`,

      `// Color Mixer
function mixColors(a, b) {
    return "#" + a + b;
}
const color = mixColors("ff", "d7");
console.log(color);`,

      `// Time Clock
class Clock {
    getTime() {
        return new Date();
    }
}
const clock = new Clock();
console.log(clock.getTime());`,

      `// Random Number
function getRandom() {
    return Math.random();
}
const num = getRandom();
console.log(num * 100);`
    ];

    const syntaxHighlight = (text) => {
      return text
        .replace(/(class|const|function|return|new)/g, '<span class="keyword">$1</span>')
        .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
        .replace(/(twinkle|mixColors|getTime|getRandom|Star|Clock)/g, '<span class="function">$1</span>')
        .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
        .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
    };

    let currentSnippetIndex = 0;
    let isMounted = true;

    const typeAndDelete = async () => {
      while (isMounted) {
        const code = codeSnippets[currentSnippetIndex];
        let currentText = "";

        // Typing animation
        for (let i = 0; i <= code.length; i++) {
          currentText = code.substring(0, i);
          if (codeContainerRef.current) {
            codeContainerRef.current.innerHTML =
              syntaxHighlight(currentText) + '<span class="cursors"></span>';
          }
          await new Promise((resolve) => setTimeout(resolve, 80));
        }

        // Wait before deleting
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Deleting animation
        for (let i = code.length; i >= 0; i--) {
          currentText = code.substring(0, i);
          if (codeContainerRef.current) {
            codeContainerRef.current.innerHTML =
              syntaxHighlight(currentText) + '<span class="cursors"></span>';
          }
          await new Promise((resolve) => setTimeout(resolve, 30));
        }

        // Wait before next snippet and move to next one
        await new Promise((resolve) => setTimeout(resolve, 800));
        currentSnippetIndex = (currentSnippetIndex + 1) % codeSnippets.length;
      }
    };

    typeAndDelete();

    // Cleanup event listener and cancel animation if the component unmounts
    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
        <style>
            {`
                #code-container {
                    background-color: #f3f3f3;
                    color: #000000;
                    padding: 25px;
                    border-radius: 8px;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
                    white-space: pre;
                    font-size: 16px;
                    position: relative;
                    overflow: hidden;
                    max-width: 500px;
                    border: 1px solid #d4d4d4;
                }
                #code-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(0, 0, 0, 0.05),
                        transparent
                    );
                    animation: shine 3s infinite;
                }
                @keyframes shine {
                    0% { left: -100%; }
                    50% { left: 100%; }
                    100% { left: 100%; }
                }
                .cursors {
                    display: inline-block;
                    width: 8px;
                    height: 18px;
                    background-color: #000000;
                    animation: blink 0.7s infinite;
                    vertical-align: middle;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .keyword { color: #0000ff; } /* VS Code Light blue for keywords */
                .string { color: #a31515; } /* VS Code Light red for strings */
                .function { color: #795e26; } /* VS Code Light brown for functions */
                .comment { color: #008000; } /* VS Code Light green for comments */
                .number { color: #098658; } /* VS Code Light teal for numbers */
                .variable { color: #001080; } /* VS Code Light dark blue for variables */
                .operator { color: #000000; } /* VS Code Light black for operators */
                .class { color: #267f99; } /* VS Code Light teal-blue for class names */
                canvas {
                  position: fixed;
                  top: 0;
                  left: 0;
                  z-index: -1;
                  display:none;
                }
            `}
        </style>
        <div>
            <canvas id="bg-canvas" ref={canvasRef}></canvas>
            <div id="code-container" ref={codeContainerRef}></div>
        </div>
    </>
  );
}

export default AutoTypingCode;