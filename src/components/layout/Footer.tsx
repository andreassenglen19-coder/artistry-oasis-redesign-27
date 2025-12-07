import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, MapPin, Phone, Mail, Heart, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  programs: [
    { label: "Daily Living Skills", href: "/programs" },
    { label: "Arts Programs", href: "/programs" },
    { label: "One-on-One Crafts", href: "/programs" },
    { label: "After-school Workshops", href: "/programs" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  events: [
    { label: "Monthly Events", href: "/events" },
    { label: "Community Events", href: "/events" },
    { label: "Past Events", href: "/events" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative paint splash */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center"
              >
                <Palette className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <span className="font-display text-2xl">Artistry Oasis</span>
            </Link>
            <p className="text-background/70 mb-6 leading-relaxed">
              Empowering individuals with developmental disabilities through creative arts and community involvement in Ozaukee County.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-xl mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-xl mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <span>Ozaukee County, Wisconsin</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>(262) 555-0123</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@artistryoasis.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Artistry Oasis LLC. All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
