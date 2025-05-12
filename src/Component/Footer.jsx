import React from "react";

// src/Components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary">SubBox</h2>
          <p className="mt-2 text-sm text-gray-400">
            Personalized subscription boxes delivered to your doorstep monthly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/profile" className="hover:text-white">Profile</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Useful */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/terms" className="hover:text-white">Terms</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/mh.ratul9999" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/s_y_z_h/" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SubBox. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



