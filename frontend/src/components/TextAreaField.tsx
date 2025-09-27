import React from "react";

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  rows?: number;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, value, onChange, placeholder, rows = 3 }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="text-black w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
        rows={rows}
        required
      />
    </div>
  );
};

export default TextareaField;