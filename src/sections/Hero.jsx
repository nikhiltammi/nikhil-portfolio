import React, { useRef, useState, useEffect } from "react";
import { words } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "../contexts/ThemeContext.jsx";

// Neural Network Background Component
const NeuralNetworkBackground = ({ theme }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, isActive: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let lastMouseUpdate = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMouseUpdate > 16) {
        mouseRef.current = {
          x: e.clientX,
          y: e.clientY,
          isActive: true
        };
        lastMouseUpdate = now;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 500 + 100;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = (Math.random() - 0.5) * 0.2;
        this.baseRadius = Math.random() * 2 + 1;
        this.radius = this.baseRadius;
        this.baseX = this.x;
        this.baseY = this.y;
        this.energy = 0;
      }

      update() {
        if (mouseRef.current.isActive) {
          const dx = this.x - mouseRef.current.x;
          const dy = this.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 2;
            this.vx += (dx / distance) * force * 0.1;
            this.vy += (dy / distance) * force * 0.1;
            this.energy = Math.max(this.energy, force * 5);
          }
        }

        if (this.energy > 0.1) {
          particles.forEach(other => {
            if (other !== this) {
              const dx = this.x - other.x;
              const dy = this.y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 100) {
                const energyTransfer = this.energy * 0.3 * (1 - distance / 100);
                other.vx += (dx / distance) * energyTransfer * 0.05;
                other.vy += (dy / distance) * energyTransfer * 0.05;
                other.energy = Math.max(other.energy, energyTransfer * 0.7);
              }
            }
          });
          this.energy *= 0.92;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        if (this.z < 100 || this.z > 600) this.vz *= -1;

        this.vx *= 0.98;
        this.vy *= 0.98;
        this.vz *= 0.98;

        const scale = 300 / this.z;
        this.radius = this.baseRadius * scale * (1 + this.energy * 0.2);
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        const depthOpacity = (600 - this.z) / 500;
        const baseColor = theme === 'light' ? '37, 99, 235' : '147, 197, 253';
        const opacity = (theme === 'light' ? 0.8 : 0.5) * depthOpacity * (1 + this.energy * 0.5);

        ctx.fillStyle = `rgba(${baseColor}, ${opacity})`;
        ctx.fill();

        if (this.energy > 0.1) {
          ctx.shadowBlur = 15 * this.energy;
          ctx.shadowColor = theme === 'light' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(147, 197, 253, 0.8)';
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      }
    }

    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 150);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const centerParticles = 30;
    for (let i = 0; i < centerParticles; i++) {
      const p = new Particle();
      p.x = canvas.width * 0.2 + Math.random() * canvas.width * 0.6;
      p.y = canvas.height * 0.2 + Math.random() * canvas.height * 0.6;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.sort((a, b) => b.z - a.z);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = Math.abs(p1.z - p2.z);
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180 && dz < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            const avgDepth = (p1.z + p2.z) / 2;
            const depthOpacity = (600 - avgDepth) / 500;
            const opacity = ((1 - distance / 180) * 0.5) * depthOpacity;

            ctx.strokeStyle = theme === 'light'
              ? `rgba(37, 99, 235, ${opacity})`
              : `rgba(147, 197, 253, ${opacity * 0.6})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ opacity: theme === 'light' ? 0.6 : 0.5 }}
    />
  );
};

const Hero = () => {
  const { theme } = useTheme();

  useGSAP(() => {
    const animateElement = (selector, from, delay = 0, stagger = 0) => {
      gsap.fromTo(selector, from, {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay,
        stagger,
        ease: "power2.out",
      });
    };

    animateElement(".hero-text h1", { y: 50, opacity: 0 }, 0, 0.2);
    animateElement(".hero-profile", { scale: 0.8, opacity: 0 }, 0.5);
    animateElement(".hero-description", { y: 30, opacity: 0 }, 0.6);
    animateElement(".hero-buttons", { y: 30, opacity: 0 }, 0.8);
    animateElement(".hero-social", { x: -30, opacity: 0 }, 1, 0.1);
    animateElement(".hero-quick-stat", { y: 30, opacity: 0 }, 1.2, 0.15);
  });

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      href: "https://github.com/nikhiltammi/",
      label: "GitHub",
      path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    },
    {
      href: "https://linkedin.com/in/nikhiltammi/",
      label: "LinkedIn",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      href: "mailto:nikhiltammi.tech@gmail.com",
      label: "Email",
      path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      stroke: true,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen pt-24 md:pt-28 lg:pt-28"
      style={theme === 'light' ? { backgroundColor: '#ffffff', color: '#000' } : { backgroundColor: '#000', color: '#fff' }}
    >
      <NeuralNetworkBackground theme={theme} />

      <div className="absolute top-0 left-0 z-10 w-auto max-w-md md:max-w-lg lg:max-w-xl pointer-events-none opacity-20">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-5 md:px-10 lg:px-20 gap-8 md:gap-12 mt-4 md:mt-6">
        <figure className="w-full md:w-1/2 flex items-center justify-center md:order-2">
          <div className="hero-profile relative">
            <div className="relative">
              <img
                src="/images/profile.png"
                alt="Nikhil Kumar Tammi"
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                Open to Opportunities
              </div>
            </div>
          </div>
        </figure>

        <header className="w-full md:w-1/2 flex flex-col justify-center md:order-1">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Transforming
                <span className="slide inline-block">
                  <span className="wrapper flex flex-col">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center gap-1 md:gap-2 lg:gap-3 pb-2 ml-2 md:ml-3 whitespace-nowrap"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 p-1 md:p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                        />
                        <span className="text-blue-500">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                into Intelligent Solutions
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                that{" "}
                <span className="text-blue-500">
                  Scale & Deliver
                </span>
              </h1>
            </div>

            <p className="hero-description text-base sm:text-lg md:text-xl max-w-2xl"
              style={theme === 'light' ? { color: '#4b5563' } : { color: '#9ca3af' }}>
              Hi, I'm{" "}
              <span className="font-semibold"
                style={theme === 'light' ? { color: '#000' } : { color: '#fff' }}>
                Nikhil Kumar Tammi
              </span>{" "}
              — an AI Software Engineer & Cloud Architect with 5+ years of experience
              building production-grade GenAI platforms, multi-agent workflows, and
              enterprise cloud infrastructure across AWS, Azure, and GCP.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={scrollToExperience}
                className="w-full sm:w-auto h-12 md:h-14 lg:h-16 px-6 md:px-8 font-bold rounded-lg transition-all duration-300 shadow-lg text-sm md:text-base"
                style={theme === 'light' ? {
                  backgroundColor: '#3b82f6',
                  color: '#ffffff'
                } : {
                  backgroundColor: '#ffffff',
                  color: '#000000'
                }}
              >
                View Experience
              </button>
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto h-12 md:h-14 lg:h-16 px-6 md:px-8 font-bold rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group text-sm md:text-base"
                style={theme === 'light' ? {
                  backgroundColor: 'transparent',
                  border: '2px solid #3b82f6',
                  color: '#3b82f6'
                } : {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff'
                }}
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get in Touch
              </button>
              <a
                href="/resume/NikhilKumarTammi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 md:h-14 lg:h-16 px-6 md:px-8 font-bold rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
                style={theme === 'light' ? {
                  backgroundColor: '#10b981',
                  color: '#ffffff'
                } : {
                  backgroundColor: '#10b981',
                  color: '#ffffff'
                }}
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="hero-social group relative p-2.5 md:p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 transition-colors"
                    style={theme === 'light' ? { color: '#6b7280' } : { color: '#9ca3af' }}
                    fill={social.stroke ? "none" : "currentColor"}
                    stroke={social.stroke ? "currentColor" : undefined}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule={social.stroke ? undefined : "evenodd"}
                      clipRule={social.stroke ? undefined : "evenodd"}
                      strokeLinecap={social.stroke ? "round" : undefined}
                      strokeLinejoin={social.stroke ? "round" : undefined}
                      strokeWidth={social.stroke ? 2 : undefined}
                      d={social.path}
                    />
                  </svg>
                </a>
              ))}
            </div>

            <div className="pt-4 md:pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-4 md:gap-6">
                {[
                  { text: "5+ Years Experience", color: "text-blue-500" },
                  { text: "5 Cloud Certifications", color: "text-purple-500" },
                  { text: "7M+ Files Migrated", color: "text-green-500" },
                ].map((stat) => (
                  <div
                    key={stat.text}
                    className="hero-quick-stat group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <div
                      className={`text-sm sm:text-base md:text-lg font-semibold ${stat.color}`}
                    >
                      {stat.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
