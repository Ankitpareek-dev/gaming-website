// MainContent.jsx
import React from "react";
import {
  ChevronRight,
  LayoutGrid,
  List,
  ChevronDown,
  ChevronLeft,
} from "lucide-react";
import ProductCard from "./ProductCard";
import { theme } from "./theme";

const MainContent = ({
  selectedSub,
  currentItems,
  currentPage,
  totalPages,
  handlePageChange,
  activeProducts,
  indexOfFirstItem,
  indexOfLastItem,
}) => {
  // --- SMART PAGINATION LOGIC ---
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisibleButtons = 5;

    if (totalPages <= maxVisibleButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        endPage = 4;
      }
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }

      if (startPage > 2) {
        pageNumbers.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <main className="flex-1">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div
            className={`flex items-center gap-2 text-xs ${theme.colors.textMuted} font-medium mb-3`}
          >
            <span className={`hover:${theme.colors.textMain} cursor-pointer`}>
              Home
            </span>{" "}
            <ChevronRight size={10} />
            <span className={`hover:${theme.colors.textMain} cursor-pointer`}>
              Components
            </span>{" "}
            <ChevronRight size={10} />
            <span className={`${theme.colors.accentText} font-bold`}>
              {selectedSub}
            </span>
          </div>
          <h1
            className={`text-4xl font-black ${theme.colors.textMain} tracking-tight`}
          >
            {selectedSub}
          </h1>
        </div>

        <span
          // UPDATED: Replaced bg-white with theme.colors.bg
          className={`text-xs font-bold ${theme.colors.textMuted} ${theme.colors.bg} border ${theme.colors.border} px-4 py-2 rounded-full shadow-sm`}
        >
          Showing {activeProducts.length > 0 ? indexOfFirstItem + 1 : 0}-
          {Math.min(indexOfLastItem, activeProducts.length)} of{" "}
          {activeProducts.length} Products
        </span>
      </div>

      {/* Filter Toolbar */}
      <div
        // UPDATED: Replaced bg-white with theme.colors.bg
        className={`${theme.colors.bg} rounded-2xl p-2 pl-5 shadow-sm border ${theme.colors.borderLight} mb-8 flex flex-wrap items-center justify-between gap-4`}
      >
        <div
          className={`flex items-center gap-4 text-sm font-medium ${theme.colors.textSecondary}`}
        >
          <span>Sort by:</span>
          <div className="relative group">
            <select
              className={`appearance-none ${theme.colors.surface} hover:bg-zinc-100 ${theme.colors.textMain} font-bold rounded-xl py-2.5 pl-4 pr-10 focus:outline-none cursor-pointer transition-colors`}
            >
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
            <ChevronDown
              size={14}
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${theme.colors.textMuted} pointer-events-none`}
            />
          </div>
        </div>

        <div
          className={`flex items-center gap-2 ${theme.colors.surface} p-1.5 rounded-xl`}
        >
          <button
            // UPDATED: Replaced bg-white with theme.colors.bg
            className={`p-2.5 ${theme.colors.bg} shadow-sm ${theme.colors.textMain} rounded-lg transition-all`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            // UPDATED: Replaced hover:bg-white/50 with theme variable
            className={`p-2.5 ${theme.colors.textMuted} hover:${theme.colors.textSecondary} hover:${theme.colors.bg}/50 rounded-lg transition-colors`}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* --- UPDATED PAGINATION CONTROLS --- */}
      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-3">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            // UPDATED: Replaced bg-white with theme.colors.bg
            className={`w-11 h-11 rounded-full ${theme.colors.bg} border ${theme.colors.border} flex items-center justify-center hover:${theme.colors.accentBorder} hover:${theme.colors.accentText} transition-colors shadow-sm ${theme.colors.textMuted} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Page Numbers */}
          <div
            // UPDATED: Replaced bg-white with theme.colors.bg
            className={`flex items-center ${theme.colors.bg} rounded-full px-2 py-1 shadow-sm border ${theme.colors.borderLight}`}
          >
            {getPageNumbers().map((pageNum, index) => {
              // Render Ellipsis (...)
              if (pageNum === "...") {
                return (
                  <span
                    key={`dots-${index}`}
                    className={`w-9 h-9 flex items-center justify-center ${theme.colors.textMuted} pb-2`}
                  >
                    ...
                  </span>
                );
              }

              // Render Number Button
              return (
                <button
                  key={index}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-9 h-9 rounded-full font-semibold flex items-center justify-center transition-colors mx-0.5
                    ${
                      currentPage === pageNum
                        ? `${theme.colors.accentBg} ${theme.colors.textOnAccent} shadow-md font-bold`
                        : `${theme.colors.textSecondary} hover:${theme.colors.surface}`
                    }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-11 h-11 rounded-full ${theme.colors.accentBg} ${theme.colors.textOnAccent} flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:shadow-none`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </main>
  );
};

export default MainContent;
