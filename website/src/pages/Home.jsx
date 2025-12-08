


import { motion } from "framer-motion";
import { Link } from "react-router-dom";


// Import your images
import back from "../assets/back.jpg";
import TrainingKit from "../assets/TrainingKit.jpg";
import Jerseys from "../assets/jerseys.jpeg";
import Accessories from "../assets/glow.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header /> <br /> <br /> <br />
      
   
    <div className="w-full bg-white">

      {/* ===============================
          HERO SECTION
      =============================== */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center">
        
        {/* Background Image */}
        <img
          src={back}
          alt="Sports Banner"
          className="absolute top-0 left-0 object-cover w-full h-full opacity-90"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative px-4 text-center text-white"
        >
          <h1 className="text-5xl font-extrabold md:text-7xl drop-shadow-lg">
            KICKZONE
          </h1>

          <p className="mt-4 text-xl font-light md:text-2xl">
            Premium Sportswear & Training Gear
          </p>

          <div className="flex justify-center gap-6 mt-8">
            <Link
              to="/shop"
              className="px-8 py-3 text-lg font-semibold transition bg-green-500 rounded-full shadow-md hover:bg-green-600"
            >
              Shop Now
            </Link>

            {/* <Link
              to="/cart"
              className="px-8 py-3 text-lg text-green-700 transition bg-white border border-white rounded-full hover:bg-gray-100"
            >
              View Cart
            </Link> */}
          </div>
        </motion.div>

      </section>



      {/* ===============================
          FEATURE CATEGORIES
      =============================== */}
      <section className="px-6 py-20 bg-gray-50">
        <h2 className="mb-12 text-4xl font-bold text-center text-green-700">
          Explore Our Collections
        </h2>

        <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-3">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden transition bg-white shadow-lg rounded-xl hover:scale-105"
          >
            <img src={TrainingKit} className="object-cover w-full h-64" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700">Training Kits</h3>
              <p className="mt-2 text-gray-600">
                Lightweight, breathable and made for peak performance.
              </p>
              <Link
                to="/shop"
                className="inline-block mt-4 font-semibold text-green-600 hover:underline"
              >
                Shop Now →
              </Link>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden transition bg-white shadow-lg rounded-xl hover:scale-105"
          >
            <img src={Jerseys} className="object-cover w-full h-64" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700">Jerseys</h3>
              <p className="mt-2 text-gray-600">
                Sweat-resistant fabrics designed for athletes.
              </p>
              <Link
                to="/shop"
                className="inline-block mt-4 font-semibold text-green-600 hover:underline"
              >
                Shop Now →
              </Link>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="overflow-hidden transition bg-white shadow-lg rounded-xl hover:scale-105"
          >
            <img src={Accessories} className="object-cover w-full h-64" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700">Accessories</h3>
              <p className="mt-2 text-gray-600">
                Socks, bags, sleeves, whistles & many more.
              </p>
              <Link
                to="/shop"
                className="inline-block mt-4 font-semibold text-green-600 hover:underline"
              >
                Shop Now →
              </Link>
            </div>
          </motion.div>

        </div>
      </section>



      {/* ===============================
          BANNER STRIP
      =============================== */}
      <section className="py-16 text-center text-white bg-gradient-to-r from-green-700 to-green-500">
        <h2 className="text-3xl font-semibold">Top Quality. Best Prices.</h2>
        <p className="mt-3 text-lg">Trusted by athletes across India.</p>
      </section>



      {/* ===============================
          WHY CHOOSE US
      =============================== */}
      <section className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-14">
          Why Choose KickZone?
        </h2>

        <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-3">

          {[ 
            ["⚡ Fast Delivery", "Get your orders quickly across India."],
            ["🛡 Premium Quality", "Tested, durable & athlete-approved gear."],
            ["💰 Best Pricing", "Premium products at affordable rates."],
          ].map(([title, desc], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="p-10 text-center transition bg-white shadow-md rounded-2xl hover:shadow-xl"
            >
              <div className="text-4xl">{title.split(" ")[0]}</div>
              <h3 className="mt-3 text-xl font-bold text-green-700">
                {title.replace(/⚡|🛡|💰/, "")}
              </h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </motion.div>
          ))}

        </div>
      </section>



      {/* ===============================
          CTA SECTION
      =============================== */}
      <section className="py-20 text-center text-white bg-green-700">
        <h2 className="text-4xl font-extrabold">
          Ready to Upgrade Your Game?
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Shop now & experience true athletic comfort.
        </p>

        <Link
          to="/shop"
          className="inline-block px-10 py-3 mt-8 text-lg font-semibold text-green-700 transition bg-white rounded-full hover:bg-gray-100"
        >
          Explore Products
        </Link>
      </section>

    </div>
    <Footer />
     </div>
  );
}
