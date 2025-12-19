import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

const DONATE_URL = "https://www.paypal.com/donate"; // replace with actual link

export default function SupportMissionPreview() {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-display mb-4">Support Our Mission</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Your donations help us continue our programs. Thank you for your support!</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card p-6 rounded-lg text-center">
            <div className="aspect-[4/3] bg-muted/50 rounded-md mb-4 flex items-center justify-center">Donation Bin Photo Coming Soon</div>
            <p className="text-muted-foreground mb-4">Your donations help us continue our programs. Thank you for your support!</p>
            <Button asChild variant="hero">
              <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">Donate Now</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
