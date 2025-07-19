// Imports
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useApi } from "@/hooks/useApi";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";

// Type Definitions
type Project = {
  id: number;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  heroImage: string;
  tags: string[];
  year: string;
  client: string;
  rating: number;
  role: string;
  duration: string;
  teamSize: string;
  keyFeatures: string[];
  liveLink: string;
  githubLink: string;
};

// Main Component
const ProjectDetail = () => {
  // State Definitions
  const [projectsData, setProjectsData] = useState<{ [key: string]: Project }>({});
  const [initialProject, setInitialProject] = useState<Project | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [editMode, setEditMode] = useState(false);

  // API Hook
  const {
    createData: createProjectDetails,
    updateData: updateProjectDetails,
    deleteData: deleteProjectDetails,
    fetchById: fetchProjectDetails,
    loading: loadingProjectDetails,
    data: projectDetails,
  } = useApi('projectDetails');

  // Get project ID from URL params
  const { id } = useParams();
  const projectId = id as string;

  // Fetch project details on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        await fetchProjectDetails(projectId);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  // Set project data when API data changes
  useEffect(() => {
    if (projectDetails && Array.isArray((projectDetails as any)?.data)) {
      const matchedProject = (projectDetails as any).data.find(
        (project: any) => project.id === Number(projectId)
      );
      if (matchedProject) {
        setProject(matchedProject);
        setProjectsData((prev) => ({
          ...prev,
          [projectId]: matchedProject,
        }));
      }
    }
  }, [projectDetails]);

  // Handlers for editing fields
  const handleChange = (key: string, value: any) => {
    setProject((prev) => ({ ...prev, [key]: value }));
  };

  const handleArrayChange = (key: string, index: number, value: string) => {
    setProject((prev) => {
      const updated = [...(prev[key] as string[])];
      updated[index] = value;
      return { ...prev, [key]: updated };
    });
  };

  const handleFeatureChange = (index: number, value: string) => {
    setProject((prev) => {
      const updatedFeatures = [...prev.keyFeatures];
      updatedFeatures[index] = value;
      return { ...prev, keyFeatures: updatedFeatures };
    });
  };

  // Toggle edit mode and save changes
  const editModeHandler = () => {
    if (editMode) {
      updateProjectDetails(projectId, project);
    }
    setEditMode((prev) => !prev);
  };

  // Loading State
  if (project === null || loadingProjectDetails) {
    return (
      <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
        <Navigation />
        <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 animate-pulse">Loading...</h1>
            <p className="text-[#D2D0DD] mb-8">Please wait while we fetch the project.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Main Render
  if (!loadingProjectDetails && project !== null) {
    return (
      <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
        <Navigation />

        {/* Edit/View Mode Toggle Button */}
        <div className="px-4 pt-6 max-w-6xl mx-auto flex justify-end">
          <button
            onClick={editModeHandler}
            className="text-sm px-4 py-2 bg-brand-teal/20 border border-brand-teal/40 rounded-md hover:bg-brand-teal/30 transition"
          >
            {editMode ? "View Mode" : "Edit Mode"}
          </button>
        </div>

        {/* Project Hero Section */}
        <section className="relative z-10 py-10 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back to Portfolio Link */}
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors duration-300 font-nunito"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            {/* Project Main Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Text Info */}
              <div>
                {/* Category & Rating */}
                <div className="flex items-center gap-3 mb-4">
                  {editMode ? (
                    <input
                      value={project.category}
                      onChange={(e) => handleChange("category", e.target.value)}
                      className="px-4 py-2 rounded-full text-sm text-brand-teal bg-transparent border border-brand-teal/30"
                    />
                  ) : (
                    <span className="px-4 py-2 bg-brand-teal/20 border border-brand-teal/30 rounded-full text-brand-teal text-sm font-semibold">
                      {project.category}
                    </span>
                  )}
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {editMode ? (
                      <select
                        value={project.rating}
                        onChange={(e) => handleChange("rating", Number(e.target.value))}
                        className="px-2 py-1 rounded border border-gray-300 text-sm bg-white text-gray-800"
                      >
                        {[1, 2, 3, 4, 5].map((val) => (
                          <option key={val} value={val}>
                            {val} Star{val > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    ) : (
                      Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < project.rating ? "text-yellow-400 fill-current" : "text-gray-400"
                          }`}
                        />
                      ))
                    )}
                  </div>
                </div>

                {/* Project Name */}
                {editMode ? (
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight w-full bg-transparent outline-none border-b border-gray-600"
                  />
                ) : (
                  <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-hero-text-gradient bg-clip-text text-transparent leading-tight">
                    {project.name}
                  </h1>
                )}

                {/* Subtitle */}
                {editMode ? (
                  <textarea
                    className="text-xl text-[#D2D0DD] mb-8 font-inter leading-relaxed w-full bg-transparent"
                    value={project.subtitle}
                    onChange={(e) => handleChange("subtitle", e.target.value)}
                  />
                ) : (
                  <p className="text-xl text-[#D2D0DD] mb-8 font-inter leading-relaxed">
                    {project.subtitle}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {editMode ? (
                    <input
                      type="text"
                      value={project.tags.join(", ")}
                      onChange={(e) =>
                        handleChange(
                          "tags",
                          e.target.value.split(",").map((t) => t.trim())
                        )
                      }
                      className="w-full px-4 py-2 rounded text-sm bg-white text-black"
                      placeholder="Enter tags separated by commas"
                    />
                  ) : (
                    project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-glass-white backdrop-blur-sm border border-glass-border rounded-full text-sm font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))
                  )}
                </div>

                {/* Live & GitHub Links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {editMode ? (
                    <input
                      value={project.liveLink}
                      onChange={(e) => handleChange("liveLink", e.target.value)}
                      className="px-4 py-2 rounded bg-transparent border border-white text-white"
                      placeholder="Live Link"
                    />
                  ) : project.liveLink && (
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
                  {editMode ? (
                    <input
                      value={project.githubLink || ''}
                      onChange={(e) => handleChange("githubLink", e.target.value)}
                      className="px-4 py-2 rounded bg-transparent border border-white text-white"
                      placeholder="GitHub Link"
                    />
                  ) : project.githubLink && (
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

              {/* Right Side: Hero Image */}
              <div>
                <div className="relative">
                  {editMode ? (
                    <input
                      value={project.heroImage}
                      onChange={(e) => handleChange("heroImage", e.target.value)}
                      className="w-full mb-2 px-4 z-50 py-2 rounded text-sm text-black"
                    />
                  ) : null}
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-96 object-cover rounded-[24px] shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-[24px] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details Section */}
        <section className="relative z-10 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Project Info */}
              <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
                <h3 className="text-lg font-bold text-white mb-4 font-inter">Project Info</h3>
                <div className="space-y-3 text-[#D2D0DD]">
                  {/* Year */}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-teal" />
                    {editMode ? (
                      <input
                        className="text-sm bg-transparent border-b border-gray-500 text-white"
                        value={project.year}
                        onChange={(e) => handleChange("year", e.target.value)}
                      />
                    ) : (
                      <span className="text-sm">{project.year}</span>
                    )}
                  </div>
                  {/* Client */}
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-teal" />
                    {editMode ? (
                      <input
                        className="text-sm bg-transparent border-b border-gray-500 text-white"
                        value={project.client}
                        onChange={(e) => handleChange("client", e.target.value)}
                      />
                    ) : (
                      <span className="text-sm">{project.client}</span>
                    )}
                  </div>
                  {/* Duration */}
                  <div>
                    <span className="text-sm text-brand-teal font-semibold">Duration:</span>
                    {editMode ? (
                      <input
                        className="text-sm ml-2 bg-transparent border-b border-gray-500 text-white"
                        value={project.duration}
                        onChange={(e) => handleChange("duration", e.target.value)}
                      />
                    ) : (
                      <span className="text-sm ml-2">{project.duration}</span>
                    )}
                  </div>
                  {/* Team Size */}
                  <div>
                    <span className="text-sm text-brand-teal font-semibold">Team Size:</span>
                    {editMode ? (
                      <input
                        className="text-sm ml-2 bg-transparent border-b border-gray-500 text-white"
                        value={project.teamSize}
                        onChange={(e) => handleChange("teamSize", e.target.value)}
                      />
                    ) : (
                      <span className="text-sm ml-2">{project.teamSize}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Role */}
              <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
                <h3 className="text-lg font-bold text-white mb-4 font-inter">My Role</h3>
                {editMode ? (
                  <textarea
                    className="text-[#D2D0DD] text-sm leading-relaxed w-full bg-transparent border border-gray-500 p-2 rounded"
                    value={project.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                  />
                ) : (
                  <p className="text-[#D2D0DD] text-sm leading-relaxed">{project.role}</p>
                )}
              </div>

              {/* Tech Stack */}
              <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6">
                <h3 className="text-lg font-bold text-white mb-4 font-inter">Tech Stack</h3>
                {editMode ? (
                  <textarea
                    className="text-sm w-full bg-transparent border border-gray-500 text-white p-2 rounded"
                    value={project.tags.join(", ")}
                    onChange={(e) => handleChange("tags", e.target.value.split(",").map(tag => tag.trim()))}
                  />
                ) : (
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
                )}
              </div>
            </div>

            {/* Project Overview & Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-inter">Project Overview</h2>
                {editMode ? (
                  <textarea
                    className="text-lg text-[#D2D0DD] font-inter leading-relaxed w-full bg-transparent border border-gray-500 p-2 rounded"
                    value={project.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                  />
                ) : (
                  <p className="text-lg text-[#D2D0DD] font-inter leading-relaxed">{project.description}</p>
                )}
              </div>
              <div>
                {editMode ? (
                  <input
                    className="w-full bg-transparent border border-gray-500 text-white p-2 rounded mb-2"
                    value={project.heroImage}
                    onChange={(e) => handleChange("heroImage", e.target.value)}
                  />
                ) : null}
                <img
                  src={project.heroImage}
                  alt="Project overview"
                  className="w-full h-64 object-cover rounded-[20px] shadow-xl"
                />
              </div>
            </div>

            {/* Key Features */}
                   <div className="mb-16">
  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 font-inter text-center">
    Key Features
  </h2>

  {editMode ? (
    <input
      type="text"
      value={project.keyFeatures.join(" - ")} // Join features with dash for display
      onChange={(e) =>
        handleChange("keyFeatures", e.target.value.split(" - ")) // Split by dash on change
      }
      className="bg-glass-white text-white w-full p-4 rounded-xl border border-gray-500"
      placeholder="Enter key features separated by -"
    />
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {project.keyFeatures.map((feature, index) => (
        <div
          key={index}
          className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-[20px] p-6 hover:scale-105 transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-teal/30 transition-colors">
            <CheckCircle className="w-6 h-6 text-brand-teal" />
          </div>
          <p className="text-white font-inter whitespace-pre-wrap">{feature}</p>
        </div>
      ))}
    </div>
  )}
</div>



            {/* Related Projects */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 font-inter text-center">Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(Array.isArray((projectDetails as any)?.data) ? (projectDetails as any).data : [])
                  .filter((p: Project) => p.id !== project.id)
                  .slice(0, 3)
                  .map((relatedProject: Project) => (
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
                        <p className="text-[#D2D0DD] text-sm mb-4">{relatedProject.subtitle}</p>
                        <span className="text-brand-teal text-sm font-semibold">View Project →</span>
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
  }
};

export default ProjectDetail;

/*
-----------------------------------------------
Code Structure & Comments
-----------------------------------------------
- Imports: All dependencies and icons.
- Type Definitions: Project type.
- Main Component: ProjectDetail
  - State Definitions: All useState hooks.
  - API Hook: useApi for CRUD operations.
  - useEffect: Fetch project details on mount and update state on API data change.
  - Handlers: For editing fields and toggling edit mode.
  - Loading State: Shows loading spinner.
  - Main Render:
    - Navigation
    - Edit/View Mode Toggle Button
    - Project Hero Section: Back link, category, rating, name, subtitle, tags, links, hero image.
    - Project Details Section:
      - Project Info: year, client, duration, team size.
      - Role
      - Tech Stack
      - Project Overview & Image
      - Key Features
      - Related Projects
    - Footer
-----------------------------------------------
*/
