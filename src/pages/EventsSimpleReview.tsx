import { Layout } from "@/components/layout/Layout";
import EventsSimpleDraft from "@/components/sections/EventsSimpleDraft";

export default function EventsSimpleReview() {
  return (
    <Layout>
      <section className="pt-32 pb-8 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-display text-foreground">Events (Simplified Preview)</h1>
        </div>
      </section>

      <EventsSimpleDraft />
    </Layout>
  );
}
