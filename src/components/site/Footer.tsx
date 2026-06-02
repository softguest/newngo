import { Film, Instagram, Youtube, Linkedin } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-gold shadow-glow">
              <Film className="w-4 h-4 text-background" />
            </span>
            <span className="font-display text-lg">{site.name}</span>
          </div>
          <p className="mt-4 max-w-md text-muted-foreground">
            Cinematic storytelling for NGOs, nonprofits, and humanitarian
            organizations across Cameroon and beyond.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); (e.target as HTMLFormElement).reset(); }}
            className="mt-6 flex items-center gap-2 max-w-md"
          >
            <input
              type="email" required placeholder="Your email for occasional film drops"
              className="flex-1 bg-background/50 border border-border rounded-full px-5 py-3 text-sm focus:border-gold focus:outline-none"
            />
            <button className="rounded-full bg-gradient-gold text-background px-5 py-3 text-sm font-medium shadow-glow">
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Navigate</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {["Work", "Services", "About", "Process", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Connect</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-foreground transition">{site.email}</a></li>
            <li><a href={site.whatsapp} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition">WhatsApp</a></li>
            <li className="text-muted-foreground">{site.location}</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Instagram, href: site.socials.instagram, label: "Instagram" },
              { Icon: Youtube, href: site.socials.youtube, label: "YouTube" },
              { Icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a key={label} aria-label={label} href={href} target="_blank" rel="noreferrer"
                 className="grid place-items-center w-9 h-9 rounded-full glass hover:bg-gold/20 transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} {site.name}. Crafted in Cameroon.</div>
        <div>Stories worth telling. Films worth funding.</div>
      </div>
    </footer>
  );
}
