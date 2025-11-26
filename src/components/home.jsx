// Homepage.jsx
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Clock,
  CreditCard,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { theme } from "./theme";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Slides Data ---
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2574&auto=format&fit=crop",
      title: "ULTIMATE PERFORMANCE",
      subtitle: "RTX 4090 SERIES",
      button: "SHOP NOW",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2642&auto=format&fit=crop",
      title: "NEXT GEN GAMING",
      subtitle: "BUILD YOUR DREAM PC",
      button: "CONFIGURE",
    },
    {
      id: 3,
      image:
        "https://www.joepowell.com/app/uploads/2024/08/liquid-cooling-system.png",
      title: "LIQUID COOLING",
      subtitle: "KEEP IT CHILL",
      button: "EXPLORE",
    },
  ];

  // --- Features Data ---
  const features = [
    {
      icon: <Clock size={28} />,
      title: "24/7 Support",
      desc: "Expert assistance anytime",
    },
    {
      icon: <Truck size={28} />,
      title: "Free Shipping",
      desc: "On orders over AED 1000",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Official Warranty",
      desc: "100% Authentic Products",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Secure Payment",
      desc: "100% Secure Checkout",
    },
  ];

  // --- Trending Categories Data ---
  const trendingCategories = [
    {
      title: "Graphics Cards",
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2670&auto=format&fit=crop",
      offer: "UP TO 15% OFF",
    },
    {
      title: "Gaming Monitors",
      image:
        "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2670&auto=format&fit=crop",
      offer: "NEW ARRIVALS",
    },
    {
      title: "Gaming Chairs",
      image:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2670&auto=format&fit=crop",
      offer: "BEST SELLERS",
    },
    {
      title: "Keyboards & Mice",
      image:
        "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2671&auto=format&fit=crop",
      offer: "BUNDLES AVAILABLE",
    },
  ];

  // --- Real Brand Logos (Using Clearbit API) ---
  // --- Real Brand Logos (Using Clearbit API) ---
  const brands = [
    { name: "Asus", logo: "https://logo.clearbit.com/asus.com" },
    { name: "Corsair", logo: "https://logo.clearbit.com/corsair.com" },
    { name: "Logitech", logo: "https://logo.clearbit.com/logitech.com" },
    { name: "Razer", logo: "https://logo.clearbit.com/razer.com" },
    { name: "HyperX", logo: "https://logo.clearbit.com/hyperx.com" },
    { name: "Nvidia", logo: "https://logo.clearbit.com/nvidia.com" },
    { name: "AMD", logo: "https://logo.clearbit.com/amd.com" },
    { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
    { name: "Gigabyte", logo: "https://logo.clearbit.com/gigabyte.com" },
  ];

  // --- Navigation Logic ---
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen ${theme.colors.bg} ${theme.colors.textMain} font-sans pb-20`}
    >
      <main className="container mx-auto px-4 lg:px-8 py-6 space-y-20">
        {/* --- 1. HERO SECTION (RESTORED BENTO GRID) --- */}
        {/* Changed h-auto on mobile to allow content to flow, but set explicit heights on children */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 h-auto lg:h-[550px]">
          {/* Main Slider (Left - Spans 2 cols on Desktop) */}
          {/* Added h-[300px] for mobile visibility */}
          <div
            className={`h-[300px] lg:h-auto lg:col-span-2 relative rounded-3xl overflow-hidden ${theme.utils.shadowDeep} group border ${theme.colors.border}`}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
                  ${
                    index === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }
                `}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear
                    ${index === currentSlide ? "scale-105" : "scale-100"}
                  `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 md:p-12 max-w-xl">
                  <span
                    className={`inline-block px-2 py-1 md:px-3 md:py-1 mb-2 md:mb-4 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-md ${theme.colors.accentBg} ${theme.colors.textOnAccent}`}
                  >
                    {slide.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6 text-white leading-[0.9]">
                    {slide.title}
                  </h2>
                  <button
                    className={`bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide hover:scale-105 transition-transform duration-200 flex items-center gap-2`}
                  >
                    {slide.button} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
            {/* Slider Controls */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Side Banners (Right - Stacked on Desktop, Side-by-Side on Mobile) */}
          {/* Changed to grid-cols-2 for mobile (side by side) and flex-col for desktop (stacked) */}
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-6 h-[150px] lg:h-full">
            {/* Top Banner */}
            <div
              className={`relative w-full h-full rounded-3xl overflow-hidden group cursor-pointer border ${theme.colors.border}`}
            >
              <img
                src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2662&auto=format&fit=crop"
                alt="Fans"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 lg:p-6">
                <h3 className="text-sm md:text-xl font-bold text-white uppercase leading-tight">
                  Uni Fan TL
                </h3>
                <p className="text-blue-400 text-[10px] md:text-xs font-bold mb-1 md:mb-2">
                  WIRELESS
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-xs md:text-lg">
                    AED 450
                  </span>
                  <div className="bg-white text-black p-1 md:p-1.5 rounded-full">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div
              className={`relative w-full h-full rounded-3xl overflow-hidden group cursor-pointer border ${theme.colors.border}`}
            >
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop"
                alt="Cooling"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 lg:p-6">
                <h3 className="text-sm md:text-xl font-bold text-white uppercase leading-tight">
                  Liquid Chill
                </h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold mb-1 md:mb-2">
                  AIO COOLERS
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-yellow-400 text-black text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded">
                    NEW
                  </span>
                  <div className="bg-white text-black p-1 md:p-1.5 rounded-full">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. FEATURES SECTION (4x4 Grid on Mobile -> 2 cols x 2 rows) --- */}
        {/* Changed grid-cols-1 to grid-cols-2 for mobile */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`
                relative p-4 md:p-6 rounded-2xl overflow-hidden group
                ${theme.colors.surface} border ${theme.colors.border}
                hover:border-blue-500/30 transition-all duration-300
              `}
            >
              {/* Subtle Gradient BG on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4">
                <div
                  className={`
                  p-2.5 md:p-3 rounded-xl ${theme.colors.bg} border ${theme.colors.border}
                  ${theme.colors.accentText} shadow-sm group-hover:scale-110 transition-transform duration-300
                `}
                >
                  {/* Adjusted icon size for mobile/desktop */}
                  {React.cloneElement(feature.icon, {
                    size: 20,
                    className: "md:w-7 md:h-7",
                  })}
                </div>
                <div>
                  <h3
                    className={`font-bold ${theme.colors.textMain} text-xs md:text-lg mb-0.5 md:mb-1`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-[10px] md:text-sm ${theme.colors.textSecondary} group-hover:${theme.colors.textMain} transition-colors`}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* --- 3. TRENDING SALES --- */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2
                className={`text-3xl font-black ${theme.colors.textMain} tracking-tight`}
              >
                Trending Categories
              </h2>
            </div>
            <button
              className={`hidden md:flex items-center gap-2 text-sm font-bold ${theme.colors.accentText} hover:underline`}
            >
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCategories.map((item, idx) => (
              <div
                key={idx}
                className={`group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer ${theme.utils.shadowSubtle} border ${theme.colors.border}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div
                    className={`
                    self-start text-[10px] font-bold uppercase tracking-widest mb-3
                    bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full
                  `}
                  >
                    {item.offer}
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase leading-none">
                    {item.title}
                  </h3>
                  <div className="h-0 group-hover:h-8 transition-all duration-300 overflow-hidden">
                    <p className="text-gray-300 text-xs mt-2 flex items-center gap-1">
                      Shop Now <ArrowRight size={12} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. FEATURED BRANDS --- */}
        <section
          className={`py-16 border-y ${theme.colors.border} ${theme.colors.surface} rounded-3xl px-8`}
        >
          <div className="text-center mb-12">
            <h2
              className={`text-sm font-bold uppercase tracking-[0.25em] ${theme.colors.textMuted}`}
            >
              Official Retail Partners
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="group relative flex items-center justify-center"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`
                    h-1  md:h-12 w-auto object-contain
                    transition-transform duration-300 
                    group-hover:scale-110 rounded-xl
                  `}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
