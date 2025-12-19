import React from 'react';
import { EventDetailPage } from "./EventDetailPage";

// Define the list of image paths
// These files are located in: public/images/ozaukee-county-fair-pictures-2024-2025/
const images = [
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok1.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok2.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok3.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok4.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok5.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok6.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok7.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok8.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok9.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok9.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok10.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok11.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok12.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok13.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok14.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok15.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok16.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok17.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok18.jpg",
    "/public/images/ozaukee-county-fair-pictures-2024-2025/ok19.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok20.jpg",
  "/public/images/ozaukee-county-fair-pictures-2024-2025/ok21.jpg",

];

// Main component for the Ozaukee County Fair Pictures 2024-2025 page
export default function OzaukeeCountyFairPictures20242025() {
  return (
    <EventDetailPage 
      title="Ozaukee County Fair Pictures 2024-2025" 
      category="Community Event" 
      images={images} 
    />
  );
}