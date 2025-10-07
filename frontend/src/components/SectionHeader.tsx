interface SectionHeaderProps {
  title: string;
  description?: string;
  highlight?: string; // optional untuk badge kecil di atas
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, highlight }) => {
  return (
    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
      {highlight && (
        <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-emerald-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6 border border-emerald-200 shadow-sm">
          {highlight}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 mb-3 sm:mb-4 px-2 sm:px-0">
        {title}
      </h2>
      <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
      {description && (
        <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-2 lg:px-0">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;