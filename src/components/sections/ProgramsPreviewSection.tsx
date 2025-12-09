import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/animated-section";
import { 
  Palette, 
  Users, 
  Heart, 
  Calendar, 
  Sparkles,
  BookOpen,
  ArrowRight,
  GraduationCap
} from "lucide-react";

const programs = [
  {
    icon: Palette,
    title: "Mixed Media",
    description: "Make cool art using paint, paper, stickers, fabric, and more! Mix them together to create fun masterpieces.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Painting",
    description: "Grab a brush and paint with us! We use bright colors to make pictures, shapes, and anything you can dream of.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Paper Crafts",
    description: "Cut, fold, glue, and create! We use colorful paper to make cards, decorations, animals, and fun projects.",
    color: "lavender",
  },
  {
    icon: Heart,
    title: "Mosaics & Shell Art",
    description: "Make beautiful designs using tiny tiles, beads, stones, and seashells for ocean-themed creations.",
    color: "sunshine",
  },
  {
    icon: GraduationCap,
    title: "Easy Jewelry & Bead Design",
    description: "Make bracelets and necklaces using colorful beads. Learn patterns and create jewelry to wear or share!",
    color: "primary",
  },
  {
    icon: Calendar,
    title: "Memory & Game Play",
    description: "Play fun games like memory cards, puzzles, and matching games that help your brain stay happy and strong.",
    color: "accent",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  lavender: "bg-lavender/30 text-lavender-foreground",
  sunshine: "bg-sunshine/20 text-sunshine-foreground",
};

export function ProgramsPreviewSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            What We Offer
          </span>
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-4">
            Programs That <span className="text-gradient">Inspire</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From daily arts programs to special community events, we offer a variety of creative opportunities for everyone.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <motion.div key={program.title} variants={staggerItem}>
              <Card variant="artistic" className="h-full group cursor-pointer">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl ${colorClasses[program.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <program.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/programs">
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
