import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const GOLD_TEXT = "text-[#C5A059]";

const SidebarItem = ({ category, selectedSub, onSelectSub }) => {
  // Initialize state. Note: This only runs once when the component mounts.
  const [isExpanded, setIsExpanded] = useState(
    category.name === "PC Components"
  );

  const hasSub = category.subcategories && category.subcategories.length > 0;
  const isActive = selectedSub === category.name;

  // --- HANDLER 1: PRODUCT SELECTION ---
  const handleSelectCategory = (e) => {
    console.log("🖱️ CLICKED: Text Area -> Selecting Category");
    e.stopPropagation(); // Stop bubbling
    onSelectSub(category.name);
  };

  // --- HANDLER 2: TOGGLE EXPANSION ---
  const handleToggleExpand = (e) => {
    console.log("🏹 CLICKED: Arrow Area -> Toggling Submenu");
    e.stopPropagation(); // Stop bubbling
    e.preventDefault(); // Prevent default browser behavior
    if (hasSub) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div className="mb-1">
      {/* GRID LAYOUT: 
         [ 1fr (Text Area takes available space) ] [ 40px (Arrow Area is fixed width) ]
         This creates a hard physical wall between the two buttons.
      */}
      <div
        className={`w-full grid grid-cols-[1fr_40px] items-center rounded-xl transition-all duration-300 group
        ${
          isActive || isExpanded
            ? `bg-white shadow-md ${GOLD_TEXT}`
            : "hover:bg-white hover:shadow-sm text-slate-600 hover:text-slate-900"
        }`}
      >
        {/* BUTTON 1: THE TEXT/ICON (Renders Products) */}
        <button
          onClick={handleSelectCategory}
          className="flex items-center gap-3.5 text-left p-3.5 h-full w-full outline-none focus:outline-none"
        >
          <span
            className={`p-1.5 rounded-full transition-colors duration-300 ${
              isActive || isExpanded
                ? "bg-[#C5A059]/10"
                : "bg-slate-100 group-hover:bg-[#C5A059]/10"
            }`}
          >
            {React.cloneElement(category.icon, { size: 16 })}
          </span>
          <span className="text-sm font-semibold tracking-wide truncate">
            {category.name}
          </span>
        </button>

        {/* BUTTON 2: THE ARROW (Toggles Submenu) */}
        {hasSub ? (
          <button
            onClick={handleToggleExpand}
            className="flex items-center justify-center h-full w-full cursor-pointer hover:bg-slate-50 rounded-r-xl transition-colors outline-none focus:outline-none"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isExpanded ? `rotate-180 ${GOLD_TEXT}` : "text-slate-400"
              }`}
            />
          </button>
        ) : (
          <div /> /* Empty placeholder if no subcategories */
        )}
      </div>

      {/* SUBMENU LIST (Non-clickable items) */}
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
              <span
                key={idx}
                className={`block w-full text-left text-xs font-medium py-1.5 transition-all duration-200 text-slate-500`}
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

export default SidebarItem;
