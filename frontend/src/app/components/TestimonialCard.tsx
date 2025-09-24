import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  avatar,
  text,
  rating,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-slate-700 leading-relaxed mb-6 italic">
        &ldquo;{text}&rdquo;
      </p>

      {/* User Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
          {avatar}
        </div>
        <div>
          <div className="font-bold text-slate-900">{name}</div>
          <div className="text-slate-600 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;