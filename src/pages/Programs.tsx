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
  Star
} from "lucide-react";
import galleryPreview from "@/assets/gallery-preview.jpg";

const programs = [
  {
    icon: Palette,
    title: "Arts Programs",
    description: "Our core arts programs explore a wide variety of media including painting, drawing, sculpture, ceramics, fiber arts, and mixed media. Artists work at their own pace with support from our skilled staff and volunteers.",
    features: ["Painting & Drawing", "Sculpture & Ceramics", "Mixed Media", "Fiber Arts"],
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Daily Living Skills",
    description: "Through creative activities, participants build essential life skills. Art-making strengthens problem-solving, decision-making, and the ability to follow multi-step directions.",
    features: ["Problem Solving", "Decision Making", "Following Directions", "Independence"],
    color: "accent",
  },
  {
    icon: Users,
    title: "One-on-One Craft Sessions",
    description: "Personalized craft sessions tailored to individual interests and abilities. Work with a dedicated mentor on projects that excite and inspire you.",
    features: ["Personalized Instruction", "Flexible Scheduling", "Custom Projects", "Individual Attention"],
    color: "sunshine",
  },
  {
    icon: Heart,
    title: "Social Skills Building",
    description: "Art is a powerful tool for connection. Our programs create opportunities for meaningful social interaction, collaboration, and community building.",
    features: ["Group Collaboration", "Peer Interaction", "Communication Skills", "Team Projects"],
    color: "lavender",
  },
  {
    icon: GraduationCap,
    title: "After-School Workshops",
    description: "Creative after-school programs where young artists can explore their artistic talents in a supportive, fun environment.",
    features: ["Safe Environment", "Skill Building", "Creative Expression", "Homework Support"],
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
              From daily arts programs to special community events, we offer a variety of creative opportunities that inspire, educate, and empower.
            </p>
          </AnimatedSection>
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
                We offer flexible scheduling to accommodate our participants' needs. Whether you prefer regular weekly sessions or occasional drop-ins, we have options for you.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { day: "Weekdays", time: "9:00 AM - 4:00 PM", desc: "Regular Programs" },
                  { day: "Wednesdays", time: "3:30 PM - 5:30 PM", desc: "After-School Workshops" },
                  { day: "2nd Saturday", time: "6:00 PM - 9:00 PM", desc: "Monthly Art Night" },
                ].map((schedule) => (
                  <li key={schedule.day} className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-display text-lg text-foreground">{schedule.day}</div>
                      <div className="text-sm text-muted-foreground">{schedule.time} • {schedule.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
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
