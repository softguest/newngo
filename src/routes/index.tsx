import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhyStorytelling } from "@/components/site/WhyStorytelling";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

const title = "Subjectspot — NGO Storytelling Videographer · Cameroon";
const description =
  "Cinematic documentary videographer helping NGOs, nonprofits, and humanitarian organizations turn impact into emotional stories that raise funds and inspire donors.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Subjectspot",
          description,
          areaServed: "Cameroon",
          address: { "@type": "PostalAddress", addressLocality: "Bamenda", addressCountry: "CM" },
          serviceType: "NGO Storytelling Videography",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhyStorytelling />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
