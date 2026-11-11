import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

export default function Hero() {
  const { ref, visible } = useAnimateOnScroll();
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full mb-6 animate-pulse">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
          Now with QR code generation
        </div>

        <h1
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight opacity-0-init ${visible ? "animate-fade-up" : ""}`}
        >
          Shorten Your URL{" "}
          <span className="text-indigo-600 relative">
            in seconds
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
              <path d="M0 6 Q100 0 200 6" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            </svg>
          </span>
        </h1>

        <p className="text-gray-500 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed">
          Clean, branded short links with powerful analytics. Track clicks, manage campaigns, and grow your audience faster.
        </p>

        {/* URL Input Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-lg mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
          </div>
          <p className="text-gray-700 font-medium text-sm mb-1">Login to make your URL short</p>
          <p className="text-gray-400 text-xs mb-5">Sign in to access analytics, custom slugs, and more from your dashboard.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-100">
              Login to Shorten URL
            </button>
            <button className="flex-1 border border-gray-200 hover:border-indigo-300 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-indigo-50">
              Sign Up Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
