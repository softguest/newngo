import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { stats, partnerLogos, site } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden grain">
      {/* Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src={hero}
          alt="Cinematic NGO storytelling — children at golden hour in rural Cameroon"
          width={1920} height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 bg-radial-glow" />
      </motion.div>

      <div className="relative container mx-auto px-6 pt-40 pb-24 md:pt-48 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          NGO Storytelling Videographer · Cameroon
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
          className="mt-8 max-w-5xl text-5xl md:text-7xl lg:text-8xl font-display leading-[1.02] tracking-tight"
        >
          <span className="font-extrabold">Powerful storytelling videos that help NGOs{" "}</span>
          <span className="text-gradient-gold italic">inspire, raise funds</span>{" "}
          & show real impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          I help nonprofits, humanitarian organizations, and community projects
          turn their impact into emotional stories that donors remember — and
          fund again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={site.calendly} target="_blank" rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold text-background px-7 py-4 font-medium shadow-glow hover:scale-[1.02] transition-transform"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full glass px-7 py-4 font-medium hover:bg-foreground/10 transition"
          >
            <Play className="w-4 h-4 text-gold" />
            View My Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden glass"
        >
          {stats.map((s) => (
            <div key={s.label} className="p-6 bg-background/40">
              <div className="text-3xl md:text-4xl font-display text-gradient-gold">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust marquee */}
      <div className="relative border-y border-border/60 py-6 overflow-hidden">
        <div className="flex items-center gap-3 px-6 mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <Star className="w-3 h-3 text-gold fill-gold" />
          Trusted by mission-driven organizations
        </div>
        <div className="flex gap-12 whitespace-nowrap marquee">
          {[...partnerLogos, ...partnerLogos].map((l, i) => (
            <span key={i} className="text-xl md:text-2xl font-display text-muted-foreground/60 hover:text-foreground transition">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
