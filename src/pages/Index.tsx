import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { MeetArtistsSection } from "@/components/sections/MeetArtistsSection";
import { ProgramsPreviewSection } from "@/components/sections/ProgramsPreviewSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { EventsPreviewSection } from "@/components/sections/EventsPreviewSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MeetArtistsSection />
      <MissionSection />
      <ProgramsPreviewSection />
      <EventsPreviewSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
