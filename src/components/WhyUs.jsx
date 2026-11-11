const items = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Links redirect in under 50ms globally with our edge network.",
  },
  {
    icon: "📊",
    title: "Detailed Analytics",
    desc: "Get real-time click data, locations, devices, and referrers.",
  },
  {
    icon: "💬",
    title: "Custom Links",
    desc: "Create memorable branded links that people actually click.",
  },
  {
    icon: "🌐",
    title: "QR Global",
    desc: "Generate QR codes for every link instantly, download in any format.",
  },
  {
    icon: "🔒",
    title: "Secure",
    desc: "HTTPS everywhere, malware scanning, and link expiration controls.",
  },
  {
    icon: "⚙️",
    title: "API Powered",
    desc: "Full REST API to integrate link shortening into your own apps.",
  },
];

import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

export default function WhyUs() {
  const { ref, visible } = useAnimateOnScroll();
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            ref={ref}
            className={`text-2xl font-bold text-gray-900 mb-2 opacity-0-init ${visible ? "animate-fade-up" : ""}`}
          >
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-400 text-sm">Built for speed, scale, and simplicity.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-all duration-200 group"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-indigo-700 transition-colors">{item.title}</div>
              <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
