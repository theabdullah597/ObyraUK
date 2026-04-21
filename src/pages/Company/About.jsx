import { HeroSection, CTASection } from "../../components/sections/Sections";
import { imagesData } from "../../data/images";
import { Gem, Lightbulb, Target } from "lucide-react";

export const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About Obyra"
        subtitle="Leading software development company delivering innovation"
        backgroundImage={imagesData.about}
        cta={false}
      />

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                Obyra is a premier UK-based software development company
                specializing in creating innovative mobile and web applications
                that transform businesses worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Founded on the principles of excellence, innovation, and
                client-centric solutions, we've established ourselves as a
                trusted partner for startups, scale-ups, and enterprises.
              </p>
              <p className="text-lg text-gray-600">
                Our team of 50+ experienced developers, designers, and
                consultants work collaboratively to deliver exceptional results
                that exceed expectations.
              </p>
            </div>
            <img
              src={imagesData.office}
              alt="Obyra Office"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                <Target size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge technology solutions
                that drive growth and innovation.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                <Lightbulb size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the most trusted and innovative software development
                partner globally.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                <Gem size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Our Values
              </h3>
              <p className="text-gray-600">
                Excellence, integrity, innovation, collaboration, and client
                success guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: imagesData.team,
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                image: imagesData.team,
              },
              {
                name: "Michael Brown",
                role: "Head of Design",
                image: imagesData.team,
              },
              {
                name: "Emma Wilson",
                role: "VP Sales",
                image: imagesData.team,
              },
            ].map((member, index) => (
              <div
                key={index}
                className="card overflow-hidden text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-blue-600 font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-lg">Projects Delivered</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-lg">Team Members</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-lg">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <p className="text-lg">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join the Obyra Journey?"
        subtitle="Let's work together to bring your vision to life"
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
};
