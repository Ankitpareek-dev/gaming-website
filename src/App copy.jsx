import React, { useState, useEffect } from "react";
import Titlebar from "./components/Titlebar";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { CPU_PRODUCTS } from "./products_data/pc_components/cpu_data.js";
import { MOTHERBOARD_PRODUCTS } from "./products_data/pc_components/motherboard_data.js";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [selectedSub, setSelectedSub] = useState("Processors");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Logic for Displaying Products ---
  // If "Processors" is selected, use the CPU_PRODUCTS array.
  // Otherwise, fallback to the original Mock Data (for demo purposes)
  const ORIGINAL_MOCK = [
    {
      id: 101,
      title: "Asus Rog Strix Z690-A Gaming WiFi D4 Lga1700",
      price: 1390.0,
      image:
        "https://www.dubaigamers.com/storage/media/hQ4n4RxpFjHWdGQqAScXs1yAJwrbGyQbxEFIaOQJ.jpg",
      rating: 0,
      isNew: true,
    },
    {
      id: 102,
      title: "Asus Rog Strix Z690-E Gaming WiFi Intel Z690",
      price: 2230.0,
      image:
        "https://www.dubaigamers.com/storage/media/Ekd4GECJQy77k4c4sQqi6jHoS8QhcBgizGQW7Obf.jpg",
      rating: 5,
      isNew: false,
    },
    {
      id: 103,
      title: "Asus Rog Strix Z690-F Gaming WiFi LGA 1700",
      price: 1890.0,
      image:
        "https://www.dubaigamers.com/storage/media/MlLuUSTrnHm9uCWPC9mYAFoHjZdj7nUavuPWQkNO.jpg",
      rating: 0,
      isNew: false,
    },
    {
      id: 104,
      title: "Asus Rog Maximus Z690 Extreme Intel LGA 1700",
      price: 4300.0,
      image:
        "https://www.dubaigamers.com/storage/media/6oVLoRRlD75PqlnG9Hja0HEEhiWSX8yfyQSuro6d.jpg",
      rating: 5,
      isNew: true,
    },
    {
      id: 105,
      title: "Asus ROG MAXIMUS Z690 HERO EVA (Evangelion)",
      price: 2490.0,
      image:
        "https://www.dubaigamers.com/storage/media/m0h6fdDMVcUtZSz3YJyPPrgwzofhVbzNRiBi3QdE.jpg",
      rating: 4,
      isNew: false,
    },
    {
      id: 106,
      title: "Asus ROG Strix B550-F Gaming (Wi-Fi) AMD AM4",
      price: 950.0,
      image:
        "https://www.dubaigamers.com/storage/media/dtUVlUtT7dlQZ6yNl4dAPhaNQnFCuMe00v77kbzI.jpg",
      rating: 5,
      isNew: false,
    },
  ];

  let activeProducts;

  if (selectedSub === "Processors") {
    activeProducts = CPU_PRODUCTS;
  } else if (selectedSub === "Motherboards") {
    activeProducts = MOTHERBOARD_PRODUCTS;
  } else {
    activeProducts = ORIGINAL_MOCK;
  }

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = activeProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(activeProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubCategorySelect = (sub) => {
    setSelectedSub(sub);
    setCurrentPage(1); // Reset to page 1 on category change
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-slate-800 font-sans selection:bg-[#C5A059]/30 selection:text-[#8a6d32]">
      <Titlebar />
      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* --- Main Content Layout --- */}
      <div className="max-w-[1800px] mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <Categories
            selectedSub={selectedSub}
            handleSubCategorySelect={handleSubCategorySelect}
          />
          <MainContent
            selectedSub={selectedSub}
            currentItems={currentItems}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            activeProducts={activeProducts}
            indexOfFirstItem={indexOfFirstItem}
            indexOfLastItem={indexOfLastItem}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
