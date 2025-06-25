import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Smartphone, Code, Zap } from "lucide-react";

const WebAppServices = () => {
  const services = [
    {
      title: "Website Design & Development",
      description:
        "Custom website design and development with modern frameworks, responsive design, and optimized performance.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "WordPress Development",
      description:
        "Professional WordPress websites with custom themes, plugins, and content management systems.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Shopify Development",
      description:
        "Complete Shopify store setup and customization for e-commerce businesses with payment integration.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Landing Page Design",
      description:
        "High-converting landing pages optimized for specific campaigns and conversion goals.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "App Store Optimization (ASO)",
      description:
        "Mobile app optimization for better visibility and downloads in app stores.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Mobile App Promotion",
      description:
        "Comprehensive mobile app marketing campaigns to increase downloads and user engagement.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "UI/UX Improvements",
      description:
        "User interface and experience optimization to improve usability and conversion rates.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Chatbot Integration",
      description:
        "AI-powered chatbot implementation for customer support and lead generation.",
      icon: <Code className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gray-50 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm">
          <Link
            to="/services"
            className="text-brand-teal hover:underline font-inter"
          >
            Services
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-inter">Web & App Services</span>
        </div>
      </div>

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
                Web & App Services
              </h1>
              <p className="text-xl text-[#D2D0DD] mb-8 font-inter">
                Professional web development and mobile app optimization
                services that create exceptional user experiences.
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
              <div className="w-full h-80 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center">
                <Globe className="w-32 h-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
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
                      View Examples
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-inter">
            Ready to Build Your Digital Platform?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-inter">
            Let's create web and mobile solutions that engage users and drive
            business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Start Project
            </button>
            <button className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-29 font-inter text-lg hover:bg-brand-teal hover:text-white transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebAppServices;
