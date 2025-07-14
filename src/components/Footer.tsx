import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 px-4 border-t border-glass-border bg-black/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 font-inter">
              Services
            </h3>
            <ul className="space-y-1 text-sm text-[#B1ADBC] font-inter">
              <li className="hover:text-brand-teal transition-colors cursor-pointer">Custom Software Development</li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">Mobile App Development</li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">Digital Marketing</li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">Software Testing & QA</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 font-inter">
              Technologies
            </h3>
            <ul className="space-y-1 text-sm text-[#B1ADBC] font-inter">
              <li className="hover:text-brand-teal transition-colors cursor-pointer">React & Next.js</li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">Node.js & Express</li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">PHP & Laravel</li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">Java & Spring</li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">iOS & Android</li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">AWS & Azure</li>
            </ul>
          </div>

          {/* Global Offices */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white mb-3 font-inter">
              Global Offices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-[rgba(178,218,175,0.10)] rounded-lg p-3">
                <p className="text-white text-sm font-semibold font-inter">
                  <strong>🇺🇸  &nbsp; &nbsp; </strong><strong>United States</strong><br />
                </p>
              </div>
              <div className="bg-[rgba(178,218,175,0.10)] rounded-lg p-3">
                <p className="text-white text-sm font-semibold font-inter">
                  <strong>🇮🇳 &nbsp; &nbsp;  India</strong><br />
                </p>
              </div>
              <div className="bg-[rgba(178,218,175,0.10)] rounded-lg p-3">
                <p className="text-white text-sm font-semibold font-inter">
                  <strong>🇬🇧 &nbsp; &nbsp;  United Kingdom</strong><br />
                </p>
              </div>
              <div className="bg-[rgba(178,218,175,0.10)] rounded-lg p-3">
                <p className="text-white text-sm font-semibold font-inter">
                  <strong>🇫🇰 &nbsp; &nbsp;  Australia</strong><br />
                </p>
              </div>
              <div className="bg-[rgba(178,218,175,0.10)] rounded-lg p-3">
                <p className="text-white text-sm font-semibold font-inter">
                  <strong>🇦🇪 &nbsp; &nbsp;  UAE</strong><br />
                </p>
              </div>
              <div className="bg-[rgba(178,218,175,0.10)] rounded-lg p-3">
                <p className="text-white text-sm font-semibold font-inter">
                  <strong>🇮🇹 &nbsp; &nbsp; Italy</strong><br />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center mb-8">
          <h4 className="text-white text-base font-bold mb-2 font-inter">
            For Help
          </h4>
          <a
            href="mailto:help@visualizedigital.in"
            className="text-brand-teal text-sm hover:text-brand-green transition-colors font-inter"
          >
            help@visualizedigital.in
          </a>
        </div>

        {/* Unified Bottom Line */}
        <div className="pt-6 border-t border-glass-border">
          <div className="flex flex-wrap justify-center items-center text-center text-xs text-[#B1ADBC] font-inter gap-2">
            <Link to="/contact" className="text-white hover:text-brand-teal transition-colors">Contact</Link>
            <span>|</span>
            <a href="#" className="text-white hover:text-brand-teal transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="text-white hover:text-brand-teal transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="text-white hover:text-brand-teal transition-colors">Sitemap</a>
            <span>|</span>
            <span className="text-white">© 2013–2025 All Rights Reserved By Visualize Digital</span>
            <span>|</span>
            <span>500+ Projects • 12+ Years • 98% Satisfaction</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
