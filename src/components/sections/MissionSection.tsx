import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import communityArt from "@/assets/community-art.jpg";
import { Heart, Star, Users, Sparkles } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 paint-splash opacity-30" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection direction="left" className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-artistic"
            >
              <img
                src={communityArt}
                alt="Hands creating art together"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-card shadow-artistic rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-warm flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-display text-foreground">9+ Years</div>
                <div className="text-sm text-muted-foreground">of Community Service</div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" className="lg:pl-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunshine/20 text-sunshine-foreground text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Our Mission
            </span>

            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6 leading-tight">
              Fostering <span className="text-gradient">Self-Determination</span> & Personal Fulfillment
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Artistry Oasis LLC, we teach an array of arts, encourage creativity, build fine motor skills, increase social skills, and improve confidence. We foster community involvement with enthusiasm and joy, creating an environment where every individual can thrive.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Star, title: "Encourage Creativity", desc: "Every artist finds their unique voice" },
                { icon: Users, title: "Build Community", desc: "Connections that last a lifetime" },
                { icon: Heart, title: "Foster Growth", desc: "Skills for daily living and beyond" },
                { icon: Sparkles, title: "Celebrate Joy", desc: "Finding happiness in every creation" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
