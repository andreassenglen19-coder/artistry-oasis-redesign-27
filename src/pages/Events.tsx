import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import EventsByYearSection from "@/components/sections/EventsByYearSection";

const upcomingEvents = [
  {
    title: "Monthly Art Night",
    date: "Last Saturday of Every Month",
    time: "6:00 PM - 9:00 PM",
    location: "Artistry Oasis Studio",
    description: "Join us for an evening of creativity, community, and fun! Open to all skill levels.",
    category: "Monthly",
    featured: true,
  },
  {
    title: "One-on-One Craft Sessions",
    date: "Available by Appointment",
    time: "Flexible Hours",
    location: "Artistry Oasis Studio",
    description: "Personalized creative sessions tailored to your interests and abilities.",
    category: "Ongoing",
    featured: false,
  },
  {
    title: "After-School Creative Workshop",
    date: "Every Wednesday",
    time: "3:30 PM - 5:30 PM",
    location: "Artistry Oasis Studio",
    description: "Creative after-school programs for young artists to explore their talents.",
    category: "Weekly",
    featured: false,
  },
  {
    title: "Community Open House",
    date: "Quarterly",
    time: "1:00 PM - 4:00 PM",
    location: "Artistry Oasis Studio",
    description: "Tour our studio, meet our artists, and see their amazing work on display.",
    category: "Special",
    featured: true,
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 paint-splash opacity-30" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/30 text-foreground text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Mark Your Calendar
            </span>
            <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6">
              Events & <span className="text-gradient-ocean">Gatherings</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our community events, workshops, and celebrations. There's always something creative happening at Artistry Oasis!
            </p>
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground text-center">
                We host several annual events. The VFW Auxiliary ‘Illustrating America’ and American Legion Post 470 Winter Markets were added in 2025. The Wendland Nursery Show is held most years, except 2024.
              </p>
            </div>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-sm text-muted-foreground">For more frequent updates, photos, and community moments, visit our Facebook page!</p>
              <Button asChild variant="soft" size="sm">
                <a
                  href="https://www.facebook.com/p/Artistry-Oasis-LLC-100057713857474/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Our Facebook Page
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Simplified Events layout: only current + previous year lists */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display text-foreground">Events</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              For the most up-to-date activities, photos, and community moments, follow us on Facebook: <a href="https://www.facebook.com/p/Artistry-Oasis-LLC-100057713857474/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Visit Our Facebook Page</a>
            </p>
          </AnimatedSection>

          <EventsByYearSection />

          <div className="max-w-3xl mx-auto text-center mt-8">
            <p className="text-sm text-muted-foreground">Want to see more from past years? We keep archives for reference, but only the current and previous year are shown here to keep the site low-maintenance.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;