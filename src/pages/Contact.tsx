import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Heart, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 paint-splash opacity-30" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? Want to learn more about our programs? We'd love to hear from you!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">
                How to <span className="text-gradient-ocean">Reach Us</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <Card variant="artistic">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">
                        Ozaukee County, Wisconsin<br />
                        (Contact us for specific location details)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="artistic">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">Call Us</h3>
                      <p className="text-muted-foreground">(262) 555-0123</p>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="artistic">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sunshine/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">Email Us</h3>
                      <p className="text-muted-foreground">info@artistryoasis.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="artistic">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-lavender/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 4:00 PM<br />
                        Saturday: By Appointment
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-warm rounded-2xl text-primary-foreground"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6" />
                  <span className="font-display text-xl">Want to Volunteer?</span>
                </div>
                <p className="opacity-90">
                  We're always looking for passionate volunteers to join our community. Reach out to learn about opportunities!
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right">
              <Card variant="artistic" className="p-8">
                <h2 className="text-2xl font-display text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(262) 555-0123"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Find Us in <span className="text-gradient">Ozaukee County</span>
            </h2>
            <p className="text-muted-foreground">
              Serving individuals throughout Ozaukee County and surrounding areas in Wisconsin.
            </p>
          </AnimatedSection>

          <div className="aspect-[16/9] max-h-[500px] bg-muted rounded-3xl overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185456.79562379844!2d-87.95474934609374!3d43.39847670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804dda9a0b66f51%3A0x7bf3a2f39fe7d0eb!2sOzaukee%20County%2C%20WI!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Artistry Oasis Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
