import React from 'react';
import { useRelationshipTime } from '@/hooks/useRelationshipTime';

interface RelationshipCounterProps {
  startDate: Date;
}

const CounterCard: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 font-display mb-2 min-w-16 text-center">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="text-xs text-white/60 font-accent uppercase tracking-wider">{label}</div>
  </div>
);

export const RelationshipCounter: React.FC<RelationshipCounterProps> = ({ startDate }) => {
  const time = useRelationshipTime(startDate);

  return (
    <div className="relative">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 -z-10" style={{
        background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.4) 0%, rgba(255, 71, 87, 0.2) 100%)'
      }} />

      {/* Counter Container */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
        <h3 className="text-center text-sm font-accent text-white/70 mb-6 uppercase tracking-wider">
          💕 Tempo Juntos
        </h3>

        {/* Time Display */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="col-span-2 text-center mb-2">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 font-display">
              {time.totalDays}
            </div>
            <div className="text-xs text-white/50 font-accent mt-1">DIAS</div>
          </div>
        </div>

        {/* Detailed breakdown */}
        <div className="grid grid-cols-4 gap-2">
          <CounterCard label="Horas" value={time.hours} />
          <CounterCard label="Min" value={time.minutes} />
          <CounterCard label="Seg" value={time.seconds} />
          <div className="flex flex-col items-center justify-center">
            <div className="text-2xl mb-2">💑</div>
            <div className="text-xs text-white/40 font-accent text-center">Forever</div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
        <p className="text-center text-xs text-white/50 font-accent mt-4 italic">
          E cada segundo é especial com você ✨
        </p>
      </div>
    </div>
  );
};

