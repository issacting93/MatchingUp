import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { getIconHtml } from '../assets/icons/utils';

interface OnboardingData {
  firstName: string;
  age: string;
  photo: File | null;
  bio: string;
}

interface OnboardingProps {
  onComplete?: (data: OnboardingData) => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [formData, setFormData] = useState<OnboardingData>({
    firstName: '',
    age: '',
    photo: null,
    bio: ''
  });
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.age || !formData.bio) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsLoading(false);
    
    onComplete?.(formData);
  };

  const isFormValid = formData.firstName && formData.age && formData.bio;

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 py-12">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.0, 0.2, 1] }}
      >
        {/* Card Container */}
        <div className="bg-[#121212] rounded-[16px] p-8 border border-[#2A2A2A]">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display text-white mb-3 tracking-tight">
              Complete Your Profile
            </h1>
            <p className="text-[#BDBDBD] font-body">
              Tell us a little about yourself
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-white font-medium mb-2 font-body text-sm">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="w-full bg-[#1F1F1F] border border-[#2A2A2A] rounded-[8px] px-4 py-3 text-white placeholder-[#8C8C8C] font-body focus:outline-none focus:border-[#C9A44C] transition-colors"
                placeholder="Your first name"
                autoComplete="given-name"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-white font-medium mb-2 font-body text-sm">
                Age
              </label>
              <input
                type="number"
                min="18"
                max="100"
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                className="w-full bg-[#1F1F1F] border border-[#2A2A2A] rounded-[8px] px-4 py-3 text-white placeholder-[#8C8C8C] font-body focus:outline-none focus:border-[#C9A44C] transition-colors"
                placeholder="Your age"
                autoComplete="age"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-white font-medium mb-2 font-body text-sm">
                Photo
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="sr-only"
                  id="photo-upload"
                />
                <label
                  htmlFor="photo-upload"
                  className="flex flex-col items-center justify-center w-full h-32 bg-[#1F1F1F] border border-[#2A2A2A] border-dashed rounded-[8px] cursor-pointer hover:border-[#C9A44C] transition-colors"
                >
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-[8px]"
                    />
                  ) : (
                    <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-2 text-[#8C8C8C]">
                          <div 
                            className="w-8 h-8 text-[#8C8C8C]"
                            dangerouslySetInnerHTML={{ __html: getIconHtml('plus') }}
                          />
                        </div>
                        <p className="text-[#8C8C8C] font-body text-sm">
                          Upload a photo
                        </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-white font-medium mb-2 font-body text-sm">
                About You
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                className="w-full bg-[#1F1F1F] border border-[#2A2A2A] rounded-[8px] px-4 py-3 text-white placeholder-[#8C8C8C] font-body focus:outline-none focus:border-[#C9A44C] transition-colors resize-none"
                placeholder="Tell us something interesting about yourself..."
                rows={3}
                maxLength={150}
              />
              <div className="text-right mt-1">
                <span className="text-[#8C8C8C] text-xs font-body">
                  {formData.bio.length}/150
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={!isFormValid || isLoading}
              className="w-full bg-[#C9A44C] text-[#0A0A0A] py-4 px-6 rounded-[8px] font-medium font-body disabled:opacity-50 disabled:cursor-not-allowed mt-8"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.12 }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />
                  Creating Profile...
                </div>
              ) : (
                'Continue'
              )}
            </motion.button>
          </form>
        </div>

        {/* Footer */}
        <motion.p 
          className="text-center text-[#8C8C8C] text-sm mt-6 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your information is kept private and secure
        </motion.p>
      </motion.div>
    </div>
  );
}