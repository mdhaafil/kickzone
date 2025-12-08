
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="px-6 pt-12 pb-6 text-gray-300 bg-gray-900">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="mb-4 text-3xl font-bold text-white">
            <span className="text-green-500">Kick</span> Zone
          </h2>
          <p className="leading-relaxed text-gray-400">
            Your one-stop shop for premium sports kits and accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Shop", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="transition-all duration-300 hover:text-green-400 hover:tracking-wider"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Support</h3>
          <ul className="space-y-2">
            {["FAQ", "Shipping", "Returns", "Privacy Policy"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition-all duration-300 hover:text-green-400 hover:tracking-wider"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Join Newsletter</h3>
          <p className="mb-3 text-gray-400">Get updates on new arrivals & offers.</p>

          <div className="flex items-center overflow-hidden bg-gray-800 border border-gray-700 rounded-xl">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 text-white bg-transparent outline-none"
            />
            <button className="px-5 py-2 font-medium text-white transition-all bg-green-600 hover:bg-green-500">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-between gap-4 mx-auto max-w-7xl md:flex-row">

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Sportify Store — All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl">
          {[FiFacebook, FiInstagram, FiTwitter, FiYoutube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 text-white transition-all duration-300 bg-gray-800 rounded-full hover:bg-green-600 hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
