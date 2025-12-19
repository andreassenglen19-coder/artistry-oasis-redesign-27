import React from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FB_URL = "https://www.facebook.com/p/Artistry-Oasis-LLC-100057713857474/";

export function EventsSimpleDraft() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-2">Events & Gatherings</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            For the most up-to-date activities and community moments, follow us on Facebook.
            <span className="mx-2">•</span>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Visit Our Facebook Page
            </a>
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-medium text-foreground mb-3">2025</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>January – North Shore Bank Show</li>
              <li>January – American Legion Post 470 Winter Market</li>
              <li>February 22 – American Legion Post 470 Winter Market</li>
              <li>March 11 – American Legion Post 470 Winter Market</li>
              <li>March 12 – Grafton Resource Fair</li>
              <li>March – VFW Auxiliary “Illustrating America”</li>
              <li>April 12 – American Legion Post 470 Winter Market</li>
              <li>May – Pizza Party</li>
              <li>July – Ozaukee County Fair</li>
              <li>August – Ozaukee County Fair Outing / Luncheon</li>
              <li>October – Halloween Party</li>
              <li>Operation Christmas Child</li>
              <li>December – North Shore Bank Show</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-foreground mb-3">2024</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>January – North Shore Bank Show</li>
              <li>March – Grafton Resource Fair</li>
              <li>July – Ozaukee County Fair</li>
              <li>August – Ozaukee County Fair Outing / Luncheon</li>
              <li>October – Halloween Party</li>
              <li>Operation Christmas Child</li>
              <li>December – North Shore Bank Show</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-muted/10">
            <p className="text-sm text-muted-foreground">
              Note: Older years and photo-heavy archives are intentionally hidden to keep this page low-maintenance. Facebook is the primary live feed for frequent updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsSimpleDraft;
