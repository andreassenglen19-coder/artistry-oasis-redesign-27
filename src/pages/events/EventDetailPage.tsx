import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { useState } from "react";
import { GalleryGrid } from "@/components/ui/gallery-grid";

interface EventDetailPageProps {
  title: string;
  category?: string;
  images?: string[];
}

export function EventDetailPage({ 
  title, 
  category = "Community Event", 
  images = []
}: EventDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 paint-splash opacity-30" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-4xl mx-auto">
            <Link 
              to="/events" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              {category}
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground">
              {title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="text-xl text-muted-foreground mb-12 text-center">
                Explore photos from this event.
              </p>
              
              {/* Image Gallery: use GalleryGrid for consistent layout with main gallery on mobile */}
              {images.length > 0 ? (
                <div className="mb-12">
                  <GalleryGrid images={images.map((src, idx) => ({ src, alt: `${title} Photo ${idx + 1}` }))} />
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-2xl bg-muted/50 border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center gap-3"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 6h.01" />
                      </svg>
                      <span className="text-sm text-muted-foreground/50">Image {index}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="text-center">
                <Button variant="hero" asChild>
                  <Link to="/events">
                    <ArrowLeft className="w-5 h-5" />
                    View All Events
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)} // Close on outside click
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </Layout>
  );
}