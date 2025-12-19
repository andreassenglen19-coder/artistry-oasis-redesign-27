import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FB_URL = "https://www.facebook.com/p/Artistry-Oasis-LLC-100057713857474/";

export default function HomeSimpleReview() {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-display mb-4">Where Creativity Meets Community</h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-6">
              Artistry Oasis LLC is a Daily Living Skills program serving individuals with developmental disabilities through creative arts and community involvement.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground">For more frequent updates, photos, and community moments, follow us on Facebook.</p>
            <div className="mt-3 flex items-center justify-center">
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                Visit Our Facebook Page
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Key Stats</h3>
                <ul className="text-muted-foreground">
                  <li>100+ Artists Served</li>
                  <li>10+ Programs</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-card p-6 rounded-lg text-center">
                <h4 className="font-medium mb-2">Join Our Creative Family?</h4>
                <Button asChild variant="hero">
                  <Link to="/contact">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
