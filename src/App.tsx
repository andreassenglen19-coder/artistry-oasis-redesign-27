import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import HomeSimpleReview from "./pages/HomeSimpleReview";
import EventsSimpleReview from "./pages/EventsSimpleReview";
import WallOfArtPreview from "./pages/WallOfArtPreview";
import SupportMissionPreview from "./pages/SupportMissionPreview";
import StudioPreview from "./pages/StudioPreview";
import VolunteerPreview from "./pages/VolunteerPreview";
import OurEventsByYear from "./pages/OurEventsByYear";
import CommunityImpact from "./pages/CommunityImpact";

// Event Pages
import NorthShoreBankSpring from "./pages/events/NorthShoreBankSpring";
import NorthShoreBankFall from "./pages/events/NorthShoreBankFall";
import NorthShoreBankWinter from "./pages/events/NorthShoreBankWinter";
import MSWalkEvent from "./pages/events/MSWalkEvent";
import Flips4AllEvent from "./pages/events/Flips4AllEvent";
import FarmersMarket from "./pages/events/FarmersMarket";
import FaithBuilders from "./pages/events/FaithBuilders";
import ParksideCommunity from "./pages/events/ParksideCommunity";
import CraftShows from "./pages/events/CraftShows";
import ResourceFairs from "./pages/events/ResourceFairs";
import HolidayParties from "./pages/events/HolidayParties";
import VFWAuxiliaryEvents from "./pages/events/VFWAuxiliaryEvents";
import TieBlanketsPictures2025 from "./pages/events/TieBlanketsPictures2025";
import BirthdayCelebrations from "./pages/events/BirthdayCelebrations";
import PortalIncEvent from "./pages/events/OzaukeeCountyFairPictures2024_2025";
import PinkLlamaEvent from "./pages/events/PinkLlamaEvent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeSimpleReview />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<EventsSimpleReview />} />
          {/* Preview routes - DRAFT only */}
          <Route path="/preview/home" element={<HomeSimpleReview />} />
          <Route path="/preview/events" element={<EventsSimpleReview />} />
          <Route path="/preview/wall-of-art" element={<WallOfArtPreview />} />
          <Route path="/preview/support" element={<SupportMissionPreview />} />
          <Route path="/preview/studio" element={<StudioPreview />} />
          <Route path="/preview/volunteer" element={<VolunteerPreview />} />
          <Route path="/events-by-year" element={<OurEventsByYear />} />
          <Route path="/community-impact" element={<CommunityImpact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Individual Event Pages */}
          <Route path="/events/north-shore-bank-spring" element={<NorthShoreBankSpring />} />
          <Route path="/events/north-shore-bank-fall" element={<NorthShoreBankFall />} />
          <Route path="/events/north-shore-bank-winter" element={<NorthShoreBankWinter />} />
          <Route path="/events/ms-walk-event" element={<MSWalkEvent />} />
          <Route path="/events/flips-4-all-event" element={<Flips4AllEvent />} />
          <Route path="/events/farmers-market" element={<FarmersMarket />} />
          <Route path="/events/faith-builders" element={<FaithBuilders />} />
          <Route path="/events/parkside-community" element={<ParksideCommunity />} />
          <Route path="/events/craft-shows" element={<CraftShows />} />
          <Route path="/events/resource-fairs" element={<ResourceFairs />} />
          <Route path="/events/holiday-parties" element={<HolidayParties />} />
          <Route path="/events/vfw-auxiliary-events" element={<VFWAuxiliaryEvents />} />
          <Route path="/events/american-legion-post-470" element={<TieBlanketsPictures2025 />} />
          <Route path="/events/birthday-celebrations" element={<BirthdayCelebrations />} />
          <Route path="/events/portal-inc-event" element={<PortalIncEvent />} />
          <Route path="/events/pink-llama-event" element={<PinkLlamaEvent />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;