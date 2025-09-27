import React from "react";

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  bgColor?: string; // warna background card
  borderColor?: string; // warna border
  accentBg?: string; // warna bulatan icon utama
  listIconBg?: string; // warna bulatan tiap poin
  points: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  icon,
  bgColor = "bg-white",
  borderColor = "border-slate-200",
  accentBg = "bg-slate-600",
  listIconBg = "bg-emerald-500",
  points,
}) => {
  return (
    <div
      className={`rounded-3xl p-10 border ${bgColor} ${borderColor} shadow-sm`}
    >
      {/* Header */}
      <div className="flex items-center mb-8">
        <div
          className={`w-12 h-12 ${accentBg} rounded-2xl flex items-center justify-center mr-4 text-white`}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>

      {/* Points */}
      <div className="space-y-4">
        {points.map((point, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div
              className={`w-6 h-6 ${listIconBg} rounded-full flex items-center justify-center mt-0.5 flex-shrink-0`}
            >
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-slate-700 leading-relaxed">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;