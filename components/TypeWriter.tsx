'use client';
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';

export default function TypeWriter() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartTyping(true);
    }
  }, [inView]);

  return (
    <h2
      ref={ref}
      className="font-cinzel text-4xl font-bold text-vintage-cream mb-4"
    >
      {startTyping && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Explore the World with HAMSAFAR')
              .start();
          }}
          options={{
            autoStart: false,
            loop: false,
            delay: 50, // faster typing
            cursor: '', // hide blinking cursor
          }}
        />
      )}
    </h2>
  );
}
