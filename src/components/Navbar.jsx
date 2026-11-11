import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <span className="font-bold text-gray-800 text-sm">Shortify</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Docs</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Blog</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Log in</button>
          <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
            Get Started
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-5 h-0.5 bg-gray-700 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-5 h-0.5 bg-gray-700 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm text-gray-700">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Blog</a>
          <div className="flex gap-3 pt-2 border-t border-gray-100">
            <button className="text-indigo-600 font-medium">Log in</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
}
