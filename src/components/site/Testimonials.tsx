import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials, partnerLogos } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];

  return (
    <section className="relative py-28 md:py-40 bg-card/30">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>What partner <span className="text-gradient-gold italic">organizations say.</span></>}
          align="center"
        />

        <div className="mt-16 max-w-4xl mx-auto relative">
          <Quote className="w-16 h-16 text-gold/30 absolute -top-6 -left-2" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative font-display text-2xl md:text-4xl leading-snug text-center"
            >
              "{t.quote}"
              <footer className="mt-8 text-base font-sans not-italic">
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                aria-label={`Testimonial ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-3 bg-border"}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-70">
          {partnerLogos.slice(0, 8).map((p) => (
            <div key={p} className="text-center font-display text-lg text-muted-foreground hover:text-foreground transition">{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
