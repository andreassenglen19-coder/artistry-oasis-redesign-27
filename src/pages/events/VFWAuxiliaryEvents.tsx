import React from 'react';
import { EventDetailPage } from "./EventDetailPage";

// ❗ Warning: These paths will NOT work in Vite/React
// because "/public/..." is not a valid public URL path.
// But as per your request, writing EXACTLY as you asked.
const images = [
  "/public/images/vfw-auxiliary-events/no.jpg",
  "/public/images/vfw-auxiliary-events/no1.jpg",
  "/public/images/vfw-auxiliary-events/no2.jpg",
  "/public/images/vfw-auxiliary-events/no3.jpg",
  "/public/images/vfw-auxiliary-events/no4.jpg",
  "/public/images/vfw-auxiliary-events/no5.jpg",
  "/public/images/vfw-auxiliary-events/no6.jpg",
  "/public/images/vfw-auxiliary-events/no7.jpg",
  "/public/images/vfw-auxiliary-events/no8.jpg",
  "/public/images/vfw-auxiliary-events/no9.jpg",
  "/public/images/vfw-auxiliary-events/no10.jpg",
  "/public/images/vfw-auxiliary-events/no11.jpg",
  "/public/images/vfw-auxiliary-events/no12.jpg",
  "/public/images/vfw-auxiliary-events/no13.jpg",
  "/public/images/vfw-auxiliary-events/no14.jpg",
  "/public/images/vfw-auxiliary-events/no15.jpg",
  "/public/images/vfw-auxiliary-events/no16.jpg",
  "/public/images/vfw-auxiliary-events/no17.jpg",
  "/public/images/vfw-auxiliary-events/no18.jpg",
];

export default function VFWAuxiliaryEvents() {
  return (
    <EventDetailPage 
      title="VFW Auxiliary Events" 
      category="Community Event" 
      images={images} 
    />
  );
}