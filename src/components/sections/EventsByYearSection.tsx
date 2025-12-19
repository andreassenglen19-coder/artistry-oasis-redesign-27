import React from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowRight } from "lucide-react";

const eventsByYear: { year: string; items: string[] }[] = [
  { year: "2025", items: [
      "January – North Shore Bank Show",
      "January – American Legion Post 470 Winter Market",
      "February 22 – American Legion Post 470 Winter Market",
      "March 11 – American Legion Post 470 Winter Market",
      "March 12 – Grafton Resource Fair",
      "March – VFW Auxiliary “Illustrating America”",
      "April 12 – American Legion Post 470 Winter Market",
      "May – Pizza Party",
      "July – Ozaukee County Fair",
      "August – Ozaukee County Fair Outing/Luncheon",
      "October – Halloween Party",
      "Operation Christmas Child",
      "December – North Shore Bank Show",
    ],
  },
  { year: "2024", items: [
      "January – North Shore Bank Show",
      "March – Grafton Resource Fair",
      "July – Ozaukee County Fair",
      "August – Ozaukee County Fair Outing/Luncheon",
      "October – Halloween Party",
      "Operation Christmas Child",
      "December – North Shore Bank Show",
    ],
  },
  // 2019-2023: recurring events + Wendland Nursery Show (VFW & Post 470 NOT included)
  { year: "2023", items: [
      "January – North Shore Bank Show",
      "Wendland Nursery Show",
      "March – Grafton Resource Fair",
      "July – Ozaukee County Fair",
      "August – Ozaukee County Fair Outing/Luncheon",
      "October – Halloween Party",
      "Operation Christmas Child",
      "December – North Shore Bank Show",
    ],
  },
  { year: "2022", items: [
      "January – North Shore Bank Show",
      "Wendland Nursery Show",
      "March – Grafton Resource Fair",
      "July – Ozaukee County Fair",
      "August – Ozaukee County Fair Outing/Luncheon",
      "October – Halloween Party",
      "Operation Christmas Child",
      "December – North Shore Bank Show",
    ],
  },
  { year: "2021", items: [
      "January – North Shore Bank Show",
      "Wendland Nursery Show",
      "March – Grafton Resource Fair",
      "July – Ozaukee County Fair",
      "August – Ozaukee County Fair Outing/Luncheon",
      "October – Halloween Party",
      "Operation Christmas Child",
      "December – North Shore Bank Show",
    ],
  },
  { year: "2020", items: [
      "January – North Shore Bank Show",
      "Wendland Nursery Show",
      "March – Grafton Resource Fair",
      "July – Ozaukee County Fair",
      "August – Ozaukee County Fair Outing/Luncheon",
      "October – Halloween Party",
      "Operation Christmas Child",
      "December – North Shore Bank Show",
    ],
  },
  { year: "2019", items: [
      "January – North Shore Bank Show",
      "Wendland Nursery Show",
      "March – Grafton Resource Fair",
      "July – Ozaukee County Fair",
      "August – Ozaukee County Fair Outing/Luncheon",
      "October – Halloween Party",
      "Operation Christmas Child",
      "December – North Shore Bank Show",
    ],
  },
];

export function EventsByYearSection() {
  const visibleYears = eventsByYear.slice(0, 2); // keep data for older years but show only current + previous

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Events
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Below are events for the current and previous year. For the most up-to-date posts and photos, please visit our Facebook page.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-8">
          {visibleYears.map((year) => (
            <div key={year.year} id={`year-${year.year}`} className="bg-card/50 p-6 rounded-lg">
              <h3 className="text-2xl font-medium text-foreground mb-3">{year.year}</h3>
              {year.items.length > 0 ? (
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {year.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">(No events listed)</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsByYearSection;
