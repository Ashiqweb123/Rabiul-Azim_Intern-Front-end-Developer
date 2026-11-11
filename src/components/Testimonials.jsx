const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "Shortify has completely transformed how we manage our campaign links. The analytics are incredibly detailed.",
    rating: 5,
  },
  {
    name: "Alex Chen",
    role: "Content Creator",
    text: "I use this for all my social media links. Super fast, clean, and the QR codes are a game changer.",
    rating: 5,
  },
  {
    name: "Mike Torres",
    role: "Growth Hacker",
    text: "Best link management tool I've used. The branded domains feature alone is worth every penny.",
    rating: 5,
  },
];

import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

export default function Testimonials() {
  const { ref, visible } = useAnimateOnScroll();
  return (
    <section className="py-14 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-2">Testimonials</div>
          <h2
            ref={ref}
            className={`text-2xl font-bold text-gray-900 opacity-0-init ${visible ? "animate-fade-up" : ""}`}
          >
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200">
              <div className="flex gap-0.5 mb-3">
                {Array(t.rating).fill(0).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xs">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
