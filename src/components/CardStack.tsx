import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ProfileCard } from './ProfileCard';

interface Profile {
  id: string;
  name: string;
  age: number;
  photo: string;
  title: string;
  bio: string;
}

interface CardStackProps {
  profiles: Profile[];
  onDecision?: (profileId: string, decision: 'yes' | 'no' | 'maybe' | 'open') => void;
}

export function CardStack({ profiles, onDecision }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [decisions, setDecisions] = useState<Record<string, 'yes' | 'no' | 'maybe' | 'open'>>({});

  const handleDecision = (decision: 'yes' | 'no' | 'maybe' | 'open') => {
    const currentProfile = profiles[currentIndex];
    if (!currentProfile) return;

    // Record the decision
    setDecisions(prev => ({
      ...prev,
      [currentProfile.id]: decision
    }));

    // Notify parent component
    onDecision?.(currentProfile.id, decision);

    // Move to next card
    setCurrentIndex(prev => prev + 1);
  };

  const visibleProfiles = profiles.slice(currentIndex, currentIndex + 3);
  const isComplete = currentIndex >= profiles.length;

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="max-w-sm">
          <h2 className="text-3xl font-display text-white mb-4 tracking-tight">
            You're Up to Date
          </h2>
          <p className="text-[#BDBDBD] text-base leading-relaxed font-body">
            We'll notify you when new introductions are ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex-1 max-w-sm mx-auto">
      {/* Card Stack Container */}
      <div className="relative h-full min-h-[650px] max-h-[650px]">
        <AnimatePresence mode="popLayout">
          {visibleProfiles.map((profile, index) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              isTop={index === 0}
              onDecision={index === 0 ? handleDecision : undefined}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Progress Indicator */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-center">
        <div className="flex gap-1">
          {profiles.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                index < currentIndex
                  ? 'bg-[#C9A44C]'
                  : index === currentIndex
                  ? 'bg-white'
                  : 'bg-[#2A2A2A]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}