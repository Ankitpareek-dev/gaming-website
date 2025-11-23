import React from "react";
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
} from "lucide-react";
import SidebarItem from "./SidebarItem";

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

const GOLD_BG = "bg-[#C5A059]";
const GOLD_TEXT = "text-[#C5A059]";

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
                isOpen={true}
                toggle={() => {}}
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
