// src/components/LearningTips.jsx
"use client";

import { Brain, Timer, Laptop } from "lucide-react";

export default function LearningTips() {
  const tips = [
    { 
      title: "Active Recall", 
      desc: "Test yourself frequently instead of just re-reading notes to strengthen memory retention.", 
      icon: <Brain className="text-blue-600" size={32} />,
      color: "bg-blue-100"
    },
    { 
      title: "Pomodoro Technique", 
      desc: "Study for 25 minutes, then take a 5-minute break to maintain high levels of focus.", 
      icon: <Timer className="text-orange-600" size={32} />,
      color: "bg-orange-100"
    },
    { 
      title: "Project-Based Learning", 
      desc: "Build real-world projects while you learn to solidify your practical skills effectively.", 
      icon: <Laptop className="text-purple-600" size={32} />,
      color: "bg-purple-100"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Master Your Learning 🚀
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our science-backed learning methods help you retain information longer and learn skills faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tips.map((tip, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative Background Shape */}
              <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${tip.color} opacity-20 group-hover:scale-150 transition-transform duration-500`} />

              <div className={`w-16 h-16 ${tip.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                {tip.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {tip.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed relative z-10">
                {tip.desc}
              </p>

              <div className="mt-6 flex items-center text-blue-600 font-semibold cursor-pointer group/link">
                Learn more 
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}