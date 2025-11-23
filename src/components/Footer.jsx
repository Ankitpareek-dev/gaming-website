import React from "react";

const GOLD_TEXT = "text-[#C5A059]";
const GOLD_BG = "bg-[#C5A059]";

const Footer = () => {
  return (
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
  );
};

export default Footer;
