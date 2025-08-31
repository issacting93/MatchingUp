import { motion } from 'motion/react';
import { forwardRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Profile {
  id: string;
  name: string;
  age: number;
  photo: string;
  title: string;
  bio: string;
}

interface ProfileCardProps {
  profile: Profile;
  isTop?: boolean;
  onDecision?: (decision: 'yes' | 'no' | 'maybe' | 'open') => void;
}

export const ProfileCard = forwardRef<HTMLDivElement, ProfileCardProps>(
  ({ profile, isTop = false, onDecision }, ref) => {
  const handleDecision = (decision: 'yes' | 'no' | 'maybe' | 'open') => {
    onDecision?.(decision);
  };

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 bg-[#121212] rounded-[12px] overflow-hidden shadow-xl flex flex-col"
      style={{ zIndex: isTop ? 10 : Math.max(1, 10 - parseInt(profile.id)) }}
      initial={{ scale: isTop ? 1 : 0.95, opacity: isTop ? 1 : 0.8 }}
      animate={{ scale: isTop ? 1 : 0.95, opacity: isTop ? 1 : 0.8 }}
      exit={{ 
        x: 300, 
        opacity: 0, 
        scale: 0.8,
        transition: { duration: 0.22, ease: [0.2, 0.0, 0.2, 1] }
      }}
      transition={{ duration: 0.22, ease: [0.2, 0.0, 0.2, 1] }}
    >
      {/* Photo Container - Full height */}
      <div className="relative flex-1 overflow-hidden">
        <ImageWithFallback 
          src={profile.photo}
          alt={`${profile.name}, ${profile.age}`}
          className="w-full h-full object-cover"
        />
        {/* Bottom gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Profile info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-20 text-white z-10">
          <h2 className="text-3xl font-semibold mb-2 font-display tracking-tight text-white drop-shadow-lg">
            {profile.name}, {profile.age}
          </h2>
          <p className="text-[#C9A44C] text-lg mb-3 font-display drop-shadow-md">
            {profile.title}
          </p>
          <p className="text-white text-base leading-relaxed font-body drop-shadow-md">
            {profile.bio}
          </p>
        </div>
      </div>

      {/* Decision Buttons - Only show on top card */}
      {isTop && (
        <motion.div 
          className="absolute bottom-4 left-4 right-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex gap-3">
            <motion.button
              onClick={() => handleDecision('no')}
              className="flex-1 bg-[#1F1F1F] text-white py-3 px-4 rounded-[8px] border border-[#2A2A2A] font-medium text-sm font-body"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.12 }}
            >
              No
            </motion.button>
            <motion.button
              onClick={() => handleDecision('maybe')}
              className="flex-1 bg-[#1F1F1F] text-white py-3 px-4 rounded-[8px] border border-[#2A2A2A] font-medium text-sm font-body"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.12 }}
            >
              Maybe
            </motion.button>
            <motion.button
              onClick={() => handleDecision('open')}
              className="flex-1 bg-[#1F1F1F] text-white py-3 px-4 rounded-[8px] border border-[#2A2A2A] font-medium text-sm font-body"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.12 }}
            >
              Open
            </motion.button>
            <motion.button
              onClick={() => handleDecision('yes')}
              className="flex-1 bg-[#C9A44C] text-[#0A0A0A] py-3 px-4 rounded-[8px] font-medium text-sm font-body"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.12 }}
            >
              Yes
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
});

ProfileCard.displayName = 'ProfileCard';