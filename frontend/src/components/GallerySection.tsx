import React from "react";
import SectionHeader from "@/components/SectionHeader";

interface GallerySectionProps {
    title: string;
    description: string;
    images: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, description, images }) => {
    return (
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
            {/* Dekorasi blur - Responsif */}
            <div className="absolute top-6 sm:top-10 -left-6 sm:-left-10 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-200 opacity-20 rounded-full blur-2xl sm:blur-3xl" />
            <div className="absolute bottom-0 -right-6 sm:-right-10 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-r from-emerald-100 to-teal-100 opacity-30 rounded-full blur-2xl sm:blur-3xl" />

            <div className="relative max-w-7xl mx-auto text-center">
                {/* Header */}
                <SectionHeader
                    title={title}
                    description={description}
                />

                {/* Gallery Grid - Responsif dengan aspect ratio yang lebih baik */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12">
                    {images.slice(0, 8).map((src, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-square overflow-hidden">
                                <img
                                    src={src}
                                    alt={`Gallery ${idx + 1}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>
                            
                            {/* Overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />   
                        </div>
                    ))}
                </div>

                {/* Optional: View More Button jika ada lebih dari 8 gambar */}
                {images.length > 8 && (
                    <div className="mt-8 sm:mt-12">
                        <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            Lihat Semua Foto ({images.length})
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;