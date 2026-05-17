import { useState, useEffect } from 'react';

export interface RelationshipTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
}

export const useRelationshipTime = (startDate: Date): RelationshipTime => {
  const [time, setTime] = useState<RelationshipTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      const days = totalDays;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setTime({
        days,
        hours,
        minutes,
        seconds,
        totalDays,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return time;
};

