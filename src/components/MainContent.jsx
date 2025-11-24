import React from "react";
import {
  ChevronRight,
  LayoutGrid,
  List,
  ChevronDown,
  ChevronLeft,
} from "lucide-react";
import ProductCard from "./ProductCard";

const GOLD_TEXT = "text-[#C5A059]";
const GOLD_BG = "bg-[#C5A059]";

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
    const maxVisibleButtons = 5; // Max buttons to show before using "..."

    if (totalPages <= maxVisibleButtons) {
      // If total pages are few, show all of them
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // If many pages, calculate "smart" range

      // Always show Page 1
      pageNumbers.push(1);

      // Calculate start and end of the middle window
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust window if we are near the start (e.g., page 1, 2, 3)
      if (currentPage <= 3) {
        endPage = 4; // Show up to page 4
      }

      // Adjust window if we are near the end (e.g., page 48, 49, 50)
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }

      // Add "..." if there is a gap between 1 and startPage
      if (startPage > 2) {
        pageNumbers.push("...");
      }

      // Add the middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add "..." if there is a gap between endPage and totalPages
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }

      // Always show Last Page
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <main className="flex-1">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-3">
            <span className="hover:text-slate-800 cursor-pointer">Home</span>{" "}
            <ChevronRight size={10} />
            <span className="hover:text-slate-800 cursor-pointer">
              Components
            </span>{" "}
            <ChevronRight size={10} />
            <span className={`${GOLD_TEXT} font-bold`}>{selectedSub}</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            {selectedSub}
          </h1>
        </div>

        <span className="text-xs font-bold text-slate-400 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
          Showing {activeProducts.length > 0 ? indexOfFirstItem + 1 : 0}-
          {Math.min(indexOfLastItem, activeProducts.length)} of{" "}
          {activeProducts.length} Products
        </span>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-2xl p-2 pl-5 shadow-sm border border-slate-100 mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
          <span>Sort by:</span>
          <div className="relative group">
            <select className="appearance-none bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold rounded-xl py-2.5 pl-4 pr-10 focus:outline-none cursor-pointer transition-colors">
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl">
          <button
            className={`p-2.5 bg-white shadow-sm text-slate-900 rounded-lg transition-all`}
          >
            <LayoutGrid size={18} />
          </button>
          <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-white/50 rounded-lg transition-colors">
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
            className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-colors shadow-sm text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-sm border border-slate-100">
            {getPageNumbers().map((pageNum, index) => {
              // Render Ellipsis (...)
              if (pageNum === "...") {
                return (
                  <span
                    key={`dots-${index}`}
                    className="w-9 h-9 flex items-center justify-center text-slate-400 pb-2"
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
                        ? `${GOLD_BG} text-white shadow-md font-bold`
                        : "text-slate-500 hover:bg-slate-50"
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
            className={`w-11 h-11 rounded-full ${GOLD_BG} text-white flex items-center justify-center shadow-lg shadow-[#C5A059]/30 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </main>
  );
};

export default MainContent;
