// Navbar.jsx
import { React, useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  ArrowRight,
  LayoutGrid,
  ChevronDown,
  ChevronRight,
  Cpu,
  Fan,
  Laptop,
  Keyboard,
  Monitor,
  Printer,
  Disc,
  Smartphone,
  Gamepad2,
  HardDrive,
  Server,
  Wifi,
  ScanLine,
  Battery,
} from "lucide-react";
import { theme } from "./theme";

const categories = [
  {
    name: "PC Components",
    icon: <Cpu size={18} />,
    subs: [
      "CPU – Processors",
      "Motherboards",
      "Video & Graphics Cards",
      "Memory – RAM",
      "Storage – SSD",
      "Storage – HDD",
      "Computer Cases",
      "CPU Fan Coolers",
      "Power Supplies",
    ],
  },
  {
    name: "Cooling & Expansion",
    icon: <Fan size={18} />,
    subs: [
      "Liquid Coolers",
      "Network Cards",
      "Air Coolers",
      "Fans & Accessories",
      "Sound Cards",
      "Optical Drives",
    ],
  },
  {
    name: "Desktop & Laptop",
    icon: <Laptop size={18} />,
    subs: ["Desktop", "Laptop", "All in One PC", "Workstation", "Servers"],
  },
  {
    name: "Computer Accessories",
    icon: <Keyboard size={18} />,
    subs: [
      "Keyboards",
      "Mouse",
      "Headsets",
      "Speakers",
      "Microphones",
      "Webcams",
      "Media Players",
      "Graphics Tablets",
      "Presenters",
      "Capture Cards",
      "Mouse Pads",
      "Keyboards And Mice",
      "Power Extensions",
      "USB Hubs",
      "Card Readers",
      "Cables",
      "Adapters",
      "Bags, Sleeves",
      "Smartwatch & Smartbands",
      "Headset Stands",
      "Wall Mounts & Stands",
      "Power Adapters & Batteries",
      "Surge Protectors",
      "Cloud Controller",
      "USB Receiver",
      "Water Coolant",
      "Cable Sleeves",
      "Cable Extensions",
    ],
  },
  {
    name: "Monitors & Projectors",
    icon: <Monitor size={18} />,
    subs: [
      "PC Monitors",
      "Touchscreen Monitors",
      "TVs",
      "Projector Screens",
      "Docking Stations",
      "Business Monitors",
      "Professional Monitors",
      "Gaming Monitors",
      "Installation Projectors",
      "Portable Projectors",
      "Home Theater Projectors",
      "Short Throw Projectors",
      "Interactive Projectors",
      "Education Projectors",
      "Gaming Projectors",
    ],
  },
  {
    name: "Printers & Scanners",
    icon: <Printer size={18} />,
    subs: [
      "Laserjet Printers",
      "Inkjet Printers",
      "Dot Matrix Printers",
      "ID Card Printers",
      "PageWide Printers",
      "Paper Rolls",
      "Plotters",
      "Toner & Cartridge",
      "Slide & Negative Scanners",
      "Flatbed Scanners",
      "Business Card Scanners",
      "Documents Scanners",
      "OfficeJet Printers",
      "Plotter Rolls",
    ],
  },
  {
    name: "Games & Software",
    icon: <Disc size={18} />,
    subs: [
      "Operating Systems",
      "Business & Office",
      "Anti-Viruses",
      "Design & Illustration",
      "ID Card Software",
    ],
  },
  {
    name: "Mobiles & Tablets",
    icon: <Smartphone size={18} />,
    subs: ["Mobile Phones", "Tablet"],
  },
  {
    name: "Gaming Gear",
    icon: <Gamepad2 size={18} />,
    subs: [
      "Gaming Chair",
      "Gaming Console",
      "VR Headsets",
      "Gaming Desktop",
      "Gaming Laptop",
      "Gaming Keyboards",
      "Gaming Mice",
      "Gaming Headsets",
      "Gaming Controllers",
      "Gaming Glasses",
      "Gaming Desks",
      "Racing Simulator",
      "Gaming Setup",
    ],
  },
  {
    name: "Storage & Devices",
    icon: <HardDrive size={18} />,
    subs: [
      "Internal SSDs",
      "External SSDs",
      "Internal Hard Drives",
      "External Hard Drives",
      "Desktop NAS",
      "Rackmount NAS",
      "USB Flash Drives",
      "SD Cards",
    ],
  },
  {
    name: "Servers & Workstations",
    icon: <Server size={18} />,
    subs: [
      "Workstations",
      "Mobile Workstations",
      "Tower Servers",
      "Rack Servers",
    ],
  },
  {
    name: "Networking",
    icon: <Wifi size={18} />,
    subs: [
      "Routers",
      "Ethernet Router",
      "Mobile Hotspot Routers",
      "ADSL Modems",
      "Range Extenders",
      "Access Points",
      "Powerline Adapters",
      "Switches",
      "KVM Switches",
      "Print Servers",
      "USB Modems",
      "Network Cards",
      "USB Network Adapters",
      "IP Cameras",
      "Network Ethernet Cables",
      "Fiber Optic Cables",
      "Tools/Testers",
      "Network Transceivers",
      "Network Antennas",
      "POE Injectors",
    ],
  },
  {
    name: "POS Hardware",
    icon: <ScanLine size={18} />,
    subs: [
      "POS Units",
      "Customer Display",
      "Barcode Scanners",
      "Barcode/Receipt Printers",
      "Cash Registers",
      "Cash Drawers",
      "Scale Machines",
      "Labels & Paper Rolls",
      "Mobile Computer",
      "Money Counters",
    ],
  },
  {
    name: "UPS & Batteries",
    icon: <Battery size={18} />,
    subs: [
      "Standby UPS",
      "Smart UPS",
      "Smart On-Line UPS",
      "3-Phase UPS",
      "UPS Management",
      "Surge Protection Devices",
      "Voltage Regulators",
    ],
  },
];

const Navbar = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const activeCatData = categories.find((c) => c.name === activeCategory);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? `${theme.colors.bg}/90 backdrop-blur-xl shadow-sm py-3`
          : `${theme.colors.bg} py-5 border-b ${theme.colors.borderLight}`
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
                className="w-11 h-11 rounded-xl object-cover shadow-lg shadow-black/10 transform group-hover:rotate-12 transition-transform duration-300"
              />
              <div className="flex flex-col leading-none">
                <span
                  className={`text-xl font-black tracking-tight ${theme.colors.textMain}`}
                >
                  Xclusive <span className={theme.colors.textMain}>Moon</span>
                </span>
                <span
                  className={`text-[9px] ${theme.colors.textMuted} font-bold tracking-[0.25em] uppercase mt-0.5`}
                >
                  General Trading
                </span>
              </div>
            </div>

            {/* Mobile Toggles */}
            <div className="flex gap-3 lg:hidden">
              <button
                className={`relative p-2.5 ${theme.colors.surface} rounded-full ${theme.colors.textSecondary} hover:bg-zinc-200 transition-colors`}
              >
                <ShoppingCart size={20} />
                <span
                  className={`absolute top-0 right-0 w-2.5 h-2.5 ${theme.colors.accentBg} rounded-full border-2 border-white`}
                ></span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 ${theme.colors.surface} rounded-full ${theme.colors.textSecondary} hover:bg-zinc-200 transition-colors`}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 relative z-20">
            <div
              className={`flex items-center ${theme.colors.surface} rounded-2xl border ${theme.colors.border} transition-all duration-300 focus-within:ring-4 focus-within:ring-black/5 focus-within:${theme.colors.accentBorder} focus-within:${theme.colors.bg} overflow-hidden shadow-inner`}
            >
              <div className={`pl-5 pr-3 ${theme.colors.textMuted}`}>
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for gaming gear..."
                className={`w-full bg-transparent py-3.5 text-sm ${theme.colors.textMain} placeholder-zinc-400 focus:outline-none font-medium`}
              />
              <div
                className={`hidden sm:flex items-center border-l ${theme.colors.border} pl-4 pr-2 py-2`}
              >
                <select
                  className={`bg-transparent text-xs font-semibold ${theme.colors.textSecondary} focus:outline-none cursor-pointer hover:${theme.colors.textMain} pr-4 uppercase tracking-wide`}
                >
                  <option>All Categories</option>
                  <option>PC Components</option>
                  <option>Laptops</option>
                </select>
              </div>
              <button
                className={`${theme.colors.accentBg} ${theme.colors.textOnAccent} p-1.5 mr-1.5 rounded-xl hover:bg-zinc-800 transition-colors shadow-md`}
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div
                className={`relative p-2 rounded-full ${theme.colors.surface} group-hover:bg-zinc-100 transition-colors`}
              >
                <Heart
                  className={`${theme.colors.textMuted} group-hover:${theme.colors.accentText} transition-colors`}
                  size={22}
                />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-[10px] font-bold ${theme.colors.textMuted} uppercase tracking-wide`}
                >
                  Favorites
                </span>
                <span className={`text-xs font-bold ${theme.colors.textMain}`}>
                  My Wishlist
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div
                className={`relative p-2 rounded-full ${theme.colors.surface} group-hover:bg-zinc-100 transition-colors`}
              >
                <ShoppingCart
                  className={`${theme.colors.textMuted} group-hover:${theme.colors.accentText} transition-colors`}
                  size={22}
                />
                <span
                  className={`absolute -top-1 -right-1 ${theme.colors.accentBg} ${theme.colors.textOnAccent} font-bold text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm`}
                >
                  2
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-[10px] font-bold ${theme.colors.textMuted} uppercase tracking-wide`}
                >
                  Your Cart
                </span>
                <span className={`text-xs font-bold ${theme.colors.textMain}`}>
                  AED 0.00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav
          className={`mt-5 flex-col lg:flex-row lg:items-center lg:justify-start gap-3 lg:gap-10 text-sm border-t ${
            theme.colors.borderLight
          } pt-4 lg:pt-0 ${mobileMenuOpen ? "flex" : "hidden lg:flex"}`}
        >
          <div className="relative group z-50 inline-block">
            {/* TRIGGER BUTTON */}
            <button
              // UPDATED: Using theme accent colors for button
              className={`${theme.colors.accentBg} ${theme.colors.textOnAccent} font-bold py-2.5 px-6 rounded-xl flex items-center gap-3 transition-all hover:shadow-lg active:scale-95 w-fit`}
            >
              <LayoutGrid size={18} />
              <span>Browse Categories</span>
              <ChevronDown
                size={14}
                className="ml-2 opacity-60 transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            {/* DROPDOWN CONTAINER */}
            <div
              // UPDATED: Using theme surface and border colors for dropdown
              className={`absolute top-full left-0 mt-2 flex ${theme.colors.surface} border ${theme.colors.border} rounded-xl shadow-2xl invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out w-max`}
            >
              {/* BRIDGE */}
              <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>

              {/* --- LEFT SIDE: CATEGORY LIST --- */}
              <div
                className={`w-72 py-2 flex flex-col border-r ${theme.colors.border}`}
              >
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveCategory(cat.name)}
                    className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors
                ${
                  activeCategory === cat.name
                    ? // UPDATED: Dynamic active state
                      `${theme.colors.accentBg}/10 ${theme.colors.accentText} border-l-2 ${theme.colors.accentBorder}`
                    : // UPDATED: Dynamic inactive state
                      `${theme.colors.textSecondary} hover:${theme.colors.textMain} hover:${theme.colors.bg} border-l-2 border-transparent`
                }
              `}
                  >
                    <div className="flex items-center gap-3">
                      <span>{cat.icon}</span>
                      <span className="font-medium text-sm">{cat.name}</span>
                    </div>
                    <ChevronRight
                      size={14}
                      className={`transition-all ${
                        activeCategory === cat.name
                          ? "opacity-100"
                          : "opacity-40"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* --- RIGHT SIDE: SUBCATEGORIES --- */}
              <div
                className={`w-[600px] ${theme.colors.bg} p-6 flex flex-col rounded-r-xl`}
              >
                {activeCatData ? (
                  <>
                    <h3
                      className={`text-lg font-bold ${theme.colors.textMain} mb-6 flex items-center gap-2 border-b ${theme.colors.borderLight} pb-3`}
                    >
                      <span className={theme.colors.accentText}>
                        {activeCatData.icon}
                      </span>
                      {activeCatData.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 content-start">
                      {activeCatData.subs.map((sub, i) => (
                        <a
                          key={i}
                          href="#"
                          className={`${theme.colors.textSecondary} hover:${theme.colors.textMain} hover:translate-x-1 transition-all text-sm py-1 flex items-center gap-2`}
                        >
                          <span
                            className={`w-1 h-1 ${theme.colors.textMuted} rounded-full`}
                          ></span>
                          {sub}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <div
                    className={`flex items-center justify-center h-full ${theme.colors.textMuted}`}
                  >
                    Select a category
                  </div>
                )}
              </div>
            </div>
          </div>

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
              className={`py-2 relative group font-semibold ${theme.colors.textSecondary} hover:${theme.colors.textMain} transition-colors`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 ${theme.colors.accentBg} rounded-full transition-all duration-300 group-hover:w-1/2`}
              ></span>
            </a>
          ))}

          <span
            className={`hidden lg:inline-flex ml-auto ${theme.colors.accentText} text-xs font-bold ${theme.colors.bg} border ${theme.colors.borderLight} rounded-full px-4 py-1.5 items-center gap-2 shadow-sm`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${theme.colors.accentBg} animate-pulse`}
            ></span>
            Free Shipping on orders over AED 1000
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
