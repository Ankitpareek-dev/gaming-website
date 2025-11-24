import React from "react";
import { ShoppingCart, Heart, Filter, Star } from "lucide-react";

const GOLD_BG = "bg-[#C5A059]";
const GOLD_HOVER_BG = "hover:bg-[#b08d4a]";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-[2rem] p-4 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out flex flex-col h-full border border-slate-100 overflow-hidden">
      {/* Badges */}
      {product.isNew && (
        <span
          className={`absolute top-4 left-4 ${GOLD_BG} text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-10 uppercase tracking-wider shadow-lg shadow-[#C5A059]/30`}
        >
          New
        </span>
      )}

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <button className="bg-white text-slate-400 hover:text-red-500 p-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
          <Heart size={18} />
        </button>
        <button className="bg-white text-slate-400 hover:text-slate-900 p-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
          <Filter size={18} />
        </button>
      </div>

      {/* Image Area */}
      <div className="relative h-64 p-4 mb-4 rounded-3xl bg-slate-50 group-hover:bg-[#C5A059]/5 transition-colors duration-500 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 drop-shadow-xl mix-blend-multiply"
        />
      </div>

      {/* Content Area */}
      <div className="px-2 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <div className="flex text-[#C5A059] text-xs gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < (product.rating || 0) ? "currentColor" : "none"}
                strokeWidth={2.5}
                className={i >= (product.rating || 0) ? "text-slate-300" : ""}
              />
            ))}
          </div>
          <span className="text-slate-400 text-[10px] font-semibold ml-2 bg-slate-100 px-2 py-0.5 rounded-full">
            {product.rating > 0 ? "12 Reviews" : "No Reviews"}
          </span>
        </div>

        <h3 className="text-slate-800 font-bold text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-[#C5A059] transition-colors">
          {product.title}
        </h3>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Price
            </span>
            <span className="text-xl font-black text-slate-900">
              <span className="text-sm font-medium text-slate-400 mr-1">
                AED
              </span>
              {product.price.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
              <span className="text-xs font-medium text-slate-400">.00</span>
            </span>
          </div>
          <button
            className={`bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center ${GOLD_HOVER_BG} shadow-lg shadow-slate-900/20 hover:shadow-[#C5A059]/40 transition-all duration-300 transform hover:-translate-y-1 group/btn`}
          >
            <ShoppingCart
              size={18}
              className="group-hover/btn:animate-bounce"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
