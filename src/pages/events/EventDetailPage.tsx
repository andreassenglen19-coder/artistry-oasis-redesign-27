import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ImageIcon } from "lucide-react";

interface EventDetailPageProps {
  title: string;
  category?: string;
}

export function EventDetailPage({ title, category = "Community Event" }: EventDetailPageProps) {
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
                Photos and details coming soon.
              </p>
              
              {/* Image Gallery Placeholder */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div 
                    key={index}
                    className="aspect-square rounded-2xl bg-muted/50 border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center gap-3"
                  >
                    <ImageIcon className="w-12 h-12 text-muted-foreground/30" />
                    <span className="text-sm text-muted-foreground/50">Image {index}</span>
                  </div>
                ))}
              </div>

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
    </Layout>
  );
}