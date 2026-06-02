import { motion } from "framer-motion";
import { Eye, Heart, TrendingUp, Award, X, Check } from "lucide-react";
import { whyPoints } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

const icons = { Eye, Heart, TrendingUp, Award } as const;

export function WhyStorytelling() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Why Storytelling Matters"
          title={<>The world has too much data <span className="text-gradient-gold italic">and too few stories.</span></>}
          subtitle="Donors aren't moved by spreadsheets. They give when they feel something real. Cinematic storytelling is how modern NGOs cut through the noise."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyPoints.map((p, i) => {
            const Icon = icons[p.icon as keyof typeof icons];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                className="group glass rounded-2xl p-6 hover:border-gold/40 transition-all hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-gold grid place-items-center shadow-glow">
                  <Icon className="w-5 h-5 text-background" />
                </div>
                <div className="mt-6 font-display text-4xl text-gradient-gold">{p.stat}</div>
                <h3 className="mt-3 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison */}
        <div className="mt-20 grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-8 border border-border bg-card/40"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Without Storytelling</div>
            <h3 className="mt-3 font-display text-3xl">Reports that get archived.</h3>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {["Static PDFs no one reads", "Generic photos, no emotion", "Donors disengage after one gift", "Grants harder to renew"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive/80 mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-8 border border-gold/30 bg-gradient-to-br from-gold/10 to-ember/5 shadow-glow"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gold">With Cinematic Storytelling</div>
            <h3 className="mt-3 font-display text-3xl">Films that get shared, funded, remembered.</h3>
            <ul className="mt-6 space-y-3">
              {["Donors feel the mission viscerally", "Beneficiaries become real to the world", "Fundraising campaigns convert", "Grant applications stand out"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
