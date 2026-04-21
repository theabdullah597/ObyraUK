import { HeroSection, CTASection } from "../../components/sections/Sections";
import { BlogCard } from "../../components/cards/Cards";
import { imagesData } from "../../data/images";
import { Link } from "react-router-dom";

// Blog Page
export const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends and technologies shaping web development in 2024 and beyond.",
      date: "Mar 20, 2024",
      author: "John Smith",
      category: "Technology",
      image: imagesData.webDevelopment,
    },
    {
      title: "Scaling Your Startup: Technical Challenges",
      excerpt:
        "A comprehensive guide to overcoming technical scaling challenges as your startup grows.",
      date: "Mar 15, 2024",
      author: "Sarah Johnson",
      category: "Startup",
      image: imagesData.development,
    },
    {
      title: "Best Practices in Mobile App Security",
      excerpt:
        "Learn essential security practices to protect your mobile applications from threats.",
      date: "Mar 10, 2024",
      author: "Michael Brown",
      category: "Security",
      image: imagesData.mobileApp,
    },
  ];

  return (
    <div>
      <HeroSection
        title="Obyra Blog"
        subtitle="Insights, tips, and best practices from our experts"
        backgroundImage={imagesData.heroDevelopment}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/company/blog" className="btn-primary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Stay Updated"
        subtitle="Subscribe to our blog for latest insights and industry news"
        buttonText="Subscribe Now"
        buttonLink="/contact"
      />
    </div>
  );
};

// News & Updates Page
export const News = () => {
  const newsItems = [
    {
      date: "Mar 25, 2024",
      title: "Obyra Wins Best Development Company Award 2024",
      excerpt:
        "Recognized for excellence in software development and client satisfaction.",
    },
    {
      date: "Mar 20, 2024",
      title: "Launching New AI-Powered Solution",
      excerpt:
        "Introducing our latest innovation in artificial intelligence for business automation.",
    },
    {
      date: "Mar 15, 2024",
      title: "Expanded Team with New Talent",
      excerpt: "Growing our team with experienced developers and designers.",
    },
  ];

  return (
    <div>
      <HeroSection
        title="News & Updates"
        subtitle="Latest news and announcements from Obyra"
        backgroundImage={imagesData.heroDevelopment}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto space-y-8">
            {newsItems.map((news, index) => (
              <div
                key={index}
                className="card p-8 hover:shadow-lg transition-shadow"
              >
                <p className="text-sm text-blue-600 font-semibold mb-2">
                  {news.date}
                </p>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <Link to="/company/news" className="btn-secondary text-sm">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Subscribe to Our Newsletter"
        subtitle="Get the latest news delivered to your inbox"
        buttonText="Subscribe"
        buttonLink="/contact"
      />
    </div>
  );
};

// Press Release Page
export const Press = () => {
  return (
    <div>
      <HeroSection
        title="Press Room"
        subtitle="Latest press releases and media resources"
        backgroundImage={imagesData.heroDevelopment}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Latest Press Releases</h2>

            <div className="space-y-8">
              {[
                {
                  title: "Obyra Launches Enterprise Solutions Suite",
                  date: "Mar 2024",
                  excerpt:
                    "New suite of enterprise-grade solutions designed for large organizations to streamline operations.",
                },
                {
                  title: "Series A Funding Announcement",
                  date: "Feb 2024",
                  excerpt:
                    "Obyra secures $5M Series A funding to accelerate product development and expansion.",
                },
                {
                  title: "Partnership with Global Tech Leader",
                  date: "Jan 2024",
                  excerpt:
                    "Strategic partnership to deliver integrated solutions for Fortune 500 companies.",
                },
              ].map((release, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-600 pl-8 pb-8"
                >
                  <p className="text-sm text-blue-600 font-semibold mb-2">
                    {release.date}
                  </p>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {release.title}
                  </h3>
                  <p className="text-gray-600">{release.excerpt}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Media Contact
              </h3>
              <p className="text-gray-600 mb-2">
                For press inquiries or to request an interview:
              </p>
              <p className="text-blue-600 font-semibold">press@obyra.co.uk</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in Covering Obyra?"
        subtitle="Get in touch with our media team"
        buttonText="Contact Press Team"
        buttonLink="/contact"
      />
    </div>
  );
};

// Events Page
export const Events = () => {
  const events = [
    {
      date: "Apr 15, 2024",
      title: "Web Development Webinar: React Best Practices",
      type: "Webinar",
    },
    {
      date: "Apr 20, 2024",
      title: "Tech Conference: Future of AI in Business",
      type: "Conference",
    },
    {
      date: "May 5, 2024",
      title: "Networking Event: Developers Meetup",
      type: "Meetup",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Events"
        subtitle="Join us for webinars, conferences, and networking events"
        backgroundImage={imagesData.heroDevelopment}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="card p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-blue-600 font-semibold mb-2">
                      {event.date}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      {event.type}
                    </p>
                  </div>
                  <Link to="/contact" className="btn-primary ml-4">
                    Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't Miss Our Next Event"
        subtitle="Sign up to stay updated about upcoming events"
        buttonText="Subscribe to Events"
        buttonLink="/contact"
      />
    </div>
  );
};
