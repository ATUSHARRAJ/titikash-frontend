import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Building2,
  Car,
  Plane,
  Banknote,
  Gamepad2,
  Home,
  Utensils,
  Music,
  Shirt,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: ShoppingCart,
      name: "E-commerce & Retail",
      description:
        "Custom online stores, inventory management, and omnichannel experiences",
      stats: "150+ Projects",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Stethoscope,
      name: "Healthcare & Medical",
      description:
        "HIPAA-compliant solutions, telemedicine platforms, and patient management",
      stats: "80+ Projects",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      name: "Education & E-learning",
      description:
        "Learning management systems, online courses, and educational apps",
      stats: "60+ Projects",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Building2,
      name: "Real Estate & Property",
      description: "Property listings, CRM systems, and virtual tour platforms",
      stats: "45+ Projects",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Banknote,
      name: "Finance & FinTech",
      description:
        "Banking solutions, payment systems, and investment platforms",
      stats: "70+ Projects",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Car,
      name: "Automotive & Transportation",
      description:
        "Fleet management, booking systems, and automotive marketplaces",
      stats: "35+ Projects",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Plane,
      name: "Travel & Hospitality",
      description:
        "Booking platforms, hotel management, and travel planning apps",
      stats: "55+ Projects",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Gamepad2,
      name: "Gaming & Entertainment",
      description:
        "Game development, streaming platforms, and entertainment apps",
      stats: "25+ Projects",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Home,
      name: "Real Estate & Construction",
      description:
        "Project management, contractor platforms, and property tech",
      stats: "40+ Projects",
      color: "from-gray-500 to-slate-500",
    },
    {
      icon: Utensils,
      name: "Food & Restaurant",
      description:
        "Online ordering, delivery platforms, and restaurant management",
      stats: "30+ Projects",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Music,
      name: "Media & Entertainment",
      description:
        "Content management, streaming services, and media platforms",
      stats: "20+ Projects",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Shirt,
      name: "Fashion & Lifestyle",
      description: "Fashion e-commerce, styling apps, and lifestyle platforms",
      stats: "35+ Projects",
      color: "from-emerald-500 to-green-500",
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
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-inter mb-6 bg-hero-text-gradient bg-clip-text text-transparent">
            Industries We Serve
          </h1>
          <p className="text-xl text-[#D2D0DD] max-w-4xl mx-auto font-inter leading-relaxed mb-8">
            From startups to enterprise, we deliver tailored digital solutions
            across diverse industries with deep domain expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[#D2D0DD]">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div>Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10+</div>
              <div>Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12+</div>
              <div>Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="group bg-glass-white backdrop-blur-sm border border-glass-border rounded-[24px] p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    animation: "slideInUp 0.8s ease-out forwards",
                  }}
                >
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[24px]`}
                  />
                  <div className="flex items-start mb-3">
                    {/* Icon with gradient background */}
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    {/* Industry Name */}
                    <h3 className="text-2xl font-bold text-white mb-3 font-inter group-hover:text-brand-teal transition-colors duration-300 relative z-10 ml-3">
                      {industry.name}
                    </h3>
                  </div>


                  {/* Description */}
                  <p className="text-[#D2D0DD] text-base font-inter leading-relaxed mb-4 relative z-10">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-brand-teal font-semibold text-sm">
                      {industry.stats}
                    </span>
                    <span className="text-[#D2D0DD] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Your Industry, Our Expertise
          </h2>
          <p className="text-xl text-[#D2D0DD] mb-8 font-inter">
            Don't see your industry? We adapt our solutions to meet any business
            challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Discuss Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-29 font-inter text-lg hover:bg-white hover:text-gray-900 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// CSS Animation for slide in effect
const style = document.createElement("style");
style.textContent = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;
document.head.appendChild(style);

export default Industries;
