import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/animated-section";
import { ArrowRight, Sparkles, Facebook } from "lucide-react";

import artist1 from "@/assets/gallery/artist-1.jpg";
import artist2 from "@/assets/gallery/artist-2.jpg";
import artist3 from "@/assets/gallery/artist-3.jpg";
import artist4 from "@/assets/gallery/artist-4.jpg";

const featuredArtists = [
  { src: artist1, alt: "Artist creating mosaic art" },
  { src: artist2, alt: "Artist working on gingerbread house" },
  { src: artist3, alt: "Artist painting" },
  { src: artist4, alt: "Artist with finished project" },
];

export function MeetArtistsSection() {
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Community
          </span>
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-4">
            Come Meet Some of Our
            <br />
            <span className="text-gradient">Artists & Volunteers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every artist at Artistry Oasis brings their unique perspective and creativity. Together, we build a vibrant community of makers and dreamers.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {featuredArtists.map((artist, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-artistic group"
            >
              <img
                src={artist.src}
                alt={artist.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-6">
          <p className="text-sm text-muted-foreground mb-3">
            For more frequent updates, photos, and community moments, visit our Facebook page!
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild variant="accent" size="sm">
              <a
                href="https://www.facebook.com/p/Artistry-Oasis-LLC-100057713857474/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4" />
                Visit Our Facebook Page
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
