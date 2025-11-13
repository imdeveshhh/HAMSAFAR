"use client";
import React, { useState, useRef, useEffect } from "react";

const videoUrls = [
  "/videos/v1.mp4",
  "/videos/v2.mp4",
  "/videos/v3.mp4",
  "/videos/v4.mp4",
  "/videos/v5.mp4",
  "/videos/v6.mp4",
];

export default function VideoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0; // start from beginning
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    const video = videoRefs.current[index];
    if (video) {
      // video.pause();
      // video.currentTime = 0; // reset on leave
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    
    <section
    
      ref={sectionRef}
      className="relative bg-gradient-to-r from-orange-900 via-red-900 to-orange-900 py-12 dark:bg-gray-900 min-h-[800px]"
      >
           <h2 className="font-cinzel text-4xl font-bold text-vintage-cream mb-8 text-center"
            data-aos="fade-down">
      Hover to Explore Your Next Escape
    </h2>
      <div className="relative w-full h-[800px] mx-auto px-6">
        {videoUrls.map((url, index) => {
          const positionStyles = [
            "top-[200px] left-[95px]",   // 🟫 Top-left small square
            "top-[0px] left-[348px]",    // 🟦 Center large rectangle
            "top-[100px] left-[838px]",  // 🟪 Top-right small square
            "top-[320px] left-[843px]",  // 🟩 Bottom-right large
            "top-[475px] left-[270px]",  // 🟨 Bottom-left wide
            "top-[470px] left-[565px]",  // 🟥 Bottom-middle small
          ];

          const sizeClasses = [
            "w-[240px] h-[270px]",        // 🟫 Small square
            "w-[480px] h-[460px]",        // 🟦 Large vertical rectangle
            "w-[215px] h-[210px]",        // 🟪 Small square
            "w-[325px] h-[320px]",        // 🟩 Large square
            "w-[280px] h-[250px]",        // 🟨 Wide horizontal rectangle
            "w-[265px] h-[320px]",        // 🟥 Medium square
          ];

          return (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`absolute ${positionStyles[index % positionStyles.length]} 
                ${sizeClasses[index % sizeClasses.length]} 
                overflow-hidden rounded-[3rem] shadow-xl 
                transition-transform transition-opacity duration-700 ease-out
                ${hoveredIndex !== null && hoveredIndex !== index ? "grayscale" : ""}
                ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-20 "}
              `}
              style={{
                zIndex: hoveredIndex === index ? 20 : 1,
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={url}
                muted
                playsInline
                preload="metadata"
                className={`w-full h-full object-cover transition-transform duration-500 ease-in-out 
                  ${hoveredIndex === index ? "scale-110" : ""}
                `}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
