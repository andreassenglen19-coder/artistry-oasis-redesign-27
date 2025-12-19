import React from 'react';
import { EventDetailPage } from "./EventDetailPage";

// Define the list of image paths
// These files are located in: public/images/fall-2024-craft-shows-fall-winter-pictures/resource-fair-2025-pictures/
const images = [
  "/public/images/resource-fair-2025-pictures/ok.jpg",
  "/public/images/resource-fair-2025-pictures/ok1.jpg",
  "/public/images/resource-fair-2025-pictures/ok2.jpg",
  "/public/images/resource-fair-2025-pictures/ok3.jpg",
  "/public/images/resource-fair-2025-pictures/ok4.jpg",
  "/public/images/resource-fair-2025-pictures/ok5.jpg",
];

// Main component for the Resource Fairs page
export default function ResourceFairs() {
  return (
    <EventDetailPage 
      title="Resource Fairs" 
      category="Community Event" 
      images={images} 
    />
  );
}