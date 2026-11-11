export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <span className="text-white font-bold text-sm">Shortify</span>
            </div>
            <p className="text-xs leading-relaxed mb-4">The smartest way to shorten, track, and share your links at scale.</p>
            <div className="flex gap-3">
              {["𝕏", "in", "▶", "f"].map((icon, i) => (
                <button key={i} className="w-7 h-7 bg-gray-800 hover:bg-indigo-600 rounded-lg text-xs flex items-center justify-center transition-colors">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {[
            { title: "Product", links: ["Features", "Pricing", "API Docs", "Changelog"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Press Kit"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "GDPR"] },
          ].map((col, i) => (
            <div key={i}>
              <div className="text-white text-xs font-semibold uppercase tracking-wider mb-3">{col.title}</div>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-xs hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs">All rights reserved by Azim</span>
        </div>
      </div>
    </footer>
  );
}
