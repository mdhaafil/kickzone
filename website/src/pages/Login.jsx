
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/login", {
        email: form.email,
        password: form.password,
      });

      alert("Login successfully!");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-green-100 to-green-200">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg p-8 bg-white border border-green-300 shadow-xl rounded-2xl"
      >
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-green-700">
          Welcome Back
        </h1>
        <p className="mt-1 mb-6 text-center text-gray-500">
          Login to continue shopping at KickZone.
        </p>

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-2 mb-3 text-sm text-center text-red-600 bg-red-100 rounded"
          >
            {error}
          </motion.p>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 mt-1 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            placeholder="********"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-2 mt-1 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        {/* Login Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700"
        >
          Login
        </motion.button>

        {/* Links */}
        <div className="mt-6 text-sm text-center text-gray-600">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-green-700">
              Register
            </Link>
          </p>

          <Link to="/" className="inline-block mt-2 text-green-600 underline">
            ← Back to Home
          </Link>
        </div>
      </motion.form>
    </div>
  );
};

export default Login;
