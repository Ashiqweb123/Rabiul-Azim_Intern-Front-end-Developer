const stats = [
  { value: "100K+", label: "Active Users" },
  { value: "1M+", label: "Links Created" },
  { value: "180+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

export default function Stats() {
  return (
    <section className="bg-indigo-600 py-8 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="text-white">
            <div className="text-2xl md:text-3xl font-bold">{s.value}</div>
            <div className="text-indigo-200 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
