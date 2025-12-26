import Hero from "./hero/hero";
import ServiceSection from "./services/service";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ServiceSection />
    </div>
  );
}
