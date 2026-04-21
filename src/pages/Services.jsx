import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { HeroSection, CTASection } from '../components/sections/Sections';
import { ServiceCard } from '../components/cards/Cards';
import { imagesData } from '../data/images';
import { servicesData, technologies } from '../data/services';
import {
  ArrowRight,
  Atom,
  BarChart3,
  Boxes,
  Code2,
  Coffee,
  Cpu,
  FileCode2,
  Globe,
  Layers,
  Network,
  Palette,
  Server,
  Smartphone,
  Zap,
  ShoppingCart,
  Link2,
  Gamepad2,
  Cloud,
} from 'lucide-react';

const iconMap = {
  mobileApp: Smartphone,
  emergingTech: Zap,
  softwareDevelopment: Code2,
  ecommerce: ShoppingCart,
  blockchain: Link2,
  product: Palette,
  gaming: Gamepad2,
  cloud: Cloud,
};

const technologyIconMap = {
  Network,
  Atom,
  Cpu,
  Palette,
  Layers,
  Coffee,
  Globe,
  FileCode2,
  Server,
  Boxes,
  BarChart3,
};

const heroConfig = {
  mobileApp: {
    title: 'Mobile App Development Services',
    subtitle: 'iOS, Android, cross-platform, and enterprise-grade mobile apps for every use case.',
    backgroundImage: imagesData.mobileApp,
  },
  emergingTech: {
    title: 'Emerging Technology Services',
    subtitle: 'AR, VR, IoT, AI, and metaverse products built for real-world business value.',
    backgroundImage: imagesData.development,
  },
  softwareDevelopment: {
    title: 'Custom Software Development Services',
    subtitle: 'Consulting, architecture, testing, maintenance, and scalable software delivery.',
    backgroundImage: imagesData.softwareDevelopment,
  },
  ecommerce: {
    title: 'eCommerce Development Services',
    subtitle: 'Headless, B2B, and conversion-focused commerce solutions across modern stacks.',
    backgroundImage: imagesData.ecommerce,
  },
  blockchain: {
    title: 'Blockchain and Web3 Services',
    subtitle: 'From smart contracts to wallet ecosystems and decentralized applications.',
    backgroundImage: imagesData.blockchain,
  },
  product: {
    title: 'Product and Design Services',
    subtitle: 'From discovery to MVP with user-first product strategy and interface design.',
    backgroundImage: imagesData.productDesign,
  },
  gaming: {
    title: 'Game Development Services',
    subtitle: '2D, 3D, multiplayer, and Web3 game production across top engines.',
    backgroundImage: imagesData.gamedev,
  },
  cloud: {
    title: 'Cloud and DevOps Services',
    subtitle: 'Cloud migration, delivery pipelines, and resilient infrastructure management.',
    backgroundImage: imagesData.cloud,
  },
  default: {
    title: 'Services',
    subtitle: 'Software delivery services across mobile, web, cloud, blockchain, and product design.',
    backgroundImage: imagesData.heroDevelopment,
  },
};

export const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFromQuery = searchParams.get('category');
  const selectedService = searchParams.get('service');

  const categories = useMemo(
    () =>
      Object.entries(servicesData).map(([key, value]) => ({
        id: key,
        ...value,
        icon: iconMap[key],
      })),
    []
  );

  const categoryFromService = useMemo(() => {
    if (!selectedService) {
      return null;
    }

    return categories.find((category) => category.items.includes(selectedService))?.id ?? null;
  }, [categories, selectedService]);

  const selectedCategory = selectedFromQuery || categoryFromService || null;
  const displayedCategories = selectedCategory
    ? categories.filter((cat) => cat.id === selectedCategory)
    : categories;

  const hero = heroConfig[selectedCategory] || heroConfig.default;
  const spotlightItems = displayedCategories[0]?.items.slice(0, 6) || [];

  const handleCategoryChange = (categoryId) => {
    const next = new URLSearchParams(searchParams);

    if (categoryId) {
      next.set('category', categoryId);
    } else {
      next.delete('category');
    }

    next.delete('service');
    setSearchParams(next);
  };

  return (
    <div>
      <HeroSection title={hero.title} subtitle={hero.subtitle} backgroundImage={hero.backgroundImage} cta={false} />

      <section className="py-10 md:py-14 bg-slate-50 border-y border-slate-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-indigo-700 mb-2">Services</p>
              <h3 className="text-2xl md:text-3xl text-slate-900">
                {displayedCategories[0]?.title || 'Explore Our Service Portfolio'}
              </h3>
            </div>

            <Link to="/services#technologies" className="btn-primary inline-flex items-center gap-2">
              Technologies
              <ArrowRight size={18} />
            </Link>
          </div>

          {spotlightItems.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {spotlightItems.map((item) => (
                <span
                  key={item}
                  className="px-3 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-5 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === null
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Services
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayedCategories.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                items={service.items}
                icon={service.icon}
                linkTo={`/services?category=${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Technologies</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            GraphQL, React Hook, Ant Design, Next.js, Java, REST API, TypeScript, Node, Laravel, .NET, Scala, and
            Apollo Client.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech) => {
              const Icon = technologyIconMap[tech.icon] || Code2;
              return (
                <div
                  key={tech.name}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 mx-auto mb-3 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-semibold text-slate-900">{tech.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        subtitle="Let's discuss how we can help you achieve your business goals."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};
