import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, FileText, TrendingUp, Edit } from "lucide-react";

const SEOContent = () => {
  const services = [
    {
      title: "On-Page SEO",
      description:
        "Complete on-page optimization including meta tags, content optimization, internal linking, and technical improvements.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Off-Page SEO",
      description:
        "Strategic link building, guest posting, and authority building to improve domain authority and search rankings.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Technical SEO",
      description:
        "Website speed optimization, mobile responsiveness, schema markup, and crawlability improvements.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Local SEO",
      description:
        "Google My Business optimization, local citations, and location-based SEO strategies for local businesses.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "eCommerce SEO",
      description:
        "Product page optimization, category structure, and eCommerce-specific SEO strategies for online stores.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Content Marketing",
      description:
        "Strategic content creation and marketing campaigns that drive engagement and build brand authority.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Blog Writing",
      description:
        "Professional blog content creation with SEO optimization and strategic keyword targeting.",
      icon: <Edit className="w-6 h-6" />,
    },
    {
      title: "Keyword Research",
      description:
        "Comprehensive keyword research and analysis to identify high-value opportunities for your business.",
      icon: <Search className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
      {/* Background blur elements */}
      <div className="absolute top-64 right-0 w-[600px] h-[653px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.20)] to-[rgba(84,84,212,0.08)] blur-[150px]" />
      <div className="absolute top-10 left-96 w-[467px] h-[1399px] rounded-full bg-gradient-to-b from-[rgba(251,168,28,0.11)] to-[rgba(224,86,136,0.06)] blur-[150px] rotate-[65.712deg]" />
      <div className="absolute -top-16 -left-80 w-[467px] h-[1234px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.27)] to-[rgba(84,84,212,0.11)] blur-[150px] rotate-[-54.374deg]" />

      <Navigation />

      {/* Breadcrumb */}
      <div className="relative z-10 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm">
          <Link
            to="/services"
            className="text-brand-teal hover:underline font-inter"
          >
            Services
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-white/80 font-inter">SEO & Content</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 font-inter"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
                SEO & Content Marketing
              </h1>
              <p className="text-xl text-[#D2D0DD] mb-8 font-inter">
                Comprehensive SEO strategies and content marketing that boost
                your organic visibility, drive qualified traffic, and establish
                your brand as an industry authority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-29 font-inter text-lg hover:bg-white hover:text-gray-900 transition-colors">
                  Free SEO Audit
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-80 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center">
                <Search className="w-32 h-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 font-inter">
                    {service.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-brand-teal text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-brand-teal/90 transition-colors">
                      Learn More
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-inter font-medium hover:border-brand-teal hover:text-brand-teal transition-colors">
                      View Case Studies
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-inter">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-inter">
            Let's create an SEO strategy that drives organic growth and
            establishes your brand as an industry leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Start SEO Campaign
            </button>
            <button className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-29 font-inter text-lg hover:bg-brand-teal hover:text-white transition-colors">
              Get Free Audit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOContent;
