// src/app/fashion-guide/page.jsx
export const metadata = {
  title: "Complete Fashion Guide — Wardrobes, Fits & Style Fundamentals",
  description:
    "A complete fashion guide covering wardrobe essentials, body types, fits, fabrics, styling rules, accessories and care — India-first, globally-minded.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Complete Fashion Guide — Wardrobes, Fits & Style Fundamentals",
  description:
    "A complete fashion guide covering wardrobe essentials, body types, fits, fabrics, styling rules, accessories and care — India-first, globally-minded.",
  url: "https://your-domain.com/fashion-guide",
  publisher: {
    "@type": "Organization",
    name: "World Fashion Now",
    url: "https://your-domain.com",
    logo: {
      "@type": "ImageObject",
      url: "https://your-domain.com/logo.png",
    },
  },
  inLanguage: "en",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Wardrobe Essentials",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fit, Proportions & Tailoring",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Fabrics & Climate",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Colour, Prints & Personal Style",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Mixing Indian & Western Wear",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Accessories & Care",
      },
    ],
  },
};
export default function FashionGuidePage() {
  return (
    <main className="bg-black text-white antialiased">
      {/* HERO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative overflow-hidden"
        aria-labelledby="hero-title"
      >
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-40"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white/5 text-sm text-white/90 border border-white/5 mb-4">
                <strong className="text-xs uppercase tracking-wider">
                  Guide
                </strong>
                <span className="text-xs text-gray-300">
                  Style fundamentals & wardrobe systems
                </span>
              </p>

              <h1
                id="hero-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight tracking-tight drop-shadow-md"
              >
                Complete Fashion Guide — Wardrobes, Fit & Style Fundamentals
              </h1>

              <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
                Clear, practical style systems for real life — the wardrobe
                frameworks, fabrics and tailoring rules that make clothes look
                expensive. Built for India-first wardrobes, equally useful
                anywhere.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#essentials"
                  className="inline-block rounded-full bg-linear-to-r from-pink-500 to-fuchsia-600 px-6 py-3 font-semibold text-black shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  View Wardrobe Essentials
                </a>

                <a
                  href="#faq"
                  className="inline-block rounded-full border border-white/10 px-6 py-3 text-white/90 hover:bg-white/3 transition"
                >
                  FAQ & Tips
                </a>
              </div>
            </div>

            {/* Right visual */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
                <img
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60"
                  alt="Tailoring and fit"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
                <img
                  src="https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=60"
                  alt="Fabric textures"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=60"
                  alt="Capsule wardrobe"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=60"
                  alt="Accessories"
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / WHY */}
      <section className="py-12 border-t border-white/6">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Why this guide exists
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Trends are noise. This guide gives structure — how to build a
            functional wardrobe, pick fabrics that work for climate, and tailor
            pieces so they look intentional. Practical, repeatable rules you can
            apply today.
          </p>
        </div>
      </section>

      {/* ESSENTIALS — CARD GRID */}
      <section id="essentials" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-semibold mb-6">
            Core wardrobe essentials
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Women */}
            <article className="rounded-2xl bg-linear-to-br from-[#071017] to-[#0b1220] border border-white/6 p-6 shadow-lg">
              <h4 className="text-lg font-medium text-pink-400 mb-2">
                Women's core pieces
              </h4>
              <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>1–2 well-fitting jeans (dark + light).</li>
                <li>Neutral tailored trousers & breathable kurtas.</li>
                <li>2–3 versatile dresses for day & evening.</li>
                <li>Layering: blazer, denim jacket, lightweight cardigan.</li>
                <li>Shoes: white sneakers, comfortable flats, dress heels.</li>
              </ul>
            </article>

            {/* Men */}
            <article className="rounded-2xl bg-linear-to-br from-[#071017] to-[#0b1220] border border-white/6 p-6 shadow-lg">
              <h4 className="text-lg font-medium text-pink-400 mb-2">
                Men's core pieces
              </h4>
              <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>1 dark + 1 light pair of jeans with a proper fit.</li>
                <li>Chinos / tailored trousers in neutral tones.</li>
                <li>Solid tees, button-down shirts (white, light blue).</li>
                <li>Layering: bomber, overshirt, one blazer.</li>
                <li>
                  Shoes: clean sneakers, leather shoes, versatile sandals.
                </li>
              </ul>
            </article>

            {/* Gender-neutral */}
            <article className="rounded-2xl bg-linear-to-br from-[#071017] to-[#0b1220] border border-white/6 p-6 shadow-lg">
              <h4 className="text-lg font-medium text-pink-400 mb-2">
                Gender-neutral basics
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Oversized shirts, relaxed trousers, simple knitwear and unisex
                sneakers — pieces that flex across looks while keeping costs low
                and outfit combos high.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FIT & TAILORING */}
      <section className="py-16 border-t border-white/6 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold">
              Fit, Proportions & Tailoring
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Fit is the single fastest upgrade you can give any outfit. The
              same garment looks premium if it sits correctly — shoulder seams,
              hem lengths and smooth waistlines matter.
            </p>

            <ul className="mt-6 text-gray-300 space-y-3">
              <li>
                <strong>Shoulders:</strong> seams sit at your shoulder edge, not
                past it.
              </li>
              <li>
                <strong>Trousers:</strong> hem to just graze the top of your
                shoes (or tailor to preference).
              </li>
              <li>
                <strong>Waistbands:</strong> should sit comfortably without
                gaping.
              </li>
              <li>
                <strong>Indian wear:</strong> ensure kurta and saree blouses
                allow movement but remain structured.
              </li>
            </ul>

            <p className="mt-4 text-sm text-gray-400">
              Invest in a local tailor — small adjustments return as better fit,
              longevity and perceived value.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=1200&q=60"
              alt="Tailoring and suit"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FABRICS & CLIMATE */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold">Fabrics & Climate</h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Match fabric to environment — cotton and linen for heat, silk for
            occasions, wool blends for cooler months. Thoughtful fabric choices
            make clothes more comfortable and longer-lived.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-[#071017] border border-white/6">
              <h4 className="text-sm font-medium text-pink-400">Hot & Humid</h4>
              <p className="text-gray-300 text-sm mt-2">
                Cotton, linen, khadi, handloom — breathable and quick-drying.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#071017] border border-white/6">
              <h4 className="text-sm font-medium text-pink-400">Temperate</h4>
              <p className="text-gray-300 text-sm mt-2">
                Viscose blends, lightweight wool, layered systems for
                mornings/evenings.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#071017] border border-white/6">
              <h4 className="text-sm font-medium text-pink-400">Occasion</h4>
              <p className="text-gray-300 text-sm mt-2">
                Silk, brocade and handloom — treat with care and store properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLOUR & PRINTS */}
      <section className="py-16 border-t border-white/6 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold">
                Colour, Prints & Personal Style
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Keep a small base palette and 1–2 accent colours. Prints are
                best used sparingly; if the garment is loud, keep accessories
                minimal.
              </p>

              <ol className="mt-6 text-gray-300 list-decimal list-inside space-y-3">
                <li>Pick 2–3 base neutrals (black, navy, beige).</li>
                <li>Add 1–2 accent colours that suit your skin tone.</li>
                <li>
                  Use prints as statement pieces rather than full outfits.
                </li>
              </ol>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1722505492186-ceba8a24d3f8?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fashion palette"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MIXING INDIAN & WESTERN */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 prose prose-invert">
          <h3 className="text-2xl font-semibold">
            Indian & Western — How to Mix Smartly
          </h3>
          <ul className="mt-4 text-gray-300 space-y-2">
            <li>
              Pair handloom saris with contemporary blouses or structured
              jackets.
            </li>
            <li>
              Wear kurtas with jeans or tailored trousers for a modern
              silhouette.
            </li>
            <li>
              Add minimalist Western jewellery to elevate ethnic wear without
              overpowering it.
            </li>
          </ul>
        </div>
      </section>

      {/* ACCESSORIES */}
      <section className="py-16 border-t border-white/6 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#071017] border border-white/6">
            <h4 className="text-lg font-medium text-pink-400">Accessories</h4>
            <p className="text-gray-300 text-sm mt-2">
              Small items, big leverage — belts, watches, sunglasses and bags
              change an outfit instantly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#071017] border border-white/6">
            <h4 className="text-lg font-medium text-pink-400">
              Care & Storage
            </h4>
            <p className="text-gray-300 text-sm mt-2">
              Read labels, use padded hangers for heavy garments, fold knits and
              store silks in breathable bags.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#071017] border border-white/6">
            <h4 className="text-lg font-medium text-pink-400">Tailoring</h4>
            <p className="text-gray-300 text-sm mt-2">
              Minor alterations create huge returns on appearance — hemming,
              tapering and shoulder adjustments matter.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-semibold">Quick FAQ</h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-[#071017] border border-white/6">
              <h4 className="text-lg font-medium">
                How many clothes do I need?
              </h4>
              <p className="text-gray-300 mt-2 text-sm">
                Enough to cover weekly use without excess — 30–50 well-chosen
                pieces (excluding underwear & activewear) is a useful target for
                many people.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[#071017] border border-white/6">
              <h4 className="text-lg font-medium">
                How to stay updated without overwhelm?
              </h4>
              <p className="text-gray-300 mt-2 text-sm">
                Follow 2–3 trusted creators or publications. Check our Global
                Trends page for curated monthly summaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER (SERVER FORM) */}
      <section className="py-16 border-t border-white/6 bg-black/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold">
            Subscribe — concise, India-first updates
          </h3>
          <p className="mt-3 text-gray-300">
            Short, monthly intelligence for creators, brands and shoppers.
          </p>

          {/* NOTE: server component — no client-side handlers */}
          <form
            action="/api/subscribe"
            method="POST"
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white w-full sm:w-80"
            />
            <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-400">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
