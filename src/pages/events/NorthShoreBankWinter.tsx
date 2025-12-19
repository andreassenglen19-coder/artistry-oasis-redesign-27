import React from 'react';
import { EventDetailPage } from "./EventDetailPage";

// Define the list of image paths
// These files are located in: public/images/fall-2024-craft-shows-fall-winter-pictures/
// Example: public/images/fall-2024-craft-shows-fall-winter-pictures/ok1.jpg
const images = [
  "/images/fall-2024-craft-shows-fall-winter-pictures/sett.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok2.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok3.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok4.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok5.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok6.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok7.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok8.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok9.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok10.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok11.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok12.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok13.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok14.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok15.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok16.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok17.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok18.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok19.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok20.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok21.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok22.jpg",
  "/images/fall-2024-craft-shows-fall-winter-pictures/ok23.jpg"
];

// Main component for the North Shore Bank Winter event page
export default function NorthShoreBankWinter() {
  return (
    <EventDetailPage 
      title="North Shore Bank Winter" 
      category="Community Event" 
      images={images} 
    />
  );
}