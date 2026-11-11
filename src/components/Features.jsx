const features = [
  "Custom branded domains",
  "Detailed click analytics",
  "QR code generation",
  "Link expiration dates",
  "Team collaboration",
  "API access",
];

import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

export default function Features() {
  const { ref, visible } = useAnimateOnScroll();
  return (
    <section className="py-14 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-3">Pro Features</div>
          <h2
            ref={ref}
            className={`text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug opacity-0-init ${visible ? "animate-fade-up" : ""}`}
          >
            Unlock powerful tools for serious growth.
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Everything you need to manage links at scale — from campaign tracking to branded domains and team workflows.
          </p>
          <ul className="space-y-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-4 h-4 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <div className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Link Performance</div>
          {["Campaign A", "Product Launch", "Newsletter", "Social Media"].map((name, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>{name}</span>
                <span className="font-medium text-indigo-600">{[87, 64, 52, 38][i]}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full transition-all duration-700"
                  style={{ width: `${[87, 64, 52, 38][i]}%` }}
                ></div>
              </div>
            </div>
          ))}
          <div className="mt-4 flex justify-between text-xs text-gray-400 border-t border-gray-100 pt-3">
            <span>Total Clicks: 24.3k</span>
            <span className="text-green-500 font-medium">↑ 18% this week</span>
          </div>
        </div>
      </div>
    </section>
  );
}
