import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function VolunteerPreview() {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-display mb-4">Join Our Team</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">We welcome volunteers who want to support our mission. Contact us to learn more.</p>
            <div className="mt-6">
              <Button asChild variant="hero">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
