// src/app/global-fashion-trends/page.jsx
import React from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Global Fashion Trends – Runways, Street Style & Future of Fashion",
  description:
    "Global fashion trends explained: Paris, Milan, New York, London, Tokyo and beyond. Street style, fast fashion, luxury, sustainability and what actually matters.",
  author: { "@type": "Organization", name: "World Fashion Now" },
  url: "https://www.example.com/global-fashion-trends",
  inLanguage: "en",
};

export default function GlobalFashionTrendsPage() {
  return (
    <main className="bg-black text-white antialiased">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <header
        className="relative overflow-hidden z-0"
        aria-labelledby="hero-title"
        role="banner"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(3,7,12,0.65), rgba(9,12,16,0.35)), url('https://plus.unsplash.com/premium_photo-1742833661693-d54d72a51b1a?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 prose prose-invert max-w-none">
              <span className="inline-block px-3 py-1 rounded-full bg-white/6 text-sm text-yellow-300 font-medium tracking-wide">
                Editorial • In depth
              </span>

              <h1
                id="hero-title"
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
              >
                Global Fashion Trends — runways, street style & what matters now
              </h1>

              <p className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed">
                A cinematic, practical guide to how trends start and travel —
                from Paris ateliers to Indian street scenes. We translate runway
                concepts to real-world wardrobes with clarity, context and
                taste.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#how-trends-move"
                  className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 py-3 shadow-lg hover:-translate-y-0.5 transition-transform"
                >
                  Read the Guide
                </a>
                <a
                  href="#what-to-buy"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white/90"
                >
                  What to buy
                </a>
              </div>
            </div>

            {/* Right column — editorial images grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                {
                  src: "https://plus.unsplash.com/premium_photo-1754214179012-f69f3d15f6c6?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Runway silhouettes",
                },
                {
                  src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
                  alt: "Street style snapshot",
                },
                {
                  src: "https://images.unsplash.com/photo-1742137745113-cfc541c68298?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Textile close-up",
                },
                {
                  src: "https://plus.unsplash.com/premium_photo-1726843669619-20268405018f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Editorial portrait",
                },
              ].map((img) => (
                <figure
                  key={img.src}
                  className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-40 sm:h-36 md:h-44 lg:h-48 object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* How Trends Move — magazine column */}
        <section
          id="how-trends-move"
          className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
            <div className="border-l-2 border-yellow-400 pl-6">
              <h4 className="text-sm uppercase tracking-wider text-yellow-300 font-medium">
                Trend pipeline
              </h4>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                How ideas flow from concept to city streets — and how to pick
                what works for you.
              </p>
            </div>
          </aside>

          <article className="lg:col-span-8 prose prose-invert max-w-none">
            <h2 className="text-3xl font-serif">How trends actually move</h2>
            <p className="text-gray-300">
              Trends follow a predictable cultural pipeline — an idea in a show
              becomes a narrative in editorials, then a look for creators, and
              finally an adaptation for everyday life. The useful question: how
              does the idea change when filtered by climate, budget and local
              culture?
            </p>

            <ol className="mt-4 space-y-2 text-gray-300">
              <li>
                <strong>Runways & ateliers:</strong> Concept, materials, and
                silhouette experiments.
              </li>
              <li>
                <strong>Editorials & campaigns:</strong> Narrative, mood and
                story-telling.
              </li>
              <li>
                <strong>Street style & creators:</strong> Real people testing
                the idea in context.
              </li>
              <li>
                <strong>High-street & fast adaptations:</strong> Cheap, wearable
                iterations.
              </li>
              <li>
                <strong>Local remix:</strong> Translation to climate, budget,
                and cultural codes.
              </li>
            </ol>

            <figure className="my-8 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586489073932-a606db5f5cf8?q=80&w=924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Runway to street"
                loading="lazy"
                className="w-full h-64 object-cover"
              />
              <figcaption className="text-sm text-gray-400 p-3">
                Runway concept → editorial narrative → street translation.
              </figcaption>
            </figure>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 bg-linear-to-b from-[#071017] to-[#06060a] border border-white/6 shadow">
                <h3 className="text-xl font-serif mb-2">Runway to Reality</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Designers test extremes on runway — our job is to pull useful
                  elements (colour, proportion, fabric) and translate them to
                  daily wardrobes.
                </p>
              </div>

              <div className="rounded-2xl p-6 bg-linear-to-b from-[#071017] to-[#06060a] border border-white/6 shadow">
                <h3 className="text-xl font-serif mb-2">Creator Translation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Creators and street stylers provide context — how to wear, how
                  to layer, and what to avoid depending on climate and culture.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Fashion Capitals row — large visual tiles */}
        <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Paris",
              subtitle: "Quiet luxury • Tailoring • Heritage",
              img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60",
            },
            {
              title: "Milan",
              subtitle: "Colour • Print • Glamour",
              img: "https://plus.unsplash.com/premium_photo-1661326205142-d13224349fc9?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "New York",
              subtitle: "Street spirit • Fast, smart dressing",
              img: "https://images.unsplash.com/photo-1599839352992-ff49ac7bbb6b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((c) => (
            <figure
              key={c.title}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent p-6 flex items-end">
                <div>
                  <h4 className="text-2xl font-serif">{c.title}</h4>
                  <p className="text-gray-300 text-sm">{c.subtitle}</p>
                </div>
              </div>
            </figure>
          ))}
        </section>

        {/* Macro trends — feature list */}
        <section className="py-16 bg-[#0b0b0e] rounded-2xl p-6 border border-white/6">
          <h2 className="text-3xl font-serif mb-6">Macro trends to track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="rounded-lg p-6 bg-linear-to-b from-[#071017] to-[#06060a] border border-white/6">
              <h3 className="text-xl font-medium text-yellow-300">
                Casualisation & Comfort
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                Workwear borrows athleisure — think elevated knits, smart
                sneakers, and relaxed tailoring that still reads intentional.
              </p>
            </article>

            <article className="rounded-lg p-6 bg-linear-to-b from-[#071017] to-[#06060a] border border-white/6">
              <h3 className="text-xl font-medium text-yellow-300">
                Sustainability & Circular
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                Resale, rental and repair move from niche to mainstream — buy
                better, buy less, and care for what you own.
              </p>
            </article>

            <article className="rounded-lg p-6 bg-linear-to-b from-[#071017] to-[#06060a] border border-white/6">
              <h3 className="text-xl font-medium text-yellow-300">
                Fast vs Slow
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                A hybrid wardrobe mixes high-street finds with vintage and
                investment pieces — a pragmatic, modern approach.
              </p>
            </article>

            <article className="rounded-lg p-6 bg-linear-to-b from-[#071017] to-[#06060a] border border-white/6">
              <h3 className="text-xl font-medium text-yellow-300">
                Creator-Led Fashion
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                Community-driven aesthetics and micro-trends spread quickly — we
                help you filter signal from noise.
              </p>
            </article>
          </div>
        </section>

        {/* Translate to India */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 prose prose-invert max-w-none">
              <h2 className="text-3xl font-serif">
                Translating global trends for India
              </h2>
              <p className="text-gray-300">
                The key question: how to adapt runway ideas to climate, culture
                and budget. A good translation preserves the spirit while
                changing the scale, fabric and color story.
              </p>

              <ul className="mt-4 text-gray-300 space-y-2">
                <li>Heavy layering → breatheable, lightweight layers</li>
                <li>Winter palettes → lighter summer colours</li>
                <li>Boot trends → sneakers, sandals or traditional footwear</li>
                <li>Runway drama → wearable evening pieces</li>
              </ul>
            </div>

            <aside className="rounded-2xl p-6 bg-linear-to-b from-[#071017] to-[#06060a] border border-white/6 shadow">
              <h4 className="text-yellow-300 text-sm font-medium uppercase">
                Quick tips
              </h4>
              <ol className="mt-4 text-gray-300 list-decimal list-inside space-y-2 text-sm">
                <li>Pick one trend element per outfit.</li>
                <li>Use accessories to test a trend cheaply.</li>
                <li>Prioritise fabrics suitable for your climate.</li>
              </ol>
            </aside>
          </div>
        </section>

        {/* What to buy */}
        <section id="what-to-buy" className="py-16 border-t border-white/6">
          <h2 className="text-3xl font-serif mb-4">
            What to buy — simple rules
          </h2>
          <p className="text-gray-300 max-w-3xl">
            Invest in good basics and footwear. Try trends through accessories
            first. Avoid pieces that only work for one fleeting moment.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <li className="rounded-lg p-4 bg-[#071017] border border-white/6">
              Quality outerwear
            </li>
            <li className="rounded-lg p-4 bg-[#071017] border border-white/6">
              Neutral footwear
            </li>
            <li className="rounded-lg p-4 bg-[#071017] border border-white/6">
              Accessories to test trends
            </li>
            <li className="rounded-lg p-4 bg-[#071017] border border-white/6">
              Seasonal investment pieces
            </li>
          </ul>
        </section>

        {/* CTA / Newsletter */}
        <section className="py-16">
          <div className="rounded-2xl p-8 bg-linear-to-br from-[#0a0b0f] to-[#071017] border border-white/6 shadow-xl flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-serif">Keep the edits coming</h3>
              <p className="text-gray-300 mt-2">
                Subscribe for concise, India-first fashion intelligence.
              </p>
            </div>

            <form
              action="#"
              method="POST"
              className="flex w-full md:w-auto gap-3"
            >
              <input
                name="email"
                type="email"
                placeholder="Email address"
                aria-label="Email"
                className="flex-1 md:flex-none w-full md:w-80 px-4 py-3 rounded-lg bg-white/6 border border-white/6 text-white placeholder-white/60"
              />
              <button className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
