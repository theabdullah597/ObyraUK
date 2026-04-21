import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HeroSection, CTASection } from '../components/sections/Sections';
import { SolutionCard } from '../components/cards/Cards';
import { imagesData } from '../data/images';
import { solutionsData } from '../data/solutions';
import { Rocket, ShieldCheck, Workflow } from 'lucide-react';

export const Solutions = () => {
  const [searchParams] = useSearchParams();
  const selectedSolution = searchParams.get('solution');
  const showDetails = searchParams.get('view') === 'details';

  const visibleSolutions = useMemo(() => {
    if (!selectedSolution) {
      return solutionsData;
    }
    return solutionsData.filter((solution) => solution.name === selectedSolution);
  }, [selectedSolution]);
  const activeSolution = useMemo(
    () => solutionsData.find((solution) => solution.name === selectedSolution),
    [selectedSolution]
  );

  return (
    <div>
      <HeroSection
        title={selectedSolution ? selectedSolution : 'Solutions'}
        subtitle="Obyra HappyForce, Obyra Hero, Obyra Shop, Obyra Messenger, On-Demand Delivery, Chat Bot, Obyra Chain, Social Platform, Obyra Insight Machine, and Event Management."
        backgroundImage={imagesData.heroDevelopment}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleSolutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                name={solution.name}
                description={solution.description}
                icon={solution.icon}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>

      {showDetails && activeSolution && (
        <section id="solution-details" className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-center mb-4">{activeSolution.name} Details</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
              {activeSolution.description}
            </p>
            <div className="max-w-3xl mx-auto card p-8">
              <h3 className="text-2xl mb-4">Included Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeSolution.features.map((feature) => (
                  <div key={feature} className="rounded-lg border border-slate-200 bg-white px-4 py-3">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-indigo-50">
        <div className="container-custom">
          <h2 className="text-center mb-16">Why Choose Our Solutions?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                Icon: Rocket,
                title: 'Fast Implementation',
                description: 'Launch quickly with modular and production-ready architecture.',
              },
              {
                Icon: ShieldCheck,
                title: 'Cost-Effective',
                description: 'Reduce product risk with pre-validated features and workflows.',
              },
              {
                Icon: Workflow,
                title: 'Customizable',
                description: 'Adapt every solution to your business process and scale goals.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                  <benefit.Icon size={24} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Choose the Right Fit</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Every solution is optimized for different growth stages and operational needs.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[720px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center">Basic</th>
                  <th className="px-6 py-4 text-center">Professional</th>
                  <th className="px-6 py-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Core Features', basic: 'Yes', pro: 'Yes', enterprise: 'Yes' },
                  { feature: 'User Management', basic: 'Limited', pro: 'Yes', enterprise: 'Yes' },
                  { feature: 'API Access', basic: 'No', pro: 'Yes', enterprise: 'Yes' },
                  { feature: 'Advanced Analytics', basic: 'No', pro: 'Limited', enterprise: 'Yes' },
                  { feature: 'Custom Integration', basic: 'No', pro: 'No', enterprise: 'Yes' },
                  { feature: 'Dedicated Support', basic: 'No', pro: 'Business Hours', enterprise: '24/7' },
                ].map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center">{row.basic}</td>
                    <td className="px-6 py-4 text-center">{row.pro}</td>
                    <td className="px-6 py-4 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="Find the Right Solution for Your Business"
        subtitle="Contact our team to identify the ideal solution for your roadmap."
        buttonText="Get Started"
        buttonLink="/contact"
        isDark={true}
      />
    </div>
  );
};
