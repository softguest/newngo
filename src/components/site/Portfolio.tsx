import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { portfolio, portfolioCategories, videos } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Portfolio() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<null | (typeof portfolio)[number]>(null);

  const items = useMemo(
    () => (cat === "All" ? portfolio : portfolio.filter((p) => p.category === cat)),
    [cat]
  );

  return (
    <section id="work" className="relative py-28 md:py-40">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Stories that <span className="text-gradient-gold italic">moved donors</span> and changed funding.</>}
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {portfolioCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm transition border ${
                cat === c
                  ? "bg-gradient-gold text-background border-transparent shadow-glow"
                  : "glass border-border hover:border-gold/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* <motion.div layout className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 [column-fill:_balance]">
          <AnimatePresence>
            {items.map((p) => (
              <motion.button
                layout
                key={p.id}
                onClick={() => setOpen(p)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className={`group relative w-full mb-5 break-inside-avoid rounded-2xl overflow-hidden border border-border ${p.ratio}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-100 transition" />
                <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
                  <span className="grid place-items-center w-16 h-16 rounded-full bg-gradient-gold shadow-glow">
                    <Play className="w-6 h-6 text-background fill-background ml-1" />
                  </span>
                </div>
                <div className="absolute left-5 right-5 bottom-5 text-left">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{p.category}</div>
                  <div className="mt-1 font-display text-xl">{p.title}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div> */}
        <motion.div
          layout
          className="mt-16 grid sm:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {videos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-video">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                    {video.category}
                  </div>
                  <h3 className="mt-2 font-display text-xl">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-background/90 backdrop-blur-xl grid place-items-center p-6"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-border bg-card"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 z-10 grid place-items-center w-10 h-10 rounded-full glass"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video bg-black grid place-items-center relative">
                {/* <img src={open.image} alt={open.title} className="absolute inset-0 w-full h-full object-cover opacity-60" /> */}
                <div className="relative text-center px-6">
                  <span className="grid place-items-center w-20 h-20 rounded-full bg-gradient-gold shadow-glow mx-auto">
                    <Play className="w-8 h-8 text-background fill-background ml-1" />
                  </span>
                  <p className="mt-4 text-sm text-muted-foreground">Video preview · Sample frame</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-gold">{open.category}</div>
                <h3 className="mt-2 font-display text-3xl">{open.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
