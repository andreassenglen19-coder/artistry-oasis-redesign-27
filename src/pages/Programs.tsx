import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Palette, 
  Users, 
  Heart, 
  Calendar, 
  Sparkles,
  BookOpen,
  GraduationCap,
  Clock,
  ArrowRight,
  Star,
  Coffee
} from "lucide-react";
import galleryPreview from "@/assets/gallery-preview.jpg";

const programs = [
  {
    icon: Palette,
    title: "Daily Living Skills",
    description: "Artistry Oasis LLC is a Day Service that offers Daily Living Skills. Through creative activities, participants build essential life skills while expressing themselves artistically.",
    features: ["Problem Solving", "Decision Making", "Following Directions", "Independence"],
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Art Programs",
    description: "Our core arts programs explore a wide variety of media. Artists work at their own pace with support from our skilled staff and volunteers.",
    features: ["Mixed Media", "Painting", "Drawing", "Paper Crafts"],
    color: "accent",
  },
  {
    icon: Heart,
    title: "Creative Crafts",
    description: "Explore various craft techniques including mosaics, shell art, and jewelry design. Each project is tailored to individual interests and abilities.",
    features: ["Mosaics", "Shell Art", "Easy Jewelry / Bead Design", "Custom Projects"],
    color: "sunshine",
  },
  {
    icon: Users,
    title: "Social & Memory Activities",
    description: "Engage in activities that promote social interaction and cognitive stimulation including memory games and library resources.",
    features: ["Memory / Game Play", "Library Use", "Easy Readers", "DVD/Movie Rentals"],
    color: "lavender",
  },
  {
    icon: GraduationCap,
    title: "After-School Workshops",
    description: "Creative after-school programs where young artists can explore their artistic talents in a supportive, fun environment.",
    features: ["Safe Environment", "Skill Building", "Creative Expression", "Wednesday Sessions"],
    color: "primary",
  },
  {
    icon: Calendar,
    title: "Monthly Events",
    description: "Regular community gatherings, exhibitions, and special events that celebrate our artists and bring the community together.",
    features: ["Art Shows", "Community Events", "Celebrations", "Public Exhibitions"],
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
  },
  lavender: {
    bg: "bg-lavender/30",
    text: "text-foreground",
    border: "border-lavender/30",
  },
  sunshine: {
    bg: "bg-sunshine/20",
    text: "text-foreground",
    border: "border-sunshine/30",
  },
};

const Programs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 paint-splash opacity-30" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              What We Offer
            </span>
            <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6">
              Our <span className="text-gradient">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Artistry Oasis LLC is a Day Service that offers Daily Living Skills through creative arts and community involvement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Class Info Banner */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-display text-primary">Class Size:</span> Daily classes have under 10 participants. Events have 10–15 participants.
            </p>
            <p className="text-muted-foreground mt-2">
              Classes are designed for independent artists who may need some assistance unless they bring their own caregiver.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <StaggerContainer className="space-y-12">
            {programs.map((program, index) => {
              const colors = colorClasses[program.color as keyof typeof colorClasses];
              return (
                <motion.div key={program.title} variants={staggerItem}>
                  <Card variant="artistic" className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Icon Side */}
                        <div className={`lg:col-span-2 p-8 lg:p-12 ${colors.bg} flex flex-col justify-center items-center text-center`}>
                          <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className="w-20 h-20 rounded-2xl bg-card shadow-soft flex items-center justify-center mb-6"
                          >
                            <program.icon className={`w-10 h-10 ${colors.text}`} />
                          </motion.div>
                          <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">
                            {program.title}
                          </h3>
                        </div>

                        {/* Content Side */}
                        <div className="lg:col-span-3 p-8 lg:p-12">
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {program.description}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {program.features.map((feature) => (
                              <span
                                key={feature}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-artistic"
              >
                <img
                  src={galleryPreview}
                  alt="Artistry Oasis studio"
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                Schedule
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
                When We <span className="text-gradient-ocean">Meet</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We offer flexible scheduling to accommodate our participants' needs.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { day: "Normal Hours", time: "Tuesday, Thursday, Friday: 10 AM - 3 PM", desc: "Regular Programs" },
                  { day: "After School Workshops", time: "Wednesday: 3:30 PM - 5:30 PM", desc: "After-School Sessions" },
                  { day: "Monthly Event", time: "Last Saturday: 6 PM - 9 PM", desc: "Monthly Art Night" },
                ].map((schedule) => (
                  <li key={schedule.day} className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-display text-lg text-foreground">{schedule.day}</div>
                      <div className="text-sm text-muted-foreground">{schedule.time}</div>
                      <div className="text-xs text-primary mt-1">{schedule.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              
              {/* Snacks Note */}
              <div className="flex items-start gap-3 p-4 bg-sunshine/10 rounded-xl mb-8">
                <Coffee className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Snacks and water included, or participants can bring their own for sessions over 2 hours.
                </p>
              </div>
              
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;