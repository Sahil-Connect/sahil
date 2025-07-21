"use client";
import {
  SectionWrapper,
  GridContainer,
  SectionTitle,
  AnimatedList
} from "@/components/shared";
import { HiOutlineExclamationTriangle, HiOutlineTruck, HiOutlineUsers, HiOutlineCurrencyDollar, HiOutlineBuildingOffice2, HiOutlineUserGroup } from "react-icons/hi2";
import { useState } from "react";

const problemPerspectives = [
  {
    id: 'platforms',
    label: 'Delivery Platforms',
    icon: HiOutlineBuildingOffice2,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    problems: [
      {
        icon: HiOutlineCurrencyDollar,
        text: "Higher operational costs",
        description: "Redelivery attempts cost 3x more than successful first deliveries"
      },
      {
        icon: HiOutlineUsers,
        text: "Customer service overload",
        description: "Failed deliveries generate 5x more support tickets and complaints"
      },
      {
        icon: HiOutlineExclamationTriangle,
        text: "Lower satisfaction scores",
        description: "Platform ratings drop significantly due to delivery failures"
      }
    ]
  },
  {
    id: 'drivers',
    label: 'Drivers & Couriers',
    icon: HiOutlineTruck,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    problems: [
      {
        icon: HiOutlineTruck,
        text: "Wasted time and fuel",
        description: "40% of driver time spent on failed delivery attempts and callbacks"
      },
      {
        icon: HiOutlineCurrencyDollar,
        text: "Reduced earnings potential",
        description: "Failed deliveries mean fewer completed orders per day"
      },
      {
        icon: HiOutlineExclamationTriangle,
        text: "Increased stress and frustration",
        description: "Constant rescheduling and customer conflicts affect driver wellbeing"
      }
    ]
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: HiOutlineUserGroup,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    problems: [
      {
        icon: HiOutlineUsers,
        text: "Missed delivery windows",
        description: "Work schedules conflict with narrow delivery timeframes"
      },
      {
        icon: HiOutlineExclamationTriangle,
        text: "Poor delivery experience",
        description: "Multiple failed attempts lead to package delays and frustration"
      },
      {
        icon: HiOutlineCurrencyDollar,
        text: "Hidden costs",
        description: "Time off work or premium delivery fees to ensure successful delivery"
      }
    ]
  }
];

const ProblemTabs = () => {
  const [activeTab, setActiveTab] = useState('platforms');
  const activePerspective = problemPerspectives.find(p => p.id === activeTab);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Vertical Tabs */}
        <div className="lg:col-span-1">
          <div className="space-y-3">
            {problemPerspectives.map((perspective) => {
              const IconComponent = perspective.icon;
              const isActive = activeTab === perspective.id;

              return (
                <div
                  key={perspective.id}
                  className={`group relative h-full flex flex-col items-start justify-between gap-4 p-6 border border-zinc-200 
                    rounded-lg bg-gray-50 overflow-hidden transition duration-300 ease-in-out cursor-pointer
                    ${isActive
                      ? `${perspective.bgColor} ${perspective.borderColor}`
                      : 'hover:bg-gray-100 hover:border-gray-300'
                    }`}
                  onClick={() => setActiveTab(perspective.id)}
                >
                  <div className="flex items-center gap-3 z-10 relative">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isActive
                        ? `${perspective.bgColor.replace('bg-', 'bg-').replace('-50', '-100')} ${perspective.color}`
                        : 'bg-white text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600'
                      }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm transition-colors ${isActive ? perspective.color : 'text-gray-700 group-hover:text-gray-900'
                        }`}>
                        {perspective.label}
                      </h4>
                      <p className={`text-xs transition-colors ${isActive ? `${perspective.color} opacity-80` : 'text-gray-500 group-hover:text-gray-600'
                        }`}>
                        {perspective.problems.length} key issues
                      </p>
                    </div>
                  </div>

                  <>
                    <div className="absolute w-16 h-16 bottom-0 right-0 bg-white/20 rounded-tl-full z-0"></div>
                    <div className="absolute w-12 h-12 bottom-0 right-0 bg-white/10 rounded-tl-full z-0"></div>
                  </>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2">
          {activePerspective && (
            <div className="max-w-2xl mx-auto">
              <AnimatedList
                key={activeTab}
                variant="outline"
                items={activePerspective.problems}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Problem = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Delivery Crisis:
            <br className="hidden md:block" />
            The Hidden Costs of Failed Deliveries
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the widespread impact of inefficient last-mile logistics
            and why traditional delivery methods are failing in today's world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="relative overflow-hidden bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
            <div className="relative z-10">
              <div className="text-4xl font-bold mb-2">30%</div>
              <h3 className="font-semibold text-red-100 mb-2">Failed Deliveries</h3>
              <p className="text-sm text-red-100/80">
                Nearly 1 in 3 deliveries fail on the first attempt
              </p>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-full"></div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
            <div className="relative z-10">
              <div className="text-4xl font-bold mb-2">$4B</div>
              <h3 className="font-semibold text-orange-100 mb-2">Annual Waste</h3>
              <p className="text-sm text-orange-100/80">
                Lost annually on fuel, driver time, and service costs
              </p>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-full"></div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white">
            <div className="relative z-10">
              <div className="text-4xl font-bold mb-2">40%</div>
              <h3 className="font-semibold text-amber-100 mb-2">Driver Inefficiency</h3>
              <p className="text-sm text-amber-100/80">
                Time spent waiting, calling, or making return trips
              </p>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-full"></div>
          </div>
        </div>

        <div className="relative bg-gray-50 rounded-lg p-8 md:p-12 overflow-hidden">
          {/* Geometric Circle Background */}
          <div className="absolute inset-0">
            <div className="absolute top-8 left-8 w-20 h-20 bg-red-100 rounded-full opacity-60"></div>
            <div className="absolute top-16 right-12 w-16 h-16 bg-orange-100 rounded-full opacity-50"></div>
            <div className="absolute bottom-12 left-1/4 w-12 h-12 bg-amber-100 rounded-full opacity-70"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 bg-red-50 rounded-full opacity-40"></div>
            <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-orange-200 rounded-full opacity-30"></div>
          </div>

          <div className="relative z-10 w-full mx-auto space-y-12">
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 text-center">
              The ripple effect hurts everyone
            </h3>
            <div className="text-center">
              <p className="text-lg font-medium text-zinc-900">
                Traditional delivery methods weren't designed for today's urban density and customer expectations.
              </p>
              <p className="text-gray-600">
                It's time for a smarter approach.
              </p>
            </div>
            <div className="flex justify-center">
              <ProblemTabs />
            </div>
          </div>
        </div>
      </GridContainer>
    </SectionWrapper>
  );
};
