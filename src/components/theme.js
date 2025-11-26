// theme.js

// ==============================================
// 1. ORIGINAL LIGHT (Classy Black & White)
// ==============================================
const lightMode = {
  colors: {
    bg: "bg-white",
    surface: "bg-zinc-50",
    border: "border-zinc-200",
    borderLight: "border-zinc-100",
    textMain: "text-zinc-900",
    textSecondary: "text-zinc-600",
    textMuted: "text-zinc-400",
    textLight: "text-zinc-300",

    // Monochrome Accent
    accentBg: "bg-black",
    accentText: "text-black",
    accentBorder: "border-black",
    textOnAccent: "text-white",

    scrollbarThumb: "bg-zinc-300",
    scrollbarTrack: "bg-transparent",
  },
  utils: {
    hoverTransition: "transition-all duration-300 ease-out",
    hoverScale: "hover:scale-105",
    shadowSubtle: "shadow-sm hover:shadow-md",
    shadowDeep: "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]",
  },
};

// ==============================================
// 2. ORIGINAL DARK (Classy Black & White)
// ==============================================
const darkMode = {
  colors: {
    bg: "bg-zinc-950",
    surface: "bg-zinc-900",
    border: "border-zinc-800",
    borderLight: "border-zinc-800",
    textMain: "text-zinc-50",
    textSecondary: "text-zinc-400",
    textMuted: "text-zinc-600",
    textLight: "text-zinc-700",

    // Monochrome Accent (White contrast)
    accentBg: "bg-white",
    accentText: "text-white",
    accentBorder: "border-white",
    textOnAccent: "text-zinc-950",

    scrollbarThumb: "bg-zinc-700",
    scrollbarTrack: "bg-transparent",
  },
  utils: {
    hoverTransition: "transition-all duration-300 ease-out",
    hoverScale: "hover:scale-105",
    shadowSubtle: "shadow-sm shadow-black/50 hover:shadow-md",
    shadowDeep: "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]",
  },
};

// ==============================================
// 3. BLUE LIGHT (Vercel Style)
// ==============================================
const blueLightMode = {
  colors: {
    bg: "bg-white",
    surface: "bg-white",
    border: "border-zinc-200",
    borderLight: "border-zinc-100",
    textMain: "text-zinc-950",
    textSecondary: "text-zinc-500",
    textMuted: "text-zinc-400",
    textLight: "text-zinc-300",

    // Vercel Blue Accent
    accentBg: "bg-blue-600",
    accentText: "text-blue-600",
    accentBorder: "border-blue-600",
    textOnAccent: "text-white",

    scrollbarThumb: "bg-zinc-300",
    scrollbarTrack: "bg-transparent",
  },
  utils: {
    hoverTransition: "transition-all duration-200 ease-out",
    hoverScale: "hover:scale-[1.02]",
    shadowSubtle: "shadow-sm hover:shadow",
    shadowDeep: "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
  },
};

// ==============================================
// 4. BLUE DARK (Vercel Style)
// ==============================================
const blueDarkMode = {
  colors: {
    bg: "bg-black", // Pure black
    surface: "bg-[#0a0a0a]", // Almost black
    border: "border-zinc-800",
    borderLight: "border-zinc-900",
    textMain: "text-white",
    textSecondary: "text-zinc-400",
    textMuted: "text-zinc-600",
    textLight: "text-zinc-800",

    // Electric Blue Accent
    accentBg: "bg-blue-600",
    accentText: "text-blue-500",
    accentBorder: "border-blue-600",
    textOnAccent: "text-white",

    scrollbarThumb: "bg-zinc-800",
    scrollbarTrack: "bg-black",
  },
  utils: {
    hoverTransition: "transition-all duration-200 ease-out",
    hoverScale: "hover:scale-[1.02]",
    shadowSubtle: "shadow-none border border-zinc-800 hover:border-zinc-700",
    shadowDeep: "shadow-[0_0_50px_-12px_rgb(0,0,0,0.5)] border border-zinc-800",
  },
};

// ==============================================
// EXPORT ACTIVE THEME
// ==============================================
// Uncomment the theme you want to use:

// export const theme = originalLightMode;
// export const theme = originalDarkMode;
// export const theme = blueLightMode;
export const theme = lightMode;
