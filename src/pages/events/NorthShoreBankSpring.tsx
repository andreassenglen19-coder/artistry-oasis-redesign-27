import React from 'react';
import { EventDetailPage } from "./EventDetailPage";

const images = [
  "/src/assets/north-shore-bank-show-pictures/ok.jpg",
  "/src/assets/north-shore-bank-show-pictures/591740717_1287228926544224_4561522529097453392_n.jpg",
  "/src/assets/north-shore-bank-show-pictures/592965419_1287228836544233_5945189141180324894_n.jpg",
  "/src/assets/north-shore-bank-show-pictures/593428840_1287228953210888_4338992108452482398_n.jpg",
  "/src/assets/north-shore-bank-show-pictures/594063999_1287228993210884_5337211594077855003_n.jpg"
];
export default function NorthShoreBankSpring() {
  return (
    <EventDetailPage 
      title="North Shore Bank Spring" 
      category="Community Event" 
      images={images} 
    />
  );
}