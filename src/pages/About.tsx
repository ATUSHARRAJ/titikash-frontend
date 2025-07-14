import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  Lightbulb,
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "12+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description:
        "We believe in building long-term partnerships with our clients, understanding their unique needs and goals.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We maintain the highest standards of quality in everything we do, from code to customer service.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description:
        "Our solutions help businesses worldwide achieve digital transformation and sustainable growth.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Solutions",
      description:
        "We think outside the box to solve complex challenges with innovative and practical approaches.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion Driven",
      description:
        "Our team is passionate about technology and dedicated to helping our clients succeed.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "15+ years in digital strategy and business development",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in scalable architecture and emerging technologies",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Award-winning UX/UI designer with 10+ years experience",
    },
    {
      name: "David Park",
      role: "Lead Developer",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Full-stack developer specializing in modern web technologies",
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
            About Visualize Digital
          </h1>
          <p className="text-xl text-[#D2D0DD] max-w-4xl mx-auto font-inter leading-relaxed">
            We are a team of passionate digital innovators dedicated to
            transforming businesses through cutting-edge technology solutions.
            Since our founding, we've helped hundreds of companies achieve their
            digital transformation goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-glass-white backdrop-blur-sm rounded-xl p-6 border border-glass-border"
              >
                <div className="text-5xl font-bold text-stat-green font-inter mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-inter">
                Our Story
              </h2>
              <div className="space-y-6 text-[#D2D0DD] font-inter text-lg leading-relaxed">
                <p>
                  Founded in 2010, Visualize Digital began as a small team of
                  developers and designers who shared a vision: to help
                  businesses leverage technology to achieve extraordinary
                  results. What started as a local software development company
                  has grown into a global digital transformation partner.
                </p>
                <p>
                  Today, we work with companies of all sizes, from startups to
                  Fortune 500 enterprises, helping them navigate the complex
                  digital landscape and emerge stronger, more efficient, and
                  more competitive.
                </p>
                <p>
                  Our commitment to innovation, quality, and client success has
                  made us a trusted partner for businesses looking to transform
                  their digital presence and accelerate growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-6 font-inter">
                Our Mission
              </h3>
              <p className="text-[#D2D0DD] font-inter text-lg leading-relaxed">
                To empower businesses with innovative digital solutions that
                drive growth, efficiency, and success. We believe that
                technology should be accessible, powerful, and transformative
                for organizations of all sizes.
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-6 font-inter">
                Our Vision
              </h3>
              <p className="text-[#D2D0DD] font-inter text-lg leading-relaxed">
                To be the leading global partner for digital transformation,
                recognized for our innovation, expertise, and commitment to
                client success. We envision a future where every business can
                leverage technology to achieve its full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-inter text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-green rounded-xl flex items-center justify-center mb-6 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-5 font-inter ml-3">
                    {value.title}
                  </h3>
                </div>

                <p className="text-[#D2D0DD] font-inter leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-inter text-center">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-brand-teal">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-inter">
                  {member.name}
                </h3>
                <p className="text-brand-teal font-semibold mb-3 font-inter">
                  {member.role}
                </p>
                <p className="text-[#D2D0DD] font-inter text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-inter">
            Why Choose Visualize Digital?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 font-inter">
                Proven Track Record
              </h3>
              <p className="text-[#D2D0DD] font-inter">
                12+ years of delivering successful digital solutions with 98%
                client satisfaction rate.
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 font-inter">
                Expert Team
              </h3>
              <p className="text-[#D2D0DD] font-inter">
                Skilled professionals with deep expertise in cutting-edge
                technologies and industry best practices.
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 font-inter">
                End-to-End Solutions
              </h3>
              <p className="text-[#D2D0DD] font-inter">
                From strategy to implementation, we provide comprehensive
                solutions for your digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-inter">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-[#D2D0DD] mb-8 font-inter">
            Let's discuss how we can help transform your business with
            innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-29 font-inter text-lg hover:bg-white hover:text-gray-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
