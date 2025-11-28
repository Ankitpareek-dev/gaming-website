// App.jsx
import React, { useState, useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Homepage from "./components/home.jsx";
import ProductDisplayPage from "./components/ProductDisplayPage";
import { theme } from "./components/theme";

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
import ContactPage from "./components/contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx.jsx";

// --- Mock Data ---
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

// slugify: "Games & Software" → "games-software"
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, "") // drop ampersand
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// slug → subcategory name
const slugToSub = {
  processors: "Processors",
  motherboards: "Motherboards",
  "video-graphics-cards": "Video & Graphics Cards",
  "pc-components": "PC Components",
  "desktop-laptop": "Desktop & Laptop",
  "computer-accessories": "Computer Accessories",
  "monitors-projectors": "Monitors & Projectors",
  gaming: "Gaming",
  "printers-scanners": "Printers & Scanners",
  "games-software": "Games & Software",
  "servers-workstations": "Servers & Workstations",
  "storage-devices": "Storage & Devices",
  networking: "Networking",
  "pos-hardware": "POS Hardware",
  "ups-batteries": "UPS & Batteries",
};

// which product list for which subcategory
const getProductsForSub = (selectedSub) => {
  if (selectedSub === "Processors") return PC_COMPONENTS_PRODUCTS;
  // if (selectedSub === "Motherboards") return MOTHERBOARD_PRODUCTS;
  // if (selectedSub === "Video & Graphics Cards") return GPU_PRODUCTS;
  if (selectedSub === "PC Components") return PC_COMPONENTS_PRODUCTS;
  if (selectedSub === "Desktop & Laptop") return DESKTOP_LAPTOP_PRODUCTS;
  if (selectedSub === "Computer Accessories")
    return COMPUTER_ACCESSORIES_PRODUCTS;
  if (selectedSub === "Monitors & Projectors")
    return MONITORS_PROJECTORS_PRODUCTS;
  if (selectedSub === "Gaming") return GAMING_PRODUCTS;
  if (selectedSub === "Printers & Scanners") return PRINTERS_SCANNERS_PRODUCTS;
  if (selectedSub === "Games & Software") return SOFTWARE_PRODUCTS;
  if (selectedSub === "Servers & Workstations")
    return SERVERS_WORKSTATIONS_PRODUCTS;
  if (selectedSub === "Storage & Devices") return STORAGE_DEVICES_PRODUCTS;
  if (selectedSub === "Networking") return NETWORKING_9ETOWRSQ_PRODUCTS;
  if (selectedSub === "POS Hardware") return POS_HARDWARE_PRODUCTS;
  if (selectedSub === "UPS & Batteries") return UPS_BATTERIES_PRODUCTS;
  return ORIGINAL_MOCK;
};

const ITEMS_PER_PAGE = 12;

// 🔹 Listing page: /categories/:subSlug/:page  (page like "pg1", "pg2")
const ProductListingPage = () => {
  const { subSlug, page } = useParams();
  const navigate = useNavigate();

  const selectedSub = slugToSub[subSlug] || "Processors";

  const activeProducts = useMemo(
    () => getProductsForSub(selectedSub),
    [selectedSub]
  );

  // page param is "pg1" / "pg2" → extract number
  const currentPage = React.useMemo(() => {
    const raw = page || "pg1";
    const num = parseInt(raw.replace("pg", ""), 10);
    return Number.isNaN(num) || num < 1 ? 1 : num;
  }, [page]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = activeProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(activeProducts.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    navigate(`/categories/${subSlug}/pg${pageNumber}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubCategorySelect = (subName) => {
    const newSlug = slugify(subName);
    navigate(`/categories/${newSlug}/pg1`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
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
};

// /categories/:subSlug → /categories/:subSlug/pg1
const CategoryRedirect = () => {
  const { subSlug } = useParams();
  return <Navigate to={`/categories/${subSlug}/pg1`} replace />;
};

const AppContent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ALL_PRODUCTS = useMemo(
    () => [...CPU_PRODUCTS, ...MOTHERBOARD_PRODUCTS, ...GPU_PRODUCTS],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen ${theme.colors.bg} ${theme.colors.textMain} font-sans selection:${theme.colors.accentBg} selection:${theme.colors.textOnAccent}`}
    >
      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* /categories → default category + page 1 */}
        <Route
          path="/categories"
          element={<Navigate to="/categories/pc-components/pg1" replace />}
        />

        {/* /categories/:subSlug → redirect to pg1 */}
        <Route path="/categories/:subSlug" element={<CategoryRedirect />} />

        {/* Real listing route with page (pg1, pg2, etc.) */}
        <Route
          path="/categories/:subSlug/:page"
          element={<ProductListingPage />}
        />

        {/* Product detail */}
        <Route
          path="/product/:id"
          element={<ProductDisplayPage ALL_PRODUCTS={ALL_PRODUCTS} />}
        />

        {/* If you use /contact somewhere */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
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
