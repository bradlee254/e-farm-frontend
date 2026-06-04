import {
  ArrowRight,
  Tractor,
  ShoppingBasket,
  Truck,
  Brain,
} from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* Navbar */}
      <nav className="border-b border-ui-fill bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-12 py-4">
          <div className="flex items-center gap-2.5">
            <div className="rounded-xl bg-brand p-2 text-white">
              <Tractor size={18} />
            </div>
            <span className="text-[17px] font-medium text-brand-dark tracking-tight">
              E-Farm
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Marketplace", "Services", "AI Advisory", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-caption hover:text-brand-dark transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <button
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
            onClick={() => {
              navigate("/register");
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-12 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF7E9] px-4 py-1.5 text-[13px] font-medium text-brand-dark mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              Empowering African Agriculture
            </span>

            <h1 className="font-serif text-[62px] font-black leading-[1.05] tracking-[-1.5px] text-foreground mb-6">
              The Digital <span className="block text-brand">Ecosystem</span>
              for Farmers
            </h1>

            <p className="text-base leading-[1.75] text-caption max-w-[440px] mb-9">
              Connect directly with buyers, access AI-powered farming advice,
              manage deliveries, receive M-Pesa payments, and grow your
              agribusiness from one platform.
            </p>

            <div className="flex items-center gap-3 mb-14">
              <button className="flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-[15px] font-medium text-white hover:bg-brand-dark transition-colors">
                Join as Farmer
                <ArrowRight size={16} />
              </button>
              <button className="rounded-xl border-[1.5px] border-[#B8DDA3] px-7 py-3.5 text-[15px] font-medium text-brand-dark hover:bg-[#EEF7E9] transition-colors">
                Explore Marketplace
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-0 border-t border-[#EBEBEB] pt-8">
              {[
                { num: "50K+", label: "Farmers Target" },
                { num: "KES 1M+", label: "Transactions" },
                { num: "99.5%", label: "Platform Uptime" },
                { num: "3+", label: "Countries" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`${i !== 0 ? "pl-6 border-l border-[#EBEBEB]" : ""} ${i !== 3 ? "pr-6" : ""}`}
                >
                  <p className="font-serif text-[28px] font-bold text-brand leading-none mb-1">
                    {s.num}
                  </p>
                  <p className="text-[12px] text-caption tracking-[0.3px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard Card */}
          <div className="relative">
            {/* Float Left */}
            <div className="absolute -left-14 top-12 hidden lg:block bg-background border border-[#E8E8E8] rounded-xl px-4 py-3 shadow-md">
              <p className="text-[11px] text-caption mb-0.5">M-Pesa Payments</p>
              <p className="text-[15px] font-medium text-brand-dark">
                Instant Settlement
              </p>
            </div>

            {/* Card */}
            <div className="bg-background border border-[#E8E8E8] rounded-2xl p-7 shadow-[0_2px_40px_rgba(106,168,79,0.08),0_1px_4px_rgba(0,0,0,0.04)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[15px] font-medium text-foreground">
                  E-Farm Dashboard
                </span>
                <span className="flex items-center gap-1.5 bg-[#EEF7E9] text-brand-dark text-[11px] font-medium px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  Live
                </span>
              </div>

              {/* Rows */}
              <div className="flex flex-col gap-2.5 mb-5">
                <div className="flex items-center gap-3.5 bg-[#EEF7E9] rounded-xl px-4 py-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center flex-shrink-0">
                    <ShoppingBasket size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-foreground">
                      Marketplace Orders
                    </p>
                    <p className="text-[11px] text-caption mt-0.5">
                      Fresh produce available
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-[#EAF2FB] rounded-xl px-4 py-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#3A88D4] flex items-center justify-center flex-shrink-0">
                    <Truck size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-foreground">
                      Logistics Tracking
                    </p>
                    <p className="text-[11px] text-caption mt-0.5">
                      Delivery routes optimized
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-[#FDF5E3] rounded-xl px-4 py-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#E09020] flex items-center justify-center flex-shrink-0">
                    <Brain size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-foreground">
                      AI Advisory
                    </p>
                    <p className="text-[11px] text-caption mt-0.5">
                      Crop recommendations available
                    </p>
                  </div>
                </div>
              </div>

              {/* Insight */}
              <div className="bg-brand-dark rounded-2xl px-5 py-5">
                <p className="text-[11px] font-medium text-[#B8DDA3] tracking-[0.8px] uppercase mb-2">
                  Today's Insight
                </p>
                <p className="text-[13px] leading-[1.7] text-white/75">
                  Weather conditions are favorable for maize planting in your
                  region. Recommended irrigation level: Moderate.
                </p>
              </div>
            </div>

            {/* Float Right */}
            <div className="absolute -right-14 bottom-16 hidden lg:block bg-background border border-[#E8E8E8] rounded-xl px-4 py-3 shadow-md">
              <p className="text-[11px] text-caption mb-0.5">AI Accuracy</p>
              <p className="text-[15px] font-medium text-brand-dark">95%+</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
