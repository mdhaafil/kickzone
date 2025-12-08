
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo1 from '../assets/Logo1.png'

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full text-black bg-white shadow-md ">
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">

          {/* LEFT SECTION: HAMBURGER + LOGO */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="text-black focus:outline-none"
            >
              <Menu size={28} />
            </button>

            {/* Logo */}
            <img src={Logo1} alt=""  className="w-16"/>
          </div>

          {/* RIGHT NAV ITEMS (DESKTOP ONLY) */}
          <nav className="items-center hidden gap-8 font-serif text-lg font-semibold md:flex">
            <Link to="/" className="text-black hover:text-green-600">Home</Link>
            <Link to="/shop" className="text-black hover:text-green-600">Shop</Link>
            <Link to="/about" className="text-black hover:text-green-600">About</Link>
            <Link to="/contact" className="text-black hover:text-green-600">Contact</Link>
            <Link to="/cart" className="text-black hover:text-green-600">Cart</Link>
            <Link
              to="/login"
              className="px-4 py-1 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        ></div>
      )}

      {/* SIDE MENU */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* SIDE MENU LINKS */}
        <ul className="p-5 space-y-6 font-serif text-lg font-semibold">
          <li>
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-green-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setOpen(false)} className="hover:text-green-600">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-green-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-green-600">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setOpen(false)} className="hover:text-green-600">
              Cart
            </Link>
          </li>
           <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <li>
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-center text-white bg-green-600 rounded hover:bg-green-800"
            >
              Admin Page
            </Link>
            
          </li>
        </ul>
      </aside>
    </>
  );
}
