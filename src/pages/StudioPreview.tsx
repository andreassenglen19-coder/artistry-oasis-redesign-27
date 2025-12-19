import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function StudioPreview() {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-display mb-4">Our Studio</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our studio is a creative haven where artists explore, learn, and grow. Come visit us!</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <div className="aspect-[4/3] bg-muted/50 rounded-md flex items-center justify-center">Photo Coming Soon</div>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <div className="aspect-[4/3] bg-muted/50 rounded-md flex items-center justify-center">Photo Coming Soon</div>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <div className="aspect-[4/3] bg-muted/50 rounded-md flex items-center justify-center">Photo Coming Soon</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
