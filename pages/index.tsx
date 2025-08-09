import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, CreditCard, PlayCircle, BookOpen, Rocket, Flame, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/test_autostackz49";
const COURSE_NAME = "AutoStackz: The Faceless PDF Funnel (2025 Edition)";
const PRICE = "$49";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default function AutoStackzLandingV2() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 600); return () => clearTimeout(t); }, []);

  const features = [
    "One-week fast start plan",
    "10 viral hook templates (Shorts/Reels/TikTok)",
    "Plug-and-play PDF outline + design kit",
    "High-converting landing + Stripe checkout",
    "Email capture + instant delivery automation",
    "Scale playbook: affiliates, upsells, analytics",
  ];
  const curriculum = [
    { title: "Offer & Positioning", items: ["Pick a painkiller niche", "1-sentence value promise", "Outline your PDF in 60 minutes"] },
    { title: "Content Engine", items: ["Daily 3-post cadence", "Voiceover + clip system", "30 hooks that pull comments"] },
    { title: "Funnel & Tech", items: ["This landing (clone it)", "Stripe in 5 minutes", "Email + instant delivery"] },
    { title: "Launch & Scale", items: ["7-day launch calendar", "UGC/affiliates", "KPIs: CTR, CVR, AOV"] },
  ];
  const testimonials = [
    { name: "Nate R.", text: "Posted daily using the script — first $512 week.", stars: 5 },
    { name: "Aisha T.", text: "Built the PDF overnight. 9 sales day one.", stars: 5 },
    { name: "Kian L.", text: "3,400 views → 27 clicks → 6 orders. Clean system.", stars: 5 },
  ];
  const faqs = [
    { q: "Do I need followers?", a: "No. We start from zero with short-form distribution and a 7-day launch." },
    { q: "Refund policy?", a: "14-day guarantee. If you follow the steps and don’t find it valuable, email us for a refund." },
    { q: "How do I get the files?", a: "Instant download after Stripe Checkout + an email with a backup link and future updates." },
    { q: "What’s inside?", a: "Step-by-step training, scripts, checklists, and templates you can copy/paste." },
  ];

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 overflow-x-hidden">
      <AnimatedBG />
      {loading && <TopLoader />}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <Rocket className="w-5 h-5 text-emerald-400" /> AutoStackz
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#curriculum" className="hover:text-white transition">Curriculum</a>
            <a href="#testimonials" className="hover:text-white transition">Results</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>
          <NeonButton onClick={() => (window.location.href = STRIPE_CHECKOUT_URL)}>
            Buy Now
          </NeonButton>
        </div>
      </header>

      <main>
        <section className="relative max-w-6xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
          <motion.div variants={stagger} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border border-white/10 bg-white/5">
                <Flame className="w-4 h-4 text-emerald-400" /> New: {COURSE_NAME}
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200">faceless funnel</span> that prints while you sleep.
              </h1>
              <p className="mt-4 text-zinc-300 text-lg md:text-xl max-w-xl">
                A Gumroad-style, no-fluff system to create, market, and sell a high-converting PDF course with short-form content.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <NeonButton size="lg" onClick={() => (window.location.href = STRIPE_CHECKOUT_URL)}>
                  <CreditCard className="w-5 h-5 mr-2" /> Get the Course — {PRICE}
                </NeonButton>
                <GhostButton size="lg" onClick={() => document.getElementById("preview")?.scrollIntoView({behavior:"smooth"})}>
                  <PlayCircle className="w-5 h-5 mr-2" /> Watch Preview
                </GhostButton>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-zinc-400">
                <Shield className="w-4 h-4 text-emerald-400" /> Secure checkout • Instant download • Lifetime updates
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <Card className="rounded-2xl border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                <CardContent className="p-6">
                  <div id="preview" className="aspect-video w-full rounded-xl bg-gradient-to-b from-zinc-900 to-black grid place-items-center">
                    <div className="text-center opacity-80">
                      <Sparkles className="w-12 h-12 mx-auto text-emerald-400" />
                      <p className="mt-2 text-sm text-zinc-400">Course intro preview</p>
                    </div>
                  </div>
                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-zinc-200">
                        <Check className="w-5 h-5 mt-0.5 text-emerald-400" /> <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-white/5 to-emerald-500/10 blur-2xl" />
            </motion.div>
          </motion.div>
        </section>

        <Section id="testimonials" title="Results" icon={<Sparkles className="w-5 h-5 text-emerald-400" /> }>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div variants={fadeUp} key={i}>
                <Card className="rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 transition">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 text-emerald-400">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <span key={j}>★</span>
                      ))}
                    </div>
                    <p className="mt-3 text-zinc-100">“{t.text}”</p>
                    <p className="mt-4 text-sm text-zinc-400">— {t.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section id="curriculum" title="What you’ll learn" icon={<BookOpen className="w-5 h-5 text-emerald-400" /> }>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-6">
            {curriculum.map((sec, idx) => (
              <motion.div variants={fadeUp} key={idx}>
                <Card className="rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 transition">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-zinc-100">{sec.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {sec.items.map((it) => (
                        <li key={it} className="flex items-center gap-2 text-zinc-300">
                          <Check className="w-4 h-4 text-emerald-400" /> {it}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <section className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Grab it today for {PRICE}</h2>
              <p className="mt-2 text-zinc-400">Instant lifetime access. Free updates forever.</p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
              <Card className="rounded-2xl border-white/10 bg-white/5 md:col-span-2">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-zinc-200">
                          <Check className="w-5 h-5 mt-0.5 text-emerald-400" /> <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-xl border border-white/10 p-6 h-full flex flex-col bg-black/30">
                      <div className="text-5xl font-extrabold tracking-tight text-zinc-100">{PRICE}</div>
                      <p className="mt-2 text-sm text-zinc-400">One-time payment • No upsells at checkout</p>
                      <NeonButton size="lg" className="mt-4" onClick={() => (window.location.href = STRIPE_CHECKOUT_URL)}>
                        <CreditCard className="w-5 h-5 mr-2" /> Checkout Securely
                      </NeonButton>
                      <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                        <Shield className="w-4 h-4 text-emerald-400" /> 14-day refund guarantee
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-white/10 bg-white/5">
                <CardContent className="p-6 h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-zinc-100">Want a launch discount?</h3>
                  <p className="mt-2 text-sm text-zinc-400">Drop your email for a one-time code + early access updates.</p>
                  <div className="mt-4 flex gap-2">
                    <div className="flex-1 relative">
                      <Mail className="w-4 h-4 absolute left-3 top-3 text-zinc-500" />
                      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full rounded-xl border border-white/10 bg-black/40 text-white pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/40" />
                    </div>
                    <GhostButton onClick={() => alert(`Thanks! We'll email ${email} a code.`)}>Notify</GhostButton>
                  </div>
                  <div className="mt-6 text-xs text-zinc-500">No spam. Unsubscribe anytime.</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <Section id="faq" title="FAQ" icon={<Shield className="w-5 h-5 text-emerald-400" /> }>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-8">
            {faqs.map((f, i) => (
              <motion.div variants={fadeUp} key={i}>
                <h4 className="text-lg font-semibold text-zinc-100">{f.q}</h4>
                <p className="mt-2 text-zinc-400">{f.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <section className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-3xl md:text-4xl font-extrabold">
              Ready to launch your first digital product?
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-3 text-zinc-400">
              Click below. You’ll get instant access + a private download link in your email.
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-6 flex items-center justify-center gap-4">
              <NeonButton size="lg" onClick={() => (window.location.href = STRIPE_CHECKOUT_URL)}>
                <CreditCard className="w-5 h-5 mr-2" /> Buy Now — {PRICE}
              </NeonButton>
              <GhostButton size="lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <ArrowRight className="w-5 h-5 mr-2" /> Back to Top
              </GhostButton>
            </motion.div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-500">
              <Download className="w-4 h-4 text-emerald-400" /> Instant download after payment
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-zinc-500 py-8 border-t border-white/10">
        © {new Date().getFullYear()} AutoStackz. All rights reserved.
      </footer>

      <style jsx global>{`
        .bg-grid::before {
          content: "";
          position: absolute; inset: 0; z-index: -1;
          background-image: linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 40px 40px; opacity: .4; mask-image: radial-gradient(ellipse at 60% 10%, black 20%, transparent 70%);
        }
        .blob { filter: blur(40px); opacity: .35; }
        .b1 { background: radial-gradient(600px 600px at 20% 10%, rgba(16,185,129,.45), transparent 60%); animation: float1 16s ease-in-out infinite; }
        .b2 { background: radial-gradient(600px 600px at 80% 20%, rgba(52,211,153,.35), transparent 60%); animation: float2 18s ease-in-out infinite; }
        .b3 { background: radial-gradient(600px 600px at 50% 90%, rgba(99,102,241,.25), transparent 60%); animation: float3 20s ease-in-out infinite; }
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(30px)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,20px)} }
        @keyframes float3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-25px)} }
      `}</style>
    </div>
  );
}

function AnimatedBG() { return (<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-black bg-grid">
  <div className="blob b1 absolute -top-10 -left-10 w-[60vw] h-[60vw]" />
  <div className="blob b2 absolute -top-20 right-0 w-[55vw] h-[55vw]" />
  <div className="blob b3 absolute bottom-0 left-1/3 w-[50vw] h-[50vw]" />
</div>); }
function TopLoader() { return (<div className="fixed top-0 left-0 right-0 z-[60]">
  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[pulse_1.2s_ease-in-out_infinite]" />
</div>); }
function Section({ id, title, icon, children }: { id: string; title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (<section id={id} className="relative border-t border-white/10">
    <div className="max-w-6xl mx-auto px-4 py-16"><div className="flex items-center gap-2">{icon}
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2></div>
      <div className="mt-6">{children}</div></div></section>); }
function NeonButton({ className = "", size = "md", children, ...props }: any) {
  const pad = size === "lg" ? "px-5 py-2.5 text-base" : size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2";
  return (<button className={`relative inline-flex items-center rounded-xl font-semibold text-black transition focus:outline-none ${pad} ${className}`} {...props}>
    <span className="absolute inset-0 rounded-xl bg-emerald-400 blur-md opacity-70" />
    <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-300" />
    <span className="relative flex items-center text-black drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">{children}</span>
  </button>); }
function GhostButton({ className = "", size = "md", children, ...props }: any) {
  const pad = size === "lg" ? "px-5 py-2.5 text-base" : size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2";
  return (<button className={`inline-flex items-center rounded-xl border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10 transition ${pad} ${className}`} {...props}>{children}</button>); }
