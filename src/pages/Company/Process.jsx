import {
  HeroSection,
  ProcessSection,
  CTASection,
} from "../../components/sections/Sections";
import { imagesData } from "../../data/images";
import {
  BarChart3,
  RefreshCcw,
  ShieldCheck,
  TrendingUp,
  Users,
  BadgeCheck,
} from "lucide-react";

export const Process = () => {
  const steps = [
    {
      title: "Discovery & Planning",
      description:
        "We understand your requirements, goals, and conduct market research",
    },
    {
      title: "Design & Prototype",
      description:
        "Create detailed wireframes, prototypes, and UX/UI designs for approval",
    },
    {
      title: "Development",
      description:
        "Build your solution using latest technologies and best practices",
    },
    {
      title: "Testing & QA",
      description:
        "Comprehensive testing to ensure quality, security, and performance",
    },
    {
      title: "Deployment",
      description: "Smooth deployment to production with minimal downtime",
    },
    {
      title: "Support & Optimization",
      description: "Ongoing support, maintenance, and continuous improvement",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Development Process"
        subtitle="A proven methodology ensuring successful project delivery"
        backgroundImage={imagesData.heroDevelopment}
        cta={false}
      />

      {/* Process Section */}
      <ProcessSection steps={steps} />

      {/* Methodology Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Our Process Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <RefreshCcw size={32} className="text-indigo-700" />,
                title: "Agile & Iterative",
                description:
                  "Flexible approach that adapts to changing requirements and delivers value incrementally",
              },
              {
                icon: <BarChart3 size={32} className="text-indigo-700" />,
                title: "Data-Driven",
                description:
                  "Decisions based on metrics, analytics, and user feedback throughout the project",
              },
              {
                icon: <Users size={32} className="text-indigo-700" />,
                title: "Collaborative",
                description:
                  "Regular communication and feedback loops with stakeholders ensure alignment",
              },
              {
                icon: <BadgeCheck size={32} className="text-indigo-700" />,
                title: "Quality-Focused",
                description:
                  "Multiple testing phases and code reviews ensure high-quality deliverables",
              },
              {
                icon: <TrendingUp size={32} className="text-indigo-700" />,
                title: "Scalable",
                description:
                  "Built with scalability in mind to grow with your business",
              },
              {
                icon: <ShieldCheck size={32} className="text-indigo-700" />,
                title: "Security-First",
                description:
                  "Security considerations integrated at every stage of development",
              },
            ].map((item, index) => (
              <div key={index} className="card p-8">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Tools & Technologies We Use
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                tools: [
                  "React",
                  "Next.js",
                  "Vue.js",
                  "Tailwind CSS",
                  "TypeScript",
                ],
              },
              {
                category: "Backend",
                tools: ["Node.js", "Python", "Java", "Go", "Ruby on Rails"],
              },
              {
                category: "Infrastructure",
                tools: [
                  "AWS",
                  "Docker",
                  "Kubernetes",
                  "CI/CD Pipelines",
                  "Monitoring Tools",
                ],
              },
              {
                category: "Databases",
                tools: [
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "Firebase",
                  "DynamoDB",
                ],
              },
              {
                category: "Development Tools",
                tools: ["Git", "JIRA", "Slack", "VS Code", "Postman"],
              },
              {
                category: "Testing & QA",
                tools: [
                  "Jest",
                  "Cypress",
                  "Selenium",
                  "LoadTesting",
                  "Security Scanning",
                ],
              },
            ].map((group, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-lg font-bold mb-4 text-gray-900">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.tools.map((tool, i) => (
                    <li key={i} className="text-gray-600 flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let's discuss your project and how our proven process can help"
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};
