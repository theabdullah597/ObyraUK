import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HeroSection, CTASection } from '../components/sections/Sections';
import { IndustryCard } from '../components/cards/Cards';
import { imagesData } from '../data/images';
import { industriesData } from '../data/industries';
import { Building2, GraduationCap, HeartPulse, Landmark, Plane, ShoppingCart, Truck } from 'lucide-react';

const storyIcons = {
  Healthcare: HeartPulse,
  Finance: Landmark,
  Ecommerce: ShoppingCart,
  Logistics: Truck,
  Education: GraduationCap,
  Travel: Plane,
};

export const Industries = () => {
  const [searchParams] = useSearchParams();
  const selectedIndustry = searchParams.get('industry');

  const visibleIndustries = useMemo(() => {
    if (!selectedIndustry) {
      return industriesData;
    }
    return industriesData.filter((industry) => industry.name === selectedIndustry);
  }, [selectedIndustry]);

  return (
    <div>
      <HeroSection
        title={selectedIndustry ? `${selectedIndustry} Solutions` : 'Industries'}
        subtitle="Automotive, B2B software, healthcare, education, ecommerce, food, travel, fashion, CRM, logistics, manufacturing, legal, agriculture, finance, real estate, and hospitality."
        backgroundImage={imagesData.heroDevelopment}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleIndustries.map((industry) => (
              <IndustryCard
                key={industry.id}
                name={industry.name}
                description={industry.description}
                icon={industry.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Real outcomes delivered with scalable architecture and user-focused experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Healthcare',
                title: 'Digital Health Platform',
                description: 'Built a comprehensive telemedicine platform serving 50,000+ users.',
              },
              {
                industry: 'Finance',
                title: 'FinTech Solution',
                description: 'Developed secure payment gateway processing $100M+ annually.',
              },
              {
                industry: 'Ecommerce',
                title: 'Commerce Platform',
                description: 'Created headless commerce solution with 300% sales increase.',
              },
              {
                industry: 'Logistics',
                title: 'Supply Chain System',
                description: 'Implemented IoT-based tracking reducing delivery time by 40%.',
              },
              {
                industry: 'Education',
                title: 'Learning Management System',
                description: 'Built platform serving 100,000+ students and educators.',
              },
              {
                industry: 'Travel',
                title: 'Booking Platform',
                description: 'Developed reservation system handling 10,000+ daily bookings.',
              },
            ].map((story) => {
              const Icon = storyIcons[story.industry] || Building2;
              return (
                <article key={story.title} className="card p-8">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{story.title}</h3>
                  <p className="text-sm text-indigo-700 font-semibold mb-3">{story.industry}</p>
                  <p className="text-gray-600">{story.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-16">Why We Excel Across Industries</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '16', label: 'Industries Covered', description: 'Expertise across core business domains' },
              { number: '100+', label: 'Successful Projects', description: 'Proven delivery from MVP to enterprise' },
              { number: '500+', label: 'Happy Clients', description: 'Trusted by growing brands globally' },
              { number: '24/7', label: 'Support Available', description: 'Operational and post-launch support' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-5xl font-bold text-indigo-600 mb-2">{item.number}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Industry?"
        subtitle="Get in touch with us to discuss your industry-specific product roadmap."
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};
