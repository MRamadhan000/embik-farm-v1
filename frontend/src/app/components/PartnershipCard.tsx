"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface PartnershipCardProps {
  title: string;
  description: string;
  benefits: string[];
  buttonText: string;
  buttonLink: string;
  gradient: string; // tailwind gradient untuk hover
  badge?: string;
  icon: React.ReactNode;
}

export default function PartnershipCard({
  title,
  description,
  benefits,
  buttonText,
  buttonLink,
  gradient,
  badge,
  icon,
}: PartnershipCardProps) {
  const router = useRouter();

  return (
    <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Gradient Hover BG */}
      <div
        className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      {/* Badge opsional */}
      {badge && (
        <div className="absolute top-6 right-6">
          <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      <div className="relative p-6 md:p-8">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Benefits List */}
        <div className="space-y-2 mb-6">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => router.push(buttonLink)}
          className="group/btn w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span className="flex items-center justify-center">
            {buttonText}
            <svg
              className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}