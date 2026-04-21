import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  cta = true,
  ctaText = "Get Started",
  ctaLink = "/contact",
}) => {
  return (
    <section
      className="relative min-h-[66vh] md:min-h-[74vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(2, 6, 23, 0.72), rgba(15, 23, 42, 0.64), rgba(49, 46, 129, 0.56)), url('${backgroundImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/20" />
      <div className="container-custom text-center text-white z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto rounded-3xl px-5 py-4 md:px-8 md:py-7 bg-slate-900/20 backdrop-blur-[2px]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight drop-shadow-md text-white">
          {title}
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-slate-100 max-w-3xl mx-auto font-medium">
          {subtitle}
        </p>
        {cta && (
          <Link to={ctaLink} className="btn-primary inline-flex gap-2 text-lg">
            {ctaText}
            <ArrowRight size={24} />
          </Link>
        )}
        </div>
      </div>
    </section>
  );
};

export const FeaturesSection = ({
  title,
  subtitle,
  features,
  layout = "grid",
}) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div
          className={`grid grid-cols-1 md:grid-cols-${layout === "grid" ? "2" : "1"} lg:grid-cols-${layout === "grid" ? "3" : "1"} gap-8`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
            >
              {feature.icon && (
                <div className="text-4xl mb-4">{feature.icon}</div>
              )}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const StatsSection = ({ stats }) => {
  return (
    <section className="section-padding bg-blue-600 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <p className="text-xl opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTASection = ({
  title,
  subtitle,
  buttonText = "Get Started",
  buttonLink = "/contact",
  isDark = false,
}) => {
  return (
    <section
      className={`section-padding ${isDark ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"}`}
    >
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p
          className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          className="btn-primary"
        >
          {buttonText}
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export const ProcessSection = ({ steps }) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-1/2 h-1 bg-blue-200 -translate-x-1/2" />
              )}

              {/* Step card */}
              <div className="relative bg-white border-2 border-blue-200 rounded-xl p-8 hover:border-blue-600 transition-colors">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4 text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
