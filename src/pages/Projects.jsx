import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Badge } from "@/components/ui/badge";
import { SiTypescript, SiTailwindcss, SiRedux, SiVite, SiShadcnui,SiSqlite} from "react-icons/si";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { DiRuby } from "react-icons/di"

const projects = [
  {
    title: "ugliboats.com",
    description:
      "Freelance contract for a boat enthusiast site where I migrated content from a static HTML build to a dynamic React application. I also built a CMS from scratch for the owner to manage content from an Admin Panel. Implemented design with Tailwind CSS under instruction from the client to their prefrences.",
    link: `${import.meta.env.BASE_URL}Ugliboats.png`,
    color: "#006400",
    githubLink: "https://github.com/joshtho/ugli-boats-v2",
    liveLink: "https://ugliboats.com",
    stack: [
      {
        name: "React",
        icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
      },
      {
        name: "Vite",
        icon: <SiVite className="w-4 h-4 text-[#563d7c]" />,
      },
      {
        name: "Shadcn UI",
        icon: <SiShadcnui className="w-4 h-4 text-[#090909]" />
      }
      
    ]
  },
  {
    title: "Checkoutden.com",
    description:
      "Checkoutden an e-commerce platform that allows clients of mine to host a checkout page for their digital products and manage their sales efficiently. Note: Still in development.",
    src: "house.jpg",
    link: `${import.meta.env.BASE_URL}Checkoutden.png`,
    color: "#ed649e",
    githubLink: "https://github.com/joshtho/living-rivers",
    liveLink: "https://checkoutden.com",
    stack: [
      {
        name: "React",
        icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
      },
      {
        name: "Vite",
        icon: <SiVite className="w-4 h-4 text-[#563d7c]" />,
      },
    ]
  },
  {
    title: "We Stay",
    description:
    "A vacation application where users can save their favorite short-term rentals and plan their trips. Built with ReactJS for a dynamic frontend experience and integrated with a backend API for data management.",
    link: `${import.meta.env.BASE_URL}WeStay.png`,
    color: "#8f89ff",
    githubLink: "https://github.com/joshtho/WeStay",
    liveLink: "https://youtu.be/nuQ-BWluMl4",
    stack: [
      {
        name: "React",
        icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="w-4 h-4 text-[#563d7c]" />,
      },
      {
        name: "SQLite",
        icon: <SiSqlite className="w-4 h-4 text-[#336791]" />
      },
      {
          name: "Ruby on Rails",
          icon: <DiRuby className="w-4 h-4 text-[#CC342D]" />,
      },
    ]
  },
  {
    title: "Gala",
    description:
      "Web application that lets a user save data on their favorite artists and their artworks. Created a ReactJS frontend with React-router-dom v6 to have seamless client-side navigation. Implemented Redux toolkit for state management and fetch calls to deliver better communication between components. Generated Ruby on Rails database with ActiveRecord and SQLite for an API with BCrypt for security.",
    link: `${import.meta.env.BASE_URL}Gala.png`,
    color: "#5196fd",
    githubLink: "https://github.com/joshtho/Gala",
    liveLink: "https://youtu.be/prBWNAV13sY",
    stack: [
        
        {
        name: "React",
        icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
        name: "Bootstrap",
        icon: <FaBootstrap className="w-4 h-4 text-[#563d7c]" />,
        },
        {
          name: "Redux",
          icon: <SiRedux className="w-4 h-4 text-[#563d7c]" />
        },
        {
          name: "Ruby on Rails",
          icon: <DiRuby className="w-4 h-4 text-[#CC342D]" />,
        },
        {
        name: "SQLite",
        icon: <SiSqlite className="w-4 h-4 text-[#336791]" />
        }
      ]
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black pt-14 md:pt-0" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                stack={project.stack}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  stack
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                
            <div>
              <div className="flex items-center justify-self-start gap-3 mb-4 md:mb-6">
                <div
                  className="w-3 h-3 md:w-4 md:h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  {title}
                </h2>
              </div>

              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                {description}
              </p>

              <div className="flex flex-wrap gap-2">
                {stack.map((item, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    {liveLink.includes('youtu') ? 'Video Demo' : 'Live'}
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
