import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] font-sans overflow-x-hidden">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500&display=swap');
        .playfair { font-family: 'Playfair Display', serif; }
        .dm-sans { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* NAV */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-[#d3d1c7] bg-[#f7f5f0]">
        <div className="playfair text-xl text-[#27500a] tracking-tight">
          E<span className="text-[#639922]">Farm</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/products" className="text-sm text-[#5f5e5a] no-underline">Browse</Link>
          <a href="#farmers" className="text-sm text-[#5f5e5a] no-underline">For Farmers</a>
          <a href="#how" className="text-sm text-[#5f5e5a] no-underline">How it works</a>
          <Link
            to="/login"
            className="px-5 py-2 rounded-full text-sm font-medium border border-[#3b6d11] text-[#3b6d11] hover:bg-[#eaf3de] transition"
          >
            Sign in
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-[1100px] mx-auto px-10 py-20 grid grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-[#c0dd97] text-[#27500a] text-xs font-medium tracking-widest uppercase px-4 py-1 rounded-full mb-6">
            🇰🇪 Kenya's Farm Marketplace
          </span>
          <h1 className="playfair text-[3.4rem] leading-[1.1] font-black text-[#173404] mb-5">
            Fresh from the{" "}
            <span className="text-[#639922]">field</span> to your table.
          </h1>
          <p className="text-[#5f5e5a] text-[1.05rem] leading-relaxed mb-9 max-w-md">
            E-Farm connects smallholder farmers directly with buyers across Kenya. List your harvest, discover fresh produce, and settle payments instantly via M-Pesa.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/products"
              className="px-9 py-3.5 rounded-full text-base font-medium bg-[#3b6d11] text-[#eaf3de] hover:bg-[#27500a] transition"
            >
              Browse Products
            </Link>
            <Link
              to="/login"
              className="px-6 py-3.5 rounded-full text-base font-medium border border-[#b4b2a9] text-[#5f5e5a] hover:bg-[#eeece6] transition"
            >
              Start Selling →
            </Link>
          </div>
          <div className="flex gap-6 mt-8 flex-wrap">
            {["No middlemen", "Instant M-Pesa payouts", "Free to join"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-[#888780]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#97c459]" />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual cards */}
        <div className="bg-[#eaf3de] rounded-3xl p-7 grid grid-cols-2 gap-3">
          {[
            { emoji: "🥦", name: "Sukuma Wiki", county: "Kiambu County", price: "KES 80/kg" },
            { emoji: "🍅", name: "Tomatoes", county: "Meru County", price: "KES 120/kg" },
            { emoji: "🌽", name: "Maize (Dry)", county: "Nakuru County", price: "KES 55/kg" },
            { emoji: "🥕", name: "Carrots", county: "Nyandarua County", price: "KES 90/kg" },
          ].map((item) => (
            <div key={item.name} className="bg-white rounded-2xl p-4 border border-[#c0dd97]">
              <div className="text-4xl mb-2">{item.emoji}</div>
              <h4 className="text-sm font-medium text-[#27500a] mb-0.5">{item.name}</h4>
              <p className="text-xs text-[#888780] mb-2">{item.county}</p>
              <div className="text-base font-medium text-[#3b6d11]">{item.price}</div>
            </div>
          ))}
          {/* M-Pesa bar */}
          <div className="col-span-2 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-[#c0dd97]">
            <span className="text-xl">💚</span>
            <div>
              <div className="text-sm font-medium text-[#3b6d11]">M-Pesa payment confirmed</div>
              <div className="text-xs text-[#888780]">KES 4,800 sent to farmer · Just now</div>
            </div>
            <span className="ml-auto bg-[#c0dd97] text-[#27500a] text-xs px-3 py-1 rounded-full font-medium">
              Paid
            </span>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="max-w-[1100px] mx-auto px-10 pb-16">
        <div className="flex rounded-2xl overflow-hidden gap-px">
          {[
            { num: "12,000+", label: "Registered Farmers" },
            { num: "48 hrs", label: "Avg delivery time" },
            { num: "KES 2M+", label: "Paid out monthly" },
            { num: "47", label: "Counties covered" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex-1 bg-[#3b6d11] px-6 py-8 text-center"
            >
              <div className="playfair text-3xl text-[#eaf3de] font-bold">{s.num}</div>
              <div className="text-xs text-[#97c459] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="farmers" className="max-w-[1100px] mx-auto px-10 pb-16">
        <div className="text-xs font-medium tracking-widest uppercase text-[#639922] mb-3">
          Why E-Farm
        </div>
        <h2 className="playfair text-[2.25rem] text-[#173404] mb-12 leading-tight">
          Built for Kenyan<br />agriculture.
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: "🌾",
              title: "Direct from farmers",
              desc: "No brokers, no markups. Buy straight from the source and support smallholder farmers across all 47 counties.",
            },
            {
              icon: "💚",
              title: "M-Pesa payments",
              desc: "Pay and get paid instantly via M-Pesa. Farmers receive funds the moment a sale is confirmed — no waiting.",
            },
            {
              icon: "📍",
              title: "Verified listings",
              desc: "Every farmer is verified and every product listing includes location, freshness grade, and available quantity.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-7 border border-[#d3d1c7]"
            >
              <div className="w-12 h-12 bg-[#eaf3de] rounded-xl flex items-center justify-center text-xl mb-5">
                {f.icon}
              </div>
              <h3 className="text-base font-medium text-[#27500a] mb-2">{f.title}</h3>
              <p className="text-sm text-[#888780] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-[1100px] mx-auto px-10 pb-16">
        <div className="text-xs font-medium tracking-widest uppercase text-[#639922] mb-3">
          How it works
        </div>
        <h2 className="playfair text-[2.25rem] text-[#173404] mb-12 leading-tight">
          Get started in<br />four simple steps.
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {[
            { num: "01", title: "Create your account", desc: "Sign up as a farmer or buyer in under two minutes." },
            { num: "02", title: "List or browse produce", desc: "Farmers list their harvest; buyers search by crop, location, or price." },
            { num: "03", title: "Place your order", desc: "Agree on price and quantity directly with the farmer." },
            { num: "04", title: "Pay via M-Pesa", desc: "Secure payment goes through instantly. Farmer is notified immediately." },
          ].map((s) => (
            <div key={s.num} className="bg-white rounded-2xl p-6 border border-[#d3d1c7]">
              <div className="playfair text-[2.5rem] text-[#c0dd97] font-bold leading-none mb-3">
                {s.num}
              </div>
              <h4 className="text-sm font-medium text-[#27500a] mb-1.5">{s.title}</h4>
              <p className="text-xs text-[#888780] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAR */}
      <div className="max-w-[1100px] mx-auto px-10 pb-16">
        <div className="bg-[#173404] rounded-3xl px-12 py-14 flex items-center justify-between gap-8">
          <div>
            <h2 className="playfair text-[2rem] text-[#eaf3de] mb-2">Ready to grow with us?</h2>
            <p className="text-[#97c459] text-base">
              Join thousands of farmers and buyers trading fresh produce daily.
            </p>
          </div>
          <Link
            to="/login"
            className="px-9 py-3.5 rounded-full text-sm font-medium bg-[#eaf3de] text-[#27500a] hover:bg-white transition whitespace-nowrap"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="max-w-[1100px] mx-auto px-10 py-8 border-t border-[#d3d1c7] flex items-center justify-between">
        <div className="playfair text-lg text-[#27500a]">EFarm</div>
        <p className="text-sm text-[#888780]">Supporting farmers · Empowering buyers · Kenya 🇰🇪</p>
        <p className="text-sm text-[#888780]">© 2026 E-Farm</p>
      </footer>
    </div>
  );
}