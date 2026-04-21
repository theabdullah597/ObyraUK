import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Car,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Link2,
  MessageCircle,
  Plane,
  Scale,
  Share2,
  Shield,
  Shirt,
  ShoppingCart,
  Store,
  Truck,
  Users,
  UsersRound,
  UtensilsCrossed,
  Wheat,
} from "lucide-react";

const iconMap = {
  Car,
  BriefcaseBusiness,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  UtensilsCrossed,
  Plane,
  Shirt,
  UsersRound,
  Truck,
  Factory,
  Scale,
  Wheat,
  Landmark,
  Building2,
  Hotel,
  Users,
  Shield,
  Store,
  MessageCircle,
  Bot,
  Link2,
  Share2,
  BarChart3,
  CalendarDays,
};

export const ServiceCard = ({
  title,
  description,
  items = [],
  icon: IconComponent,
  linkTo = '/services',
}) => {
  return (
    <div className="card p-8">
      {IconComponent && (
        <div className="mb-4 text-4xl">
          <IconComponent size={48} className="text-blue-600" />
        </div>
      )}
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm">{description}</p>

      {items.length > 0 && (
        <div className="mb-6">
          <ul className="space-y-2">
            {items.slice(0, 5).map((item, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-start"
              >
                <span className="text-blue-600 mr-2">•</span>
                {item}
              </li>
            ))}
            {items.length > 5 && (
              <li className="text-sm text-blue-600 font-semibold">
                +{items.length - 5} more
              </li>
            )}
          </ul>
        </div>
      )}

      <Link to={linkTo} className="btn-secondary w-full">
        Learn More
        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export const IndustryCard = ({ name, description, icon }) => {
  const Icon = iconMap[icon];

  return (
    <div className="card p-8 hover:-translate-y-1 transition-transform duration-200">
      <div className="w-14 h-14 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
        {Icon ? <Icon size={28} /> : null}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>
      <Link
        to={`/industries?industry=${encodeURIComponent(name)}`}
        className="btn-primary text-sm w-full"
      >
        Explore
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export const SolutionCard = ({ name, description, icon, features = [] }) => {
  const Icon = iconMap[icon];

  return (
    <div className="card p-8 bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl transition-all duration-200">
      <div className="w-14 h-14 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center mb-4">
        {Icon ? <Icon size={28} /> : null}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>

      {features.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Key Features
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-start"
              >
                <span className="text-blue-600 mr-2 text-lg leading-3">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        to={`/solutions?solution=${encodeURIComponent(name)}&view=details#solution-details`}
        className="btn-primary w-full text-sm"
      >
        View Details
      </Link>
    </div>
  );
};

export const TestimonialCard = ({ name, title, company, content, image }) => {
  return (
    <div className="card p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{content}"</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">
            {title} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export const BlogCard = ({ title, excerpt, date, author, image, category, linkTo = '/company/blog' }) => {
  return (
    <div className="card overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
            {category}
          </span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">By {author}</p>
          <Link to={linkTo} className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
            Read More
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
