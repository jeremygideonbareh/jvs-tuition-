import { ScrollProvider } from "@/components/scroll-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Story } from "@/components/story";
import { Why } from "@/components/why";
import { Subjects } from "@/components/subjects";
import { Schedule } from "@/components/schedule";
import { Pricing } from "@/components/pricing";
import { Inquiry } from "@/components/inquiry";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function App() {
  return (
    <ScrollProvider>
      <ScrollProgress />
      <Nav />
      <main className="relative w-full max-w-full overflow-x-clip">
        <Hero />
        <Stats />
        <Story />
        <Why />
        <Subjects />
        <Schedule />
        <Pricing />
        <Testimonials />
        <Inquiry />
        <Contact />
      </main>
      <Footer />
    </ScrollProvider>
  );
}