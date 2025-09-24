import React from "react";
import SectionHeader from "./SectionHeader";

interface GallerySectionProps {
    title: string;
    description: string;
    images: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, description, images }) => {
    return (
        <section className="relative py-16 px-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
            {/* Dekorasi blur */}
            <div className="absolute top-10 -left-10 w-72 h-72 bg-emerald-200 opacity-20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -right-10 w-80 h-80 bg-gradient-to-r from-emerald-100 to-teal-100 opacity-30 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto text-center">
                {/* Header */}
                <SectionHeader
                    title={title}
                    description={description}
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {images.slice(0, 8).map((src, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${idx + 1}`}
                                className="w-full h-44 object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;