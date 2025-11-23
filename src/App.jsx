import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  Phone,
  User,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  List,
  Filter,
  X,
  Cpu,
  Monitor,
  Mouse,
  Printer,
  Smartphone,
  Server,
  HardDrive,
  Wifi,
  Battery,
  Star,
  ArrowRight,
} from "lucide-react";

// --- Custom Gold Color Configuration ---
// Using inline style for specific Gold #C5A059 to ensure it's not orange.

const GOLD_TEXT = "text-[#C5A059]";
const GOLD_BG = "bg-[#C5A059]";
const GOLD_BORDER = "border-[#C5A059]";
const GOLD_HOVER_TEXT = "hover:text-[#b08d4a]";
const GOLD_HOVER_BG = "hover:bg-[#b08d4a]";

// --- Mock Data ---

const CATEGORIES = [
  {
    id: 1,
    name: "PC Components",
    icon: <Cpu size={18} />,
    subcategories: [
      "Motherboards",
      "Processors",
      "Graphic Cards",
      "RAM",
      "Power Supply",
    ],
  },
  {
    id: 2,
    name: "Desktop & Laptop",
    icon: <Monitor size={18} />,
    subcategories: ["Gaming Laptops", "Workstations", "All-in-One"],
  },
  {
    id: 3,
    name: "Computer Accessories",
    icon: <Mouse size={18} />,
    subcategories: [],
  },
  {
    id: 4,
    name: "Monitors & Projectors",
    icon: <Monitor size={18} />,
    subcategories: [],
  },
  {
    id: 5,
    name: "Gaming",
    icon: <LayoutGrid size={18} />,
    subcategories: ["Consoles", "Controllers", "VR"],
  },
  {
    id: 6,
    name: "Printers & Scanners",
    icon: <Printer size={18} />,
    subcategories: [],
  },
  {
    id: 7,
    name: "Games & Software",
    icon: <List size={18} />,
    subcategories: [],
  },
  {
    id: 8,
    name: "Mobiles & Tablets",
    icon: <Smartphone size={18} />,
    subcategories: [],
  },
  {
    id: 9,
    name: "Servers & Workstations",
    icon: <Server size={18} />,
    subcategories: [],
  },
  {
    id: 10,
    name: "Storage & Devices",
    icon: <HardDrive size={18} />,
    subcategories: [],
  },
  { id: 11, name: "Networking", icon: <Wifi size={18} />, subcategories: [] },
  { id: 12, name: "POS Hardware", icon: <List size={18} />, subcategories: [] },
  {
    id: 13,
    name: "UPS & Batteries",
    icon: <Battery size={18} />,
    subcategories: [],
  },
];

const PRODUCTS = [
  {
    id: 101,
    title: "Asus Rog Strix Z690-A Gaming WiFi D4 Lga1700",
    price: 1390.0,
    image:
      "https://dlcdnwebimgs.asus.com/gain/03e5076d-10df-4a11-a14c-247e1d5d0d23/w800",
    rating: 0,
    isNew: true,
  },
  {
    id: 102,
    title: "Asus Rog Strix Z690-E Gaming WiFi Intel Z690",
    price: 2230.0,
    image:
      "https://dlcdnwebimgs.asus.com/gain/58599843-7d98-4984-93e8-48c758377435/w800",
    rating: 5,
    isNew: false,
  },
  {
    id: 103,
    title: "Asus Rog Strix Z690-F Gaming WiFi LGA 1700",
    price: 1890.0,
    image:
      "https://dlcdnwebimgs.asus.com/gain/7709578d-6878-46d4-92c0-558420296666/w800",
    rating: 0,
    isNew: false,
  },
  {
    id: 104,
    title: "Asus Rog Maximus Z690 Extreme Intel LGA 1700",
    price: 4300.0,
    image:
      "https://dlcdnwebimgs.asus.com/gain/01455052-7864-4b5c-9122-2d527382620c/w800",
    rating: 5,
    isNew: true,
  },
  {
    id: 105,
    title: "Asus ROG MAXIMUS Z690 HERO EVA (Evangelion)",
    price: 2490.0,
    image:
      "https://dlcdnwebimgs.asus.com/gain/0f089424-3e55-4b9a-a231-81d73610073c/w800",
    rating: 4,
    isNew: false,
  },
  {
    id: 106,
    title: "Asus ROG Strix B550-F Gaming (Wi-Fi) AMD AM4",
    price: 950.0,
    image:
      "https://dlcdnwebimgs.asus.com/gain/C2F83F94-12B7-430F-A81E-A7F4D8F2C9E7/w800",
    rating: 5,
    isNew: false,
  },
];

// --- Components ---

const SidebarItem = ({ category, isOpen, toggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSub = category.subcategories.length > 0;

  return (
    <div className="mb-1">
      <button
        onClick={() => {
          if (hasSub) setIsExpanded(!isExpanded);
          toggle();
        }}
        className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group 
        ${
          isExpanded
            ? `bg-white shadow-md ${GOLD_TEXT}`
            : "hover:bg-white hover:shadow-sm text-slate-600 hover:text-slate-900"
        }`}
      >
        <div className="flex items-center gap-3.5">
          <span
            className={`p-1.5 rounded-full transition-colors duration-300 ${
              isExpanded
                ? "bg-[#C5A059]/10"
                : "bg-slate-100 group-hover:bg-[#C5A059]/10"
            }`}
          >
            {React.cloneElement(category.icon, { size: 16 })}
          </span>
          <span className="text-sm font-semibold tracking-wide">
            {category.name}
          </span>
        </div>
        {hasSub && (
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "text-slate-400"
            }`}
          />
        )}
      </button>

      {/* Submenu Animation */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100 mt-1"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-white/50 rounded-xl">
          <div className="pl-12 pr-4 py-2 space-y-1">
            {category.subcategories.map((sub, idx) => (
              <a
                key={idx}
                href="#"
                className={`block text-xs font-medium text-slate-500 py-1.5 ${GOLD_HOVER_TEXT} hover:translate-x-1 transition-all duration-200`}
              >
                {sub}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-slate-800 font-sans selection:bg-[#C5A059]/30 selection:text-[#8a6d32]">
      {/* --- 1. Titlebar (Top Bar) --- */}
      <div className="bg-slate-900 text-slate-400 text-[11px] font-medium py-2.5 px-4 lg:px-8 hidden md:flex justify-between items-center transition-all">
        <div className="flex items-center gap-6">
          <span
            className={`flex items-center gap-2 ${GOLD_HOVER_TEXT} cursor-pointer transition-colors`}
          >
            <Phone size={12} strokeWidth={2.5} /> +971 50 401 1971
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            About Us
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Contact
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">
            Compare
          </span>
          <span
            className={`flex items-center gap-1 cursor-pointer ${GOLD_HOVER_TEXT}`}
          >
            AED <ChevronDown size={10} />
          </span>
          <span className="flex items-center gap-1.5 cursor-pointer hover:text-white font-semibold transition-colors">
            <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center">
              <User size={10} />
            </div>
            Login
          </span>
        </div>
      </div>

      {/* --- 2. Navbar (Glassmorphism) --- */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm py-3"
            : "bg-white py-5 border-b border-slate-100"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
            {/* Logo */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 group cursor-pointer">
                {/* Logo Graphic */}
                <div
                  className={`w-11 h-11 ${GOLD_BG} rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#C5A059]/30 transform group-hover:rotate-12 transition-transform duration-300`}
                >
                  D
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-black tracking-tight text-slate-900">
                    DUBAI <span className={GOLD_TEXT}>GAMERS</span>
                  </span>
                  <span className="text-[9px] text-slate-400 font-bold tracking-[0.25em] uppercase mt-0.5">
                    Premium Tech
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
            {/* Categories Button */}
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

      {/* --- Main Content Layout --- */}
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* --- 3. Sidebar Categories --- */}
          <aside className="hidden lg:block w-1/4 min-w-[280px]">
            <div className="sticky top-32 space-y-8">
              {/* Categories List */}
              <div className="bg-slate-50/50 backdrop-blur-sm border border-slate-200 rounded-3xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-6 px-2">
                  <h2 className="font-black text-slate-800 text-lg">
                    Categories
                  </h2>
                  <div className="bg-white p-1.5 rounded-lg shadow-sm border border-slate-100 cursor-pointer hover:border-slate-300 transition-colors">
                    <Filter size={14} className="text-slate-400" />
                  </div>
                </div>
                <div className="flex flex-col pr-1 custom-scrollbar max-h-[calc(100vh-300px)] overflow-y-auto">
                  {CATEGORIES.map((cat) => (
                    <SidebarItem
                      key={cat.id}
                      category={cat}
                      isOpen={true}
                      toggle={() => {}}
                    />
                  ))}
                </div>
              </div>

              {/* Sidebar Banner */}
              <div className="rounded-3xl overflow-hidden relative h-80 group cursor-pointer shadow-lg shadow-[#C5A059]/10">
                <img
                  src="https://images.unsplash.com/photo-1624705024345-a55269a5f541?q=80&w=1000&auto=format&fit=crop"
                  alt="Promo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-8 flex flex-col justify-end items-start">
                  <span
                    className={`${GOLD_BG} text-white text-[10px] font-bold uppercase px-2 py-1 rounded mb-3`}
                  >
                    Exclusive
                  </span>
                  <h3 className="text-white font-black text-2xl leading-tight mb-2">
                    RTX 4090 <br />
                    Restocked
                  </h3>
                  <p className="text-slate-300 text-xs mb-4 font-medium">
                    Experience ultimate performance.
                  </p>
                  <button
                    className={`bg-white ${GOLD_TEXT} text-xs font-bold py-2.5 px-5 rounded-full hover:bg-[#C5A059] hover:text-white transition-colors flex items-center gap-2`}
                  >
                    Shop Now <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* --- 4. Main Products Area --- */}
          <main className="flex-1">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-3">
                  <span className="hover:text-slate-800 cursor-pointer">
                    Home
                  </span>{" "}
                  <ChevronRight size={10} />
                  <span className="hover:text-slate-800 cursor-pointer">
                    Components
                  </span>{" "}
                  <ChevronRight size={10} />
                  <span className={`${GOLD_TEXT} font-bold`}>Gaming PC</span>
                </div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                  Gaming <span className="text-slate-300">PC</span>
                </h1>
              </div>

              <span className="text-xs font-bold text-slate-400 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
                Showing 6 of 124 Products
              </span>
            </div>

            {/* Filter Toolbar */}
            <div className="bg-white rounded-2xl p-2 pl-5 shadow-sm border border-slate-100 mb-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
                <span>Sort by:</span>
                <div className="relative group">
                  <select className="appearance-none bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold rounded-xl py-2.5 pl-4 pr-10 focus:outline-none cursor-pointer transition-colors">
                    <option>Best Match</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl">
                <button
                  className={`p-2.5 bg-white shadow-sm text-slate-900 rounded-lg transition-all`}
                >
                  <LayoutGrid size={18} />
                </button>
                <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-white/50 rounded-lg transition-colors">
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex items-center justify-center gap-3">
              <button className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-colors shadow-sm text-slate-400">
                <ChevronRight size={18} className="rotate-180" />
              </button>
              <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-sm border border-slate-100">
                <button
                  className={`w-9 h-9 rounded-full ${GOLD_BG} text-white font-bold flex items-center justify-center shadow-md`}
                >
                  1
                </button>
                <button className="w-9 h-9 rounded-full text-slate-500 font-semibold flex items-center justify-center hover:bg-slate-50 transition-colors">
                  2
                </button>
                <button className="w-9 h-9 rounded-full text-slate-500 font-semibold flex items-center justify-center hover:bg-slate-50 transition-colors">
                  3
                </button>
                <span className="w-9 h-9 flex items-center justify-center text-slate-300 pb-2">
                  ...
                </span>
                <button className="w-9 h-9 rounded-full text-slate-500 font-semibold flex items-center justify-center hover:bg-slate-50 transition-colors">
                  8
                </button>
              </div>
              <button
                className={`w-11 h-11 rounded-full ${GOLD_BG} text-white flex items-center justify-center shadow-lg shadow-[#C5A059]/30 hover:scale-105 transition-transform`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Footer Simplified */}
      <footer className="bg-white border-t border-slate-100 mt-24 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div
              className={`w-12 h-12 ${GOLD_BG} rounded-xl flex items-center justify-center text-white font-black text-2xl mb-4 shadow-lg shadow-[#C5A059]/20`}
            >
              D
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              DUBAI <span className={GOLD_TEXT}>GAMERS</span>
            </h2>
            <p className="text-slate-500 max-w-md mx-auto mb-8">
              The premier destination for high-end gaming hardware in the UAE.
              Experience performance like never before.
            </p>

            <div className="flex gap-6 text-slate-400 mb-8">
              {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="hover:text-[#C5A059] transition-colors text-sm font-bold uppercase tracking-wider"
                >
                  {social}
                </a>
              ))}
            </div>

            <div className="w-full h-px bg-slate-100 mb-8"></div>
            <p className="text-slate-400 text-xs font-medium">
              © 2024 Dubai Gamers. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
