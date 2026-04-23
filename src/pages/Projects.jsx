// import React from "react";
// import { Code2, Globe, BookOpen } from "lucide-react";

// const projects = [
//   {
//     title: "Portfolio Website",
//     description: "A personal portfolio built with React and Tailwind CSS.",
//     tech: ["React", "Tailwind", "Vite"],
//     link: "#",
//     icon: <Globe className="text-blue-500" />,
//   },
//   {
//     title: "E-commerce UI",
//     description: "Modern shopping UI with product listings and cart design.",
//     tech: ["React", "CSS"],
//     link: "#",
//     icon: <Code2 className="text-purple-500" />,
//   },
//   {
//     title: "Blog Platform",
//     description: "Simple blog system with dynamic routing and posts.",
//     tech: ["React", "Router"],
//     link: "#",
//     icon: <BookOpen className="text-green-500" />,
//   },
// ];

// function Projects() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-16">

//       {/* Header */}
//       <h1 className="text-4xl font-bold text-center mb-4">
//         My Projects
//       </h1>

//       <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
//         A collection of QA and frontend projects showcasing my skills in automation and UI development.
//       </p>

//       {/* Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-blue-500"
//           >

//             {/* Icon + Title */}
//             <div className="flex items-center gap-3 mb-3">
//               {project.icon}
//               <h2 className="text-xl font-semibold group-hover:text-blue-500 transition">
//                 {project.title}
//               </h2>
//             </div>

//             {/* Description */}
//             <p className="text-gray-600 dark:text-gray-300 mb-4">
//               {project.description}
//             </p>

//             {/* Tech stack */}
//             <div className="flex flex-wrap gap-2 mb-5">
//               {project.tech.map((item, i) => (
//                 <span
//                   key={i}
//                   className="text-xs px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300 rounded-full"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>

//             {/* Button */}
//             <a
//               href={project.link}
//               className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               View Project →
//             </a>

//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

// export default Projects;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Globe, BookOpen, X } from "lucide-react";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    category: "Frontend",
    github: "#",
    demo: "#",
    icon: <Globe className="text-blue-500" />,
    details: "This project showcases responsive UI, routing, and modern design principles."
  },
  {
    title: "Automation Suite",
    description: "QA automation framework for regression testing.",
    tech: ["Selenium", "Java"],
    category: "QA",
    github: "#",
    demo: "#",
    icon: <Code2 className="text-purple-500" />,
    details: "Built scalable automation suite with CI/CD integration and reporting."
  },
  {
    title: "Blog Platform",
    description: "Dynamic blog system with routing and CMS structure.",
    tech: ["React", "Router"],
    category: "Frontend",
    github: "#",
    demo: "#",
    icon: <BookOpen className="text-green-500" />,
    details: "Supports dynamic routing, markdown posts, and clean UI architecture."
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-6">
        My Projects
      </h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "Frontend", "QA"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filtered.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border hover:border-blue-500 transition"
          >

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              {project.icon}
              <h2 className="text-xl font-semibold">
                {project.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-blue-100 dark:bg-gray-700 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <a
                href={project.github}
                className="flex-1 text-center py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Live
              </a>
            </div>

            {/* Details button */}
            <button
              onClick={() => setSelected(project)}
              className="mt-3 text-sm text-blue-500 hover:underline"
            >
              View Details
            </button>

          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4">

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-md w-full relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-2">
              {selected.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {selected.details}
            </p>

            <div className="flex gap-3">
              <a href={selected.github} className="text-blue-500">
                GitHub
              </a>
              <a href={selected.demo} className="text-blue-500">
                Live Demo
              </a>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Projects;