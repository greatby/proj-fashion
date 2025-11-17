// src/app/india-fashion-guide/page.jsx
export const metadata = {
  title: "India Fashion Guide — Designers, Crafts & Wardrobe",
  description: "Deep guide to Indian fashion: regional textiles, designers, wedding wear, street style and practical wardrobe advice.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "India Fashion Guide — Designers, Textiles, Weddings & Daily Wear",
  "description": "A deep guide to Indian fashion: designers, bridal wear, regional textiles, street style, and wardrobe advice.",
  "author": { "@type": "Organization", "name": "World Fashion Now" },
  "publisher": { "@type": "Organization", "name": "World Fashion Now" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://your-domain.com/india-fashion-guide" }
};

export default function IndiaFashionGuide() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(3,7,12,0.6), rgba(9,12,16,0.45)), url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2000&q=60')",
        }}
        aria-label="India fashion hero"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white/5 text-yellow-300 text-sm font-medium border border-white/6 mb-4">
                India — Deep Guide
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
                India Fashion Guide
              </h1>

              <p className="mt-6 text-gray-200 max-w-2xl leading-relaxed">
                A practical, editorial resource on Indian design, crafts, bridalwear, city-by-city street style, and how to build wardrobes that work in India and beyond.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <a href="#weaves" className="inline-block bg-fuchsia-600 hover:bg-fuchsia-500 text-black px-4 py-2 rounded-full font-medium">Regional Weaves</a>
                <a href="#wardrobe" className="inline-block border border-white/10 px-4 py-2 rounded-full text-gray-200">Wardrobe Guide</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
                <img className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1707994894479-d36c67b2613f?q=80&w=992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Handloom weaves" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
                <img className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=60" alt="Textile craft" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
                <img className="w-full h-44 object-cover" src="https://plus.unsplash.com/premium_photo-1724762183683-251ce8b09d08?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bridalwear" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
                <img className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1000&q=60" alt="Street style" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
     <section className="py-16 border-t border-white/10 bg-[#06060a]">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="relative rounded-2xl p-10 bg-gradient-to-b from-[#0b1119] to-[#05060a] border border-white/10 shadow-2xl">

      {/* Soft glow edge */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-3xl pointer-events-none" />

      <h2 className="relative text-3xl font-semibold text-white tracking-tight drop-shadow-sm">
        Why This Guide Matters
      </h2>

      <p className="relative mt-4 text-gray-300 leading-relaxed text-lg">
        India’s fashion ecosystem stretches from centuries-old handloom clusters 
        to modern designer labels and fast-growing D2C brands. This guide cuts 
        through the noise — giving you structured wardrobe advice, a map of 
        regional textiles, and clarity on the designer landscape so you can 
        shop, dress and style with confidence.
      </p>

      <p className="relative mt-4 text-gray-400 leading-relaxed">
        Whether you’re building a daily wardrobe or planning wedding outfits, 
        this guide brings depth, accuracy and practical frameworks tailored to 
        how people in India actually live and dress.
      </p>
      
    </div>
  </div>
</section>


      {/* Weaves & Crafts */}
    <section
  id="weaves"
  className="py-20 border-t border-white/10 bg-[#05060a]"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">

    {/* Left Column */}
    <div className="relative prose prose-invert max-w-none">
      <h3 className="text-3xl font-semibold text-white tracking-tight">
        Regional Weaves & Textiles
      </h3>

      <p className="mt-4 text-gray-300 leading-relaxed text-lg">
        India’s handloom heritage forms the backbone of its fashion identity. 
        From temple silks to delicate brocades and modern resist-dye patterns — 
        knowing origins helps you identify authentic craftsmanship and support 
        artisan communities.
      </p>

      <ul className="mt-6 text-gray-300 space-y-3 leading-relaxed">
        <li>
          <strong className="text-white">Banarasi:</strong> 
          &nbsp;Opulent brocades, zari work, wedding staples.
        </li>
        <li>
          <strong className="text-white">Kanjeevaram:</strong>
          &nbsp;Temple silks with bold colours and high durability.
        </li>
        <li>
          <strong className="text-white">Ikat & Pochampally:</strong>
          &nbsp;Geometric resist-dyes with strong regional signatures.
        </li>
      </ul>

      {/* Soft glow under text */}
      <div className="absolute -bottom-8 left-0 w-40 h-40 bg-fuchsia-500/10 blur-3xl rounded-full pointer-events-none" />
    </div>

    {/* Right Column */}
    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Card 1 */}
      <article className="group relative rounded-2xl p-8 bg-gradient-to-br from-[#0b1118] to-[#06080d] border border-white/10 shadow-xl hover:border-fuchsia-500/30 transition-all">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

        <h4 className="relative text-xl font-semibold text-yellow-400 tracking-wide">
          Dyeing & Block Printing
        </h4>

        <p className="relative mt-3 text-gray-300 text-sm leading-relaxed">
          Ajrakh, Bagru and Kalamkari carry centuries-old dyeing knowledge.  
          Natural dyes, wooden blocks and layered printing give each piece  
          its unmistakable depth and texture.
        </p>
      </article>

      {/* Card 2 */}
      <article className="group relative rounded-2xl p-8 bg-gradient-to-br from-[#0b1118] to-[#06080d] border border-white/10 shadow-xl hover:border-fuchsia-500/30 transition-all">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

        <h4 className="relative text-xl font-semibold text-yellow-400 tracking-wide">
          Embroidery Traditions
        </h4>

        <p className="relative mt-3 text-gray-300 text-sm leading-relaxed">
          Chikankari, Zardozi, Kantha and Phulkari highlight how  
          embroidery shapes value, craftsmanship and care needs in Indian fashion.
        </p>
      </article>

    </div>

  </div>
</section>


      {/* Designers & Labels */}
      <section className="py-16 border-t border-white/6 bg-[#05060a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-semibold">Designers, Labels & Marketplaces</h3>
          <p className="mt-4 text-gray-300 max-w-3xl">
            India hosts couture houses, established ready-to-wear designers and emerging D2C brands. We’ll eventually index profiles, price tiers and city availability.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-[#071017] border border-white/6">
              <h4 className="text-lg font-medium text-yellow-400">Couture & Bridal</h4>
              <p className="text-gray-300 text-sm">Bridal ateliers, couture houses and bespoke tailors for heritage weddings.</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#071017] border border-white/6">
              <h4 className="text-lg font-medium text-yellow-400">Contemporary Labels</h4>
              <p className="text-gray-300 text-sm">Ready-to-wear brands blending modern cuts with traditional textiles.</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#071017] border border-white/6">
              <h4 className="text-lg font-medium text-yellow-400">Street & Indie</h4>
              <p className="text-gray-300 text-sm">Indie streetwear, sneaker culture and small-batch designers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wardrobe Essentials */}
      <section id="wardrobe" className="py-16 border-t border-white/6">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">Practical Wardrobe Advice</h3>
            <p className="mt-3 text-gray-300">Build a wardrobe that matches your life: work, casual, occasions and travel. Focus on fit, fabrics and tailoring — small adjustments change perception dramatically.</p>
            <ul className="mt-4 text-gray-300 space-y-2">
              <li>Invest in tailoring for structured pieces (blazers, suits, bridal blouses).</li>
              <li>Choose breathable fabrics for Indian climates (cotton, linen, khadi).</li>
              <li>Mix handloom pieces with modern cuts for daytime versatility.</li>
            </ul>
          </div>

          <aside className="rounded-2xl p-6 bg-gradient-to-br from-[#071017] to-[#09121a] border border-white/6">
            <h4 className="text-yellow-400 font-medium">Quick Wardrobe Checklist</h4>
            <ol className="mt-3 text-gray-300 list-decimal list-inside space-y-2">
              <li>1–2 well-fitting denim pieces</li>
              <li>Neutral trousers or churidars</li>
              <li>1–2 statement traditional pieces for events</li>
              <li>Comfortable footwear for daily life</li>
              <li>One tailored blazer or nehru jacket</li>
            </ol>
          </aside>
        </div>
      </section>

      {/* Practical Tips / Booking */}
      <section className="py-16 border-t border-white/6 bg-[#05060a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="col-span-2 prose prose-invert">
            <h3>Weddings, Markets & Sourcing</h3>
            <p className="text-gray-300">For wedding shopping, plan in advance, factor in tailoring lead time, and consider rental options for heavy ceremonial wear. Markets like Banaras, Kutch, Chennai and Kolkata are craft hubs — visit with a local fixer when possible.</p>

            <h4 className="text-yellow-400 mt-6">Online vs Offline</h4>
            <p className="text-gray-300">Online marketplaces are great for discovery; offline shopping is irreplaceable for fit and fabric touch. Use online to shortlist and offline to confirm.</p>
          </article>

          <aside className="rounded-2xl p-6 bg-gradient-to-br from-[#071017] to-[#09121a] border border-white/6">
            <h4 className="text-yellow-400 font-medium">Care & Longevity</h4>
            <ul className="mt-3 text-gray-300 space-y-2">
              <li>Use breathable storage for silks</li>
              <li>Repair small issues early</li>
              <li>Prefer gentle cold washes for embellished items</li>
              <li>Rotate heavy ceremonial pieces to preserve threads</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* CTA / Newsletter (simple form action, no onSubmit) */}
      <section className="py-20 border-t border-white/6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">Stay updated — India first fashion intelligence</h3>
          <p className="mt-3 text-gray-300">Short, curated notes — trends, market moves, and craft spotlights.</p>

          <form action="/api/subscribe" method="POST" className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center">
            <input name="email" type="email" required placeholder="Email address" className="w-full sm:w-72 px-4 py-3 rounded-lg bg-white/6 border border-white/6 text-white placeholder:text-gray-400" />
            <button type="submit" className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-black rounded-lg font-medium">Subscribe</button>
          </form>

          <p className="mt-3 text-xs text-gray-500">We respect your inbox — unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
