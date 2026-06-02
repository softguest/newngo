import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow, title, subtitle, align = "left",
}: { eyebrow: string; title: React.ReactNode; subtitle?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <motion.div
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold"
      >
        <span className="w-6 h-px bg-gold" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.05 }}
        className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-lg text-muted-foreground leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
