// Categories.jsx
import React, { useState } from "react";
import {
  Cpu,
  Monitor,
  Mouse,
  Printer,
  Smartphone,
  Server,
  HardDrive,
  Wifi,
  Battery,
  LayoutGrid,
  List,
  Filter,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { theme } from "./theme";

// --- Comprehensive CATEGORIES List ---
const CATEGORIES = [
  {
    id: 1,
    name: "PC Components",
    icon: <Cpu size={18} />,
    subcategories: [
      "Processors",
      "Motherboards",
      "Video & Graphics Cards",
      "Memory – RAM",
      "Storage – SSD",
      "Storage – HDD",
      "Computer Cases",
      "CPU Fan Coolers",
      "Power Supplies",
      "More Components",
      "Liquid Coolers",
      "Network Cards",
      "Air Coolers",
      "Fans & Accessories",
      "Sound Cards",
      "Optical Drives",
    ],
  },
  {
    id: 2,
    name: "Desktop & Laptop",
    icon: <Monitor size={18} />,
    subcategories: [
      "Desktop",
      "Laptop",
      "All in One PC",
      "Workstation",
      "Servers",
    ],
  },
  {
    id: 3,
    name: "Computer Accessories",
    icon: <Mouse size={18} />,
    subcategories: [
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
    id: 4,
    name: "Monitors & Projectors",
    icon: <Monitor size={18} />,
    subcategories: [
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
    id: 5,
    name: "Gaming",
    icon: <LayoutGrid size={18} />,
    subcategories: [
      "Gaming Chair",
      "Gaming Console",
      "More Gadgets",
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
    id: 6,
    name: "Printers & Scanners",
    icon: <Printer size={18} />,
    subcategories: [
      "Laserjet Printers",
      "Inkjet Printers",
      "Dot Matrix Printers",
      "ID Card Printers",
      "PageWide Printers",
      "Paper Rolls",
      "Plotters",
      "Toner ,Cartridge",
      "Slide & Negative Scanners",
      "Flatbed Scanners",
      "Business Card Scanners",
      "Documents Scanners",
      "OfficeJet Printers",
      "Plotter Rolls",
    ],
  },
  {
    id: 7,
    name: "Games & Software",
    icon: <List size={18} />,
    subcategories: [
      "Operating Systems",
      "Business & Office",
      "Anti-Viruses",
      "Design & Illustration",
      "ID Card Software",
    ],
  },
  {
    id: 9,
    name: "Servers & Workstations",
    icon: <Server size={18} />,
    subcategories: [
      "Workstations",
      "Mobile Workstations",
      "Tower Servers",
      "Rack Servers",
    ],
  },
  {
    id: 10,
    name: "Storage & Devices",
    icon: <HardDrive size={18} />,
    subcategories: [
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
    id: 11,
    name: "Networking",
    icon: <Wifi size={18} />,
    subcategories: [
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
    id: 12,
    name: "POS Hardware",
    icon: <List size={18} />,
    subcategories: [
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
    id: 13,
    name: "UPS & Batteries",
    icon: <Battery size={18} />,
    subcategories: [
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

// --- SIDEBAR ITEM COMPONENT ---
const SidebarItem = ({ category, selectedSub, onSelectSub }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSub = category.subcategories && category.subcategories.length > 0;
  const isActive = selectedSub === category.name;

  const handleSelectCategory = (e) => {
    e.stopPropagation();
    onSelectSub(category.name);
  };

  const handleToggleExpand = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (hasSub) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div className="mb-1">
      <div
        className={`w-full grid grid-cols-[1fr_40px] items-center rounded-xl transition-all duration-300 group
        ${
          isActive || isExpanded
            ? `${theme.colors.bg} shadow-md ${theme.colors.accentText} ring-1 ring-black/5 font-bold`
            : `${theme.colors.textSecondary} hover:${theme.colors.surface} hover:${theme.colors.textMain}`
        }`}
      >
        {/* BUTTON 1: CATEGORY NAME */}
        <button
          onClick={handleSelectCategory}
          className="flex items-center gap-3.5 text-left p-3.5 h-full w-full outline-none focus:outline-none"
        >
          <span
            className={`p-1.5 rounded-full transition-colors duration-300 flex items-center justify-center ${
              isActive || isExpanded
                ? `${theme.colors.accentBg} ${theme.colors.textOnAccent}`
                : `${theme.colors.surface} group-hover:bg-white`
            }`}
          >
            {React.cloneElement(category.icon, { size: 16 })}
          </span>
          <span className="text-sm tracking-wide truncate">
            {category.name}
          </span>
        </button>

        {/* BUTTON 2: ARROW */}
        {hasSub ? (
          <button
            onClick={handleToggleExpand}
            className={`flex items-center justify-center h-full w-full cursor-pointer rounded-r-xl transition-colors outline-none focus:outline-none border-l border-transparent ${
              isActive ? "hover:bg-zinc-100" : ""
            }`}
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isExpanded
                  ? `${theme.colors.textMain} rotate-180`
                  : theme.colors.textMuted
              }`}
            />
          </button>
        ) : (
          <div />
        )}
      </div>

      {/* SUBCATEGORIES LIST */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100 mt-1"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={`overflow-hidden ${theme.colors.surface} rounded-xl`}>
          <div className="pl-12 pr-4 py-2 space-y-1">
            {category.subcategories.map((sub, idx) => (
              <span
                key={idx}
                className={`block w-full text-left text-xs font-medium py-1.5 cursor-pointer ${theme.colors.textSecondary} hover:${theme.colors.textMain} hover:translate-x-1 transition-all`}
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN CATEGORIES COMPONENT ---
const Categories = ({ selectedSub, handleSubCategorySelect }) => {
  return (
    <aside
      // Removed 'h-full' to allow it to grow naturally, but kept Sticky for position
      className={`hidden lg:block w-1/4 min-w-[280px] ${theme.colors.bg}`}
    >
      <div className="sticky top-32 space-y-6">
        {/* Categories List Container */}
        <div
          className={`${theme.colors.surface} backdrop-blur-sm border ${theme.colors.border} rounded-3xl p-5 shadow-sm`}
        >
          <div className="flex items-center justify-between mb-6 px-2">
            <h2
              className={`font-black ${theme.colors.textMain} text-lg tracking-tight`}
            >
              Categories
            </h2>
            <div
              className={`bg-white p-1.5 rounded-lg shadow-sm border ${theme.colors.borderLight} cursor-pointer hover:${theme.colors.border} transition-colors`}
            >
              <Filter size={14} className={theme.colors.textSecondary} />
            </div>
          </div>

          {/* SCROLLBAR REMOVED: 
              - Removed 'max-h-[...]'
              - Removed 'overflow-y-auto'
              - Removed scrollbar styling
              - Added 'flex flex-col' for simple stacking
          */}
          <div className="flex flex-col">
            {CATEGORIES.map((cat) => (
              <SidebarItem
                key={cat.id}
                category={cat}
                selectedSub={selectedSub}
                onSelectSub={handleSubCategorySelect}
              />
            ))}
          </div>
        </div>

        {/* Sidebar Banner */}
        <div
          className={`rounded-3xl overflow-hidden relative h-80 group cursor-pointer shadow-xl shadow-black/20`}
        >
          <img
            src="https://images.unsplash.com/photo-1555618254-84e2cf498b01?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Promo"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent p-8 flex flex-col justify-end items-start">
            <span
              className={`${theme.colors.accentBg} ${theme.colors.textOnAccent} text-[10px] font-bold uppercase px-3 py-1.5 rounded-md mb-3 tracking-wider`}
            >
              Exclusive
            </span>
            <h3 className="text-white font-black text-2xl leading-tight mb-2">
              RTX 4090 <br />
              Restocked
            </h3>
            <p className="text-zinc-300 text-xs mb-5 font-medium">
              Experience ultimate performance.
            </p>
            <button
              className={`bg-white text-black hover:bg-zinc-200 text-xs font-bold py-3 px-6 rounded-full flex items-center gap-2 ${theme.utils.hoverScale}`}
            >
              Shop Now <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Categories;
