import React from "react";
import { Phone, User, ChevronDown } from "lucide-react";

const GOLD_HOVER_TEXT = "hover:text-[#b08d4a]";

const Titlebar = () => {
  return (
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
  );
};

export default Titlebar;
