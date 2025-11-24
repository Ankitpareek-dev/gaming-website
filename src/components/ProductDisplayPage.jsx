// ProductDisplayPage.jsx
import { React, useMemo } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { ShoppingCart, Heart, Star } from "lucide-react";
import { CPU_PRODUCTS } from "../products_data/pc_components/cpu_data.js";
import { MOTHERBOARD_PRODUCTS } from "../products_data/pc_components/motherboard_data.js";
// In a real application, ALL_PRODUCTS would be imported from a central data file
// or fetched from an API. For this example, we'll simulate the combined list.
// const ALL_PRODUCTS = [
//   // ... all your motherboards and CPUs here (example below)
//   {
//     id: 65,
//     title: "MSI MPG B550 Gaming Carbon WIFI ATX AMD Motherboard",
//     price: 570.0,
//     image: "...",
//     rating: 4,
//     isNew: false,
//   },
//   {
//     id: 8,
//     title: "Intel Core I9-9900X 3.5 GHz Ten-Core LGA 2066 Processor",
//     price: 4189.0,
//     image: "...",
//     rating: 5,
//     isNew: true,
//   },
//   // ... rest of the products
// ];

const GOLD_BG = "bg-[#C5A059]";

const ProductDisplayPage = () => {
  // 1. Get the product ID from the URL
  const { id } = useParams();

  // 2. Find the product in the global list
  // Note: We use parseInt() because URL parameters are strings
  const ALL_PRODUCTS = useMemo(() => {
    return [...CPU_PRODUCTS, ...MOTHERBOARD_PRODUCTS];
  }, []);
  const product = ALL_PRODUCTS.find((p) => p.id === parseInt(id));

  // 3. Handle case where product is not found
  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500">
          Product Not Found 😔
        </h1>
        <p className="mt-4 text-slate-600">
          The requested product with ID: **{id}** does not exist.
        </p>
      </div>
    );
  }

  // 4. Render the product details
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image Gallery (Simple view) */}
        <div className="bg-slate-50 p-8 rounded-xl flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[60vh] max-w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
              {product.id > 1000 ? "Motherboard" : "Processor"} Details
            </span>
            <button className="text-slate-400 hover:text-red-500 transition-colors">
              <Heart size={24} />
            </button>
          </div>

          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            {product.title}
          </h1>

          {/* Price and Rating */}
          <div className="flex items-center mb-6 border-b border-slate-100 pb-6">
            <span className="text-3xl font-black text-slate-900 mr-6">
              <span className="text-lg font-medium text-slate-400 mr-1">
                AED
              </span>
              {product.price.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
              <span className="text-sm font-medium text-slate-400">.00</span>
            </span>
            <div className="flex items-center">
              <div className="flex text-[#C5A059] text-md gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < (product.rating || 0) ? "currentColor" : "none"}
                    strokeWidth={2.5}
                    className={
                      i >= (product.rating || 0) ? "text-slate-300" : ""
                    }
                  />
                ))}
              </div>
              <span className="text-slate-400 text-xs font-semibold ml-3">
                {product.rating > 0 ? "12 Reviews" : "No Reviews"}
              </span>
            </div>
          </div>

          {/* Description/Specs Placeholder */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Key Specifications
            </h2>
            <ul className="space-y-2 text-slate-600">
              <li>
                <span className="font-semibold">ID:</span> {product.id}
              </li>
              <li>
                <span className="font-semibold">Condition:</span>{" "}
                {product.isNew ? (
                  <span
                    className={`${GOLD_BG} text-white px-2 py-0.5 rounded-md`}
                  >
                    Brand New
                  </span>
                ) : (
                  "Used"
                )}
              </li>
              <li>
                <span className="font-semibold">Status:</span> In Stock
                (Simulated)
              </li>
              <li>
                <span className="font-semibold">Category:</span>{" "}
                {product.title.includes("Motherboard")
                  ? "Motherboard"
                  : "Processor"}
              </li>
              {/* Add more dynamic specs here based on product object */}
            </ul>
          </div>

          {/* Action Button */}
          <button
            className={`mt-auto w-full max-w-xs py-3 rounded-full flex items-center justify-center text-white text-lg font-bold uppercase transition-all duration-300 ${GOLD_BG} hover:brightness-110 shadow-xl shadow-[#C5A059]/40`}
          >
            <ShoppingCart size={20} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayPage;
