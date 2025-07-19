import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {useApi} from "@/hooks/useApi";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { set } from "date-fns";

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



const ProjectDetail = () => {
  const [projectsData, setProjectsData] = useState<{ [key: string]: Project }>({});
const [initialProject, setInitialProject] = useState<Project | null>(null);
const [project, setProject] = useState<Project | null>(null);

  const {
  createData: createProjectDetails,
  updateData: updateProjectDetails,
  deleteData: deleteProjectDetails,
  fetchById: fetchProjectDetails,
  loading: loadingProjectDetails,
  data: projectDetails,
} = useApi('projectDetails');
  const { id } = useParams();
  console.log("Project ID from params:", id);
  const projectId = id as string;

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
      console.log("Matched project:", matchedProject);
    }
  }
}, [projectDetails]);

  
  const [editMode, setEditMode] = useState(false);

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
  if (!loadingProjectDetails && project !== null){
  return (
    <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
      {/* Background blur elements */}
      <div className="absolute top-64 right-0 w-[600px] h-[653px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.20)] to-[rgba(84,84,212,0.08)] blur-[150px]" />
      <div className="absolute top-10 left-96 w-[467px] h-[1399px] rounded-full bg-gradient-to-b from-[rgba(251,168,28,0.11)] to-[rgba(224,86,136,0.06)] blur-[150px] rotate-[65.712deg]" />
      <div className="absolute -top-16 -left-80 w-[467px] h-[1234px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.27)] to-[rgba(84,84,212,0.11)] blur-[150px] rotate-[-54.374deg]" />

      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
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
                      className={`w-4 h-4 ${
                        i < project.rating
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

          {/* Related Projects */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 font-inter text-center">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(Array.isArray((projectDetails as any)?.data) ? (projectDetails as any).data : [])
          .filter((p: Project) => p.id !== project.id)
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
  );}
};
export default ProjectDetail;