import { motion } from "framer-motion";
import {
  Film, Calendar, HeartHandshake, Users, Smartphone, Mic, Plane, Camera, ArrowUpRight,
} from "lucide-react";
import { services, site } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

const icons = { Film, Calendar, HeartHandshake, Users, Smartphone, Mic, Plane, Camera } as const;

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-card/30">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Services"
          title={<>Every format your mission needs — <span className="text-gradient-gold italic">crafted with cinema-grade care.</span></>}
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <motion.a
                key={s.title}
                href={site.whatsapp} target="_blank" rel="noreferrer"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 4) * 0.06 }}
                className="group relative rounded-2xl p-6 glass overflow-hidden hover:border-gold/40 hover:-translate-y-1 transition-all"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-gold/20 to-transparent pointer-events-none" />
                <div className="relative">
                  <Icon className="w-6 h-6 text-gold" />
                  <h3 className="mt-6 font-display text-xl leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold">
                    Request quote
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
