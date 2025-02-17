import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const tools = [
  {
    id: 1,
    name: "Jira",
    logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
    description: "Project tracking and agile management tool for software teams"
  },
  {
    id: 2,
    name: "Linear",
    logo: "https://cdn.brandfetch.io/iduDa181eM/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    description: "Modern issue tracking and project management tool"
  },
  {
    id: 3,
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    description: "All-in-one workspace for notes, docs, and collaborative planning"
  },
  {
    id: 4,
    name: "Mixpanel",
    logo: "https://cdn.brandfetch.io/idr_rhI2FS/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    description: "Analytics platform for tracking user behavior and engagement"
  },
  {
    id: 5,
    name: "Google Analytics",
    logo: "https://cdn.brandfetch.io/idYpJMnlBx/w/192/h/192/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
    description: "Web analytics service for tracking website traffic and user behavior"
  },
  {
    id: 6,
    name: "Google Suite",
    logo: "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    description: "Suite of cloud-based productivity and collaboration tools"
  },
  {
    id: 7,
    name: "Claude",
    logo: "https://cdn.brandfetch.io/idW5s392j1/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    description: "LLM for drafting, editing and testing code"
  },
  {
    id: 8,
    name: "ChatGPT",
    logo: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    description: "LLM used for idea and content generation to boost productivity"
  },
  {
    id: 9,
    name: "Cursor",
    logo: "https://www.cursor.com/assets/images/logo.svg",
    description: "AI-powered code editor for enhanced development productivity"
  }
];

// Create 3 sets of tools for smoother infinite loop
const extendedTools = [...tools, ...tools, ...tools];

const SkillsTools: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<{ id: number, index: number } | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      const width = (containerRef.current.scrollWidth / 3);
      setContainerWidth(width);
    }
  }, []);

  useEffect(() => {
    if (!hoveredTool && containerWidth > 0) {
      controls.start({
        x: [-containerWidth, -containerWidth * 2],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 1]
        }
      });
    } else {
      controls.stop();
    }

    return () => {
      controls.stop();
    };
  }, [hoveredTool, containerWidth, controls]);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-5xl font-bold mb-12 text-rich-black text-center"
          >
            My <span className="text-tomato">Tools</span>
          </motion.h2>

          <div className="relative w-full overflow-visible">
            <div className="overflow-hidden">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10" />
              
              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10" />
              
              <motion.div
                ref={containerRef}
                className="flex space-x-8"
                animate={controls}
                initial={{ x: 0 }}
              >
                {extendedTools.map((tool, index) => (
                  <motion.div
                    key={`${tool.name}-${index}`}
                    className="relative flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    initial={{ width: "5rem", height: "5rem" }}
                    animate={{
                      width: hoveredTool?.id === tool.id && hoveredTool?.index === index ? "16rem" : "5rem",
                      height: hoveredTool?.id === tool.id && hoveredTool?.index === index ? "7rem" : "5rem",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onMouseEnter={() => setHoveredTool({ id: tool.id, index })}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    <div className="absolute inset-0 flex items-center p-3">
                      <motion.img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className="object-contain"
                        animate={{
                          width: hoveredTool?.id === tool.id && hoveredTool?.index === index ? "1.75rem" : "100%",
                          height: hoveredTool?.id === tool.id && hoveredTool?.index === index ? "1.75rem" : "100%",
                        }}
                      />
                      <AnimatePresence>
                        {hoveredTool?.id === tool.id && hoveredTool?.index === index && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="ml-3 flex-1"
                          >
                            <h4 className="font-medium text-sm text-gray-800">{tool.name}</h4>
                            <p className="text-[11px] text-gray-600 leading-snug line-clamp-2 mt-0.5">{tool.description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsTools;