import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import prof from "../assets/prof.png";

function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent animate-pulse" />

      {/*  Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/20 shadow-xl rounded-2xl p-8 max-w-2xl w-full"
      >

        {/* Profile */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-6">
          <img src={prof} alt="profile" className="w-full h-full object-cover" />
        </div>

        {/* Badge */}
        <span className="px-4 py-1 bg-blue-100 text-blue-600 dark:bg-gray-800 rounded-full text-sm">
          QA Engineer • Automation • API Testing
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold mt-4">
          Building Quality Software
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          I'm Benjamin Kipkorir Tonui, a QA Engineer with 4+ years of experience
          ensuring software quality through automation, API testing, and performance validation.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">

          {[
            { label: "Years", value: "4+" },
            { label: "Bugs", value: "100+" },
            { label: "Suites", value: "20+" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white/40 dark:bg-gray-800/40 p-3 rounded-xl"
            >
              <h2 className="text-xl font-bold text-blue-500">
                {item.value}
              </h2>
              <p className="text-xs text-gray-500">{item.label}</p>
            </motion.div>
          ))}

        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 justify-center">

          <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="border px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-2"
          >
            Contact Me
            <ArrowRight size={18} />
          </Link>

        </div>

      </motion.div>

      {/* QA Impact */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 max-w-3xl text-center"
      >
        <h2 className="text-2xl font-semibold mb-2">
          QA Impact
        </h2>

        <p className="text-gray-500 dark:text-gray-400">
          Reduced production bugs through automation frameworks, API validation,
          and structured testing strategies across agile teams.
        </p>
      </motion.div>

      {/* ⬇ Scroll indicator */}
      <div className="mt-8 flex flex-col items-center text-gray-400">
        <ChevronDown className="animate-bounce" />
        <p className="text-xs">Scroll</p>
      </div>

    </section>
  );
}

export default Home;