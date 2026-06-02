import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import { SectionHeader } from "./SectionHeader";

const timeline = [
  { year: "2017", text: "Picked up a camera in Bamenda to document a local health drive." },
  { year: "2019", text: "First feature documentary screened at regional NGO summit." },
  { year: "2021", text: "Began partnering with international humanitarian organizations." },
  { year: "2024", text: "Films seen by 4M+ people across donor and media channels." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-card/30">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-border aspect-[4/5] max-w-md">
            <img src={portrait} alt="Documentary videographer portrait" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 hidden md:block">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Based in</div>
            <div className="mt-1 font-display text-2xl">Bamenda · Cameroon</div>
          </div>
        </motion.div>

        <div>
          <SectionHeader
            eyebrow="About"
            title={<>Human stories, <span className="text-gradient-gold italic">told with dignity.</span></>}
            subtitle="I'm a Cameroon-based documentary videographer obsessed with one thing: helping the people doing real good get the recognition — and resources — they deserve. From rural clinics to urban classrooms, my work centers the humans behind the mission."
          />

          <div className="mt-10 relative pl-6 border-l border-border">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pb-8 last:pb-0"
              >
                <span className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-gradient-gold shadow-glow" />
                <div className="text-sm text-gold font-medium">{t.year}</div>
                <div className="mt-1 text-foreground/90">{t.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
