import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  TestTube2,
  Cpu,
  BarChart3,
  Bug,
  Rocket,
  GitBranch,
} from "lucide-react";

function IconItem({ icon: Icon, text, color }) {
  return (
    <li className="flex items-start gap-3">
      <span className={`mt-0.5 p-1 rounded-md bg-gray-200 dark:bg-gray-700`}>
        <Icon size={16} className={color} />
      </span>
      <span>{text}</span>
    </li>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      {children}
    </div>
  );
}

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-6"
      >
        About Me
      </motion.h1>

      {/* INTRO */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto"
      >
        I am a QA Engineer with over 4 years of experience ensuring software
        quality through automation, API testing, manual testing strategies,
        and performance validation in real-world systems.
      </motion.p>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">

        {[
          { label: "Years Experience", value: "4+" },
          { label: "Automation Suites", value: "20+" },
          { label: "Bugs Found", value: "100+" },
          { label: "Test Coverage", value: "95%" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-blue-500">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-500">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* EXPERIENCE */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">Experience</h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <IconItem
              icon={CheckCircle}
              text="4+ Years in QA Engineering"
              color="text-green-500"
            />
            <IconItem
              icon={CheckCircle}
              text="Agile / Scrum environments"
              color="text-green-500"
            />
            <IconItem
              icon={CheckCircle}
              text="End-to-end test planning & execution"
              color="text-green-500"
            />
          </ul>
        </Card>

        {/* TESTING */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">Testing Expertise</h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <IconItem
              icon={TestTube2}
              text="Automation Testing (Selenium / Cypress)"
              color="text-blue-500"
            />
            <IconItem
              icon={Bug}
              text="Manual Testing (Regression, UAT)"
              color="text-red-500"
            />
            <IconItem
              icon={Cpu}
              text="API Testing (Postman / REST Assured)"
              color="text-purple-500"
            />
            <IconItem
              icon={BarChart3}
              text="Performance Testing (JMeter)"
              color="text-yellow-500"
            />
          </ul>
        </Card>

        {/* TOOLS */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">Tools & Tech</h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <IconItem
              icon={GitBranch}
              text="Git, GitHub, CI/CD"
              color="text-gray-500"
            />
            <IconItem
              icon={TestTube2}
              text="Selenium, Cypress, Playwright"
              color="text-blue-500"
            />
            <IconItem
              icon={Cpu}
              text="Postman, REST APIs"
              color="text-purple-500"
            />
          </ul>
        </Card>

        {/* FOCUS */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">Focus Areas</h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <IconItem
              icon={Bug}
              text="Early bug detection"
              color="text-red-500"
            />
            <IconItem
              icon={Rocket}
              text="Release quality improvement"
              color="text-blue-500"
            />
            <IconItem
              icon={BarChart3}
              text="Performance optimization"
              color="text-yellow-500"
            />
          </ul>
        </Card>

      </div>
    </div>
  );
}

export default About;