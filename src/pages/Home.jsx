import {
  FeaturesSection,
  StatsSection,
  ProcessSection,
  CTASection,
} from "../components/sections/Sections";
import { imagesData } from "../data/images";
import { servicesData } from "../data/services";
import {
  BriefcaseBusiness,
  Rocket,
  Shield,
  ShieldCheck,
  Target,
  Users,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  const features = [
    {
      icon: <Rocket size={34} className="text-indigo-700" />,
      title: "Innovative Solutions",
      description:
        "Cutting-edge technology and creative solutions for modern challenges",
    },
    {
      icon: <Users size={34} className="text-indigo-700" />,
      title: "Expert Team",
      description:
        "Highly skilled developers and designers with years of experience",
    },
    {
      icon: <Target size={34} className="text-indigo-700" />,
      title: "Client-Focused",
      description: "Your success is our priority. We deliver what you need",
    },
    {
      icon: <Zap size={34} className="text-indigo-700" />,
      title: "Fast Delivery",
      description: "Agile methodology ensures quick time-to-market",
    },
    {
      icon: <ShieldCheck size={34} className="text-indigo-700" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee",
    },
    {
      icon: <BriefcaseBusiness size={34} className="text-indigo-700" />,
      title: "Proven Track Record",
      description: "Trusted by 100+ companies worldwide",
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Industries Served" },
    { number: "99.9%", label: "Client Satisfaction" },
  ];

  const heroHighlights = [
    "Product strategy and architecture support",
    "Senior engineers for web and mobile delivery",
    "Scalable cloud-native solutions with secure foundations",
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "We understand your needs, goals, and challenges",
    },
    {
      title: "Planning",
      description: "Create a detailed roadmap and architecture",
    },
    {
      title: "Development",
      description: "Build your solution with latest technologies",
    },
    {
      title: "Deployment",
      description: "Launch and provide ongoing support",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src={imagesData.heroMain}
            alt="Software development team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-indigo-950/70" />
        </div>

        <div className="relative container-custom py-20 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-100 mb-6">
                <Shield size={16} className="text-indigo-300" />
                Trusted UK Software Development Partner
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Build digital products that deliver measurable business growth.
              </h1>

              <p className="text-lg text-slate-200 max-w-2xl mb-8">
                We design and engineer high-performance web and mobile platforms
                for startups and enterprises, combining strategy, execution, and
                long-term support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3 border border-slate-300/50 rounded-lg font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore Services
                </Link>
              </div>

              <div className="space-y-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-slate-200"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-indigo-300 mt-1 flex-shrink-0"
                    />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 md:p-8 shadow-2xl">
              <h3 className="text-white text-2xl font-bold mb-6">
                Why teams choose Obyra
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white/10 border border-white/15 p-4"
                  >
                    <p className="text-2xl font-bold text-white">
                      {stat.number}
                    </p>
                    <p className="text-sm text-slate-200">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-200">
                From concept to launch, we partner with your team to reduce
                delivery risk and accelerate outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection
        title="Why Choose Obyra?"
        subtitle="We combine expertise, innovation, and dedication to deliver exceptional results"
        features={features}
      />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            From mobile apps to blockchain solutions, we offer comprehensive
            software development services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(servicesData)
              .slice(0, 6)
              .map(([key, service]) => (
                <div
                  key={key}
                  className="card p-8 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    to={`/services?category=${key}`}
                    className="btn-secondary text-sm w-full"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection steps={processSteps} />

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Let's discuss your project and how we can help you achieve your goals"
        buttonText="Get in Touch"
        buttonLink="/contact"
        isDark={false}
      />
    </div>
  );
};
