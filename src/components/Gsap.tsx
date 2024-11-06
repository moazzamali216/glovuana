// components/AnimatedText.js
"use client"
import { useEffect } from 'react';
import gsap from 'gsap';

const Gsap = () => {
  useEffect(() => {
    // Animation logic using GSAP
    gsap.from(".letter", {
      opacity: 0,
      y: 30,
      stagger: 0.1,  // stagger the animation for each letter
      duration: 0.6,
      ease: "back.out(1.7)",
    });
  }, []);

  const text = "Hello, GSAP with Next.js!";
  
  return (
    <h1>
      {text.split("").map((char, index) => (
        <span key={index} className="letter">{char}</span>
      ))}
    </h1>
  );
};

export default Gsap;
