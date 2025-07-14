import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
      {/* Background blur elements */}
      <div className="absolute top-64 right-0 w-[600px] h-[653px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.20)] to-[rgba(84,84,212,0.08)] blur-[150px]" />
      <div className="absolute top-10 left-96 w-[467px] h-[1399px] rounded-full bg-gradient-to-b from-[rgba(251,168,28,0.11)] to-[rgba(224,86,136,0.06)] blur-[150px] rotate-[65.712deg]" />
      <div className="absolute -top-16 -left-80 w-[467px] h-[1234px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.27)] to-[rgba(84,84,212,0.11)] blur-[150px] rotate-[-54.374deg]" />

      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 text-center px-4 py-16 max-w-5xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-6xl lg:text-7xl font-bold font-inter leading-tight bg-hero-text-gradient bg-clip-text text-transparent">
            Innovative Software
          </h1>
          <h1 className="text-6xl lg:text-7xl font-bold font-inter leading-tight bg-hero-text-gradient bg-clip-text text-transparent">
            That Powers Your Vision
          </h1>
          <p className="text-xl text-[#D2D0DD] max-w-3xl mx-auto font-inter">
            Visual Design delivers scalable solutions for modern businesses.
          </p>
          <button className="bg-button-gradient-alt px-16 py-3 rounded-29 text-white font-inter text-lg shadow-glow flex items-center gap-2 mx-auto hover:scale-105 transition-transform">
            Lets Connect
            <div className="w-4 h-4 text-white transform -rotate-90">
              <svg
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.64821 8.86249C6.29946 8.74624 6.29946 8.25376 6.64821 8.13751L8.69527 7.45586C9.14526 7.30582 9.55413 7.05303 9.88945 6.71753C10.2248 6.38202 10.4773 5.97302 10.6271 5.52294L11.3088 3.47694C11.425 3.12819 11.9175 3.12819 12.0338 3.47694L12.7154 5.524C12.8654 5.97399 13.1182 6.38286 13.4537 6.71818C13.7892 7.0535 14.1982 7.30607 14.6483 7.45586L16.6943 8.13751C16.7707 8.16257 16.8372 8.21111 16.8843 8.27621C16.9315 8.3413 16.9569 8.41962 16.9569 8.5C16.9569 8.58037 16.9315 8.6587 16.8843 8.72379C16.8372 8.78888 16.7707 8.83742 16.6943 8.86249L14.6473 9.54414C14.1974 9.69407 13.7886 9.9467 13.4533 10.282C13.118 10.6173 12.8653 11.0261 12.7154 11.476L12.0338 13.5231C12.0087 13.5994 11.9602 13.6659 11.8951 13.7131C11.83 13.7602 11.7516 13.7856 11.6713 13.7856C11.5909 13.7856 11.5126 13.7602 11.4475 13.7131C11.3824 13.6659 11.3338 13.5994 11.3088 13.5231L10.6271 11.476C10.4772 11.0261 10.2246 10.6173 9.88925 10.282C9.55394 9.9467 9.14515 9.69407 8.69527 9.54414L6.64821 8.86249Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-glass-white backdrop-blur-sm rounded-xl p-6 border border-glass-border">
            <div className="text-5xl font-bold text-stat-green font-inter">
              1800+
            </div>
            <div className="text-2xl font-bold text-white mt-2 font-inter">
              Completed Project
            </div>
          </div>
          <div className="text-center bg-glass-white backdrop-blur-sm rounded-xl p-6 border border-glass-border">
            <div className="text-5xl font-bold text-stat-green font-inter">
              21+
            </div>
            <div className="text-2xl font-bold text-white mt-2 font-inter">
              Year Of Experience
            </div>
          </div>
          <div className="text-center bg-glass-white backdrop-blur-sm rounded-xl p-6 border border-glass-border">
            <div className="text-5xl font-bold text-stat-green font-inter">
              810+
            </div>
            <div className="text-2xl font-bold text-white mt-2 font-inter">
              Global Customers
            </div>
          </div>
          <div className="text-center bg-glass-white backdrop-blur-sm rounded-xl p-6 border border-glass-border">
            <div className="text-5xl font-bold text-stat-green font-inter">
              36
            </div>
            <div className="text-2xl font-bold text-white mt-2 font-inter">
              Country Clients
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-16 px-4">
        <h2 className="text-4xl font-bold font-inter bg-text-gradient bg-clip-text text-transparent text-center mb-16">
          Why Choose Us ?
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#91F4FF] via-[#D67EE2] to-[#9820FF] rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2L13 9h7l-6 4.5L16.5 22 10 17l-6.5 5L6 13.5 0 9h7l3-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#EE9D2D] font-inter">
                  On Demand Flexible
                </h3>
                <p className="text-white font-inter">
                  Choose the best-fit remote team as your business demands.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFC200] to-[#F82AC6] rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4h12v12H4V4zm2 2v8h8V6H6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#EE9D2D] font-inter">
                  Cost Benefit
                </h3>
                <p className="text-white font-inter">
                  Derive up to 30% business savings with our competitive
                  offerings.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F6005A] to-[#F7CBAD] rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#EE9D2D] font-inter">
                  1080+ IT experts
                </h3>
                <p className="text-white font-inter">
                  Scale up with engineers skilled across various technology.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFDC4A] to-[#F37322] rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#EE9D2D] font-inter">
                  Eliminate Risk
                </h3>
                <p className="text-white font-inter">
                  Achieve success with agile project management and consistent
                  delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full h-80 rounded-2xl overflow-hidden relative">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Diverse team collaborating in office with laptops and tablets"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-2xl font-bold text-white">
                  People working together
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-glass-white border border-glass-border rounded-full px-8 py-2 mb-8">
            <span className="text-2xl font-bold bg-service-gradient bg-clip-text text-transparent font-inter uppercase tracking-wider">
              SERVICES
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Software Development",
              description:
                "Translate unique client requirements into software solutions with premier quality and advanced technologies.",
              gradient: "from-[#509532] to-[#509532]",
            },
            {
              title: "Custom Software Development",
              description:
                "Translate unique client requirements into software solutions with premier quality and advanced technologies.",
              gradient: "from-[#46C951] to-[#46C951]",
            },
            {
              title: "Web Development",
              description:
                "Revolutionize your business ideas using web development services for innovative and next-gen web apps.",
              gradient: "from-[#46C951] to-[#46C951]",
            },
            {
              title: "Product Development",
              description:
                "Intellectually comprehend client's business ideas to develop innovative software solutions with scalable product architecture.",
              gradient: "from-[#46C951] to-[#46C951]",
            },
            {
              title: "Dedicated Team",
              description:
                "Grow your business development team according to project size and meet intermittent deadlines utilizing our flexible resource model.",
              gradient: "from-[#46C951] to-[#46C951]",
            },
            {
              title: "Testing & QA",
              description:
                "Maintain Quality Assurance by rectifying errors and debugging applications for a high-performing application.",
              gradient: "from-[#46C951] to-[#46C951]",
            },
          ].map((service, index) => (
            <div key={index} className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 rounded-xl blur-xl`}
              />
              <div className="relative bg-card-gradient backdrop-blur-88 border-t-8 border-[#46C951] rounded-xl p-8 h-full">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-[#FF8983] rounded">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#CED0D0] mb-2 font-roboto ml-3">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[#CED0D0] text-sm mb-6 font-roboto">
                  {service.description}
                </p>
                <button className="w-full bg-gradient-to-r from-[#36A3D7] to-[#76CD35] text-[#20272C] py-2 rounded font-roboto font-medium">
                  Surprise me
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-glass-white border border-glass-border rounded-full px-8 py-2 mb-8">
            <span className="text-2xl font-bold bg-service-gradient bg-clip-text text-transparent font-inter uppercase tracking-wider">
              Case Studies
            </span>
          </div>
          <p className="text-xl text-white max-w-4xl mx-auto font-inter font-bold">
            Explore how Visualize Digital, as a software development company,
            has shaped businesses by offering innovative and technology-driven
            software solutions. Take a look at our portfolio!
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Finance Card */}
            <div className="border-2 border-[#70CA45] rounded-2xl overflow-hidden bg-gradient-to-b from-[rgba(0,122,255,0.12)] to-[rgba(0,73,153,0.05)]">
              <div className="h-64 relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Finance dashboard with data visualizations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-bold text-white font-nunito">
                    Re-Assurance System
                  </h3>
                </div>
              </div>
              <div className="bg-glass-white border border-glass-border rounded-full px-8 py-2 m-4 text-center">
                <span className="text-white text-xl font-inter uppercase">
                  Finance
                </span>
              </div>
            </div>

            {/* Education Card */}
            <div className="border-2 border-[#70CA45] rounded-2xl overflow-hidden">
              <div className="h-64 relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5361085/pexels-photo-5361085.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Education online learning platform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white font-nunito">
                    Learning Platform
                  </h3>
                </div>
              </div>
              <div className="bg-glass-white border border-glass-border rounded-full px-8 py-2 m-4 text-center">
                <span className="text-white text-xl font-inter uppercase">
                  Education
                </span>
              </div>
            </div>

            {/* Smart City Card */}
            <div className="border-2 border-[#70CA45] rounded-2xl overflow-hidden">
              <div className="h-64 relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6457495/pexels-photo-6457495.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Smart city technology and urban development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white font-nunito">
                    Smart City
                  </h3>
                </div>
              </div>
              <div className="bg-glass-white border border-glass-border rounded-full px-8 py-2 m-4 text-center">
                <span className="text-white text-xl font-inter uppercase">
                  Energy & Utility
                </span>
              </div>
            </div>
          </div>

          {/* Media Platform */}
          <div className="border-2 border-[#70CA45] rounded-2xl bg-gradient-to-b from-[rgba(11,2,23,0)] to-[rgba(22,9,42,0.5)] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 p-8">
                <h3 className="text-4xl font-bold text-white font-inter mb-4">
                  Media Distribution & Aggregation Platform
                </h3>
              </div>
              <div className="w-full lg:w-80 h-64 relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/30885920/pexels-photo-30885920.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Media streaming and entertainment platform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40" />
              </div>
            </div>
            <div className="bg-glass-white border border-glass-border rounded-full px-8 py-2 m-6 text-center">
              <span className="text-white text-xl font-inter uppercase">
                Media & entertainment
              </span>
            </div>
          </div>

          {/* Hotel and Retail */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Hotel Booking Card */}
            <div className="lg:col-span-2 border-2 border-[#70CA45] rounded-2xl bg-gradient-to-b from-[rgba(11,2,23,0)] to-[rgba(22,9,42,0.5)] overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="flex-1 p-8">
                  <h3 className="text-4xl font-bold text-white font-inter mb-4">
                    Hotel Booking System
                  </h3>
                </div>
                <div className="w-full lg:w-64 h-48 relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7820359/pexels-photo-7820359.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Hotel booking and travel hospitality"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40" />
                </div>
              </div>
              <div className="bg-glass-white border border-glass-border rounded-full px-8 py-2 m-6 text-center">
                <span className="text-white text-xl font-inter uppercase">
                  Travel & Hospitality
                </span>
              </div>
            </div>

            {/* E-commerce Card */}
            <div className="border-2 border-[#70CA45] rounded-2xl overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="E-commerce online shopping and retail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white font-nunito">
                    E-commerce Platform
                  </h3>
                </div>
              </div>
              <div className="bg-glass-white border border-glass-border rounded-full px-8 py-2 m-4 text-center">
                <span className="text-white text-lg font-inter uppercase">
                  Retail & Ecommerce
                </span>
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div className="border-2 border-[#70CA45] rounded-2xl bg-gradient-to-b from-[rgba(11,2,23,0)] to-[rgba(22,9,42,0.5)] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 p-8">
                <h3 className="text-4xl font-bold text-white font-inter mb-4">
                  Organic Transplant Care
                </h3>
              </div>
              <div className="w-full lg:w-80 h-64 relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Healthcare medical technology platform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40" />
              </div>
            </div>
            <div className="bg-glass-white border border-glass-border rounded-full px-8 py-2 m-6 text-center">
              <span className="text-white text-lg font-inter uppercase">
                Healthcare
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4 font-inter">
            What Users Says
          </h2>
          <div className="flex items-center justify-center gap-2 mb-16">
            <span className="text-2xl text-white font-inter italic">4.9/5</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#EDE23F] text-[#EDE23F]"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-[rgba(217,217,217,0.2)] border-2 border-[#36D7AC] rounded-xl p-8 shadow-card-shadow">
              <p className="text-white text-lg mb-6 font-inter">
                Over 10 years of engagement with TatvaSoft for custom software
                development, our business has seen profitable results with their
                proven skills. They expertise in an array of advanced project
                management tools and technologies with their knowledgeable
                resources. We are grateful to have engaged with proficient
                software developers and teams that offer a top-notch and
                cost-effective solution.
              </p>
              <p className="text-white text-lg font-inter font-bold">
                Adri
                <br />
                Technical Specialist
              </p>
            </div>
            <div className="bg-[rgba(217,217,217,0.2)] border-2 border-[#36D7AC] rounded-xl p-8">
              <p className="text-white text-lg mb-6 font-inter">
                Attributing the project's success to the quality and speed of
                the deliverables TatvaSoft has provided, internal stakeholders
                are pleased with the engagement and the overall result of the
                SharePoint development. The development team is diligent, fully
                engaged with the project, and well-managed. We will be working
                with them again on future projects.
              </p>
              <p className="text-white text-lg font-inter font-bold">
                Anthony
                <br />
                Technical Specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-6xl font-bold text-brand-orange mb-8 font-inter">
              Global Presence
            </h2>
            <p className="text-white text-lg leading-relaxed font-inter font-bold">
              As a top software development company, TatvaSoft has marked its
              global presence with offices in five countries, including US, UK,
              Canada, Australia and India, with skilled software engineers
              specializing in different technologies.
              <br />
              <br />
              We are tapping into the power of the digital world, creating high
              impact solutions to boost business efficiency. TatvaSoft as a
              software development company is committed to provide end-to-end
              customized solutions to our global customers and tackle the
              technology problems faced by businesses.
            </p>
          </div>
          <div className="flex-1">
            <div className="w-full h-80 rounded-xl shadow-global-shadow overflow-hidden relative">
              <img
                src="https://images.pexels.com/photos/7635003/pexels-photo-7635003.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Global map visualization showing world connectivity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-2xl font-bold text-white">
                  Global Map Visualization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-4 font-inter">
                Ready to build your custom application solution?
              </h2>
              <p className="text-xl text-white font-inter font-bold">
                Send us your requirements on{" "}
                <span className="underline">info@tatvasoft.com</span> or call{" "}
                <span className="underline">+1 469 638 3402</span>
              </p>
            </div>
            <button className="bg-gradient-to-r from-[#70CA45] to-[#5454D4] px-16 py-3 rounded-29 text-white font-inter text-lg shadow-green-glow flex items-center gap-2 hover:scale-105 transition-transform">
              Request a Proposal
              <div className="w-4 h-4 text-white transform -rotate-90">
                <svg
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.64821 8.86249C6.29946 8.74624 6.29946 8.25376 6.64821 8.13751L8.69527 7.45586C9.14526 7.30582 9.55413 7.05303 9.88945 6.71753C10.2248 6.38202 10.4773 5.97302 10.6271 5.52294L11.3088 3.47694C11.425 3.12819 11.9175 3.12819 12.0338 3.47694L12.7154 5.524C12.8654 5.97399 13.1182 6.38286 13.4537 6.71818C13.7892 7.0535 14.1982 7.30607 14.6483 7.45586L16.6943 8.13751C16.7707 8.16257 16.8372 8.21111 16.8843 8.27621C16.9315 8.3413 16.9569 8.41962 16.9569 8.5C16.9569 8.58037 16.9315 8.6587 16.8843 8.72379C16.8372 8.78888 16.7707 8.83742 16.6943 8.86249L14.6473 9.54414C14.1974 9.69407 13.7886 9.9467 13.4533 10.282C13.118 10.6173 12.8653 11.0261 12.7154 11.476L12.0338 13.5231C12.0087 13.5994 11.9602 13.6659 11.8951 13.7131C11.83 13.7602 11.7516 13.7856 11.6713 13.7856C11.5909 13.7856 11.5126 13.7602 11.4475 13.7131C11.3824 13.6659 11.3338 13.5994 11.3088 13.5231L10.6271 11.476C10.4772 11.0261 10.2246 10.6173 9.88925 10.282C9.55394 9.9467 9.14515 9.69407 8.69527 9.54414L6.64821 8.86249Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 font-inter">
            Software Development FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                question:
                  "Why Choose Visual Design as a Software Development Service Provider?",
                answer:
                  "Visual Design is a reputed CMMI Level 3 software and mobile app development company. We specialize in custom software solutions using agile methodologies, the latest technologies, and client-focused models. Our expert team ensures quality delivery across diverse platforms and industries.",
              },
              {
                question: "What Software Development Services Do You Offer?",
                answer:
                  "We provide full-scale services like custom software development, web app development, mobile app development, software testing, and similar services. Our robust process ensures that everything within our services is done cleanly to provide top-notch results.",
              },
              {
                question: "Do You Sign an NDA?",
                answer:
                  "Yes, we do sign an NDA- Non disclosure agreement before initializing the project services to eliminate the possibility of any unethical data breaches and safeguard IPs and vital data of companies.",
              },
              {
                question:
                  "Which Technologies Do You Use to Develop Software and Web Application?",
                answer:
                  "We offer various web and software development services that include a range of technologies, frameworks, and programming languages. However, selecting the technology stack depends on the client's project requirements to achieve optimal business performance. Although, we suggest and assist businesses by analyzing their business requirements, budget, future demands and available technology stack.",
              },
              {
                question:
                  "What Different Hiring Models Do You Offer for Software Development?",
                answer:
                  "Visual Design offers two major hiring models: Dedicated Development Team/Staff Augmentation Model - Access a specialized dedicated team for long-term projects by screening them based on experience and skillset. Fixed-Price Model - The time frame and budget are fixed by the client and service provider to meet criteria for short-term goals.",
              },
              {
                question:
                  "Do You Provide Maintenance of Custom Software Solutions?",
                answer:
                  "We are a full-service software development company providing design, development, deployment & maintenance services. Sustaining a software application is equally important as developing as it keeps the application healthy and relevant. Our maintenance services include feature enhancements, optimization, bug fixing, and preventive maintenance.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[rgba(217,217,217,0.2)] rounded-[40px] overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[rgba(217,217,217,0.1)] transition-colors"
                >
                  <span className="text-white text-xl font-bold font-inter">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-8 h-8 text-white transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-white text-lg font-inter font-bold">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
