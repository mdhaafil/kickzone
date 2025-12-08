import Footer from "../components/Footer";
import Header from "../components/Header"

import { 
  FiCheckCircle, 
  FiTarget, 
  FiUsers, 
  FiAward, 
  FiTrendingUp, 
  FiShield, 
  FiUser, 
  FiStar, 
  FiMail 
} from "react-icons/fi";

export default function About() {
  return (
    <div>
      <Header /> <br />
    <div className="w-full min-h-screen bg-gradient-to-b from-green-50 to-white">
      
      {/* HEADER */}
      <section className="max-w-6xl px-6 py-24 mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          About <span className="text-green-600">KickZone</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-gray-600">
          KickZone is India’s fastest-growing footwear destination, designed to deliver
          high-quality, comfortable, and stylish shoes at pocket-friendly prices.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="grid max-w-6xl px-6 mx-auto py-14 md:grid-cols-2 gap-14">
        
        <Card
          icon={<FiTarget className="text-5xl text-green-600" />}
          title="Our Mission"
          desc="To deliver premium, durable, and stylish footwear for every Indian while maintaining affordability and comfort as our highest priority."
        />

        <Card
          icon={<FiTrendingUp className="text-5xl text-green-600" />}
          title="Our Vision"
          desc="To become India’s most trusted footwear marketplace with innovation, sustainability, and unmatched customer experience."
        />

      </section>

      {/* OWNER / FOUNDER SECTION */}
      <section className="py-20 text-white bg-green-600">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-4xl font-bold">Meet Our Founder</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-green-100">
            KickZone is not just a business — it’s a vision built with passion, dedication,
            and a dream to make quality footwear affordable for everyone.
          </p>

          <div className="max-w-3xl p-10 mx-auto border border-green-300 shadow-lg mt-14 bg-white/10 rounded-2xl backdrop-blur-xl">
            
            <FiUser className="mx-auto mb-4 text-6xl text-white" />

            <h3 className="text-3xl font-semibold">Mohammed Haafil</h3>

            <p className="mt-3 text-lg text-green-100">
              Founder & CEO — KickZone
            </p>

            <div className="mt-6 text-lg leading-relaxed text-green-50">
              Haafil started KickZone with a mission to break the gap between premium quality
              and affordability. From researching materials to personally testing products,
              his dedication ensures KickZone delivers nothing but the best.
              <br/><br/>
              His goal is simple —  
              <span className="font-semibold text-white">
                “Quality shoes shouldn’t be a luxury. Everyone deserves comfort.”
              </span>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <Info icon={<FiStar />} label="Young Entrepreneur" />
              <Info icon={<FiAward />} label="Quality Focused" />
              <Info icon={<FiMail />} label="Customer Friendly" />
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>

          <div className="grid gap-10 mt-16 md:grid-cols-3">
            <ValueCard icon={<FiShield />} title="Trust & Quality" desc="We ensure every product meets strict quality standards." />
            <ValueCard icon={<FiUsers />} title="Customer First" desc="Your comfort and satisfaction guide every decision." />
            <ValueCard icon={<FiAward />} title="Excellence" desc="We constantly innovate to bring you the best footwear." />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl px-6 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          The KickZone Journey
        </h2>

        <p className="max-w-4xl mx-auto mt-6 text-lg leading-relaxed text-center text-gray-600">
          KickZone began with one simple idea — making good footwear accessible to everyone.
          From humble beginnings to a fast-growing online store, we have built our brand
          with honesty, quality, and customer trust.
          <br /><br />
          Every shoe we deliver reflects our values and commitment.  
          We are constantly expanding our collection with new styles,
          improved materials, and the best comfort experience.
        </p>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Why Customers Choose KickZone
          </h2>

          <div className="grid gap-10 mt-16 md:grid-cols-2">
            <Why text="Comfort-first footwear designed for daily use." />
            <Why text="Premium materials at an affordable price." />
            <Why text="Eco-friendly packaging & modern designs." />
            <Why text="Secure delivery and easy returns." />
            <Why text="Thousands of happy customers across India." />
            <Why text="Responsive support team, 7 days a week." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-green-50">
        <h2 className="text-4xl font-bold text-gray-900">
          Step Into Comfort With KickZone
        </h2>
        <p className="max-w-2xl mx-auto mt-3 text-lg text-gray-600">
          Explore a world where comfort, durability, and style blend together.
        </p>
        <a
          href="/shop"
          className="inline-block px-10 py-3 mt-6 text-lg font-medium text-white transition bg-green-600 rounded-xl hover:bg-green-700"
        >
          Shop Now
        </a>
      </section>
    </div>
    <Footer />
    </div>
  );
}

/* --- Reusable Components --- */

function Card({ icon, title, desc }) {
  return (
    <div className="p-8 transition bg-white border border-green-100 shadow-md rounded-2xl hover:shadow-lg">
      <div className="mb-4">{icon}</div>
      <h2 className="mb-2 text-3xl font-bold text-gray-900">{title}</h2>
      <p className="text-lg leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="p-8 text-center transition bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md">
      <div className="mx-auto mb-4 text-5xl text-green-600">{icon}</div>
      <h3 className="mb-2 text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-lg text-gray-600">{desc}</p>
    </div>
  );
}

function Why({ text }) {
  return (
    <p className="flex items-center gap-3 p-5 text-lg text-gray-700 transition border border-gray-200 shadow-sm bg-gray-50 rounded-xl hover:shadow-md">
      <FiCheckCircle className="text-2xl text-green-600" />
      {text}
    </p>
  );
}

function Info({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl">{icon}</div>
      <p className="text-green-50">{label}</p>
    </div>
    
    
  );
}
