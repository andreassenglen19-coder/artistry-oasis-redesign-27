import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, Users, Star } from "lucide-react";
import { communityEvents, pastEvents, getEventSlug } from "@/data/events";

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
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Coming Up
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <motion.div key={event.title} variants={staggerItem}>
                <Card variant={event.featured ? "primary" : "artistic"} className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.category === "Monthly" ? "bg-primary/10 text-primary" :
                        event.category === "Weekly" ? "bg-accent/10 text-accent" :
                        event.category === "Special" ? "bg-sunshine/20 text-foreground" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {event.category}
                      </span>
                      {event.featured && (
                        <Star className="w-5 h-5 text-primary fill-primary" />
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-display text-foreground mb-4">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Register for an Event
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Community
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
                Community <span className="text-gradient-ocean">Events</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our events are open to the public and designed to be inclusive for individuals of all abilities. Whether you're a participant, family member, volunteer, or community member, there's a place for you at our gatherings.
              </p>
              
              {/* All Community Events as Clickable Links */}
              <div className="flex flex-wrap gap-2 mb-8">
                {communityEvents.map((event) => (
                  <Link
                    key={event.slug}
                    to={`/events/${event.slug}`}
                    className="px-4 py-2 bg-card rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shadow-soft"
                  >
                    {event.name}
                  </Link>
                ))}
              </div>
              
              <ul className="space-y-4">
                {[
                  "Monthly art nights open to the community",
                  "Quarterly open house events",
                  "Annual art shows and exhibitions",
                  "Special seasonal celebrations",
                  "Volunteer appreciation events",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card variant="artistic" className="p-8">
                <h3 className="text-2xl font-display text-foreground mb-6">Past Events</h3>
                <div className="space-y-6">
                  {pastEvents.map((yearEvents) => (
                    <div key={yearEvents.year}>
                      <div className="text-lg font-display text-primary mb-2">{yearEvents.year}</div>
                      <div className="flex flex-wrap gap-2">
                        {yearEvents.events.map((event) => (
                          <Link
                            key={event}
                            to={`/events/${getEventSlug(event)}`}
                            className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                          >
                            {event}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;