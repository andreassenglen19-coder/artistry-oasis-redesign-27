import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function WallOfArtPreview() {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-display mb-4">Wall of Art</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Each year, we celebrate our artists’ creativity with a special Wall of Art display at the Cedarburg Cultural Center.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">2025 Wall of Art</h3>
              <div className="aspect-[4/3] bg-muted/50 rounded-md flex items-center justify-center">Photo Coming Soon</div>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">2024 Wall of Art</h3>
              <div className="aspect-[4/3] bg-muted/50 rounded-md flex items-center justify-center">Photo Coming Soon</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
