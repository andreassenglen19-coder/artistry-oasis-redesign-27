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
  Coffee,
  Scissors,
  Gem,
  Shell,
  Puzzle,
  Library,
  PenTool
} from "lucide-react";
import galleryPreview from "@/assets/gallery-preview.jpg";

const programs = [
  {
    icon: Palette,
    title: "Mixed Media",
    description: "Let's make cool art using all kinds of things — paint, paper, stickers, fabric, and more! Mix them together to create your own fun masterpiece.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Painting",
    description: "Grab a brush and paint with us! We use bright colors to make pictures, shapes, and anything your imagination can dream of.",
    color: "accent",
  },
  {
    icon: PenTool,
    title: "Drawing",
    description: "Learn how to draw using pencils and markers. We start with simple lines and shapes and turn them into awesome pictures!",
    color: "sunshine",
  },
  {
    icon: Scissors,
    title: "Paper Crafts",
    description: "Cut, fold, glue, and create! We use colorful paper to make cards, decorations, animals, and lots of fun craft projects.",
    color: "lavender",
  },
  {
    icon: Sparkles,
    title: "Mosaics",
    description: "Make beautiful designs using tiny tiles, beads, or stones. It's like building a picture piece by piece.",
    color: "primary",
  },
  {
    icon: Shell,
    title: "Shell Art",
    description: "We make cool art using seashells! Create ocean-themed crafts and decorate with shiny shells.",
    color: "accent",
  },
  {
    icon: Gem,
    title: "Easy Jewelry & Bead Design",
    description: "Make your own bracelets and necklaces using colorful beads. Learn how to make patterns and create jewelry you can wear or share!",
    color: "sunshine",
  },
  {
    icon: Puzzle,
    title: "Memory & Game Play",
    description: "Play fun games like memory cards, puzzles, and matching games! These games help your brain stay happy and strong.",
    color: "lavender",
  },
  {
    icon: Library,
    title: "Use of Library (Reading & Learning Fun)",
    description: "Read easy books, play computer learning games, and explore fun movies. Learn new things in a calm and cozy space.",
    color: "primary",
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
              Programs & <span className="text-gradient">Daily Living Skills</span>
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
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">
              Our <span className="text-gradient-ocean">Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our variety of creative programs designed to inspire and empower every artist.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const colors = colorClasses[program.color as keyof typeof colorClasses];
              return (
                <motion.div key={program.title} variants={staggerItem}>
                  <Card variant="artistic" className="h-full group hover:shadow-artistic transition-all duration-300">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}
                      >
                        <program.icon className={`w-8 h-8 ${colors.text}`} />
                      </motion.div>
                      <h3 className="text-xl font-display text-foreground mb-3">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
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