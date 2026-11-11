const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    desc: "Perfect for personal use",
    features: ["50 links/month", "Basic analytics", "Standard support", "5 custom slugs"],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$8",
    period: "/mo",
    desc: "For creators and marketers",
    features: ["Unlimited links", "Advanced analytics", "Custom domains", "QR codes", "Priority support", "Team access", "API access"],
    cta: "Start Pro Trial →",
    highlight: true,
  },
  {
    name: "Business",
    price: "$29",
    period: "/mo",
    desc: "For growing teams",
    features: ["Everything in Pro", "5 team members", "White-label links", "Dedicated support", "SSO login"],
    cta: "Start Business Trial",
    highlight: false,
  },
];

import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

export default function Pricing() {
  const { ref, visible } = useAnimateOnScroll();
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            ref={ref}
            className={`text-2xl md:text-3xl font-bold text-gray-900 mb-2 opacity-0-init ${visible ? "animate-fade-up" : ""}`}
          >
            Simple, transparent pricing.
          </h2>
          <p className="text-gray-400 text-sm">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 flex flex-col transition-all duration-200 hover:shadow-lg group ${
                plan.highlight
                  ? "bg-indigo-600 border-indigo-600 text-white scale-[1.02] shadow-xl shadow-indigo-200"
                  : "bg-white border-gray-100 text-gray-800 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
              }`}
            >
              <div className="mb-4">
                {plan.highlight && (
                  <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-medium mb-2 inline-block">Most Popular</span>
                )}
                <div className={`text-sm font-semibold mb-1 ${plan.highlight ? "text-indigo-200" : "text-indigo-600 group-hover:text-blue-200"}`}>{plan.name}</div>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-indigo-200" : "text-gray-400"}`}>{plan.period}</span>
                </div>
                <p className={`text-xs mt-1 ${plan.highlight ? "text-indigo-200" : "text-gray-400 group-hover:text-blue-200"}`}>{plan.desc}</p>
              </div>

              <ul className="space-y-2 flex-1 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-2 text-xs ${plan.highlight ? "text-indigo-100" : "text-gray-600 group-hover:text-blue-100"}`}>
                    <span className={`text-xs ${plan.highlight ? "text-white" : "text-indigo-500 group-hover:text-white"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "border border-indigo-200 text-indigo-600 group-hover:border-white group-hover:text-blue-600 group-hover:bg-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
