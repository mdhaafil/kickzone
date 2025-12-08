
import Header from "../components/Header";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      <Header /> <br /> <br /> <br />
      
    
    <div className="bg-white">
      {/* Header Section */}
      <section className="px-6 py-20 text-center text-white bg-green-600">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold md:text-5xl"
        >
          Contact KickZone
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-white/90"
        >
          We're always here to help. Contact us anytime!
        </motion.p>
      </section>

      {/* Owner Information */}
      <section className="max-w-5xl px-6 py-16 mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-3xl font-bold text-center text-green-700"
        >
          Owners & Support Team
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Owner 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 border shadow-lg rounded-xl bg-green-50"
          >
            <h3 className="text-2xl font-bold text-green-800">Mohammed Haafil</h3>
            <p className="mt-1 text-gray-600">Founder & Head of Operations</p>
            <p className="mt-3 text-gray-700">
              Oversees all product sourcing, supplier management, and strategic decisions for KickZone.
            </p>
            <p className="mt-3 font-semibold text-green-700">📞 +91 XXXXX XXXXX</p>
            <p className="font-semibold text-green-700">📧 haafil@kickzone.com</p>
          </motion.div>

          {/* Owner 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 border shadow-lg rounded-xl bg-green-50"
          >
            <h3 className="text-2xl font-bold text-green-800">Zeeshan Khan</h3>
            <p className="mt-1 text-gray-600">Co-Founder & Customer Support Head</p>
            <p className="mt-3 text-gray-700">
              Manages customer service, returns, order tracking, and all customer satisfaction operations.
            </p>
            <p className="mt-3 font-semibold text-green-700">📞 +91 XXXXX XXXXX</p>
            <p className="font-semibold text-green-700">📧 support@kickzone.com</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="px-6 py-16 bg-gray-100">
        <h2 className="mb-10 text-3xl font-bold text-center text-green-700">
          Ways to Reach Us
        </h2>

        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border shadow-md rounded-xl"
          >
            <h3 className="text-xl font-semibold text-green-800">📞 Phone</h3>
            <p className="mt-2 text-gray-600">Call us anytime between 9am–8pm.</p>
            <p className="mt-4 text-lg font-semibold text-green-700">
              +91 98765 43210
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border shadow-md rounded-xl"
          >
            <h3 className="text-xl font-semibold text-green-800">📧 Email</h3>
            <p className="mt-2 text-gray-600">We reply within 24 hours.</p>
            <p className="mt-4 text-lg font-semibold text-green-700">
              support@kickzone.com
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border shadow-md rounded-xl"
          >
            <h3 className="text-xl font-semibold text-green-800">📍 Location</h3>
            <p className="mt-2 text-gray-600">
              Tamil Nadu, India – KickZone Warehouse & Office
            </p>
          </motion.div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl px-6 py-20 mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 text-3xl font-bold text-center text-green-700"
        >
          Send Us a Message
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-white border shadow-lg rounded-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <textarea
            placeholder="Your Message..."
            rows="5"
            className="w-full p-3 mt-6 border rounded-lg"
          ></textarea>

          <button className="px-6 py-3 mt-6 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700">
            Send Message
          </button>
        </motion.form>
      </section>
    </div>
    <Footer />
    </div>
  );
}

