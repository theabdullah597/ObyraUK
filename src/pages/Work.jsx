import { HeroSection, CTASection } from "../components/sections/Sections";
import { imagesData } from "../data/images";
import { BriefcaseBusiness, Rocket, ShieldCheck, Smartphone } from "lucide-react";

const workHighlights = [
  {
    title: "Fintech Mobile Banking Suite",
    description:
      "Secure wallet and payment app with real-time analytics and card management.",
    icon: ShieldCheck,
  },
  {
    title: "On-Demand Logistics Platform",
    description:
      "Dispatch, route optimization, and live order tracking across multiple regions.",
    icon: Rocket,
  },
  {
    title: "Retail Commerce Transformation",
    description:
      "Unified storefront with inventory, loyalty, and omnichannel fulfillment.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Healthcare Patient Experience App",
    description:
      "Appointment scheduling, teleconsultation, and secure care communication.",
    icon: Smartphone,
  },
];

export const Work = () => {
  return (
    <div>
      <HeroSection
        title="Our Work"
        subtitle="Real products and platforms we have delivered for startups and enterprises"
        backgroundImage={imagesData.success}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Featured Project Outcomes</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            From strategy to launch, we build software that improves growth,
            efficiency, and user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workHighlights.map((item) => (
              <article key={item.title} className="card p-7">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        subtitle="Tell us what you want to build and we will map the best delivery plan."
        buttonText="Talk to Our Team"
        buttonLink="/contact"
      />
    </div>
  );
};
