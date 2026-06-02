import { motion } from "framer-motion";
import { processSteps } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Process() {
  return (
    <section id="process" className="relative py-28 md:py-40">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Process"
          title={<>A calm, considered way <span className="text-gradient-gold italic">to make great films.</span></>}
        />

        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent hidden lg:block" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative grid place-items-center w-24 h-24 rounded-full glass mx-auto">
                  <span className="font-display text-3xl text-gradient-gold">{s.n}</span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
