import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // ← React icon

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#101234] text-gray-800 px-6 py-8 md:py-16">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white text-sm text-primary hover:underline mb-6 ml-10 text-xl font-medium cursor-pointer"
      >
        <FaArrowLeft size={28} /> Back
      </button>

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl text-white font-bold text-primary mb-4">About FootballFanBox</h1>
        <p className="text-lg text-gray-600 mb-8 text-white">
          Welcome to <span className="font-semibold text-primary">FootballFanBox</span> — the ultimate subscription service for die-hard fans of the world’s top football clubs!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center px-4">
        {[
          { name: "FC Barcelona", emoji: "🔵🔴", desc: "Get exclusive Barca goodies — from Messi-era nostalgia to current stars like Lamine Yamal!" },
          { name: "Real Madrid", emoji: "⚪👑", desc: "Royal merchandise, latest kits, and collectibles of legends like Modric and Bellingham." },
          { name: "Arsenal", emoji: "🔴⚪", desc: "North London pride! Receive Gunners merch, posters & fan-favorite items." },
          { name: "Manchester City", emoji: "🔵⚽", desc: "Cityzens unite! Monthly box full of Haaland, De Bruyne & Pep-era vibes." },
          { name: "Manchester United", emoji: "🔴🖤", desc: "Red Devils gear, from Cantona classics to Rashford fire!" },
          { name: "Atletico Madrid", emoji: "🔴⚪🔥", desc: "Passion and grit – all things Atlético! Suárez era to Simeone spirit." },
        ].map((club, i) => (
          <div key={i} className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">{club.emoji} {club.name}</h2>
            <p className="text-gray-600">{club.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary text-white">How FootballFanBox Works?</h2>
        <p className=" mb-8 text-white">
          Pick your favorite club → Subscribe → Get surprise merch, posters, stickers, kits, and more → Live the fan life every month!
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-6 text-left">
        <div className="bg-primary text-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Why Choose FootballFanBox?</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Official-inspired club gear & fan-made surprises</li>
            <li>Perfect gift for football lovers</li>
            <li>Monthly themes: derby days, legends, UCL nights</li>
            <li>Pause/cancel subscription anytime</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">For True Fans ⚽❤️</h3>
          <p className="text-gray-700">
            Whether you're a Culer, a Madridista, or a Gooner — we got your fan dream covered. Your club. Your passion. Delivered to your doorstep!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
