import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Star,
  CheckCircle,
  Code,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Server,
  Shield,
  BarChart3,
  Settings,
  CreditCard,
  Video,
  Map,
  Bell,
  Zap,
  Play,
  Gamepad2,
} from "lucide-react";

// Complete project data for all portfolio items
const projectsData = {
  "1": {
    id: 1,
    name: "E-Commerce Marketplace",
    category: "E-commerce",
    subtitle:
      "A comprehensive marketplace platform connecting buyers and sellers",
    description:
      "Built a full-featured e-commerce marketplace that connects thousands of buyers and sellers. The platform includes advanced search functionality, secure payment processing, real-time chat, and comprehensive seller tools.",
    heroImage:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    year: "2024",
    client: "RetailCorp",
    rating: 5,
    role: "Full-Stack Developer & Project Lead",
    duration: "6 months",
    teamSize: "5 developers",
    keyFeatures: [
      "Advanced product search and filtering",
      "Secure payment processing with Stripe",
      "Real-time messaging between buyers and sellers",
      "Comprehensive seller dashboard",
      "Mobile-responsive design",
      "Multi-vendor support",
    ],
    liveLink: "https://example-marketplace.com",
    githubLink: "https://github.com/example/marketplace",
  },
  "2": {
    id: 2,
    name: "Healthcare Management System",
    category: "Healthcare",
    subtitle:
      "HIPAA-compliant patient management system with telemedicine capabilities",
    description:
      "Developed a comprehensive healthcare management system that enables healthcare providers to manage patients, schedule appointments, and conduct telemedicine sessions while maintaining HIPAA compliance.",
    heroImage:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Next.js", "PostgreSQL", "AWS", "WebRTC", "HIPAA"],
    year: "2024",
    client: "MediCare Plus",
    rating: 5,
    role: "Lead Frontend Developer",
    duration: "8 months",
    teamSize: "7 developers",
    keyFeatures: [
      "HIPAA-compliant data handling",
      "Video consultation capabilities",
      "Electronic health records (EHR)",
      "Appointment scheduling system",
      "Patient portal access",
      "Prescription management",
    ],
    liveLink: "https://example-healthcare.com",
    githubLink: null,
  },
  "3": {
    id: 3,
    name: "Financial Trading Platform",
    category: "FinTech",
    subtitle:
      "Real-time trading platform with advanced analytics and AI-powered recommendations",
    description:
      "Created a sophisticated trading platform that provides real-time market data, advanced analytics, and AI-powered investment recommendations for both novice and professional traders.",
    heroImage:
      "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React Native", "Django", "Redis", "WebSocket", "AI"],
    year: "2023",
    client: "TradeTech Solutions",
    rating: 5,
    role: "Mobile App Developer",
    duration: "10 months",
    teamSize: "8 developers",
    keyFeatures: [
      "Real-time market data streaming",
      "Advanced charting and analytics",
      "AI-powered investment recommendations",
      "Portfolio management tools",
      "Risk assessment algorithms",
      "Social trading features",
    ],
    liveLink: "https://example-trading.com",
    githubLink: "https://github.com/example/trading",
  },
  "4": {
    id: 4,
    name: "Learning Management System",
    category: "Education",
    subtitle:
      "Comprehensive LMS with interactive courses and collaborative learning tools",
    description:
      "Built an advanced learning management system that supports interactive courses, video streaming, progress tracking, and collaborative learning tools for educational institutions.",
    heroImage:
      "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Vue.js", "Laravel", "MySQL", "WebRTC", "FFmpeg"],
    year: "2023",
    client: "EduTech Academy",
    rating: 4,
    role: "Full-Stack Developer",
    duration: "7 months",
    teamSize: "6 developers",
    keyFeatures: [
      "Interactive course creation tools",
      "HD video streaming capabilities",
      "Real-time progress tracking",
      "Collaborative learning spaces",
      "Assignment and grading system",
      "Mobile learning support",
    ],
    liveLink: "https://example-lms.com",
    githubLink: "https://github.com/example/lms",
  },
  "5": {
    id: 5,
    name: "Real Estate Platform",
    category: "Real Estate",
    subtitle:
      "Advanced property listing platform with virtual tours and CRM integration",
    description:
      "Developed a comprehensive real estate platform featuring virtual property tours, advanced search capabilities, mortgage calculators, and integrated CRM tools for real estate agents.",
    heroImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Angular", "Express", "GraphQL", "Three.js", "Maps API"],
    year: "2023",
    client: "PropertyPro",
    rating: 5,
    role: "Frontend Lead Developer",
    duration: "9 months",
    teamSize: "6 developers",
    keyFeatures: [
      "360° virtual property tours",
      "Advanced property search filters",
      "Integrated mortgage calculator",
      "CRM tools for agents",
      "Interactive maps integration",
      "Property comparison tools",
    ],
    liveLink: "https://example-realestate.com",
    githubLink: "https://github.com/example/realestate",
  },
  "6": {
    id: 6,
    name: "Food Delivery App",
    category: "Food & Beverage",
    subtitle:
      "Multi-restaurant delivery platform with real-time tracking and loyalty programs",
    description:
      "Created a comprehensive food delivery application that connects customers with multiple restaurants, featuring real-time order tracking, payment processing, and customer loyalty programs.",
    heroImage:
      "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flutter", "Firebase", "Stripe", "Google Maps", "FCM"],
    year: "2022",
    client: "QuickEats",
    rating: 4,
    role: "Mobile App Developer",
    duration: "5 months",
    teamSize: "4 developers",
    keyFeatures: [
      "Multi-restaurant ordering system",
      "Real-time order tracking",
      "Integrated payment processing",
      "Customer loyalty programs",
      "Driver management system",
      "Push notification system",
    ],
    liveLink: "https://example-fooddelivery.com",
    githubLink: null,
  },
  "7": {
    id: 7,
    name: "Smart City Dashboard",
    category: "Government",
    subtitle:
      "IoT-powered city management dashboard for traffic monitoring and energy optimization",
    description:
      "Developed an intelligent city management dashboard that aggregates IoT sensor data to monitor traffic patterns, optimize energy consumption, and improve citizen services.",
    heroImage:
      "https://images.pexels.com/photos/6457495/pexels-photo-6457495.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React", "Python", "IoT", "D3.js", "PostgreSQL"],
    year: "2022",
    client: "City Council",
    rating: 5,
    role: "Data Visualization Developer",
    duration: "12 months",
    teamSize: "10 developers",
    keyFeatures: [
      "Real-time IoT data processing",
      "Traffic flow optimization",
      "Energy consumption monitoring",
      "Citizen service portal",
      "Predictive analytics",
      "Emergency response system",
    ],
    liveLink: "https://example-smartcity.com",
    githubLink: "https://github.com/example/smartcity",
  },
  "8": {
    id: 8,
    name: "Social Media Analytics",
    category: "Marketing",
    subtitle:
      "Advanced analytics platform for social media performance tracking with AI insights",
    description:
      "Built a comprehensive social media analytics platform that provides detailed performance insights, automated reporting, and AI-powered recommendations for content optimization.",
    heroImage:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["TypeScript", "D3.js", "Docker", "Machine Learning", "API"],
    year: "2022",
    client: "SocialMetrics",
    rating: 4,
    role: "Full-Stack Developer",
    duration: "6 months",
    teamSize: "5 developers",
    keyFeatures: [
      "Multi-platform analytics integration",
      "AI-powered content recommendations",
      "Automated report generation",
      "Competitor analysis tools",
      "Custom dashboard creation",
      "Real-time performance monitoring",
    ],
    liveLink: "https://example-analytics.com",
    githubLink: "https://github.com/example/analytics",
  },
  "9": {
    id: 9,
    name: "Gaming Tournament Platform",
    category: "Gaming",
    subtitle:
      "Esports tournament platform with live streaming and spectator engagement features",
    description:
      "Created a comprehensive esports tournament platform that supports tournament management, live streaming, bracket organization, and real-time spectator engagement features.",
    heroImage:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Unity", "WebRTC", "Kubernetes", "Socket.io", "Redis"],
    year: "2021",
    client: "GameArena",
    rating: 5,
    role: "Game Developer & Platform Architect",
    duration: "8 months",
    teamSize: "7 developers",
    keyFeatures: [
      "Tournament bracket management",
      "Live streaming integration",
      "Real-time spectator chat",
      "Player statistics tracking",
      "Prize distribution system",
      "Mobile companion app",
    ],
    liveLink: "https://example-gaming.com",
    githubLink: "https://github.com/example/gaming",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
        {/* Background blur elements */}
        <div className="absolute top-64 right-0 w-[600px] h-[653px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.20)] to-[rgba(84,84,212,0.08)] blur-[150px]" />
        <div className="absolute top-10 left-96 w-[467px] h-[1399px] rounded-full bg-gradient-to-b from-[rgba(251,168,28,0.11)] to-[rgba(224,86,136,0.06)] blur-[150px] rotate-[65.712deg]" />
        <div className="absolute -top-16 -left-80 w-[467px] h-[1234px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.27)] to-[rgba(84,84,212,0.11)] blur-[150px] rotate-[-54.374deg]" />

        <Navigation />

        <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-[#D2D0DD] mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-button-gradient px-6 py-3 rounded-29 text-white font-inter font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
      {/* Background blur elements */}
      <div className="absolute top-64 right-0 w-[600px] h-[653px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.20)] to-[rgba(84,84,212,0.08)] blur-[150px]" />
      <div className="absolute top-10 left-96 w-[467px] h-[1399px] rounded-full bg-gradient-to-b from-[rgba(251,168,28,0.11)] to-[rgba(224,86,136,0.06)] blur-[150px] rotate-[65.712deg]" />
      <div className="absolute -top-16 -left-80 w-[467px] h-[1234px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.27)] to-[rgba(84,84,212,0.11)] blur-[150px] rotate-[-54.374deg]" />

      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors duration-300 font-nunito"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-brand-teal/20 border border-brand-teal/30 rounded-full text-brand-teal text-sm font-semibold">
                  {project.category}
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < project.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-400"
                        }`}
                    />
                  ))}
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-hero-text-gradient bg-clip-text text-transparent leading-tight">
                {project.name}
              </h1>

              <p className="text-xl text-[#D2D0DD] mb-8 font-inter leading-relaxed">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-glass-white backdrop-blur-sm border border-glass-border rounded-full text-sm font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-button-gradient px-6 py-3 rounded-29 text-white font-inter font-semibold shadow-glow hover:scale-105 transition-transform duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-29 font-inter font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </a>
                )}
              </div>
            </div>

            <div>
              <div className="relative">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="w-full h-96 object-cover rounded-[24px] shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 font-inter text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-teal/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-brand-teal" />
                  </div>
                  <p className="text-white font-inter">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-inter">
                Project Overview
              </h2>
              <p className="text-lg text-[#D2D0DD] font-inter leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <img
                src={project.heroImage}
                alt="Project overview"
                className="w-full h-64 object-cover rounded-[20px] shadow-xl"
              />
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Project Info */}
            <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
              <h3 className="text-lg font-bold text-white mb-4 font-inter">
                Project Info
              </h3>
              <div className="space-y-3 text-[#D2D0DD]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-teal" />
                  <span className="text-sm">{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-teal" />
                  <span className="text-sm">{project.client}</span>
                </div>
                <div>
                  <span className="text-sm text-brand-teal font-semibold">
                    Duration:
                  </span>
                  <span className="text-sm ml-2">{project.duration}</span>
                </div>
                <div>
                  <span className="text-sm text-brand-teal font-semibold">
                    Team Size:
                  </span>
                  <span className="text-sm ml-2">{project.teamSize}</span>
                </div>
              </div>
            </div>

            {/* Role */}
            <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
              <h3 className="text-lg font-bold text-white mb-4 font-inter">
                My Role
              </h3>
              <p className="text-[#D2D0DD] text-sm leading-relaxed">
                {project.role}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
              <h3 className="text-lg font-bold text-white mb-4 font-inter">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-teal/20 text-brand-teal text-xs rounded-full border border-brand-teal/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 font-inter text-center">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.values(projectsData)
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/portfolio/${relatedProject.id}`}
                    className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] overflow-hidden hover:scale-105 transition-all duration-300 group"
                  >
                    <img
                      src={relatedProject.heroImage}
                      alt={relatedProject.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 font-inter group-hover:text-brand-teal transition-colors">
                        {relatedProject.name}
                      </h3>
                      <p className="text-[#D2D0DD] text-sm mb-4">
                        {relatedProject.subtitle}
                      </p>
                      <span className="text-brand-teal text-sm font-semibold">
                        View Project →
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
