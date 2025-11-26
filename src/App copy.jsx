// App.jsx
import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Titlebar from "./components/Titlebar";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Homepage from "./components/home.jsx";
// Assuming you created this page:
import ProductDisplayPage from "./components/ProductDisplayPage";

// Import your product data
import { CPU_PRODUCTS } from "./products_data/pc_components/cpu_data.js";
import { MOTHERBOARD_PRODUCTS } from "./products_data/pc_components/motherboard_data.js";
import { GPU_PRODUCTS } from "./products_data/pc_components/gpu_data.js";
import { PC_COMPONENTS_PRODUCTS } from "./products_data/pc_components/pc_components_data.js";
import { DESKTOP_LAPTOP_PRODUCTS } from "./products_data/pc_components/desktop_laptop_data.js";
import { COMPUTER_ACCESSORIES_PRODUCTS } from "./products_data/pc_components/computer_accessories_data.js";
import { MONITORS_PROJECTORS_PRODUCTS } from "./products_data/pc_components/monitors_projectors_data.js";
import { GAMING_PRODUCTS } from "./products_data/pc_components/gaming_data.js";
import { PRINTERS_SCANNERS_PRODUCTS } from "./products_data/pc_components/printers_scanners_data.js";
import { SOFTWARE_PRODUCTS } from "./products_data/pc_components/software_data.js";
import { SERVERS_WORKSTATIONS_PRODUCTS } from "./products_data/pc_components/servers_workstations_data.js";
import { STORAGE_DEVICES_PRODUCTS } from "./products_data/pc_components/storage_devices_data.js";
import { NETWORKING_9ETOWRSQ_PRODUCTS } from "./products_data/pc_components/networking_9etOWRsq_data.js";
import { POS_HARDWARE_PRODUCTS } from "./products_data/pc_components/pos_hardware_data.js";
import { UPS_BATTERIES_PRODUCTS } from "./products_data/pc_components/ups_batteries_data.js";

// --- Mock Data (Moved outside for better memoization) ---
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
// --- End Mock Data ---

const AppContent = () => {
  // Moved state initialization here
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [selectedSub, setSelectedSub] = useState("Processors");

  // Memoize ALL_PRODUCTS so it's only created once.
  const ALL_PRODUCTS = useMemo(() => {
    return [...CPU_PRODUCTS, ...MOTHERBOARD_PRODUCTS, ...GPU_PRODUCTS];
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Logic for Displaying Products ---
  let activeProducts;

  if (selectedSub === "Processors") {
    activeProducts = CPU_PRODUCTS;
  } else if (selectedSub === "Motherboards") {
    activeProducts = MOTHERBOARD_PRODUCTS;
  } else if (selectedSub === "Video & Graphics Cards") {
    activeProducts = GPU_PRODUCTS;
  } else if (selectedSub === "PC Components") {
    activeProducts = PC_COMPONENTS_PRODUCTS;
  } else if (selectedSub === "Desktop & Laptop") {
    activeProducts = DESKTOP_LAPTOP_PRODUCTS;
  } else if (selectedSub === "Computer Accessories") {
    activeProducts = COMPUTER_ACCESSORIES_PRODUCTS;
  } else if (selectedSub === "Monitors & Projectors") {
    activeProducts = MONITORS_PROJECTORS_PRODUCTS;
  } else if (selectedSub === "Gaming") {
    activeProducts = GAMING_PRODUCTS;
  } else if (selectedSub === "Printers & Scanners") {
    activeProducts = PRINTERS_SCANNERS_PRODUCTS;
  } else if (selectedSub === "Games & Software") {
    activeProducts = SOFTWARE_PRODUCTS;
  } else if (selectedSub === "Servers & Workstations") {
    activeProducts = SERVERS_WORKSTATIONS_PRODUCTS;
  } else if (selectedSub === "Storage & Devices") {
    activeProducts = STORAGE_DEVICES_PRODUCTS;
  } else if (selectedSub === "Networking") {
    activeProducts = NETWORKING_9ETOWRSQ_PRODUCTS;
  } else if (selectedSub === "POS Hardware") {
    activeProducts = POS_HARDWARE_PRODUCTS;
  } else if (selectedSub === "UPS & Batteries") {
    activeProducts = UPS_BATTERIES_PRODUCTS;
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

  // The component responsible for the Product LISTING page view
  const ProductListingPage = () => (
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
  );

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-slate-800 font-sans selection:bg-[#C5A059]/30 selection:text-[#8a6d32]">
      <Titlebar />
      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Routes>
        {/* 1. Route for the main product listing page (Home) */}
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<ProductListingPage />} />

        {/* 2. Dynamic Route for a single product page */}
        <Route
          path="/product/:id"
          element={<ProductDisplayPage ALL_PRODUCTS={ALL_PRODUCTS} />}
        />

        {/* Optional: Add a route for non-product pages, e.g., /about */}
        {/* <Route path="/about" element={<div>About Us</div>} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
