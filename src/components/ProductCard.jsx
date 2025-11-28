// ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Filter, Star } from "lucide-react";
import { theme } from "./theme";

const ProductCard = ({ product }) => {
  return (
    <Link
      // to={`/product/${product.id}`}
      className={`group relative rounded-[2rem] p-4 flex flex-col h-full overflow-hidden cursor-pointer border border-transparent hover:${theme.colors.borderLight} ${theme.colors.bg} ${theme.utils.hoverTransition} ${theme.utils.shadowDeep}`}
    >
      {/* Badges */}
      {product.isNew && (
        <span
          className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1.5 rounded-full z-10 uppercase tracking-wider ${theme.colors.accentBg} ${theme.colors.textOnAccent} shadow-lg shadow-black/10`}
        >
          New
        </span>
      )}

      {/* Floating Action Buttons */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className={`p-2.5 rounded-full bg-white ${theme.colors.textMuted} hover:${theme.colors.textMain} hover:${theme.colors.surface} shadow-md ${theme.utils.hoverScale} transition-all`}
        >
          <Heart size={18} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className={`p-2.5 rounded-full bg-white ${theme.colors.textMuted} hover:${theme.colors.textMain} hover:${theme.colors.surface} shadow-md ${theme.utils.hoverScale} transition-all`}
        >
          <Filter size={18} />
        </button>
      </div>

      {/* Image Area */}
      <div
        // UPDATED: 'bg-white' is hardcoded here so images always have a clean white backdrop
        className={`relative h-64 p-4 mb-4 rounded-3xl bg-white transition-colors duration-500 flex items-center justify-center overflow-hidden`}
      >
        <img
          src={product.image}
          alt={product.title}
          // UPDATED: Removed 'mix-blend-multiply' to prevent dark mode transparency issues
          className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1 drop-shadow-xl"
        />
      </div>

      {/* Content Area */}
      <div className="px-2 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          {/* Star Ratings */}
          <div className={`flex gap-0.5 ${theme.colors.accentText}`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < (product.rating || 0) ? "currentColor" : "none"}
                className={i >= (product.rating || 0) ? "text-zinc-200" : ""}
                strokeWidth={2.5}
              />
            ))}
          </div>
          <span
            className={`${theme.colors.textMuted} text-[10px] font-semibold ml-2 ${theme.colors.surface} px-2 py-0.5 rounded-full`}
          >
            {product.rating > 0 ? "12 Reviews" : "No Reviews"}
          </span>
        </div>

        <h3
          className={`font-bold text-sm leading-relaxed mb-4 line-clamp-2 transition-colors group-hover:${theme.colors.accentText} ${theme.colors.textMain}`}
        >
          {product.title}
        </h3>

        <div
          className={`mt-auto pt-4 border-t ${theme.colors.borderLight} flex items-center justify-between`}
        >
          <div className="flex flex-col">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider ${theme.colors.textMuted}`}
            >
              Price
            </span>
            <span className={`text-xl font-black ${theme.colors.textMain}`}>
              <span
                className={`text-sm font-medium ${theme.colors.textLight} mr-1`}
              >
                AED
              </span>
              {product.price.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
              <span className={`text-xs font-medium ${theme.colors.textLight}`}>
                .00
              </span>
            </span>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 group/btn shadow-lg shadow-black/5 hover:shadow-black/20 ${theme.colors.accentBg} ${theme.colors.textOnAccent}`}
          >
            <ShoppingCart
              size={18}
              className="group-hover/btn:animate-bounce"
            />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
