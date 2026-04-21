import { HeroSection, CTASection } from "../../components/sections/Sections";
import { imagesData } from "../../data/images";
import { Link } from "react-router-dom";

// Clients Page
export const Clients = () => {
  const clients = [
    "TechCorp",
    "InnovateCo",
    "StartupXYZ",
    "GlobalTech",
    "DataFlow",
    "EcoVentures",
    "FinTech Pro",
    "HealthCare+",
  ];

  return (
    <div>
      <HeroSection
        title="Our Clients"
        subtitle="Trusted by leading companies worldwide"
        backgroundImage={imagesData.team}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Trusted by Industry Leaders
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="card p-8 flex items-center justify-center text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-bold text-lg text-gray-900">{client}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-12 bg-blue-50 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              500+ Companies Trust Obyra
            </h3>
            <p className="text-gray-600 mb-8">
              From startups to enterprises, we've helped businesses of all sizes
              achieve their goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Growing Client Base"
        subtitle="Let's work together to achieve your business goals"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};

// University Page
export const University = () => {
  return (
    <div>
      <HeroSection
        title="Obyra University"
        subtitle="Education and training for the next generation of developers"
        backgroundImage={imagesData.team}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Learning Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Development Bootcamp",
                duration: "12 weeks",
                description: "Comprehensive training in full-stack development",
              },
              {
                title: "React Mastery",
                duration: "8 weeks",
                description: "Advanced React patterns and best practices",
              },
              {
                title: "DevOps Fundamentals",
                duration: "6 weeks",
                description: "Cloud infrastructure and deployment strategies",
              },
            ].map((program, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {program.title}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-4">
                  {program.duration}
                </p>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Expand Your Skills"
        subtitle="Join our training programs and advance your career"
        buttonText="Enroll Now"
        buttonLink="/contact"
      />
    </div>
  );
};

// Manifesto Page
export const Manifesto = () => {
  return (
    <div>
      <HeroSection
        title="Our Manifesto"
        subtitle="What we believe and how we work"
        backgroundImage={imagesData.about}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Beliefs</h2>

            <div className="space-y-8">
              {[
                {
                  title: "Excellence Over Everything",
                  content:
                    "We believe in delivering nothing but the best. Every line of code, every design pixel, and every interaction matters.",
                },
                {
                  title: "Client Success is Our Success",
                  content:
                    "We're not just vendors; we're partners invested in your growth and success. Your wins are our wins.",
                },
                {
                  title: "Innovation Drives Progress",
                  content:
                    "We embrace new technologies and methodologies that push boundaries and create better solutions.",
                },
                {
                  title: "Transparency & Trust",
                  content:
                    "Open communication, honest feedback, and reliable delivery build lasting relationships.",
                },
                {
                  title: "People First",
                  content:
                    "Our team is our greatest asset. We invest in their growth, well-being, and happiness.",
                },
              ].map((belief, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {belief.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{belief.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something Great Together"
        subtitle="Partners who share your vision and values"
        buttonText="Start Conversation"
        buttonLink="/contact"
      />
    </div>
  );
};
