export default function LandingPage() {
  return (
    <main className="bg-black text-white pt-24">

      {/* ================= HERO ================= */}
      <section
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2000&q=60')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl leading-tight">
            The Latest in Fashion — <span className="text-fuchsia-400">Starting from India</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl leading-relaxed">
            World Fashion Now curates fashion intelligence — from Delhi and Mumbai street style
            to Paris, Milan, New York and Tokyo runways.
          </p>

          <div className="mt-8">
            <a
              href="/fashion-guide"
              className="inline-block bg-fuchsia-500 hover:bg-fuchsia-400 px-8 py-3 rounded-full font-medium"
            >
              Explore Fashion Guide →
            </a>
          </div>
        </div>
      </section>

      {/* ================= INDIA FASHION ================= */}
      <section className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-semibold">Latest Fashion from India</h2>

            <p className="mt-4 text-gray-300 leading-relaxed max-w-xl">
              India is one of the fastest-growing apparel markets, driven by youth culture,
              creators and powerful regional styles.
            </p>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>City trends: Delhi, Mumbai, Bangalore, emerging metros</li>
              <li>Coverage of designers, boutique labels & streetwear</li>
              <li>Wardrobe guides: sari drapes, bridalwear, modern formals</li>
              <li>Craft heritage: Banarasi, Kanjeevaram, Ajrakh, Bandhani</li>
            </ul>

            <a
              href="/india-fashion-guide"
              className="mt-6 inline-block text-fuchsia-400 hover:text-fuchsia-300 font-medium"
            >
              Explore India Fashion →
            </a>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-96 object-cover object-top"
              alt="Indian fashion"
            />
          </div>

        </div>
      </section>

      {/* ================= GLOBAL TRENDS ================= */}
      <section className="py-24 border-t border-white/10 bg-gradient-to-b from-black to-[#0b0b0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-3xl font-semibold">Runways, Street Style & Global Trends</h2>

              <p className="mt-4 text-gray-300 max-w-xl">
                The USD 1.7 trillion global apparel market evolves fast — we decode silhouettes,
                colours, fabrics and cultural shifts.
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>Trend mapping: silhouettes, fabrics, colours</li>
                <li>Street style insights from global fashion cities</li>
                <li>How trends adapt for India and emerging markets</li>
                <li>Seasonal investments vs fast-fade trends</li>
              </ul>

              <a
                href="/global-fashion-trends"
                className="mt-6 inline-block text-fuchsia-400 hover:text-fuchsia-300 font-medium"
              >
                See Global Trends →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1520974592268-6fbc3ac0f2c1?auto=format&fit=crop&w=800&q=60"
                className="rounded-lg shadow-lg object-cover h-56"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=800&q=60"
                className="rounded-lg shadow-lg object-cover h-56"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=60"
                className="rounded-lg shadow-lg object-cover h-56"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1517321574553-692ec2b364aa?auto=format&fit=crop&w=800&q=60"
                className="rounded-lg shadow-lg object-cover h-56"
                alt=""
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= FASHION GUIDE ================= */}
      <section className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text */}
            <div>
              <h2 className="text-3xl font-semibold">Build a Wardrobe That Works</h2>

              <p className="mt-4 text-gray-300 max-w-xl">
                Not seasonal hype — real frameworks for everyday style.
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>Capsule wardrobes for work & events</li>
                <li>Essentials for men, women & neutral styles</li>
                <li>Accessories that multiply outfit options</li>
                <li>Care & tailoring for longevity</li>
              </ul>

              <a
                href="/fashion-guide"
                className="mt-6 inline-block text-fuchsia-400 hover:text-fuchsia-300 font-medium"
              >
                Read Fashion Guide →
              </a>
            </div>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1200&q=60"
              className="rounded-xl shadow-xl object-cover h-96"
              alt="Wardrobe guide"
            />

          </div>

        </div>
      </section>

      {/* ================= SUSTAINABILITY ================= */}
      <section className="py-20 border-t border-white/10 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=60"
                className="object-cover h-96 w-full"
                alt="Sustainable fashion"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl font-semibold">Sustainability & Responsible Fashion</h2>
              <p className="mt-4 text-gray-300 max-w-xl">
                As fast fashion expands, consumers demand clarity and honesty.
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>Organic, recycled, handloom & alternative materials</li>
                <li>Spotting real vs fake sustainability claims</li>
                <li>Reuse, repair, rent & swapping culture</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BRANDS & CREATORS ================= */}
      <section className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <div>
              <h2 className="text-3xl font-semibold">For Brands, Designers & Creators</h2>

              <p className="mt-4 text-gray-300 max-w-xl">
                World Fashion Now is building a structured discovery ecosystem.
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>Indexing global & Indian designers</li>
                <li>Data feeds for discovery & search</li>
                <li>Creator programs & lookbook collabs</li>
                <li>Insights based on real searches & engagement</li>
              </ul>

              <a
                href="/business-plan"
                className="mt-6 inline-block text-fuchsia-400 hover:text-fuchsia-300 font-medium"
              >
                View Roadmap →
              </a>
            </div>

            {/* Photo */}
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=60"
              className="rounded-xl shadow-xl object-cover h-96"
              alt="Fashion creators"
            />

          </div>

        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-24 border-t border-white/10 bg-gradient-to-b from-black to-[#08080c]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Stay Updated</h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Subscribe for concise India-first fashion intelligence.
          </p>

          <form className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white w-full sm:w-80"
            />
            <button className="px-6 py-3 bg-fuchsia-500 text-white rounded-lg hover:bg-fuchsia-400">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
