import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Calendar,
  User,
  ArrowRight,
  Tag,
  Clock,
  TrendingUp,
  Search,
} from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Digital Marketing",
    "Web Development",
    "Mobile Apps",
    "AI & Machine Learning",
    "Business Growth",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Digital Marketing: Trends for 2024",
      excerpt:
        "Explore how artificial intelligence is revolutionizing digital marketing strategies and what businesses need to know to stay ahead of the curve.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "AI & Machine Learning",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices Guide",
      excerpt:
        "Learn essential techniques for creating maintainable and scalable React applications that can grow with your business needs.",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web Development",
      author: "Mike Chen",
      date: "December 12, 2024",
      readTime: "12 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Mobile-First Design: Creating Better User Experiences",
      excerpt:
        "Discover why mobile-first design is crucial for modern applications and how to implement it effectively in your projects.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Mobile Apps",
      author: "Emma Davis",
      date: "December 10, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "SEO Strategies That Actually Work in 2024",
      excerpt:
        "Cut through the noise and learn the SEO techniques that are delivering real results for businesses in today's competitive landscape.",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Digital Marketing",
      author: "Alex Rodriguez",
      date: "December 8, 2024",
      readTime: "10 min read",
      featured: true,
    },
    {
      id: 5,
      title: "The Rise of Progressive Web Apps: Why Your Business Needs One",
      excerpt:
        "Understanding the benefits of PWAs and how they're changing the way users interact with web applications across all devices.",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Technology",
      author: "David Kim",
      date: "December 5, 2024",
      readTime: "9 min read",
      featured: false,
    },
    {
      id: 6,
      title: "E-commerce Growth Hacks: 10 Proven Strategies",
      excerpt:
        "Actionable growth strategies that successful e-commerce businesses use to increase conversions and customer lifetime value.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Business Growth",
      author: "Lisa Thompson",
      date: "December 3, 2024",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 7,
      title: "Cross-Platform Development: React Native vs Flutter",
      excerpt:
        "A comprehensive comparison of the two leading cross-platform frameworks to help you choose the right one for your project.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Mobile Apps",
      author: "James Wilson",
      date: "November 30, 2024",
      readTime: "15 min read",
      featured: false,
    },
    {
      id: 8,
      title: "Cloud Computing Trends Shaping Business Technology",
      excerpt:
        "Explore the latest cloud computing trends and how they're transforming the way businesses operate and scale their operations.",
      image:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Technology",
      author: "Rachel Green",
      date: "November 28, 2024",
      readTime: "11 min read",
      featured: false,
    },
  ];

  const recentPosts = blogPosts.slice(0, 5);
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

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
            Our Blog
          </h1>
          <p className="text-xl text-[#D2D0DD] max-w-4xl mx-auto font-inter leading-relaxed mb-8">
            Stay updated with the latest insights, trends, and best practices in
            technology, digital marketing, and business growth.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D2D0DD]" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-glass-white backdrop-blur-sm border border-glass-border rounded-full py-3 pl-12 pr-4 text-white placeholder-[#D2D0DD] focus:outline-none focus:border-brand-teal transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full border border-glass-border backdrop-blur-sm transition-all duration-300 font-nunito ${
                      selectedCategory === category
                        ? "bg-brand-teal text-white"
                        : "bg-glass-white text-[#D2D0DD] hover:bg-brand-teal hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Featured Post */}
              {filteredPosts.find((post) => post.featured) && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6 font-inter">
                    Featured Article
                  </h2>
                  {(() => {
                    const featuredPost = filteredPosts.find(
                      (post) => post.featured,
                    );
                    return (
                      <article className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[24px] overflow-hidden hover:scale-[1.02] transition-all duration-500 group">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                          <div className="relative h-64 md:h-auto overflow-hidden">
                            <img
                              src={featuredPost?.image}
                              alt={featuredPost?.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="bg-brand-teal px-4 py-2 rounded-full text-sm font-semibold">
                                Featured
                              </span>
                            </div>
                          </div>
                          <div className="p-8">
                            <div className="flex items-center gap-4 text-sm text-[#D2D0DD] mb-4">
                              <div className="flex items-center gap-1">
                                <Tag className="w-4 h-4" />
                                {featuredPost?.category}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {featuredPost?.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {featuredPost?.readTime}
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-inter group-hover:text-brand-teal transition-colors">
                              {featuredPost?.title}
                            </h3>
                            <p className="text-[#D2D0DD] text-base leading-relaxed mb-6">
                              {featuredPost?.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-[#D2D0DD]">
                                <User className="w-4 h-4" />
                                {featuredPost?.author}
                              </div>
                              <Link
                                to={`/blog/${featuredPost?.id}`}
                                className="flex items-center gap-2 text-brand-teal hover:text-white transition-colors group-hover:gap-3 font-semibold"
                              >
                                Read More
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })()}
                </div>
              )}

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts
                  .filter((post) => !post.featured)
                  .map((post, index) => (
                    <article
                      key={post.id}
                      className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[24px] overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500 group"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: "fadeInUp 0.6s ease-out forwards",
                      }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-[#D2D0DD] mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 font-inter group-hover:text-brand-teal transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[#D2D0DD] text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-[#D2D0DD]">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="flex items-center gap-1 text-brand-teal hover:text-white transition-colors text-sm font-semibold opacity-0 group-hover:opacity-100"
                          >
                            Read More
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Recent Posts */}
                <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
                  <h3 className="text-xl font-bold text-white mb-6 font-inter flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-brand-teal" />
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="block group cursor-pointer hover:bg-white/5 rounded-lg p-3 transition-colors"
                      >
                        <h4 className="text-sm font-semibold text-white group-hover:text-brand-teal transition-colors line-clamp-2 mb-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-[#D2D0DD]">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
                  <h3 className="text-xl font-bold text-white mb-6 font-inter flex items-center gap-2">
                    <Tag className="w-5 h-5 text-brand-teal" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="block w-full text-left text-sm text-[#D2D0DD] hover:text-brand-teal transition-colors py-2 px-3 hover:bg-white/5 rounded-lg"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
                  <h3 className="text-xl font-bold text-white mb-4 font-inter">
                    Stay Updated
                  </h3>
                  <p className="text-[#D2D0DD] text-sm mb-4">
                    Get the latest articles and insights delivered to your
                    inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-white placeholder-[#D2D0DD] text-sm focus:outline-none focus:border-brand-teal transition-colors"
                    />
                    <button className="w-full bg-button-gradient py-2 px-4 rounded-lg text-white font-semibold text-sm hover:scale-105 transition-transform">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// CSS Animations
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

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

export default Blog;
