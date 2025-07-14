import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Share2,
  BookmarkPlus,
  TrendingUp,
} from "lucide-react";

// Complete blog data with full content
const blogData = {
  "1": {
    id: 1,
    slug: "ai-digital-marketing-trends-2024",
    title: "The Future of AI in Digital Marketing: Trends for 2024",
    excerpt:
      "Explore how artificial intelligence is revolutionizing digital marketing strategies and what businesses need to know to stay ahead of the curve.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "AI & Machine Learning",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    tags: [
      "AI",
      "Digital Marketing",
      "Automation",
      "Machine Learning",
      "2024 Trends",
    ],
    content: {
      introduction:
        "Artificial Intelligence is no longer a futuristic concept—it's reshaping digital marketing as we know it. From personalized customer experiences to predictive analytics, AI is helping businesses connect with their audiences in more meaningful and effective ways.",
      sections: [
        {
          heading: "1. Personalization at Scale",
          content:
            "AI enables marketers to deliver highly personalized experiences to thousands of customers simultaneously. Machine learning algorithms analyze user behavior, preferences, and purchase history to create tailored content, product recommendations, and messaging that resonates with individual users.",
          points: [
            "Dynamic content optimization based on user behavior",
            "Personalized email campaigns with higher open rates",
            "Custom product recommendations driving 35% more conversions",
            "Real-time website personalization for better user experience",
          ],
        },
        {
          heading: "2. Predictive Analytics and Customer Insights",
          content:
            "Advanced AI tools can predict customer behavior, identify potential churn, and forecast trends before they happen. This allows marketers to be proactive rather than reactive in their strategies.",
          points: [
            "Predict which customers are likely to make a purchase",
            "Identify at-risk customers before they churn",
            "Forecast seasonal trends and demand patterns",
            "Optimize pricing strategies based on market conditions",
          ],
        },
        {
          heading: "3. Automated Content Creation",
          content:
            "AI-powered tools are revolutionizing content creation, from writing product descriptions to generating social media posts. While human creativity remains essential, AI assists in scaling content production efficiently.",
          points: [
            "Automated social media scheduling and posting",
            "AI-generated product descriptions and meta tags",
            "Content optimization for SEO and engagement",
            "Dynamic ad copy testing and optimization",
          ],
        },
        {
          heading: "4. Chatbots and Conversational Marketing",
          content:
            "Intelligent chatbots powered by natural language processing are transforming customer service and lead generation. They provide 24/7 support while qualifying leads and guiding customers through the purchase journey.",
          points: [
            "24/7 customer support with human-like responses",
            "Lead qualification and nurturing automation",
            "Multilingual support for global businesses",
            "Integration with CRM systems for seamless handoffs",
          ],
        },
      ],
      conclusion:
        "As we move through 2024, businesses that embrace AI in their marketing strategies will gain a significant competitive advantage. The key is to start small, test different AI tools, and gradually integrate them into your existing workflows. Remember, AI should enhance human creativity, not replace it.",
      callToAction:
        "Ready to integrate AI into your digital marketing strategy? Our team of experts can help you identify the best AI tools and strategies for your business. Contact us today to learn more about our AI-powered marketing solutions.",
    },
  },
  "2": {
    id: 2,
    slug: "scalable-react-applications-guide",
    title: "Building Scalable React Applications: Best Practices Guide",
    excerpt:
      "Learn essential techniques for creating maintainable and scalable React applications that can grow with your business needs.",
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Web Development",
    author: "Mike Chen",
    date: "December 12, 2024",
    readTime: "12 min read",
    tags: [
      "React",
      "JavaScript",
      "Web Development",
      "Frontend",
      "Best Practices",
    ],
    content: {
      introduction:
        "Building React applications that can scale effectively requires careful planning, smart architecture decisions, and adherence to best practices. This comprehensive guide will walk you through the essential techniques for creating maintainable and scalable React applications.",
      sections: [
        {
          heading: "1. Component Architecture and Organization",
          content:
            "A well-organized component structure is the foundation of any scalable React application. Proper folder structure and component hierarchy make your codebase maintainable and easy to navigate.",
          points: [
            "Feature-based folder structure over file-type structure",
            "Atomic design principles for component organization",
            "Clear separation between presentational and container components",
            "Consistent naming conventions across the application",
          ],
        },
        {
          heading: "2. State Management Strategies",
          content:
            "Effective state management becomes crucial as your application grows. Choose the right tools and patterns for managing both local and global state.",
          points: [
            "Use local state for component-specific data",
            "Redux Toolkit for complex global state management",
            "Context API for theme and user authentication state",
            "React Query for server state management and caching",
          ],
        },
        {
          heading: "3. Performance Optimization Techniques",
          content:
            "Performance optimization should be built into your development process from the beginning. These techniques will keep your application fast as it grows.",
          points: [
            "Code splitting with React.lazy and Suspense",
            "Memoization with React.memo and useMemo",
            "Virtual scrolling for large lists",
            "Image optimization and lazy loading",
          ],
        },
        {
          heading: "4. Testing and Quality Assurance",
          content:
            "A robust testing strategy ensures your application remains stable as new features are added and existing ones are modified.",
          points: [
            "Unit testing with Jest and React Testing Library",
            "Integration testing for component interactions",
            "End-to-end testing with Cypress or Playwright",
            "Code quality tools like ESLint and Prettier",
          ],
        },
      ],
      conclusion:
        "Building scalable React applications requires a combination of good architecture, performance optimization, and robust testing. By following these best practices, you'll create applications that can grow with your business needs while remaining maintainable and performant.",
      callToAction:
        "Need help building a scalable React application for your business? Our experienced development team specializes in creating high-performance, maintainable React applications. Get in touch to discuss your project requirements.",
    },
  },
  "3": {
    id: 3,
    slug: "mobile-first-design-user-experience",
    title: "Mobile-First Design: Creating Better User Experiences",
    excerpt:
      "Discover why mobile-first design is crucial for modern applications and how to implement it effectively in your projects.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Mobile Apps",
    author: "Emma Davis",
    date: "December 10, 2024",
    readTime: "6 min read",
    tags: ["Mobile Design", "UX", "UI", "Responsive Design", "User Experience"],
    content: {
      introduction:
        "With mobile devices accounting for over 54% of global web traffic, mobile-first design isn't just a trend—it's a necessity. This approach ensures your applications provide exceptional user experiences across all devices, starting with the most constrained environment.",
      sections: [
        {
          heading: "1. Understanding Mobile-First Methodology",
          content:
            "Mobile-first design means designing for mobile devices first, then progressively enhancing the experience for larger screens. This approach ensures core functionality works perfectly on all devices.",
          points: [
            "Start with the smallest screen size and work up",
            "Focus on essential features and content first",
            "Progressive enhancement for larger screens",
            "Touch-first interaction design principles",
          ],
        },
        {
          heading: "2. Navigation and Information Architecture",
          content:
            "Mobile navigation requires careful consideration of limited screen space and touch interactions. Effective mobile navigation is intuitive and requires minimal effort from users.",
          points: [
            "Hamburger menus for secondary navigation",
            "Tab bars for primary navigation sections",
            "Thumb-friendly touch targets (minimum 44px)",
            "Clear visual hierarchy and content prioritization",
          ],
        },
        {
          heading: "3. Performance and Loading Optimization",
          content:
            "Mobile users often deal with slower connections and limited data plans. Optimizing for performance is crucial for mobile-first design success.",
          points: [
            "Optimize images for different screen densities",
            "Minimize HTTP requests and file sizes",
            "Implement lazy loading for content below the fold",
            "Use efficient caching strategies for returning users",
          ],
        },
        {
          heading: "4. Touch Interactions and Gestures",
          content:
            "Mobile devices rely on touch interactions rather than mouse clicks. Design interfaces that feel natural and responsive to touch gestures.",
          points: [
            "Swipe gestures for navigation and actions",
            "Pull-to-refresh functionality where appropriate",
            "Haptic feedback for better user engagement",
            "Avoid hover states that don't translate to touch",
          ],
        },
      ],
      conclusion:
        "Mobile-first design ensures your applications work beautifully across all devices while prioritizing the growing mobile user base. By starting with mobile constraints, you create more focused, efficient, and user-friendly interfaces.",
      callToAction:
        "Ready to redesign your application with mobile-first principles? Our UX/UI design team can help you create mobile-optimized experiences that delight users across all devices. Contact us to get started.",
    },
  },
  "4": {
    id: 4,
    slug: "seo-strategies-2024",
    title: "SEO Strategies That Actually Work in 2024",
    excerpt:
      "Cut through the noise and learn the SEO techniques that are delivering real results for businesses in today's competitive landscape.",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Digital Marketing",
    author: "Alex Rodriguez",
    date: "December 8, 2024",
    readTime: "10 min read",
    tags: [
      "SEO",
      "Digital Marketing",
      "Search Engine",
      "Content Strategy",
      "Rankings",
    ],
    content: {
      introduction:
        "Search Engine Optimization continues to evolve rapidly, with new algorithm updates and changing user behaviors. This guide focuses on proven SEO strategies that are delivering measurable results for businesses in 2024.",
      sections: [
        {
          heading: "1. Content Quality and User Intent",
          content:
            "Modern SEO is all about understanding and satisfying user intent. Search engines prioritize content that truly answers users' questions and provides value.",
          points: [
            "Research and understand search intent behind keywords",
            "Create comprehensive, in-depth content that covers topics thoroughly",
            "Use natural language and avoid keyword stuffing",
            "Update and refresh existing content regularly",
          ],
        },
        {
          heading: "2. Technical SEO Fundamentals",
          content:
            "Technical SEO forms the foundation of your search engine visibility. Even the best content won't rank well if your technical setup is flawed.",
          points: [
            "Optimize Core Web Vitals for better user experience",
            "Implement structured data markup for rich snippets",
            "Ensure mobile-first indexing compatibility",
            "Fix crawl errors and improve site architecture",
          ],
        },
        {
          heading: "3. Local SEO for Business Growth",
          content:
            "For businesses with physical locations or local service areas, local SEO can drive highly qualified traffic and customers.",
          points: [
            "Optimize Google Business Profile with accurate information",
            "Encourage and manage customer reviews actively",
            "Create location-specific content and landing pages",
            "Build local citations and NAP consistency",
          ],
        },
        {
          heading: "4. Link Building and Authority",
          content:
            "Quality backlinks remain a crucial ranking factor. Focus on earning links through valuable content and genuine relationships.",
          points: [
            "Create linkable assets like research studies and tools",
            "Guest posting on relevant, high-authority websites",
            "Build relationships with industry influencers and journalists",
            "Internal linking strategy to distribute page authority",
          ],
        },
      ],
      conclusion:
        "Successful SEO in 2024 requires a balanced approach combining technical excellence, high-quality content, and strategic promotion. Focus on user experience and genuine value creation, and the rankings will follow.",
      callToAction:
        "Want to improve your website's search engine rankings? Our SEO experts can audit your current performance and develop a custom strategy to increase your organic traffic. Schedule a consultation today.",
    },
  },
  "5": {
    id: 5,
    slug: "progressive-web-apps-business-benefits",
    title: "The Rise of Progressive Web Apps: Why Your Business Needs One",
    excerpt:
      "Understanding the benefits of PWAs and how they're changing the way users interact with web applications across all devices.",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Technology",
    author: "David Kim",
    date: "December 5, 2024",
    readTime: "9 min read",
    tags: [
      "PWA",
      "Web Development",
      "Mobile Apps",
      "Technology",
      "User Experience",
    ],
    content: {
      introduction:
        "Progressive Web Apps (PWAs) represent the next evolution of web applications, combining the best features of web and mobile apps. They offer app-like experiences while maintaining the reach and accessibility of the web.",
      sections: [
        {
          heading: "1. What Makes PWAs Special",
          content:
            "PWAs use modern web technologies to deliver app-like experiences directly through web browsers, eliminating the need for app store downloads while providing native app functionality.",
          points: [
            "Offline functionality with service workers",
            "Push notifications for user engagement",
            "Installable on home screens without app stores",
            "Fast loading with intelligent caching strategies",
          ],
        },
        {
          heading: "2. Business Benefits of PWAs",
          content:
            "Companies implementing PWAs report significant improvements in user engagement, conversion rates, and overall business metrics.",
          points: [
            "Reduced development costs compared to native apps",
            "Higher conversion rates due to faster loading",
            "Increased user engagement with push notifications",
            "Broader reach without app store dependencies",
          ],
        },
        {
          heading: "3. Technical Implementation",
          content:
            "Building a PWA requires specific technical components that enable app-like functionality while maintaining web accessibility.",
          points: [
            "Service worker implementation for offline support",
            "Web app manifest for installation capabilities",
            "HTTPS requirement for security",
            "Responsive design for all screen sizes",
          ],
        },
        {
          heading: "4. Real-World Success Stories",
          content:
            "Major companies have seen remarkable results after implementing PWAs, demonstrating their effectiveness across various industries.",
          points: [
            "Twitter Lite: 65% increase in pages per session",
            "Pinterest: 60% increase in core engagements",
            "Starbucks: 2x daily active users",
            "Forbes: 43% increase in sessions per user",
          ],
        },
      ],
      conclusion:
        "Progressive Web Apps offer a compelling solution for businesses looking to provide excellent user experiences while controlling development costs. They represent the future of web applications and mobile engagement.",
      callToAction:
        "Interested in developing a PWA for your business? Our development team has extensive experience creating high-performance progressive web apps that drive results. Contact us to explore the possibilities.",
    },
  },
  "6": {
    id: 6,
    slug: "ecommerce-growth-strategies",
    title: "E-commerce Growth Hacks: 10 Proven Strategies",
    excerpt:
      "Actionable growth strategies that successful e-commerce businesses use to increase conversions and customer lifetime value.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Business Growth",
    author: "Lisa Thompson",
    date: "December 3, 2024",
    readTime: "7 min read",
    tags: ["E-commerce", "Growth Hacking", "Conversion", "Business", "Sales"],
    content: {
      introduction:
        "E-commerce success requires more than just having great products. These proven growth strategies have helped thousands of online businesses increase their revenue and build loyal customer bases.",
      sections: [
        {
          heading: "1. Conversion Rate Optimization",
          content:
            "Small improvements to your conversion rate can have massive impacts on revenue. Focus on optimizing key elements of your customer journey.",
          points: [
            "A/B test product pages and checkout flows",
            "Optimize product images and descriptions",
            "Reduce cart abandonment with exit-intent popups",
            "Simplify the checkout process",
          ],
        },
        {
          heading: "2. Email Marketing Automation",
          content:
            "Automated email sequences can nurture leads and recover lost sales while requiring minimal ongoing effort.",
          points: [
            "Welcome series for new subscribers",
            "Abandoned cart recovery campaigns",
            "Post-purchase follow-up sequences",
            "Win-back campaigns for inactive customers",
          ],
        },
        {
          heading: "3. Social Proof and Reviews",
          content:
            "Customer reviews and social proof significantly influence purchasing decisions and can dramatically increase conversion rates.",
          points: [
            "Display customer reviews prominently",
            "Showcase user-generated content",
            "Add trust badges and security certifications",
            "Feature customer testimonials and case studies",
          ],
        },
        {
          heading: "4. Personalization and Recommendations",
          content:
            "Personalized shopping experiences increase customer satisfaction and average order values through relevant product suggestions.",
          points: [
            "Implement AI-powered product recommendations",
            "Personalize homepage content based on browsing history",
            "Create targeted email campaigns based on purchase behavior",
            "Use dynamic pricing strategies where appropriate",
          ],
        },
      ],
      conclusion:
        "Successful e-commerce growth comes from consistently testing and optimizing every aspect of the customer experience. Start with these proven strategies and adapt them to your specific business needs.",
      callToAction:
        "Ready to accelerate your e-commerce growth? Our digital marketing team specializes in helping online businesses increase conversions and revenue. Get in touch for a free growth consultation.",
    },
  },
  "7": {
    id: 7,
    slug: "react-native-vs-flutter-comparison",
    title: "Cross-Platform Development: React Native vs Flutter",
    excerpt:
      "A comprehensive comparison of the two leading cross-platform frameworks to help you choose the right one for your project.",
    image:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Mobile Apps",
    author: "James Wilson",
    date: "November 30, 2024",
    readTime: "15 min read",
    tags: [
      "React Native",
      "Flutter",
      "Mobile Development",
      "Cross-Platform",
      "Comparison",
    ],
    content: {
      introduction:
        "Choosing between React Native and Flutter for cross-platform mobile development is one of the most important decisions for modern app projects. This comprehensive comparison will help you make an informed choice based on your specific needs.",
      sections: [
        {
          heading: "1. Development Experience and Learning Curve",
          content:
            "Both frameworks offer excellent development experiences but appeal to different developer backgrounds and preferences.",
          points: [
            "React Native: Familiar to React developers, JavaScript-based",
            "Flutter: Dart programming language, steeper learning curve initially",
            "React Native: Larger community and more third-party packages",
            "Flutter: More consistent development experience across platforms",
          ],
        },
        {
          heading: "2. Performance and User Experience",
          content:
            "Performance characteristics vary between the frameworks, affecting user experience and app responsiveness.",
          points: [
            "Flutter: Near-native performance with custom rendering engine",
            "React Native: Good performance but relies on native bridge",
            "Flutter: Consistent 60fps animations and smooth scrolling",
            "React Native: Platform-specific look and feel automatically",
          ],
        },
        {
          heading: "3. Ecosystem and Community Support",
          content:
            "The strength of the ecosystem and community support can significantly impact development speed and problem-solving.",
          points: [
            "React Native: Mature ecosystem with extensive third-party libraries",
            "Flutter: Growing rapidly with strong Google backing",
            "React Native: Larger developer community and job market",
            "Flutter: More consistent package quality and documentation",
          ],
        },
        {
          heading: "4. Platform Integration and Native Features",
          content:
            "Access to native platform features and ease of integration varies between the two frameworks.",
          points: [
            "React Native: Excellent native module ecosystem",
            "Flutter: Strong platform channels for native communication",
            "React Native: Easier integration with existing native codebases",
            "Flutter: More predictable behavior across platforms",
          ],
        },
      ],
      conclusion:
        "Both React Native and Flutter are excellent choices for cross-platform development. Choose React Native if you have React experience and need extensive third-party integrations. Choose Flutter for consistent performance and if you're starting fresh with cross-platform development.",
      callToAction:
        "Need help deciding between React Native and Flutter for your mobile app project? Our mobile development experts can assess your requirements and recommend the best approach. Schedule a consultation today.",
    },
  },
  "8": {
    id: 8,
    slug: "cloud-computing-business-trends",
    title: "Cloud Computing Trends Shaping Business Technology",
    excerpt:
      "Explore the latest cloud computing trends and how they're transforming the way businesses operate and scale their operations.",
    image:
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Technology",
    author: "Rachel Green",
    date: "November 28, 2024",
    readTime: "11 min read",
    tags: [
      "Cloud Computing",
      "Business Technology",
      "Digital Transformation",
      "Scalability",
    ],
    content: {
      introduction:
        "Cloud computing continues to revolutionize how businesses operate, scale, and innovate. Understanding current trends in cloud technology is essential for making strategic decisions about your organization's digital infrastructure.",
      sections: [
        {
          heading: "1. Multi-Cloud and Hybrid Strategies",
          content:
            "Organizations are adopting multi-cloud approaches to avoid vendor lock-in, optimize costs, and leverage best-of-breed services from different providers.",
          points: [
            "Reduced dependency on single cloud providers",
            "Optimized costs through strategic service selection",
            "Enhanced disaster recovery and business continuity",
            "Compliance with data sovereignty requirements",
          ],
        },
        {
          heading: "2. Serverless Computing Adoption",
          content:
            "Serverless architectures are becoming mainstream, allowing developers to focus on code while cloud providers handle infrastructure management.",
          points: [
            "Automatic scaling based on demand",
            "Pay-per-execution pricing models",
            "Reduced operational overhead",
            "Faster time-to-market for applications",
          ],
        },
        {
          heading: "3. Edge Computing Integration",
          content:
            "Edge computing brings processing closer to data sources, reducing latency and enabling real-time applications across various industries.",
          points: [
            "Reduced latency for critical applications",
            "Enhanced data privacy and security",
            "Support for IoT and real-time analytics",
            "Improved performance for global applications",
          ],
        },
        {
          heading: "4. AI and Machine Learning as a Service",
          content:
            "Cloud platforms are democratizing AI/ML capabilities, making advanced analytics accessible to businesses of all sizes.",
          points: [
            "Pre-trained models for common use cases",
            "AutoML platforms for non-experts",
            "Scalable computing for model training",
            "Real-time inference capabilities",
          ],
        },
      ],
      conclusion:
        "Cloud computing trends are driving digital transformation across industries. Businesses that stay current with these trends and adapt their strategies accordingly will be better positioned for future growth and innovation.",
      callToAction:
        "Ready to modernize your cloud infrastructure? Our cloud architects can help you develop a comprehensive cloud strategy that aligns with your business goals. Contact us for a cloud readiness assessment.",
    },
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData[id as keyof typeof blogData];

  if (!blog) {
    return (
      <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
        <div className="absolute top-64 right-0 w-[600px] h-[653px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.20)] to-[rgba(84,84,212,0.08)] blur-[150px]" />
        <div className="absolute top-10 left-96 w-[467px] h-[1399px] rounded-full bg-gradient-to-b from-[rgba(251,168,28,0.11)] to-[rgba(224,86,136,0.06)] blur-[150px] rotate-[65.712deg]" />
        <div className="absolute -top-16 -left-80 w-[467px] h-[1234px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.27)] to-[rgba(84,84,212,0.11)] blur-[150px] rotate-[-54.374deg]" />

        <Navigation />

        <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-[#D2D0DD] mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-button-gradient px-6 py-3 rounded-29 text-white font-inter font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
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
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors duration-300 font-nunito"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category and Meta Info */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-brand-teal/20 border border-brand-teal/30 rounded-full text-brand-teal text-sm font-semibold">
              {blog.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-[#D2D0DD]">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {blog.author}
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 bg-hero-text-gradient bg-clip-text text-transparent leading-tight">
            {blog.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-glass-white backdrop-blur-sm border border-glass-border rounded-full text-xs text-white"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button className="inline-flex items-center gap-2 bg-glass-white backdrop-blur-sm border border-glass-border px-4 py-2 rounded-lg text-sm text-white hover:bg-white/20 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="inline-flex items-center gap-2 bg-glass-white backdrop-blur-sm border border-glass-border px-4 py-2 rounded-lg text-sm text-white hover:bg-white/20 transition-colors">
              <BookmarkPlus className="w-4 h-4" />
              Save
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative mb-12">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-[24px] shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-[24px]" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg prose-invert max-w-none">
                {/* Introduction */}
                <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-8 mb-8">
                  <p className="text-xl text-[#D2D0DD] leading-relaxed font-inter">
                    {blog.content.introduction}
                  </p>
                </div>

                {/* Sections */}
                {blog.content.sections.map((section, index) => (
                  <div key={index}>
                    <div
                      className="mb-12 animate-fadeInUp"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      <h2 className="text-3xl font-bold text-white mb-6 font-inter">
                        {section.heading}
                      </h2>
                      <p className="text-lg text-[#D2D0DD] mb-6 leading-relaxed">
                        {section.content}
                      </p>
                      <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
                        <ul className="space-y-3">
                          {section.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="flex items-start gap-3 text-white"
                            >
                              <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0" />
                              <span className="font-inter">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Dual Image Boxes after every second section */}
                    {(index + 1) % 2 === 0 && (
                      <div className="mb-12 animate-fadeInUp">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] overflow-hidden hover:scale-105 transition-all duration-300">
                            <img
                              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                              alt="Illustration"
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <p className="text-[#D2D0DD] text-sm font-inter">
                                Visual representation of key concepts
                              </p>
                            </div>
                          </div>
                          <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] overflow-hidden hover:scale-105 transition-all duration-300">
                            <img
                              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
                              alt="Illustration"
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <p className="text-[#D2D0DD] text-sm font-inter">
                                Supporting visual content
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-brand-teal/20 to-brand-green/20 backdrop-blur-sm border border-brand-teal/30 rounded-[20px] p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 font-inter">
                    Conclusion
                  </h2>
                  <p className="text-lg text-[#D2D0DD] leading-relaxed">
                    {blog.content.conclusion}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-8 text-center">
                  <p className="text-lg text-[#D2D0DD] mb-6 leading-relaxed">
                    {blog.content.callToAction}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-button-gradient px-8 py-4 rounded-29 text-white font-inter font-semibold shadow-glow hover:scale-105 transition-transform"
                  >
                    Get Started Today
                  </Link>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Author Info */}
                <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
                  <h3 className="text-lg font-bold text-white mb-4 font-inter">
                    About the Author
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-green rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {blog.author}
                      </h4>
                      <p className="text-[#D2D0DD] text-sm">Content Writer</p>
                    </div>
                  </div>
                  <p className="text-[#D2D0DD] text-sm">
                    Passionate about technology and digital innovation, sharing
                    insights to help businesses thrive in the digital age.
                  </p>
                </div>

                {/* Related Articles */}
                <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
                  <h3 className="text-lg font-bold text-white mb-4 font-inter flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-brand-teal" />
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {Object.values(blogData)
                      .filter((post) => post.id !== blog.id)
                      .slice(0, 3)
                      .map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.id}`}
                          className="block group hover:bg-white/5 rounded-lg p-3 transition-colors"
                        >
                          <h4 className="text-sm font-semibold text-white group-hover:text-brand-teal transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-[#D2D0DD]">
                            {relatedPost.date}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
                  <h3 className="text-lg font-bold text-white mb-4 font-inter">
                    Stay Updated
                  </h3>
                  <p className="text-[#D2D0DD] text-sm mb-4">
                    Get the latest articles delivered to your inbox.
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

  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

export default BlogDetail;
