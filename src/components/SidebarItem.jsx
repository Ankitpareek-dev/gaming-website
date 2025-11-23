import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const GOLD_TEXT = "text-[#C5A059]";
const GOLD_HOVER_TEXT = "hover:text-[#b08d4a]";

const SidebarItem = ({
  category,
  isOpen,
  toggle,
  selectedSub,
  onSelectSub,
}) => {
  const [isExpanded, setIsExpanded] = useState(
    category.name === "PC Components"
  );
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

export default SidebarItem;
