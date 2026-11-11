const links = [
  { url: "https://example.com/my-very-long-url-that-needs-shortening", short: "shrt.ly/abc1", clicks: "12.4k", today: "340" },
  { url: "https://marketing.site/summer-campaign-landing-page-2024", short: "shrt.ly/xyz2", clicks: "9.1k", today: "210" },
  { url: "https://blog.company.com/top-10-tips-for-productivity", short: "shrt.ly/tip3", clicks: "7.8k", today: "189" },
  { url: "https://store.example.com/products/best-sellers-collection", short: "shrt.ly/sel4", clicks: "5.2k", today: "95" },
  { url: "https://events.platform.io/webinar-register-now-2024", short: "shrt.ly/web5", clicks: "3.9k", today: "67" },
];

import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

export default function PopularLinks() {
  const { ref, visible } = useAnimateOnScroll();
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2
            ref={ref}
            className={`text-2xl font-bold text-gray-900 mb-2 opacity-0-init ${visible ? "animate-fade-up" : ""}`}
          >
            Most Popular Links
          </h2>
          <p className="text-gray-400 text-sm">Track your top performing short links in real time</p>
        </div>

        <div className="space-y-3">
          {links.map((link, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white hover:bg-blue-600 border border-gray-100 hover:border-blue-600 rounded-xl px-4 py-3 transition-all duration-200 group"
            >
              <div className="flex-1 min-w-0 mr-4">
                <div className="text-indigo-600 text-sm font-medium group-hover:text-white">{link.short}</div>
                <div className="text-gray-400 text-xs truncate mt-0.5 group-hover:text-blue-200">{link.url}</div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-gray-500 hidden sm:block group-hover:text-blue-200">{link.clicks} total</span>
                <span className="bg-indigo-100 text-indigo-600 group-hover:bg-white group-hover:text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full transition-colors">{link.today}</span>
                <button className="text-gray-300 hover:text-red-400 text-xs transition-colors">✕</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
