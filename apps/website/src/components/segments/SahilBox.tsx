"use client";

import { 
  SectionWrapper, 
  GridContainer, 
  SectionTitle,
  AnimatedList
} from "@/components/shared";
import { 
  HiUser,
  HiClock,
  HiShieldCheck,
  HiMapPin,
  HiTruck,
  HiFire,
  HiCurrencyDollar,
  HiChartBarSquare,
  HiSun
} from "react-icons/hi2";
import { motion } from "framer-motion";

// Benefits for Customers/Recipients
const customerBenefits = [
  {
    icon: HiClock,
    text: "No More Waiting Around",
    description: "Pick up your packages 24/7 at your convenience - no need to stay home or coordinate with delivery times"
  },
  {
    icon: HiMapPin,
    text: "Strategic Pickup Locations",
    description: "Access smart lockers at convenient locations near you - markets, schools, or transport hubs"
  },
  {
    icon: HiShieldCheck,
    text: "Secure & Reliable",
    description: "Your packages are safely stored with unique access codes - only you can retrieve your items"
  },
  {
    icon: HiSun,
    text: "Never Miss a Delivery Again",
    description: "Even if you're unavailable during delivery, your package waits safely for you to collect"
  }
];

// Benefits for Companies/Delivery Personnel
const companyBenefits = [
  {
    icon: HiFire,
    text: "Eliminate Failed Deliveries",
    description: "No more wasted fuel and time on return trips - every delivery is successful on the first attempt"
  },
  {
    icon: HiCurrencyDollar,
    text: "Reduce Operational Costs",
    description: "Lower fuel expenses and driver wages with more efficient delivery routes and fewer failed attempts"
  },
  {
    icon: HiChartBarSquare,
    text: "Increase Delivery Capacity",
    description: "Drivers can complete 40% more deliveries per shift without coordination delays"
  },
  {
    icon: HiTruck,
    text: "Scale Without Hiring",
    description: "Handle more orders with your existing fleet - smart lockers work as virtual delivery assistants"
  }
];

export const SahilBox = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Sahil Box</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Smart Lockers in Action:
            <br className="hidden md:block" />
            See How It Works for Everyone
          </h2>
          <p className="text-lg text-gray-600">
            Experience the seamless flow from delivery to pickup, designed to make 
            every interaction simple for customers, drivers, and platforms alike.
          </p>
        </div>
        <div className="mb-20 flex flex-col gap-20">
          {/* For Customers/Recipients - Row 1 */}
          <div className="flex flex-col gap-12">
            <div className="text-center mb-8">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold mb-4 text-blue-600 drop-shadow-sm"
              >
                For Customers & Recipients
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-800 max-w-3xl mx-auto text-lg"
              >
                Never miss a delivery again. Pick up your packages when it's convenient for you, from secure locations near your daily routine.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start relative">
              {/* Feature Content Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="order-1 lg:order-1 flex flex-col justify-start"
              >
                <div className="p-4">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-3xl font-bold mb-3 text-left drop-shadow-sm text-slate-900"
                  >
                    Convenience at Your Fingertips
                  </motion.h3>
                  
                  <motion.h4 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="text-xl font-medium mb-4 text-left drop-shadow-sm text-slate-800"
                  >
                    Smart lockers that work around your schedule
                  </motion.h4>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="text-slate-800 mb-6 leading-relaxed text-left"
                  >
                    No more staying home waiting for deliveries or dealing with missed delivery slips. Our EZ Box network puts you in control of when and where you collect your packages.
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="flex flex-wrap gap-3 mb-8"
                  >
                    {[
                      { name: "24/7 Access", color: "text-blue-600 border-blue-600" },
                      { name: "Secure Storage", color: "text-blue-600 border-blue-600" },
                      { name: "Convenient Locations", color: "text-blue-600 border-blue-600" }
                    ].map((tag, index) => (
                      <motion.span 
                        key={index} 
                        className={`inline-flex items-center px-4 py-2 rounded-xl text-xs font-medium shadow-sm
                                    ${tag.color} bg-opacity-10 border border-opacity-20`}
                        whileHover={{ scale: 1.05, boxShadow: "0 4px 10px -3px rgba(0, 0, 0, 0.1)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {tag.name}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Vertical Separator */}
              <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden lg:flex items-center justify-center">
                <motion.div 
                  className="w-px bg-gradient-to-b from-transparent via-blue-300/40 to-transparent h-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                {/* Animated pulse flowing down */}
                <motion.div
                  className="absolute w-1 h-8 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
                  animate={{
                    y: ["-100%", "100%"],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>

              {/* Animated List Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="order-2 lg:order-2 flex flex-col justify-start"
              >
                <div className="p-4">
                  <AnimatedList items={customerBenefits} variant="colored" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* For Companies/Delivery Personnel - Row 2 */}
          <div className="flex flex-col gap-12">
            <div className="text-center mb-8">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold mb-4 text-amber-600 drop-shadow-sm"
              >
                For Companies & Delivery Personnel
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-800 max-w-3xl mx-auto text-lg"
              >
                Transform your delivery operations with smart lockers that eliminate failed deliveries and reduce operational costs across East Africa.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start relative">
              {/* Feature Content Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="order-1 lg:order-1 flex flex-col justify-start"
              >
                <div className="p-4">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-3xl font-bold mb-3 text-left drop-shadow-sm text-slate-900"
                  >
                    Operational Excellence
                  </motion.h3>
                  
                  <motion.h4 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="text-xl font-medium mb-4 text-left drop-shadow-sm text-slate-800"
                  >
                    Scale your delivery network without scaling costs
                  </motion.h4>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="text-slate-800 mb-6 leading-relaxed text-left"
                  >
                    Reduce fuel costs, eliminate failed delivery attempts, and increase your delivery capacity without hiring additional drivers. Perfect for East Africa's challenging logistics landscape.
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="flex flex-wrap gap-3 mb-8"
                  >
                    {[
                      { name: "Cost Reduction", color: "text-amber-600 border-amber-600" },
                      { name: "Higher Efficiency", color: "text-amber-600 border-amber-600" },
                      { name: "Scalable Network", color: "text-amber-600 border-amber-600" }
                    ].map((tag, index) => (
                      <motion.span 
                        key={index} 
                        className={`inline-flex items-center px-4 py-2 rounded-xl text-xs font-medium shadow-sm
                                    ${tag.color} bg-opacity-10 border border-opacity-20`}
                        whileHover={{ scale: 1.05, boxShadow: "0 4px 10px -3px rgba(0, 0, 0, 0.1)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {tag.name}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Vertical Separator */}
              <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden lg:flex items-center justify-center">
                <motion.div 
                  className="w-px bg-gradient-to-b from-transparent via-amber-300/40 to-transparent h-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                {/* Animated pulse flowing down */}
                <motion.div
                  className="absolute w-1 h-8 bg-gradient-to-b from-transparent via-amber-400/60 to-transparent"
                  animate={{
                    y: ["-100%", "100%"],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>

              {/* Animated List Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="order-2 lg:order-2 flex flex-col justify-start"
              >
                <div className="p-4">
                  <AnimatedList items={companyBenefits} variant="outline" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </GridContainer>
    </SectionWrapper>
  );
};
