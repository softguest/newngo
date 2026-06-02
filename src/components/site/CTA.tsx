import { motion } from "framer-motion";
import { MessageCircle, Mail, Calendar, Sparkles } from "lucide-react";
import { site } from "@/data/site";

export function CTA() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-gold/20 p-10 md:p-20 grain"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ember/20 via-background to-background" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-ember/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
              <Sparkles className="w-3.5 h-3.5" />
              Limited 2026 slots open
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02]">
              Let's tell stories that <span className="text-gradient-gold italic">change lives.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Whether you need donor-focused storytelling, event coverage, or social
              impact reels — let's create something meaningful, together.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={site.whatsapp} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3.5 font-medium hover:scale-[1.02] transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={site.calendly} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-background px-6 py-3.5 font-medium shadow-glow hover:scale-[1.02] transition">
                <Calendar className="w-4 h-4" /> Book on Calendly
              </a>
              <a href={`mailto:${site.email}`}
                 className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 font-medium hover:bg-foreground/10 transition">
                <Mail className="w-4 h-4 text-gold" /> Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
