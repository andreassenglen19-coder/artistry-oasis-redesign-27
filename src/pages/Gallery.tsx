import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { Sparkles, Camera } from "lucide-react";

import artist1 from "@/assets/gallery/artist-1.jpg";
import artist2 from "@/assets/gallery/artist-2.jpg";
import artist3 from "@/assets/gallery/artist-3.jpg";
import artist4 from "@/assets/gallery/artist-4.jpg";
import artist5 from "@/assets/gallery/artist-5.jpg";
import artist6 from "@/assets/gallery/artist-6.jpg";
import artist7 from "@/assets/gallery/artist-7.jpg";
import artist8 from "@/assets/gallery/artist-8.jpg";
import artist9 from "@/assets/gallery/artist-9.jpg";
import artist10 from "@/assets/gallery/artist-10.jpg";
import artist11 from "@/assets/gallery/artist-11.jpg";
import artist12 from "@/assets/gallery/artist-12.jpg";

const galleryImages = [
  { src: artist1, alt: "Artist creating a mosaic letter art piece" },
  { src: artist2, alt: "Artist decorating a gingerbread house" },
  { src: artist3, alt: "Artist painting at the studio" },
  { src: artist4, alt: "Artist proudly displaying finished artwork" },
  { src: artist5, alt: "Artist working on a creative project" },
  { src: artist6, alt: "Group art session at the studio" },
  { src: artist7, alt: "Artist creating with colorful materials" },
  { src: artist8, alt: "Creative workshop in progress" },
  { src: artist9, alt: "Artist focused on detailed work" },
  { src: artist10, alt: "Community art event" },
  { src: artist11, alt: "Artist with completed project" },
  { src: artist12, alt: "Creative expression at Artistry Oasis" },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 paint-splash opacity-30" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Camera className="w-4 h-4" />
              Our Community
            </span>
            <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6">
              Artist <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Come meet some of our Artists and Volunteers. Every image tells a story of creativity, growth, and community.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display text-foreground">Our Artists at Work</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Browse through photos of our artists creating, learning, and celebrating together. Click on any image to view it in full size.
            </p>
          </AnimatedSection>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
              Want to See More?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Follow us on social media for the latest photos, event updates, and behind-the-scenes glimpses into life at Artistry Oasis.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                Facebook
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors"
              >
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
