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

const GOLD_BG = "bg-[#C5A059]";
const GOLD_TEXT = "text-[#C5A059]";
const GOLD_HOVER_TEXT = "hover:text-[#b08d4a]"; // Necessary for SidebarItem to maintain style

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
    id: 8,
    name: "Mobiles & Tablets",
    icon: <Smartphone size={18} />,
    subcategories: ["Mobile Phones", "Tablet"],
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

// --- Dependency: SidebarItem Component (Necessary for Categories to run) ---
const SidebarItem = ({ category, selectedSub, onSelectSub }) => {
  const [isExpanded, setIsExpanded] = useState(
    category.name === "PC Components"
  );
  const hasSub = category.subcategories && category.subcategories.length > 0;

  return (
    <div className="mb-1">
      <button
        onClick={() => {
          if (hasSub) setIsExpanded(!isExpanded);
          if (!hasSub) onSelectSub(category.name);
        }}
        className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group 
        ${
          isExpanded || selectedSub === category.name
            ? `bg-white shadow-md ${GOLD_TEXT}`
            : "hover:bg-white hover:shadow-sm text-slate-600 hover:text-slate-900"
        }`}
      >
        <div className="flex items-center gap-3.5">
          <span
            className={`p-1.5 rounded-full transition-colors duration-300 ${
              isExpanded || selectedSub === category.name
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
              <button
                key={idx}
                onClick={() => onSelectSub(sub)}
                className={`block w-full text-left text-xs font-medium py-1.5 transition-all duration-200 
                ${
                  selectedSub === sub
                    ? `${GOLD_TEXT} translate-x-1 font-bold`
                    : `text-slate-500 ${GOLD_HOVER_TEXT} hover:translate-x-1`
                }
                `}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Categories Component ---
const Categories = ({ selectedSub, handleSubCategorySelect }) => {
  return (
    <aside className="hidden lg:block w-1/4 min-w-[280px]">
      <div className="sticky top-32 space-y-8">
        {/* Categories List */}
        <div className="bg-slate-50/50 backdrop-blur-sm border border-slate-200 rounded-3xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="font-black text-slate-800 text-lg">Categories</h2>
            <div className="bg-white p-1.5 rounded-lg shadow-sm border border-slate-100 cursor-pointer hover:border-slate-300 transition-colors">
              <Filter size={14} className="text-slate-400" />
            </div>
          </div>
          <div className="flex flex-col pr-1 custom-scrollbar max-h-[calc(100vh-300px)] overflow-y-auto">
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
  );
};

export default Categories;
