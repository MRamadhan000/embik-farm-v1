import { FaGlassWhiskey, FaDrumstickBite, FaLeaf, FaStar, FaArrowRight } from 'react-icons/fa';

export interface Product {
  icon: React.ReactNode;
  title: string;
  desc: string;
  image: string;
  gradient: string;
  badge: string;
  price: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 overflow-hidden">
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
  );
};