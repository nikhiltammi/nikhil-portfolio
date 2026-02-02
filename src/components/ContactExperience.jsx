import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";

const ContactExperience = () => {
  const { theme } = useTheme();

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "nikhiltammi.tech@gmail.com",
      href: "mailto:nikhiltammi.tech@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/nikhiltammi",
      href: "https://linkedin.com/in/nikhiltammi/",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
      label: "GitHub",
      value: "github.com/nikhiltammi",
      href: "https://github.com/nikhiltammi/",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Seattle, WA",
      href: null,
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8"
      style={{ backgroundColor: theme === 'light' ? '#f5f5f7' : '#0e0e10' }}>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-2"
          style={{ color: theme === 'light' ? '#1d1d1f' : '#ffffff' }}>
          Let's Connect
        </h3>
        <p className="text-sm md:text-base"
          style={{ color: theme === 'light' ? '#86868b' : '#9ca3af' }}>
          Open for opportunities & collaborations
        </p>
      </div>

      {/* Contact Cards */}
      <div className="relative z-10 w-full max-w-md space-y-4">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.href?.startsWith('http') ? '_blank' : undefined}
            rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
              item.href ? 'hover:scale-[1.02] cursor-pointer' : 'cursor-default'
            }`}
            style={{
              backgroundColor: theme === 'light' ? '#ffffff' : '#1c1c21',
              border: `1px solid ${theme === 'light' ? '#e5e5e7' : '#282732'}`,
              boxShadow: theme === 'light' ? '0 2px 8px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: theme === 'light' ? '#f5f5f7' : '#282732',
                color: '#3b82f6',
              }}>
              {item.icon}
            </div>
            <div className="flex-grow text-left">
              <p className="text-xs font-medium uppercase tracking-wider"
                style={{ color: theme === 'light' ? '#86868b' : '#9ca3af' }}>
                {item.label}
              </p>
              <p className="text-sm md:text-base font-medium truncate"
                style={{ color: theme === 'light' ? '#1d1d1f' : '#ffffff' }}>
                {item.value}
              </p>
            </div>
            {item.href && (
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                style={{ color: theme === 'light' ? '#86868b' : '#9ca3af' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </a>
        ))}
      </div>

      {/* Availability badge */}
      <div className="relative z-10 mt-8 flex items-center gap-2 px-4 py-2 rounded-full"
        style={{
          backgroundColor: theme === 'light' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.2)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
        }}>
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-sm font-medium text-green-600">
          Available for new opportunities
        </span>
      </div>
    </div>
  );
};
export default ContactExperience;
