import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './HeroSection.css';

const FRAME_COUNT = 160;

const currentFrame = (index) =>
  `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.png`;

const HeroSection = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);

  // Track scroll progress within this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Typography animations mapped to scrollYProgress
  const nameOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const nameY = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [50, 0, 0, -50]);
  const nameScale = useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]);

  const descOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [0, 1, 1, 0]);
  const descY = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [50, 0, 0, -50]);

  useEffect(() => {
    // Preload images for smooth canvas drawing
    const preloadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        // Render the first frame as soon as it's loaded to prevent blank screen
        if (i === 1) {
          renderFrame(1, [img]);
        }
      };
      preloadedImages.push(img);
    }
    setImages(preloadedImages);
  }, []);

  const renderFrame = (index, imgs = images) => {
    if (imgs.length === 0 || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = imgs[index - 1];

    if (!img || !img.complete) return;

    // Responsive Canvas Resizing based on device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Scale the context to ensure correct drawing operations
    context.scale(dpr, dpr);

    // Calculate scale to "cover" the canvas area
    const scale = Math.max(rect.width / img.width, rect.height / img.height);
    const x = (rect.width / 2) - (img.width / 2) * scale;
    const y = (rect.height / 2) - (img.height / 2) * scale;

    // Draw the image onto the canvas
    context.clearRect(0, 0, rect.width, rect.height);
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate the current frame index based on scroll progress
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    ) + 1; // 1-indexed

    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Handle window resize to re-draw the current frame and adjust canvas size
  useEffect(() => {
    const handleResize = () => {
      const latest = scrollYProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      ) + 1;
      renderFrame(frameIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <div className="hero-container" ref={containerRef}>
      <div className="sticky-wrapper">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-content">
          <motion.h1
            style={{ opacity: nameOpacity, y: nameY, scale: nameScale }}
            className="hero-name"
          >
            Binoy s s
          </motion.h1>
          <motion.p
            style={{ opacity: descOpacity, y: descY }}
            className="hero-desc"
          >
            Vibe Designer | Communication & Presentation Design
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
