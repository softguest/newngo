import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MapPin, Mail, MessageCircle, Instagram, Youtube, Linkedin } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    if (!name || name.length > 100) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Valid email required.";
    if (!message || message.length > 1500) errs.message = "Tell us a bit about your project.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="Contact"
            title={<>Start your <span className="text-gradient-gold italic">story.</span></>}
            subtitle="Tell me about your organization, mission, and what you'd like to film. I respond within 24 hours."
          />
          <div className="mt-10 space-y-5 text-sm">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="grid place-items-center w-11 h-11 rounded-xl glass group-hover:bg-gold/20 transition">
                <MessageCircle className="w-5 h-5 text-gold" />
              </span>
              <div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest">WhatsApp</div>
                <div className="font-medium">{site.whatsappDisplay}</div>
              </div>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 group">
              <span className="grid place-items-center w-11 h-11 rounded-xl glass group-hover:bg-gold/20 transition">
                <Mail className="w-5 h-5 text-gold" />
              </span>
              <div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest">Email</div>
                <div className="font-medium">{site.email}</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid place-items-center w-11 h-11 rounded-xl glass">
                <MapPin className="w-5 h-5 text-gold" />
              </span>
              <div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest">Based in</div>
                <div className="font-medium">{site.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-4">
              {[
                { Icon: Instagram, href: site.socials.instagram, label: "Instagram" },
                { Icon: Youtube, href: site.socials.youtube, label: "YouTube" },
                { Icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
                   className="grid place-items-center w-10 h-10 rounded-full glass hover:bg-gold/20 transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-3xl glass p-8 md:p-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-gradient-gold shadow-glow">
                    <Check className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl">Message received.</h3>
                  <p className="mt-2 text-muted-foreground">Thank you. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <Field name="name" label="Name" error={errors.name} />
                  <Field name="organization" label="Organization" />
                  <Field name="email" label="Email" type="email" error={errors.email} />
                  <Field name="phone" label="Phone" type="tel" />
                  <div className="sm:col-span-2">
                    <Label>Project Type</Label>
                    <select name="projectType" className="mt-2 w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:border-gold focus:outline-none">
                      <option>Impact Documentary</option>
                      <option>Fundraising Campaign Video</option>
                      <option>Event Coverage</option>
                      <option>Social Media Reels</option>
                      <option>Photography</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Message</Label>
                    <textarea name="message" rows={5} maxLength={1500}
                      className="mt-2 w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:border-gold focus:outline-none resize-none"
                      placeholder="Tell us about your mission and what you'd like to film…" />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                  <button type="submit"
                    className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold text-background px-7 py-4 font-medium shadow-glow hover:scale-[1.01] transition">
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-widest text-muted-foreground">{children}</label>;
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type} name={name} maxLength={200}
        className="mt-2 w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:border-gold focus:outline-none"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
