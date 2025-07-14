import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Technologies", path: "/technologies" },
    { name: "Industries", path: "/industries" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-4 z-50 bg-white/98 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-12xl mx-auto px-3 md:px-6">
        <div className="flex items-center justify-between py-3 md:py-4 px-6 md:px-10 mx-2 md:mx-6 rounded-[39px] bg-white shadow-xl border border-gray-100">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="transition-transform hover:scale-105 duration-300"
            >
              <img
                src="https://cdn.builder.io/api/v1/assets/2f7586ff9e01429985c3cdd0be5b530e/visual-logo-b39922?format=webp&width=800"
                alt="Visualize Digital - Do more with less"
                className="h-12 md:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-base font-nunito transition-all duration-300 hover:text-brand-teal group ${
                  location.pathname === item.path
                    ? "text-brand-teal font-bold"
                    : "text-gray-700 hover:text-brand-teal font-semibold"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-white/20 shadow-lg">
            <nav className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-nunito transition-all duration-200 ${
                    location.pathname === item.path
                      ? "text-brand-teal font-bold bg-brand-teal/10"
                      : "text-gray-700 hover:text-brand-teal hover:bg-gray-50 font-semibold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
