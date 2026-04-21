import { HeroSection, CTASection } from "../../components/sections/Sections";
import { imagesData } from "../../data/images";
import {
  MapPin,
  Briefcase,
  DollarSign,
  Lightbulb,
  GraduationCap,
  Users,
  Goal,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Careers = () => {
  const jobs = [
    {
      title: "Senior React Developer",
      location: "London, UK",
      type: "Full-time",
      salary: "£60k - £80k",
    },
    {
      title: "Full Stack Developer (Node.js + React)",
      location: "London, UK",
      type: "Full-time",
      salary: "£50k - £70k",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full-time",
      salary: "£45k - £65k",
    },
    {
      title: "DevOps Engineer",
      location: "London, UK",
      type: "Full-time",
      salary: "£55k - £75k",
    },
    {
      title: "Quality Assurance Engineer",
      location: "Remote",
      type: "Full-time",
      salary: "£40k - £55k",
    },
    {
      title: "Project Manager",
      location: "London, UK",
      type: "Full-time",
      salary: "£50k - £70k",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Join Our Team"
        subtitle="We're looking for talented people who are passionate about technology"
        backgroundImage={imagesData.team}
        cta={false}
      />

      {/* Why Join Obyra */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Work at Obyra?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb size={32} className="text-indigo-700" />,
                title: "Innovation",
                description: "Work on cutting-edge projects",
              },
              {
                icon: <GraduationCap size={32} className="text-indigo-700" />,
                title: "Growth",
                description: "Continuous learning and development",
              },
              {
                icon: <Users size={32} className="text-indigo-700" />,
                title: "Team Culture",
                description: "Collaborative and supportive environment",
              },
              {
                icon: <MapPin size={32} className="text-indigo-700" />,
                title: "Flexibility",
                description: "Remote and flexible working options",
              },
              {
                icon: <Goal size={32} className="text-indigo-700" />,
                title: "Impact",
                description: "Make a real difference in projects",
              },
              {
                icon: <DollarSign size={32} className="text-indigo-700" />,
                title: "Competitive Pay",
                description: "Competitive salaries and benefits",
              },
            ].map((item, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Open Positions
          </h2>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="card p-8 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
                      {job.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-6 md:gap-8">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} className="text-blue-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase size={18} className="text-blue-600" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign size={18} className="text-blue-600" />
                      <span>{job.salary}</span>
                    </div>
                    <Link
                      to={`/contact?role=${encodeURIComponent(job.title)}`}
                      className="btn-primary text-sm"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Benefits & Perks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Competitive salary and benefits package",
              "Health insurance coverage",
              "Flexible working hours",
              "Remote work options",
              "Professional development budget",
              "Conference attendance support",
              "Quarterly team outings",
              "Gym membership allowance",
              "Free snacks and beverages",
              "Mac or Windows setup",
              "Unlimited learning resources",
              "Career progression opportunities",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Can't Find Your Perfect Role?"
        subtitle="Send us your CV and let's see how you can contribute to the Obyra team"
        buttonText="Send Your CV"
        buttonLink="/contact"
      />
    </div>
  );
};
