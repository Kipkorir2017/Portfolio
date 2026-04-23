




import React from "react";
import { CheckCircle, Bug, Cpu, BarChart3, ShieldCheck } from "lucide-react";

const qaWork = [
  {
    title: "Automation Testing Framework",
    description: "Built scalable Selenium/Cypress automation suite for regression testing.",
    icon: <ShieldCheck className="text-green-500" />,
    impact: "Reduced regression testing time by 60%",
  },
  {
    title: "API Testing (Postman / REST)",
    description: "Validated REST APIs for accuracy, performance, and security.",
    icon: <Cpu className="text-blue-500" />,
    impact: "Improved API defect detection before production release",
  },
  {
    title: "Manual Testing (UAT / Regression)",
    description: "Executed end-to-end functional and regression testing.",
    icon: <Bug className="text-red-500" />,
    impact: "Detected critical bugs before production deployment",
  },
  {
    title: "Performance Testing",
    description: "Conducted load and stress testing using JMeter.",
    icon: <BarChart3 className="text-purple-500" />,
    impact: "Improved system stability under high traffic",
  },
];

export default function Folio() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-4">
        QA Engineering Folio
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        A showcase of my quality assurance experience, automation work, and testing impact across systems.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

        {qaWork.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition border hover:border-green-500"
          >

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h2 className="text-xl font-semibold">
                {item.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.description}
            </p>

            {/* Impact */}
            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
              <CheckCircle size={16} />
              {item.impact}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}