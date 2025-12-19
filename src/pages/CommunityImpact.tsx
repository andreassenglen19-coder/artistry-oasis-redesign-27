import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CommunityImpact() {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-display mb-4">Community Impact</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our donation and community-focused projects support local partners and bring creativity to people who need it most.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-medium mb-3">Donations to Ozaukee County Food Alliance</h2>
              <div className="grid md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold">Tie Blankets for Ozaukee County Food Alliance – 2025</h3>
                  <p className="text-muted-foreground mt-2">In 2025, our artists created no-sew tie blankets as a heartfelt donation to support families served by the Ozaukee County Food Alliance. These cozy blankets were included in holiday care packages for community members in need.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-[4/3] bg-muted/50 rounded-md flex items-center justify-center text-sm text-muted-foreground">Photo: Tie Blankets – 2025</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Other Charity-Focused Projects</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Family Sharing Empty Bowls Fundraiser</li>
                <li>Blossom IDD Fundraiser Paintings</li>
                <li>Kuhfuss Christmas Ornaments</li>
                <li>Donation Bin drives</li>
              </ul>
            </div>

            <div className="text-center">
              <Button asChild variant="hero">
                <Link to="/support">Support Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
