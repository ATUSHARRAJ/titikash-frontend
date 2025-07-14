import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
            Let's Start Building
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-inter">
            Your Digital Future
          </h2>
          <p className="text-xl text-[#D2D0DD] max-w-4xl mx-auto font-inter leading-relaxed">
            Ready to transform your digital presence? We're here to help you
            achieve extraordinary results. Get in touch with our team of experts
            and let's discuss how we can accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-glass-white backdrop-blur-sm rounded-xl p-6 border border-glass-border">
              <div className="text-4xl font-bold text-stat-green font-inter mb-2">
                500+
              </div>
              <div className="text-lg font-semibold text-white font-inter">
                Projects Completed
              </div>
            </div>
            <div className="text-center bg-glass-white backdrop-blur-sm rounded-xl p-6 border border-glass-border">
              <div className="text-4xl font-bold text-stat-green font-inter mb-2">
                98%
              </div>
              <div className="text-lg font-semibold text-white font-inter">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center bg-glass-white backdrop-blur-sm rounded-xl p-6 border border-glass-border">
              <div className="text-4xl font-bold text-stat-green font-inter mb-2">
                24/7
              </div>
              <div className="text-lg font-semibold text-white font-inter">
                Support Available
              </div>
            </div>
            <div className="text-center bg-glass-white backdrop-blur-sm rounded-xl p-6 border border-glass-border">
              <div className="text-4xl font-bold text-stat-green font-inter mb-2">
                10+
              </div>
              <div className="text-lg font-semibold text-white font-inter">
                Countries Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-white mb-6 font-inter">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#D2D0DD] text-sm font-medium mb-2 font-inter"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-[#D2D0DD]/60 focus:outline-none focus:border-brand-teal transition-colors font-inter"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#D2D0DD] text-sm font-medium mb-2 font-inter"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-[#D2D0DD]/60 focus:outline-none focus:border-brand-teal transition-colors font-inter"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#D2D0DD] text-sm font-medium mb-2 font-inter"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-[#D2D0DD]/60 focus:outline-none focus:border-brand-teal transition-colors font-inter"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#D2D0DD] text-sm font-medium mb-2 font-inter"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-[#D2D0DD]/60 focus:outline-none focus:border-brand-teal transition-colors font-inter resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6 font-inter">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 font-inter">
                        Email Address
                      </h4>
                      <a
                        href="mailto:info@visualizedigital.in"
                        className="text-brand-teal hover:text-brand-green transition-colors font-inter block"
                      >
                        info@visualizedigital.in
                      </a>
                      <a
                        href="mailto:support@visualizedigital.in"
                        className="text-brand-teal hover:text-brand-green transition-colors font-inter block"
                      >
                        support@visualizedigital.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 font-inter">
                        Phone Numbers
                      </h4>
                      <a
                        href="tel:+15551234567"
                        className="text-brand-teal hover:text-brand-green transition-colors font-inter block"
                      >
                        +91 72910 31315
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 font-inter">
                        Office Address
                      </h4>
                      <p className="text-[#D2D0DD] font-inter">
                        Unitech Cyber Park
                        <br />
                        3rd & 10th Floor, Tower B, Unitech Cyber Park,
                        <br />
                        Secot -39, Gurugram,
                        <br />
                        Haryana 122003, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 font-inter">
                        Business Hours
                      </h4>
                      <p className="text-[#D2D0DD] font-inter">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4 font-inter">
                  Need Immediate Assistance?
                </h3>
                <p className="text-[#D2D0DD] mb-6 font-inter">
                  For urgent inquiries or immediate support, don't hesitate to
                  call us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-button-gradient px-6 py-3 rounded-29 text-white font-inter font-medium shadow-glow hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-29 font-inter font-medium hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-inter text-center">
            Our Global Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-3 ">
                <span className="fi fi-us"></span>

                <h3 className="text-xl font-bold text-white mb-2 font-inter ml-3">
                  New York, USA
                </h3>
              </div>

              <p className="text-[#D2D0DD] font-inter">
                Visualize Digital
                <br />
                5th Floor, 123 Madison Avenue,
                <br />
                use-sales@visualizedigital.in
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-3 ">
                <span className="fi fi-au"></span>
                <h3 className="text-xl font-bold text-white mb-2 font-inter ml-3">
                  Sydney, Australia
                </h3>
              </div>

              <p className="text-[#D2D0DD] font-inter">
                Visualize Digital
                <br />
                Level 8, 350 George Street,
                <br />
                australia-sales@visualizedigital.in
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-3 ">
                <span className="fi fi-ae"></span>
                <h3 className="text-xl font-bold text-white mb-2 font-inter ml-3">
                  Dubai, UAE
                </h3>
              </div>

              <p className="text-[#D2D0DD] font-inter">
                Visualize Digital
                <br />
                Office No. 205, DAFZA Business Center,
                <br />
                Dubai Airport Freezone,
                <br />
                dubai-sales@visualizedigital.in
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-3 ">
                <span className="fi fi-it"></span>
                <h3 className="text-xl font-bold text-white mb-2 font-inter ml-3">
                  Milan, Italy
                </h3>
              </div>

              <p className="text-[#D2D0DD] font-inter">
                Visualize Digital
                <br />
                Via Monte Napoleone 12,
                <br />
                Italy-sales@visualizedigital.in
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-3 ">
                <span className="fi fi-gb"></span>
                <h3 className="text-xl font-bold text-white mb-2 font-inter ml-3">
                  London , United Kingdom
                </h3>
              </div>

              <p className="text-[#D2D0DD] font-inter">
                Visualize Digital
                <br />
                Suite 23, 2nd Floor, Berkeley Square House
                <br />
                uk-sales@visualizedigital.in
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-3 ">
                <span className="fi fi-in"></span>
                <h3 className="text-xl font-bold text-white mb-2 font-inter ml-3">
                  Gurgaon (Gurugram)
                </h3>
              </div>

              <p className="text-[#D2D0DD] font-inter">
                Unitech Cyber Park
                <br />
                3rd & 10th Floor, Tower B, Unitech Cyber Park,
                <br />
                Secot -39, Gurugram, Haryana 122003, India
                <br />
                +91 72910 31315
                <br />
                india-sales@visualizedigital.in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6 font-inter text-center">
              Find Us On The Map
            </h3>
            <div className="w-full h-80 bg-glass-white rounded-xl flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2f7586ff9e01429985c3cdd0be5b530e%2Fca17334a865943dcad22e120ecb1737b?format=webp&width=800"
                alt="Office Location Map"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-inter">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3 font-inter">
                How quickly can you respond?
              </h4>
              <p className="text-[#D2D0DD] font-inter">
                We typically respond to all inquiries within 2-4 business hours
                during our operating hours.
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3 font-inter">
                Do you offer free consultations?
              </h4>
              <p className="text-[#D2D0DD] font-inter">
                Yes! We offer a complimentary 30-minute consultation to discuss
                your project needs and goals.
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3 font-inter">
                What's your project timeline?
              </h4>
              <p className="text-[#D2D0DD] font-inter">
                Project timelines vary based on scope and complexity. We'll
                provide a detailed timeline during our initial consultation.
              </p>
            </div>
            <div className="bg-card-gradient backdrop-blur-88 border border-glass-border rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3 font-inter">
                Do you work internationally?
              </h4>
              <p className="text-[#D2D0DD] font-inter">
                Absolutely! We work with clients worldwide and have experience
                across different time zones and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
