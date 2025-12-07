import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/animated-section";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    title: "Monthly Art Night",
    date: "Every 2nd Saturday",
    time: "6:00 PM - 9:00 PM",
    location: "Artistry Oasis Studio",
    description: "Join us for an evening of creativity, community, and fun!",
    featured: true,
  },
  {
    title: "One-on-One Craft Sessions",
    date: "By Appointment",
    time: "Flexible Hours",
    location: "Artistry Oasis Studio",
    description: "Personalized creative sessions tailored to your interests.",
    featured: false,
  },
  {
    title: "After-School Workshop",
    date: "Wednesdays",
    time: "3:30 PM - 5:30 PM",
    location: "Artistry Oasis Studio",
    description: "Creative exploration for young artists after school.",
    featured: false,
  },
];

export function EventsPreviewSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/30 text-foreground text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Upcoming Events
          </span>
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-4">
            Join Our <span className="text-gradient-ocean">Creative Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From monthly art nights to special workshops, there's always something exciting happening at Artistry Oasis.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event, index) => (
            <motion.div key={event.title} variants={staggerItem}>
              <Card 
                variant={event.featured ? "primary" : "default"} 
                className="h-full group"
              >
                <CardContent className="p-6">
                  {event.featured && (
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-4">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl font-display text-foreground mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/events">
              See All Events
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
