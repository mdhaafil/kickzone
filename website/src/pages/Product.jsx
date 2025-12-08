// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const navigate = useNavigate();


  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");

  // 🔄 States
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    if (!id) {
      setError("No product ID provided");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/product?id=${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Unable to fetch product. Check backend/API.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  if (loading) return <div className="p-6">Loading...</div>;

  if (error) return <div className="p-6 text-red-600">{error}</div>;

  if (!product) return <div className="p-6">Product not found</div>;


  return (
    <div className="max-w-3xl p-6 mx-auto">
      <button
        className="px-3 py-2 mb-4 bg-gray-200 rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <img
        src={`http://localhost:5000${encodeURI(product.image || "")}`}
        alt={product.name}
        className="object-cover w-40 h-40 mb-4 rounded"
      />

      <h2 className="mb-2 text-2xl font-bold">{product.name}</h2>
      <p className="mb-4 text-gray-700">{product.description}</p>

      <p className="mb-1 text-xl font-semibold">₹ {product.price}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
    </div>
  );
};

export default ProductDetails;