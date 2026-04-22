import { industriesData } from './industries';
import { servicesData } from './services';
import { solutionsData } from './solutions';

const servicesLinks = [
  { label: 'All Services', path: '/services' },
  { label: 'Technologies', path: '/services#technologies' },
];

const serviceItems = Object.entries(servicesData).flatMap(([categoryId, category]) =>
  category.items.map((item) => ({
    label: item,
    path: `/services?category=${categoryId}&service=${encodeURIComponent(item)}`,
  }))
);

const industriesLinks = industriesData.map((industry) => ({
  label: industry.name,
  path: `/industries?industry=${encodeURIComponent(industry.name)}`,
}));

const solutionsLinks = solutionsData.map((solution) => ({
  label: solution.name,
  path: `/solutions?solution=${encodeURIComponent(solution.name)}`,
}));

const companyLinks = [
  { label: 'About', path: '/company/about' },
  { label: 'Process', path: '/company/process' },
  { label: 'Careers', path: '/company/careers' },
  { label: 'Clients', path: '/company/clients' },
  { label: 'University', path: '/company/university' },
  { label: 'Manifesto', path: '/company/manifesto' },
];

const resourcesLinks = [
  { label: 'Blog', path: '/company/blog' },
  { label: 'News & Updates', path: '/company/news' },
  { label: 'Press Release', path: '/company/press' },
  { label: 'Events', path: '/company/events' },
];

export const navItems = [
  {
    label: 'Services',
    path: '/services',
    columns: [
      { title: 'Explore', links: servicesLinks },
      { title: 'Service Lines', links: serviceItems },
    ],
    width: 'min(980px,92vw)',
  },
  {
    label: 'Industries',
    path: '/industries',
    columns: [{ title: 'Industry Expertise', links: industriesLinks }],
    width: 'min(520px,92vw)',
  },
  {
    label: 'Solutions',
    path: '/solutions',
    columns: [{ title: 'Products', links: solutionsLinks }],
    width: 'min(520px,92vw)',
  },
  {
    label: 'Work',
    path: '/work',
  },
  {
    label: 'Company',
    path: '/company/about',
    columns: [
      { title: 'Company', links: companyLinks },
      { title: 'Resources', links: resourcesLinks },
    ],
    width: 'min(640px,92vw)',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];
