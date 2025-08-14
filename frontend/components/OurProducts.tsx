    'use client'
    import React from 'react';
    import { FaGlassWhiskey, FaDrumstickBite, FaLeaf, FaStar, FaArrowRight } from 'react-icons/fa';

    export default function OurProducts() {
    const products = [
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
        <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Background Ornaments */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-rose-200/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-lime-300/20 to-green-400/20 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-emerald-500 rotate-45 animate-spin-slow opacity-60"></div>
        <div className="absolute bottom-32 left-1/3 w-6 h-6 bg-rose-500 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-1/3 left-20 w-3 h-8 bg-lime-500 animate-pulse opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Header Section */}
            <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full text-emerald-700 font-medium text-sm mb-6 border border-emerald-200 shadow-sm">
                <FaStar className="text-emerald-500 animate-pulse" />
                Premium Quality Products
            </div>
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 mb-4">
                Our Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Produk terbaik dari peternakan kami untuk Anda, dihasilkan dengan standar kualitas tinggi dan proses yang berkelanjutan.
            </p>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 overflow-hidden"
                >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${product.gradient} text-white text-xs font-bold rounded-full shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                    {product.badge}
                    </span>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                    <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIwMCAxNjYuNTY5IDE4Ni41NjkgMTgwIDE3MCAxODBDMTUzLjQzMSAxODAgMTQwIDE2Ni41NjkgMTQwIDE1MEMxNDAgMTMzLjQzMSAxNTMuNDMxIDEyMCAxNzAgMTIwQzE4Ni41NjkgMTIwIDIwMCAxMzMuNDMxIDIwMCAxNTBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yNDAgMjAwSDEwMFYyMTBIMjQwVjIwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+";
                    }}
                    />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 left-4 z-20">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {product.icon}
                    </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-700 group-hover:to-slate-900 transition-all duration-300">
                        {product.title}
                    </h3>
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                    {product.desc}
                    </p>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400 font-medium">Mulai dari</span>
                        <span className={`text-xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                        {product.price}
                        </span>
                    </div>
                    
                    <button className={`group/btn flex items-center gap-2 bg-gradient-to-r ${product.gradient} text-white px-4 py-2 rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                        <span>Pesan</span>
                        <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                    </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-transparent to-slate-100 rounded-tl-full opacity-50"></div>
                </div>
            ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-slate-700 hover:to-slate-600">
                <span>Lihat Semua Produk</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            </div>
        </div>

        <style jsx>{`
            @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
            }
            .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
            }
        `}</style>
        </section>
    );
    }