import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Palette, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { communityEvents } from "@/data/events";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events", hasDropdown: true },
  { href: "/events-by-year", label: "Our Events by Year" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsEventsDropdownOpen(false);
    setIsMobileEventsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
<Link to="/" className="flex items-center gap-3 group">
  <motion.div
    whileHover={{ rotate: 15, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-12 h-12 rounded-xl flex items-center justify-center"
  >
    <img src="/src/assets/logo.png" alt="Logo" className="w-8 h-8" />
  </motion.div>
  <div className="flex flex-col">
    <span className="font-display text-2xl text-foreground leading-tight">
      Artistry Oasis
    </span>
    <span className="text-xs text-muted-foreground font-body tracking-wide">
      Creative Arts for All
    </span>
  </div>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              {link.hasDropdown ? (
                <div 
                  className="relative"
                  onMouseEnter={() => setIsEventsDropdownOpen(true)}
                  onMouseLeave={() => setIsEventsDropdownOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "relative px-4 py-2 text-base font-medium transition-colors duration-300 rounded-lg inline-flex items-center gap-1",
                      location.pathname.startsWith("/events")
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isEventsDropdownOpen && "rotate-180"
                    )} />
                    {location.pathname.startsWith("/events") && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isEventsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50"
                      >
                        <div className="py-2 max-h-96 overflow-y-auto">
                          <Link
                            to="/events"
                            className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                          >
                            All Events
                          </Link>
                          <div className="border-t border-border my-2" />
                          {communityEvents.map((event) => (
                            <Link
                              key={event.slug}
                              to={`/events/${event.slug}`}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              {event.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className={cn(
                    "relative px-4 py-2 text-base font-medium transition-colors duration-300 rounded-lg",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
          <Button variant="hero" size="sm" asChild className="ml-4">
            <Link to="/contact">Join Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card/98 backdrop-blur-lg border-t border-border max-h-[80vh] overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsMobileEventsOpen(!isMobileEventsOpen)}
                        className={cn(
                          "w-full flex items-center justify-between py-3 px-4 text-lg font-medium rounded-lg transition-colors",
                          location.pathname.startsWith("/events")
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {link.label}
                        <ChevronDown className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          isMobileEventsOpen && "rotate-180"
                        )} />
                      </button>
                      <AnimatePresence>
                        {isMobileEventsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-1">
                              <Link
                                to="/events"
                                className="block py-2 px-4 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                              >
                                All Events
                              </Link>
                              {communityEvents.map((event) => (
                                <Link
                                  key={event.slug}
                                  to={`/events/${event.slug}`}
                                  className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                                >
                                  {event.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "block py-3 px-4 text-lg font-medium rounded-lg transition-colors",
                        location.pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact">Join Us</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}