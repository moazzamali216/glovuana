// components/HeroSection.js
"use client"
import { useEffect } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  useEffect(() => {
    // GSAP animations on component mount
    const timeline = gsap.timeline();

    // Animate background image to scale and move
    timeline.to('.hero-bg', {
      scale: 1.2,
      rotation: 45,
      duration: 4,
      ease: 'power4.out',
    });

    // Animate headline
    timeline.fromTo(
      '.hero-heading',
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );

    // Animate subheading
    timeline.fromTo(
      '.hero-subheading',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.5, delay: 0.5, ease: 'power3.out' }
    );

    // Animate the button with a "bouncing" effect
    timeline.fromTo(
      '.hero-button',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.5, ease: 'bounce.out' }
    );
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Extreme Animations</h1>
        <p className="hero-subheading">Experience the power of GSAP with Next.js</p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
