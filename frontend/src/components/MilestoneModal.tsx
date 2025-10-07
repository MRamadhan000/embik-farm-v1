"use client";

import React from "react";
import { X, BookOpen } from "lucide-react";

interface MilestoneStory {
  title: string;
  image: string;
  content: string;
  achievements: string[];
}

interface Milestone {
  year: string;
  event: string;
  icon: string;
  color: string;
  bgColor: string;
  story: MilestoneStory;
}

interface MilestoneModalProps {
  isOpen: boolean;
  milestone: Milestone | null;
  onClose: () => void;
}

const MilestoneModal: React.FC<MilestoneModalProps> = ({
  isOpen,
  milestone,
  onClose,
}) => {
  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen || !milestone) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl transform animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Modal Header - Reduced padding for mobile */}
        <div
          className={`relative p-3 sm:p-6 lg:p-8 bg-gradient-to-r ${milestone.color} text-white rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl`}
        >
          {/* Close Button - Smaller on mobile */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-6 lg:right-6 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 group"
            aria-label="Tutup modal"
            autoFocus
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:rotate-90 transition-transform duration-200" />
          </button>

          {/* Header Content - Reduced spacing for mobile */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 pr-8 sm:pr-12 lg:pr-16">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <div className="text-white text-lg sm:text-2xl lg:text-3xl font-bold">
                {milestone.year}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 
                id="modal-title"
                className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2"
              >
                {milestone.story.title}
              </h3>
              <div className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed">
                {milestone.event}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content - Reduced padding for mobile */}
        <div className="p-3 sm:p-6 lg:p-8">
          {/* Story Image - Smaller height on mobile */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <div className="relative w-full h-48 sm:h-64 lg:h-80 xl:h-96 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={milestone.story.image}
                alt={milestone.story.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback jika gambar tidak ada
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              
              {/* Fallback content */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-100 via-teal-100 to-emerald-50 flex items-center justify-center"
                style={{display: 'none'}}
              >
                <div className="text-center p-4">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${milestone.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                    <div className="text-white text-lg sm:text-2xl font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-gray-700">
                    {milestone.story.title}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    Gambar tidak tersedia
                  </div>
                </div>
              </div>

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Year badge - Smaller on mobile */}
              <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r ${milestone.color} text-white rounded-full text-xs sm:text-sm font-bold shadow-lg`}>
                {milestone.year}
              </div>
            </div>
          </div>

          {/* Story Content - Reduced spacing */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-4 sm:mb-6">
                {milestone.story.content}
              </p>
            </div>

            {/* Achievements - Reduced spacing */}
            {milestone.story.achievements && milestone.story.achievements.length > 0 && (
              <div className="mt-4 sm:mt-6 lg:mt-8">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center`}>
                    <BookOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span>Pencapaian Utama</span>
                </h4>
                
                <div className="grid gap-2 sm:gap-3">
                  {milestone.story.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg sm:rounded-xl border border-green-100/50 hover:shadow-sm transition-shadow duration-200"
                    >
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Back Button - Smaller on mobile */}
          <div className="flex justify-center pt-3 sm:pt-4 border-t border-gray-100">
            <button
              onClick={onClose}
              className={`flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r ${milestone.color} text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 group`}
            >
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Kembali ke Timeline</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneModal;