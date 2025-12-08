// import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useCart } from "../context/CartContext";   

// import cr7 from '../assets/cr7.webp'
// import grip from '../assets/grip.jpg'
// import proshocks from '../assets/proshocks.webp'
// import adishin from '../assets/adishin.jpg';
// import shin from '../assets/shin.webp'
// import adidas from '../assets/adidas.avif'
// import nike from '../assets/nike.avif'
// import madrid from '../assets/madrid.avif'
// import glow from '../assets/glow.jpg'
// import adiglow from '../assets/adiglow.jpg'
// import cones from '../assets/cones.jpg'
// import band from '../assets/band.jpg'

// function ShopPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   const { addToCart } = useCart();   

//   const products = [
//     { id: 1, name: "Real Madrid 24/25 Jersey", price: 1299, category: "Jersey", image: madrid },
//     { id: 2, name: "Portugal Ronaldo Jersey", price: 1499, category: "Jersey", image: cr7 },
//     { id: 3, name: "Nike Mercurial Vapor", price: 3999, category: "Boots", image: nike },
//     { id: 4, name: "Adidas Predator 2024", price: 3599, category: "Boots", image: adidas },
//     { id: 5, name: "Pro Football Socks", price: 299, category: "Socks", image: grip },
//     { id: 6, name: "Long Football Socks", price: 249, category: "Socks", image: proshocks },
//     { id: 7, name: "Nike Shin Guard Pro", price: 699, category: "Shin Pads", image: shin },
//     { id: 8, name: "Adidas Lite Shin Pad", price: 599, category: "Shin Pads", image: adishin },
//     { id: 9, name: "Goalkeeper Gloves GripX", price: 1299, category: "Gloves", image: glow },
//     { id: 10, name: "Adidas Keeper Gloves", price: 1499, category: "Gloves", image: adiglow },
//     { id: 11, name: "Football Training Cone Set", price: 499, category: "Accessories", image: cones },
//     { id: 12, name: "Resistance Training Bands", price: 699, category: "Accessories", image: band },
//   ];

//   const categories = ["All", "Jersey", "Boots", "Socks", "Shin Pads", "Gloves", "Accessories"];

//   const filtered = products.filter((p) => {
//     return (
//       (category === "All" || p.category === category) &&
//       p.name.toLowerCase().includes(search.toLowerCase())
//     );
//   });

//   return (
//     <div>
//       <Header /> <br /> <br /> <br /> <br />

//       <div className="min-h-screen p-6 bg-gray-100">
//         <h1 className="mb-6 text-4xl font-bold text-center"> <span className="text-green-500">Kick</span> Zone Shop</h1>

//         {/* Search & Filters */}
//         <div className="flex flex-col items-center justify-between gap-4 mb-6 md:flex-row">
//           <input
//             type="text"
//             className="w-full p-3 border shadow md:w-1/3 rounded-xl"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <select
//             className="p-3 border shadow rounded-xl"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             {categories.map((c) => (
//               <option key={c}>{c}</option>
//             ))}
//           </select>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
//           {filtered.map((product) => (
//             <div key={product.id} className="overflow-hidden transition bg-white shadow-lg rounded-2xl hover:shadow-2xl">
//               <img src={product.image} className="object-cover w-full h-56 transition duration-500 hover:scale-105" />

//               <div className="p-4">
//                 <h2 className="text-lg font-semibold">{product.name}</h2>
//                 <p className="mt-1 font-bold text-green-600">₹{product.price}</p>

//                 <button
//                   onClick={() => addToCart(product)}   
//                   className="w-full p-2 mt-3 text-white bg-green-700 rounded-xl"
//                 >
//                  Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default ShopPage;
// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {products.map((p) => (
        <div key={p._id} className="flex flex-col p-4 border rounded shadow">
          <img
            src={`http://localhost:5000${encodeURI(p.image || "")}`}
            alt={p.name}
            className="object-cover w-full h-40 mb-2"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />

          <h3 className="text-lg font-bold">{p.name}</h3>
          <p className="flex-1 text-sm text-gray-700">{p.description}</p>
          <p className="my-2 font-semibold">₹ {p.price}</p>

          {/* View Details button */}
          <button
            className="px-3 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            onClick={() => navigate(`/product?id=${p._id}`)}
          >
            View details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;