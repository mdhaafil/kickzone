
import { useState } from "react";
import axios from "axios";
import { PackagePlus } from "lucide-react";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      if (image) formData.append("image", image);

      await axios.post("http://localhost:5000/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Product added successfully 🎉");

      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
      });
      setImage(null);
    } catch (error) {
      setMessage(error.response?.data?.error || "Failed to add product ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-b from-green-50 to-gray-200">
      <div className="w-full max-w-3xl border shadow-2xl backdrop-blur-xl bg-white/70 rounded-2xl border-white/40">

        {/* Header Section */}
        <div className="flex items-center gap-3 p-6 text-white bg-gradient-to-r from-green-600 to-green-400 rounded-t-2xl">
          <PackagePlus size={32} />
          <h1 className="text-2xl font-bold tracking-wide">Add New Product</h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleAddProduct} className="p-8 space-y-8">

          {message && (
            <p className="p-3 text-center text-green-700 bg-green-100 rounded-lg shadow-sm">
              {message}
            </p>
          )}

          {/* Product Info */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-gray-700">
              Product Information
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Product Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />

              <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            <textarea
              placeholder="Product Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full p-3 mt-4 border rounded-lg shadow-sm resize-none h-28 focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-gray-700">
              Category
            </h2>

            <input
              type="text"
              placeholder="Enter Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-gray-700">
              Upload Product Image
            </h2>

            <div className="p-6 text-center transition border-2 border-green-400 border-dashed rounded-xl bg-green-50 hover:bg-green-100">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full cursor-pointer"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white transition bg-green-600 shadow-md rounded-xl hover:bg-green-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
