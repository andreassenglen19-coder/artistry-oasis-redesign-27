import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const FB_URL = "https://www.facebook.com/p/Artistry-Oasis-LLC-100057713857474/";

export default function Programs() {
  const programs = [
    {
      title: "Artistry Oasis Studio",
      desc: "Daily creative sessions in painting, crafts, and mixed media.",
    },
    {
      title: "Wall of Art",
      desc: "Annual showcase of student artwork at the Cedarburg Cultural Center.",
    },
    {
      title: "Community Donations",
      desc: "Art projects created for local causes — including tie blankets for Ozaukee County Food Alliance, holiday ornaments, and fundraiser paintings.",
    },
    {
      title: "Special Events",
      desc: "Seasonal activities like Halloween Party, Pizza Party, and participation in the Ozaukee County Fair.",
    },
    {
      title: "Student Garden",
      desc: "Hands-on gardening since 2021 — growing food and creativity together.",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display mb-4">Our Programs</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Artistry Oasis offers creative, skill-building programs for individuals with developmental disabilities. Each activity fosters confidence, expression, and community connection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-6">
            {programs.map((p) => (
              <Card key={p.title} className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground mb-4">{p.desc}</p>

                {/* Artistry Oasis Studio */}
                {p.title === "Artistry Oasis Studio" && (
                  <div className="aspect-[4/3] bg-muted/50 rounded-md overflow-hidden mb-2">
                    <img
                      src="/src/assets/Studio-picture.jpeg"
                      alt="Artistry Oasis Studio"
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => openModal("/src/assets/Studio-picture.jpeg")}
                    />
                  </div>
                )}

                {/* Wall of Art — 5 bigger square images */}
                {p.title === "Wall of Art" && (
                  <div className="flex flex-wrap gap-2 justify-start items-start">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div
                        key={num}
                        className="aspect-square w-64 rounded-md overflow-hidden cursor-pointer group flex-shrink-0"
                        onClick={() => openModal(`/src/assets/wall-pictures/wall${num}.jpg`)}
                      >
                        <img
                          src={`/src/assets/wall-pictures/wall${num}.jpg`}
                          alt={`Wall of Art ${num}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Community Donations — 2 square images */}
                {p.title === "Community Donations" && (
                  <div className="flex flex-wrap gap-2 justify-start items-start">
                    {[1, 2].map((num) => (
                      <div
                        key={num}
                        className="aspect-square w-64 rounded-md overflow-hidden cursor-pointer group flex-shrink-0"
                        onClick={() => openModal(`/src/assets/donation-pictures/donation${num}.jpg`)}
                      >
                        <img
                          src={`/src/assets/donation-pictures/donation${num}.jpg`}
                          alt={`Community Donation ${num}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Special Events — 6 square images */}
                {p.title === "Special Events" && (
                  <div className="flex flex-wrap gap-2 justify-start items-start">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div
                        key={num}
                        className="aspect-square w-64 rounded-md overflow-hidden cursor-pointer group flex-shrink-0"
                        onClick={() => openModal(`/src/assets/special-events/picture${num}.jpg`)}
                      >
                        <img
                          src={`/src/assets/special-events/picture${num}.jpg`}
                          alt={`Special Event ${num}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Student Garden — 11 square images */}
                {p.title === "Student Garden" && (
                  <div className="flex flex-wrap gap-2 justify-start items-start">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <div
                        key={num}
                        className="aspect-square w-64 rounded-md overflow-hidden cursor-pointer group flex-shrink-0"
                        onClick={() => openModal(`/src/assets/student-garden/ok${num}.jpg`)}
                      >
                        <img
                          src={`/src/assets/student-garden/ok${num}.jpg`}
                          alt={`Student Garden ${num}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] overflow-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImageSrc}
              alt="Zoomed view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black rounded-full p-2 text-lg font-bold transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              See our programs in action! Follow us on{' '}
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Facebook
              </a>
              .
            </p>
            <div className="mt-6">
              <Button asChild variant="hero">
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}