import { Layout } from "@/components/layout/Layout";
import EventsByYearSection from "@/components/sections/EventsByYearSection";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function OurEventsByYear() {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 paint-splash opacity-20" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display text-foreground mb-4">
              Our Events by <span className="text-gradient">Year</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A chronological archive of events. Tap a year to expand details.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <EventsByYearSection />
    </Layout>
  );
}
