import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Mail, Phone } from "lucide-react";
import artSupplies from "@/assets/art-supplies.jpg";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={artSupplies}
          alt="Art supplies background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-8"
          >
            <Heart className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display text-background mb-6">
            Ready to Join Our Creative Family?
          </h2>
          <p className="text-lg text-background/80 mb-10 leading-relaxed">
            Whether you're interested in our programs, want to volunteer, or just curious about what we do, we'd love to hear from you. Let's create something beautiful together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild className="text-background border-background/30 hover:bg-background/10">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-background/70">
            <a href="tel:+12625550123" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              (262) 555-0123
            </a>
            <a href="mailto:info@artistryoasis.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              info@artistryoasis.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
