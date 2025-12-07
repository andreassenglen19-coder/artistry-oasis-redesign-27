import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Star, Lightbulb, Sparkles } from "lucide-react";
import communityArt from "@/assets/community-art.jpg";
import artSupplies from "@/assets/art-supplies.jpg";

const values = [
  {
    icon: Heart,
    title: "Enthusiasm & Joy",
    description: "We bring positivity and excitement to every session, making learning fun and engaging.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We foster meaningful connections and build a supportive community around creativity.",
  },
  {
    icon: Star,
    title: "Individual Attention",
    description: "Every person is unique, and we tailor our approach to each individual's needs and interests.",
  },
  {
    icon: Lightbulb,
    title: "Self-Determination",
    description: "We empower individuals to make choices and express themselves through art.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 paint-splash opacity-30" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6">
              About <span className="text-gradient">Artistry Oasis</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A Daily Living Skills program dedicated to serving individuals with developmental disabilities through the transformative power of art.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-artistic"
              >
                <img
                  src={communityArt}
                  alt="Community creating art together"
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
                Our <span className="text-gradient-ocean">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Artistry Oasis LLC is a Daily Living Skills program serving our community with developmental disabilities throughout Ozaukee County and surrounding counties.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Artistry Oasis LLC, we teach an array of arts, encourage creativity, build fine motor skills, increase social skills, and increase confidence, and foster community involvement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bring enthusiasm, joy and a focus on individuals that fosters an environment of self-determination and personal fulfillment for those served.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              What We <span className="text-gradient">Believe</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do at Artistry Oasis.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <motion.div key={value.title} variants={staggerItem}>
                <Card variant="artistic" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-warm flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-display text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
                What We <span className="text-gradient">Do</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Teach an array of arts and creative skills",
                  "Encourage creativity and self-expression",
                  "Build fine motor skills through hands-on activities",
                  "Increase social skills through group activities",
                  "Build confidence through accomplishment",
                  "Foster community involvement and connection",
                  "Provide individual-focused support and attention",
                  "Create an environment of self-determination",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-artistic"
              >
                <img
                  src={artSupplies}
                  alt="Art supplies at studio"
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
              Our <span className="text-gradient-ocean">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our dedicated team of staff and volunteers work together to create a welcoming, supportive environment where every artist can thrive. We're united by our passion for the arts and our commitment to serving our community.
            </p>
            <p className="text-xl font-display text-primary">
              Come meet some of our Artists and Volunteers!
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
