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
    title: "Arts Programs",
    description: "Explore painting, sculpture, ceramics, and mixed media in a supportive environment that celebrates every artist.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Daily Living Skills",
    description: "Build essential life skills through creative activities, fostering independence and self-determination.",
    color: "accent",
  },
  {
    icon: Users,
    title: "One-on-One Sessions",
    description: "Personalized craft sessions tailored to individual interests, abilities, and creative goals.",
    color: "lavender",
  },
  {
    icon: Heart,
    title: "Social Skills Building",
    description: "Develop confidence and social connections through collaborative art projects and community activities.",
    color: "sunshine",
  },
  {
    icon: GraduationCap,
    title: "After-School Workshops",
    description: "Creative after-school programs where young artists can explore their artistic talents.",
    color: "primary",
  },
  {
    icon: Calendar,
    title: "Monthly Events",
    description: "Regular community gatherings, exhibitions, and special events that celebrate our artists.",
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
