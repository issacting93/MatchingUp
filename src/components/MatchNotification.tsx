import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getIconHtml } from '../assets/icons/utils';

interface MatchNotificationProps {
  userPhoto?: string;
  matchPhoto: string;
  matchName: string;
  onSayHello?: () => void;
  onClose?: () => void;
}

export function MatchNotification({ 
  userPhoto, 
  matchPhoto, 
  matchName, 
  onSayHello, 
  onClose 
}: MatchNotificationProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32 }}
    >
      <motion.div
        className="relative w-full max-w-sm mx-6 bg-[#121212] rounded-[16px] overflow-hidden border border-[#2A2A2A] shadow-2xl"
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 40 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.2, 0.0, 0.2, 1],
          delay: 0.1 
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/40 rounded-full text-white/80 hover:text-white transition-colors"
        >
          <div 
            className="w-3 h-3 text-white"
            dangerouslySetInnerHTML={{ __html: getIconHtml('close') }}
          />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Headline */}
          <motion.h1 
            className="text-3xl font-display text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A Match Has Been Made
          </motion.h1>

          {/* Photo Pair */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* User Photo */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#C9A44C]">
                {userPhoto ? (
                  <ImageWithFallback 
                    src={userPhoto}
                    alt="You"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#2A2A2A] flex items-center justify-center">
                    <div 
                      className="w-6 h-6 text-[#8C8C8C]"
                      dangerouslySetInnerHTML={{ __html: getIconHtml('user') }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Heart Icon */}
            <motion.div
              className="flex items-center justify-center w-8 h-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4, type: "spring", stiffness: 200 }}
            >
              <div 
                className="w-5 h-5 text-[#C9A44C]"
                dangerouslySetInnerHTML={{ __html: getIconHtml('heart') }}
              />
            </motion.div>

            {/* Match Photo */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#C9A44C]">
                <ImageWithFallback 
                  src={matchPhoto}
                  alt={matchName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Match Text */}
          <motion.p 
            className="text-[#BDBDBD] font-body mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            You and {matchName} have both expressed interest in each other
          </motion.p>

          {/* Action Button */}
          <motion.button
            onClick={onSayHello}
            className="w-full bg-[#C9A44C] text-[#0A0A0A] py-4 px-6 rounded-[8px] font-medium font-body"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.12 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            animate-delay="0.6s"
          >
            Say Hello
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent opacity-50" />
      </motion.div>
    </motion.div>
  );
}