import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Calendar, Camera, Hash } from "lucide-react";

const SocialMediaMarketing = () => {
  const services = [
    {
      title: "Profile Setup & Optimization",
      description:
        "Complete social media profile optimization across all platforms with professional branding and compelling copy.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Content Calendar",
      description:
        "Strategic content planning and scheduling to maintain consistent brand presence and engagement.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Creatives & Reels",
      description:
        "Professional graphic design and video content creation including trending reels and engaging visuals.",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      title: "Hashtag Strategy",
      description:
        "Research-based hashtag strategies to maximize reach and discoverability across social platforms.",
      icon: <Hash className="w-6 h-6" />,
    },
    {
      title: "Facebook Marketing",
      description:
        "Comprehensive Facebook marketing including pages, groups, events, and targeted advertising campaigns.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Instagram Marketing",
      description:
        "Instagram-focused strategies including posts, stories, reels, IGTV, and influencer collaborations.",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      title: "LinkedIn Marketing",
      description:
        "Professional LinkedIn marketing for B2B lead generation, thought leadership, and network building.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Influencer Collaboration",
      description:
        "Strategic partnerships with influencers to expand reach and build authentic brand connections.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
      {/* Background blur elements */}
      <div className="absolute top-64 right-0 w-[600px] h-[653px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.20)] to-[rgba(84,84,212,0.08)] blur-[150px]" />
      <div className="absolute top-10 left-96 w-[467px] h-[1399px] rounded-full bg-gradient-to-b from-[rgba(251,168,28,0.11)] to-[rgba(224,86,136,0.06)] blur-[150px] rotate-[65.712deg]" />
      <div className="absolute -top-16 -left-80 w-[467px] h-[1234px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.27)] to-[rgba(84,84,212,0.11)] blur-[150px] rotate-[-54.374deg]" />

      <Navigation />

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
                Social Media Marketing
              </h1>
              <p className="text-xl text-[#D2D0DD] mb-8 font-inter">
                Engaging social media strategies that build communities, drive
                conversions, and create lasting brand relationships across all
                major platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-29 font-inter text-lg hover:bg-white hover:text-gray-900 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-80 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center">
                <Users className="w-32 h-32 text-white/20" />
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
              id={`service-${index}`}
              className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 font-inter">
                    {service.title}
                  </h3>
                  <p className="text-[#D2D0DD] text-lg leading-relaxed mb-6 font-inter">
                    {service.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-brand-teal text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-brand-teal/90 transition-colors">
                      Learn More
                    </button>
                    <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-inter font-medium hover:border-brand-teal hover:text-brand-teal transition-colors">
                      View Examples
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
            Ready to Build Your Social Community?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-inter">
            Let's create engaging social media campaigns that turn followers
            into loyal customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Start Social Campaign
            </button>
            <button className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-29 font-inter text-lg hover:bg-brand-teal hover:text-white transition-colors">
              Content Audit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;
