import {
  HeroSection,
  TestimonialsSection,
  CTASection,
} from "../../components/sections/Sections";
import { imagesData } from "../../data/images";
import { Link } from "react-router-dom";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      title: "CEO",
      company: "TechCorp",
      content:
        "Obyra transformed our digital presence with their innovative approach and professional execution. Highly recommended!",
      image: imagesData.team,
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      title: "Product Manager",
      company: "InnovateCo",
      content:
        "The team at Obyra truly understood our vision and delivered beyond expectations. Great communication throughout!",
      image: imagesData.team,
      rating: 5,
    },
    {
      name: "Michael Brown",
      title: "Founder",
      company: "StartupXYZ",
      content:
        "Outstanding quality, attention to detail, and commitment to project success. They're now our go-to development partner.",
      image: imagesData.team,
      rating: 5,
    },
    {
      name: "Emma Wilson",
      title: "COO",
      company: "GlobalTech",
      content:
        "Obyra's expertise in full-stack development helped us scale our platform. Professional and reliable team!",
      image: imagesData.team,
      rating: 5,
    },
    {
      name: "David Lee",
      title: "Director of Engineering",
      company: "DataFlow",
      content:
        "The technical excellence and project management were exceptional. They completed the project ahead of schedule!",
      image: imagesData.team,
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      title: "Founder & CEO",
      company: "EcoVentures",
      content:
        "From initial consultation to final deployment, Obyra demonstrated professionalism and technical excellence. Amazing!",
      image: imagesData.team,
      rating: 5,
    },
  ];

  return (
    <div>
      Hero Section
      <HeroSection
        title="Client Testimonials"
        subtitle="See what our clients have to say about working with Obyra"
        backgroundImage={imagesData.about}
        cta={false}
      />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Client Stats */}
      {/* <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "100+", label: "Projects Delivered" },
              { number: "99.9%", label: "Client Satisfaction" },
              { number: "15+", label: "Years in Business" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-lg text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare Platform",
                client: "HealthTech Solutions",
                result: "300% increase in user engagement",
              },
              {
                title: "E-commerce Transformation",
                client: "Fashion Retail Co",
                result: "250% increase in online sales",
              },
              {
                title: "Mobile Banking App",
                client: "FinTech Startup",
                result: "50K users in first month",
              },
            ].map((study, index) => (
              <div
                key={index}
                className="card p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {study.title}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-4">
                  {study.client}
                </p>
                <p className="text-gray-600 mb-4">{study.result}</p>
                <Link
                  to="/work?type=case-studies"
                  className="btn-secondary text-sm"
                >
                  Read Full Case Study
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Become Our Next Success Story?"
        subtitle="Let's discuss your project and how we can help you achieve remarkable results"
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </div>
  );
};
