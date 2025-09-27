interface SectionHeaderProps {
  title: string;
  description?: string;
  highlight?: string; // optional untuk badge kecil di atas
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, highlight }) => {
  return (
    <div className="text-center mb-20">
      {highlight && (
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full text-emerald-700 font-medium text-sm mb-6 border border-emerald-200 shadow-sm">
          {highlight}
        </div>
      )}
      <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
      {description && (
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;