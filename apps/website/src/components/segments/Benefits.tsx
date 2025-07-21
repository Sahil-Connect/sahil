"use client";

import {
  SectionWrapper,
  GridContainer,
  SectionTitle,
} from "@/components/shared";
import { motion } from "framer-motion";
import { 
  HiCog6Tooth,
  HiGlobeAlt,
  HiShieldCheck,
  HiClock,
  HiComputerDesktop,
  HiChartBarSquare
} from "react-icons/hi2";
import { benefitsData } from "@/lib/constants";

// Map benefits to icons and colors
const benefitEnhancements = [
  {
    icon: HiCog6Tooth,
    color: "from-blue-500 to-blue-600",
    hoverColor: "from-blue-600 to-blue-700"
  },
  {
    icon: HiGlobeAlt,
    color: "from-green-500 to-green-600",
    hoverColor: "from-green-600 to-green-700"
  },
  {
    icon: HiShieldCheck,
    color: "from-purple-500 to-purple-600",
    hoverColor: "from-purple-600 to-purple-700"
  },
  {
    icon: HiClock,
    color: "from-orange-500 to-orange-600",
    hoverColor: "from-orange-600 to-orange-700"
  },
  {
    icon: HiComputerDesktop,
    color: "from-teal-500 to-teal-600",
    hoverColor: "from-teal-600 to-teal-700"
  },
  {
    icon: HiChartBarSquare,
    color: "from-indigo-500 to-indigo-600",
    hoverColor: "from-indigo-600 to-indigo-700"
  }
];

export const Benefits = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Partner Advantages:
            <br className="hidden md:block" />
            Why Logistics Platforms Choose Sahil
          </h2>
          <p className="text-lg text-gray-600">
            Explore the transformative benefits that make our smart locker network 
            the preferred choice for forward-thinking delivery platforms.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {benefitsData.map(({ id, title, desc }, index) => {
            const enhancement = benefitEnhancements[index] || benefitEnhancements[0];
            const IconComponent = enhancement.icon;
            
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl p-px bg-gradient-to-br from-primary/30 via-amber-200/40 to-primary/30 hover:from-primary/60 hover:via-amber-400/60 hover:to-primary/60 transition-all duration-500 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="rounded-[inherit] bg-white/90 backdrop-blur-sm p-8 h-full transition-all duration-500">
                  <motion.div 
                    className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${enhancement.color} group-hover:bg-gradient-to-br group-hover:${enhancement.hoverColor} flex items-center justify-center shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold mb-3 text-slate-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    {title}
                  </motion.h3>
                  <motion.p 
                    className="text-slate-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    {desc}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </GridContainer>
    </SectionWrapper>
  );
};
