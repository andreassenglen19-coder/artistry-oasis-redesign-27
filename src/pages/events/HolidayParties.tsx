import React from 'react';
import { EventDetailPage } from "./EventDetailPage";

// ❗ Warning: These paths will NOT work in Vite/React
// because "/public/..." is not a valid public URL path.
// But as per your request, writing EXACTLY as you asked.
const images = [
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/a.jpg",
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/b.jpg",
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/c.jpg",
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/d.jpg",
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/e.jpg",
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/f.jpg",
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/g.jpg",
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/h.jpg",
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/i.jpg",
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/j.jpg",
  "/public/images/fall-2024-craft-shows-fall-winter-pictures/thanks-giving-holidays-pictures/k.jpg",
];

export default function HolidayParties() {
  return (
    <EventDetailPage 
      title="Holiday Parties" 
      category="Special Event" 
      images={images} 
    />
  );
}