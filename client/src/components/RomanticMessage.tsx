import React, { useEffect, useState } from 'react';

interface RomanticMessageProps {
  message: string;
  delay?: number;
}

export const RomanticMessage: React.FC<RomanticMessageProps> = ({ message, delay = 1000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30 -z-10" style={{
        background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.3) 0%, rgba(167, 139, 250, 0.2) 100%)'
      }} />

      {/* Message Container */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
        <p className="text-lg md:text-xl text-white/90 font-accent leading-relaxed">
          {message}
        </p>
        {/* Decorative line */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
        <div className="mt-4 text-3xl">💕</div>
      </div>
    </div>
  );
};

