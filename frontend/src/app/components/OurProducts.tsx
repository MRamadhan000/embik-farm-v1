'use client'
import React from 'react';
import { FaGlassWhiskey, FaDrumstickBite, FaLeaf } from 'react-icons/fa';
import { ProductCard, Product } from '@/app/components/ProductCard';
import SectionHeader from '@/app/components/SectionHeader';

export default function OurProducts() {
    const products: Product[] = [
        {
            icon: <FaGlassWhiskey className="text-emerald-400 text-4xl" />,
            title: "Susu Kambing",
            desc: "Susu kambing segar langsung dari peternakan kami, kaya gizi dan tanpa bahan pengawet.",
            image: "https://images.unsplash.com/photo-1577801598490-1a3f63ecf6d4",
            gradient: "from-emerald-500 to-teal-600",
            badge: "Fresh",
            price: "Rp 25.000/L"
        },
        {
            icon: <FaDrumstickBite className="text-rose-400 text-4xl" />,
            title: "Daging Kambing",
            desc: "Daging kambing berkualitas tinggi, segar, dan siap diolah menjadi hidangan lezat.",
            image: "https://images.unsplash.com/photo-1617196036300-eaaea2bd8d8d",
            gradient: "from-rose-500 to-pink-600",
            badge: "Premium",
            price: "Rp 80.000/kg"
        },
        {
            icon: <FaLeaf className="text-lime-400 text-4xl" />,
            title: "Pupuk Organik",
            desc: "Pupuk organik dari kotoran kambing yang telah diolah, ramah lingkungan dan suburkan tanah.",
            image: "https://images.unsplash.com/photo-1603574670812-d24560880210",
            gradient: "from-lime-500 to-green-600",
            badge: "Eco-Friendly",
            price: "Rp 15.000/kg"
        },
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <SectionHeader
                    title="Produk Kami"
                    description="Produk terbaik dari peternakan kami untuk Anda, dihasilkan dengan standar kualitas tinggi dan proses yang berkelanjutan."
                />

                {/* Products Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}