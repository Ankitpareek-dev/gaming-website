import React from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  ArrowRight,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";

const GOLD_TEXT = "text-[#C5A059]";
const GOLD_BG = "bg-[#C5A059]";

const Navbar = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm py-3"
          : "bg-white py-5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <img
                src="/logo.png"
                alt="Xclusive Moon Logo"
                className="w-11 h-11 rounded-xl object-cover shadow-lg shadow-[#C5A059]/30 transform group-hover:rotate-12 transition-transform duration-300"
              />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-slate-900">
                  Xclusive <span className={GOLD_TEXT}>Moon</span>
                </span>
                <span className="text-[9px] text-slate-400 font-bold tracking-[0.25em] uppercase mt-0.5">
                  General Trading
                </span>
              </div>
            </div>

            {/* Mobile Toggles */}
            <div className="flex gap-3 lg:hidden">
              <button className="relative p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
                <ShoppingCart size={20} />
                <span
                  className={`absolute top-0 right-0 w-2.5 h-2.5 ${GOLD_BG} rounded-full border-2 border-white`}
                ></span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 relative z-20">
            <div
              className={`flex items-center bg-slate-50 rounded-2xl border border-slate-200 transition-all duration-300 focus-within:ring-4 focus-within:ring-[#C5A059]/10 focus-within:border-[#C5A059] focus-within:bg-white overflow-hidden shadow-inner`}
            >
              <div className="pl-5 pr-3 text-slate-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for gaming gear..."
                className="w-full bg-transparent py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
              />
              <div className="hidden sm:flex items-center border-l border-slate-200 pl-4 pr-2 py-2">
                <select className="bg-transparent text-xs font-semibold text-slate-500 focus:outline-none cursor-pointer hover:text-slate-800 pr-4 uppercase tracking-wide">
                  <option>All Categories</option>
                  <option>PC Components</option>
                  <option>Laptops</option>
                </select>
              </div>
              <button
                className={`${GOLD_BG} text-white p-1.5 mr-1.5 rounded-xl hover:bg-slate-900 transition-colors shadow-md`}
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative p-2 rounded-full bg-slate-50 group-hover:bg-[#C5A059]/10 transition-colors">
                <Heart
                  className="text-slate-400 group-hover:text-[#C5A059] transition-colors"
                  size={22}
                />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  Favorites
                </span>
                <span className="text-xs font-bold text-slate-800">
                  My Wishlist
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative p-2 rounded-full bg-slate-50 group-hover:bg-[#C5A059]/10 transition-colors">
                <ShoppingCart
                  className="text-slate-400 group-hover:text-[#C5A059] transition-colors"
                  size={22}
                />
                <span
                  className={`absolute -top-1 -right-1 ${GOLD_BG} text-white font-bold text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm`}
                >
                  2
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  Your Cart
                </span>
                <span className="text-xs font-bold text-slate-800">
                  AED 0.00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav
          className={`mt-5 flex-col lg:flex-row lg:items-center lg:justify-start gap-3 lg:gap-10 text-sm border-t border-slate-100 pt-4 lg:pt-0 ${
            mobileMenuOpen ? "flex" : "hidden lg:flex"
          }`}
        >
          <button
            className={`bg-slate-900 text-white font-bold py-2.5 px-6 rounded-xl flex items-center gap-3 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:scale-95 w-fit`}
          >
            <LayoutGrid size={18} />
            <span>Browse Categories</span>
            <ChevronDown size={14} className="ml-2 opacity-60" />
          </button>

          {[
            "Custom Build PC",
            "Offer Zone",
            "Brands",
            "New Arrivals",
            "Support",
          ].map((item, idx) => (
            <a
              key={item}
              href="#"
              className={`py-2 relative group font-semibold text-slate-500 hover:text-slate-900 transition-colors`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 ${GOLD_BG} rounded-full transition-all duration-300 group-hover:w-1/2`}
              ></span>
            </a>
          ))}

          <span
            className={`hidden lg:inline-flex ml-auto ${GOLD_TEXT} text-xs font-bold bg-white border border-[#C5A059]/30 rounded-full px-4 py-1.5 items-center gap-2 shadow-sm`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${GOLD_BG} animate-pulse`}
            ></span>
            Free Shipping on orders over AED 1000
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
