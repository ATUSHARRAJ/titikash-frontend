import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Server,
  Cloud,
  Cpu,
  Layout,
  Shield,
  Zap,
  Settings,
  Monitor,
} from "lucide-react";

const Technologies = () => {
  const technologies = [
    {
      icon: Code,
      name: "React & Next.js",
      description:
        "Modern frontend frameworks for blazing-fast web applications",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Server,
      name: "Node.js & Express",
      description: "Scalable backend solutions with JavaScript runtime",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      name: "MongoDB & PostgreSQL",
      description: "Robust database solutions for complex data management",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Smartphone,
      name: "React Native & Flutter",
      description: "Cross-platform mobile apps with native performance",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Cloud,
      name: "AWS & Azure",
      description: "Cloud infrastructure and deployment solutions",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Globe,
      name: "TypeScript & JavaScript",
      description: "Type-safe development for reliable applications",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Layout,
      name: "TailwindCSS & Styled Components",
      description: "Modern CSS frameworks for beautiful interfaces",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Cpu,
      name: "Python & Django",
      description: "Powerful backend development with AI/ML capabilities",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      name: "Firebase & Supabase",
      description: "Backend-as-a-Service for rapid development",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Zap,
      name: "GraphQL & REST APIs",
      description: "Efficient data fetching and API architecture",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Settings,
      name: "Docker & Kubernetes",
      description: "Containerization and orchestration for scalability",
      color: "from-gray-500 to-slate-500",
    },
    {
      icon: Monitor,
      name: "Figma & Adobe XD",
      description: "Design tools for exceptional user experiences",
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
            Our Tech Stack
          </h1>
          <p className="text-xl text-[#D2D0DD] max-w-4xl mx-auto font-inter leading-relaxed mb-16">
            We leverage cutting-edge technologies to build scalable, performant,
            and innovative solutions that drive your digital transformation
            forward.
          </p>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="group bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  <div className="flex items-center mb-3 ">
                    {/* Icon with gradient background */}
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Technology Name */}
                    <h3 className="text-lg font-bold text-white mb-5 font-inter group-hover:text-brand-teal transition-colors duration-300 ml-2">
                      {tech.name}
                    </h3>
                  </div>


                  {/* Description */}
                  <p className="text-[#D2D0DD] text-sm font-inter leading-relaxed">
                    {tech.description}
                  </p>
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
            Ready to Build with Modern Tech?
          </h2>
          <p className="text-xl text-[#D2D0DD] mb-8 font-inter">
            Let's discuss how our technology stack can power your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-29 font-inter text-lg hover:bg-white hover:text-gray-900 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// CSS Animation for fade in effect
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

export default Technologies;
