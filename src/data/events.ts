// All community events with their routes
export const communityEvents = [
  { name: "North Shore Bank Spring", slug: "north-shore-bank-spring" },
  { name: "North Shore Bank Fall", slug: "north-shore-bank-fall" },
  { name: "North Shore Bank Winter", slug: "north-shore-bank-winter" },
  { name: "MS Walk Event", slug: "ms-walk-event" },
  { name: "Flips 4 All Event", slug: "flips-4-all-event" },
  { name: "Farmers Market", slug: "farmers-market" },
  { name: "Faith Builders", slug: "faith-builders" },
  { name: "Parkside Community", slug: "parkside-community" },
  { name: "Craft Shows", slug: "craft-shows" },
  { name: "Resource Fairs", slug: "resource-fairs" },
  { name: "Holiday Parties", slug: "holiday-parties" },
  { name: "VFW Auxiliary Events", slug: "vfw-auxiliary-events" },
  { name: "Tie Blankets Pictures 2025", slug: "american-legion-post-470" },
  { name: "Birthday Celebrations", slug: "birthday-celebrations" },
  { name: "Ozaukee CountyFair Pictures 2024-2025 ", slug: "portal-inc-event" },
  { name: "Pink Llama Event", slug: "pink-llama-event" },
];

// Past events organized by year
export const pastEvents = [
  { year: "2019", events: ["North Shore Bank Spring", "Parkside Community"] },
  { year: "2018", events: ["North Shore Bank Spring", "MS Walk Event", "Flips 4 All Event", "Craft Shows", "North Shore Bank Fall"] },
  { year: "2017", events: ["North Shore Bank Spring", "Flips 4 All Event", "Farmers Market", "Faith Builders", "North Shore Bank Winter"] },
  { year: "2016", events: ["North Shore Bank Fall", "Ozaukee CountyFair Pictures 2024-2025", "MS Walk Event", "North Shore Bank Spring"] },
  { year: "2015", events: ["Ozaukee CountyFair Pictures 2024-2025", "North Shore Bank Spring", "Pink Llama Event"] },
];

// Get slug from event name
export function getEventSlug(eventName: string): string {
  const event = communityEvents.find(e => e.name === eventName);
  if (event) return event.slug;
  
  // Fallback: generate slug from name
  return eventName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}