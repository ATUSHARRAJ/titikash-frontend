import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, TrendingUp, Users, Zap } from "lucide-react";

const PerformanceMarketing = () => {
  const services = [
    {
      title: "Google Ads",
      description:
        "Comprehensive Google Ads management including Search, Display, Shopping, and YouTube campaigns with optimized bidding strategies.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Meta Ads",
      description:
        "Expert Facebook and Instagram advertising with advanced targeting, creative optimization, and conversion tracking.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "LinkedIn Ads",
      description:
        "B2B focused LinkedIn advertising campaigns for lead generation and professional networking.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Pinterest Ads",
      description:
        "Visual advertising on Pinterest to reach high-intent shoppers and drive e-commerce sales.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Remarketing",
      description:
        "Strategic remarketing campaigns to re-engage visitors and increase conversion rates across all platforms.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Conversion Tracking",
      description:
        "Advanced conversion tracking setup and optimization to measure and improve campaign performance.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Budget Optimization",
      description:
        "Smart budget allocation and bid optimization to maximize ROI across all advertising channels.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Landing Page Optimization",
      description:
        "A/B testing and optimization of landing pages to improve conversion rates and reduce cost per acquisition.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const navigationTabs = [
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "Pinterest Ads",
    "Remarketing",
    "Conversion Tracking",
    "Budget Optimization",
    "Landing Page Optimization",
  ];

  return (
    <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
      {/* Background blur elements */}
      <div className="absolute top-64 right-0 w-[600px] h-[653px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.20)] to-[rgba(84,84,212,0.08)] blur-[150px]" />
      <div className="absolute top-10 left-96 w-[467px] h-[1399px] rounded-full bg-gradient-to-b from-[rgba(251,168,28,0.11)] to-[rgba(224,86,136,0.06)] blur-[150px] rotate-[65.712deg]" />
      <div className="absolute -top-16 -left-80 w-[467px] h-[1234px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.27)] to-[rgba(84,84,212,0.11)] blur-[150px] rotate-[-54.374deg]" />

      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 px-4">
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
                Performance Marketing
              </h1>
              <p className="text-xl text-[#D2D0DD] mb-8 font-inter">
                Data-driven advertising campaigns that deliver measurable
                results across all major platforms. We focus on ROI,
                conversions, and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-29 font-inter text-lg hover:bg-white hover:text-gray-900 transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Target className="w-32 h-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-20 bg-white border-b border-gray-200 py-4 px-4 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-6 overflow-x-auto">
            {navigationTabs.map((tab, index) => (
              <a
                key={index}
                href={`#service-${index}`}
                className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors py-2 border-b-2 border-transparent hover:border-brand-teal font-inter"
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
      </div>

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
            Ready to Scale Your Performance Marketing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-inter">
            Let's create data-driven campaigns that deliver measurable results
            for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Start Your Campaign
            </button>
            <button className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-29 font-inter text-lg hover:bg-brand-teal hover:text-white transition-colors">
              Request Audit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceMarketing;
