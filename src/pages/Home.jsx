import {
  HeroSection,
  FeaturesSection,
  StatsSection,
  ProcessSection,
  TestimonialsSection,
  CTASection,
} from "../components/sections/Sections";
import { imagesData } from "../data/images";
import { servicesData } from "../data/services";
import {
  BriefcaseBusiness,
  Rocket,
  ShieldCheck,
  Target,
  Users,
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

  const testimonials = [
    {
      name: "John Smith",
      title: "CEO",
      company: "TechCorp",
      content:
        "Obyra transformed our digital presence. Their team is professional and delivers excellence.",
      image: imagesData.heroMain,
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      title: "Product Manager",
      company: "InnovateCo",
      content:
        "Working with Obyra was a game-changer. They understood our vision and executed perfectly.",
      image: imagesData.heroMain,
      rating: 5,
    },
    {
      name: "Michael Brown",
      title: "Founder",
      company: "StartupXYZ",
      content:
        "The quality of work and attention to detail is outstanding. Highly recommended!",
      image: imagesData.heroMain,
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            We are a Software
            <br />
            Development
            <br />
            Company
          </>
        }
        subtitle="We are your trusted development partner with just one goal in focus to build products that generate a lasting, profitable impact."
        backgroundImage={imagesData.heroMain}
        ctaText="Start Your Project"
      />

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
                  <Link to={`/services?category=${key}`} className="btn-secondary text-sm w-full">
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

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

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
