import React from 'react';
import { EventDetailPage } from "./EventDetailPage";

// Define the list of image paths
// These files are located in: public/images/tie-blankets-pictures-2025/
const images = [
  "/images/tie-blankets-pictures-2025/580542442_1273346247932492_5491491977272217370_n.jpg",
  "/images/tie-blankets-pictures-2025/ok.jpg",
  "/images/tie-blankets-pictures-2025/ok1.jpg",
  "/images/tie-blankets-pictures-2025/583336536_1273346151265835_5462738241507050693_n.jpg",
  "/images/tie-blankets-pictures-2025/583819134_1273346031265847_3209347312151843818_n.jpg",
  "/images/tie-blankets-pictures-2025/587787600_1277816184152165_521723987526500633_n.jpg"
];

// Main component for the Tie Blankets Pictures 2025 page
// Reuses the shared EventDetailPage layout with lightbox support
export default function TieBlanketsPictures2025() {
  return (
    <EventDetailPage 
      title="Tie Blankets Pictures 2025" 
      category="Community Event" 
      images={images} 
    />
  );
}