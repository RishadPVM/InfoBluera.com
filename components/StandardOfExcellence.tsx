"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Code, Zap, TestTube2, Truck, Phone, ArrowLeft, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface RoadmapStage {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  keyPoints: string[];
  goals: string[];
}

const roadmapStages: RoadmapStage[] = [
  {
    id: 1,
    title: "Initial Call & Discovery",
    icon: <Phone className="w-8 h-8" />,
    description: "We begin with an in-depth consultation to understand your vision, business goals, and technical requirements.",
    keyPoints: [
      "Comprehensive requirement gathering",
      "Business objective alignment",
      "Technical architecture discussion",
      "Timeline and budget estimation",
      "Team assignment and communication structure"
    ],
    goals: [
      "Establish clear project scope and deliverables",
      "Build rapport and set expectations",
      "Identify potential risks and challenges",
      "Create a preliminary project roadmap"
    ]
  },
  {
    id: 2,
    title: "Next Steps Meeting",
    icon: <Users className="w-8 h-8" />,
    description: "Detailed planning session where we finalize specifications and create a comprehensive action plan.",
    keyPoints: [
      "Detailed requirements documentation",
      "Technology stack selection",
      "Resource allocation and timeline breakdown",
      "Risk mitigation strategies",
      "Communication protocols and milestones"
    ],
    goals: [
      "Approve final project specifications",
      "Confirm team composition",
      "Establish reporting cadence",
      "Create sprint planning framework"
    ]
  },
  {
    id: 3,
    title: "Last Work Confirmation Meeting",
    icon: <CheckCircle className="w-8 h-8" />,
    description: "Final confirmation of all requirements, constraints, and expectations before development commences.",
    keyPoints: [
      "Final requirement validation",
      "Contract and SLA finalization",
      "Project kickoff preparation",
      "Team introduction and roles clarification",
      "Development environment setup"
    ],
    goals: [
      "Ensure all stakeholders are aligned",
      "Obtain final sign-off on requirements",
      "Confirm project start date",
      "Establish escalation procedures"
    ]
  },
  {
    id: 4,
    title: "UI/UX Design Stage",
    icon: <Zap className="w-8 h-8" />,
    description: "Our design team creates intuitive, visually stunning interfaces that align with your brand and user needs.",
    keyPoints: [
      "User persona development",
      "Wireframe creation and validation",
      "High-fidelity mockup design",
      "Interactive prototype development",
      "Design system establishment",
      "Accessibility compliance review"
    ],
    goals: [
      "Create compelling user experience",
      "Validate design with stakeholders",
      "Establish design consistency",
      "Prepare designs for development handoff"
    ]
  },
  {
    id: 5,
    title: "UI Design Confirmation",
    icon: <CheckCircle className="w-8 h-8" />,
    description: "Final review and approval of all design assets before handing off to the development team.",
    keyPoints: [
      "Comprehensive design review",
      "Final iterations and refinements",
      "Design asset preparation (SVGs, images, icons)",
      "Design specification documentation",
      "Development guidelines creation"
    ],
    goals: [
      "Get final approval on all UI designs",
      "Ensure pixel-perfect specifications",
      "Create developer-friendly documentation",
      "Prepare for seamless development transition"
    ]
  },
  {
    id: 6,
    title: "Development Start",
    icon: <Code className="w-8 h-8" />,
    description: "Parallel frontend and backend development with agile practices, daily standups, and weekly progress reviews.",
    keyPoints: [
      "Frontend Development: React/Next.js component creation, state management, API integration",
      "Backend Development: Database design, API endpoints, authentication, business logic",
      "Code quality standards: Unit testing, code reviews, documentation",
      "CI/CD pipeline setup and automation",
      "Regular sprint reviews and demos"
    ],
    goals: [
      "Deliver core features on schedule",
      "Maintain high code quality standards",
      "Ensure frontend-backend integration",
      "Maintain clear communication with stakeholders"
    ]
  },
  {
    id: 7,
    title: "Testing & QA",
    icon: <TestTube2 className="w-8 h-8" />,
    description: "Comprehensive testing across all features, performance optimization, and security audits.",
    keyPoints: [
      "Functional testing - All features verified against requirements",
      "Performance testing - Load testing, optimization, analytics",
      "Security testing - Vulnerability scanning, penetration testing",
      "User acceptance testing (UAT) - Client validation",
      "Cross-browser and device testing",
      "Bug tracking and resolution",
      "Performance optimization"
    ],
    goals: [
      "Achieve 99.5% bug-free code",
      "Optimize for performance and speed",
      "Ensure security best practices",
      "Get client approval for deployment"
    ]
  },
  {
    id: 8,
    title: "Final Delivery Meeting",
    icon: <Users className="w-8 h-8" />,
    description: "Project completion review, knowledge transfer, and preparation for go-live.",
    keyPoints: [
      "Final project walkthrough and demo",
      "Documentation handoff (code docs, user guides, API docs)",
      "Team knowledge transfer session",
      "Deployment plan finalization",
      "Support and maintenance agreement review",
      "Go-live checklist verification"
    ],
    goals: [
      "Ensure client satisfaction with deliverables",
      "Transfer complete project knowledge",
      "Confirm deployment readiness",
      "Establish post-launch support plan"
    ]
  },
  {
    id: 9,
    title: "Project Delivery & Launch",
    icon: <Truck className="w-8 h-8" />,
    description: "Successful deployment to production with monitoring, support, and optimization.",
    keyPoints: [
      "Production deployment execution",
      "Real-time monitoring and support",
      "User onboarding and training",
      "Performance analytics review",
      "Feedback collection and quick fixes",
      "Launch celebration and retrospective"
    ],
    goals: [
      "Successful production deployment",
      "Ensure zero downtime",
      "Monitor system performance",
      "Support users through initial launch period"
    ]
  }
];

export default function StandardOfExcellence() {
  const [expandedStage, setExpandedStage] = useState<number | null>(1);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#040718] text-white py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-5xl mx-auto mb-10"
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group"
          >
            <motion.span
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.span>
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Our Standard of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-pulse">Excellence</span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          {roadmapStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              variants={itemVariants}
              className="mb-6"
            >
              <button
                onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
                className="w-full text-left group"
              >
                <div className="relative">
                  {/* Connection Line with Animation */}
                  {index < roadmapStages.length - 1 && (
                    <motion.div
                      className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-blue-500 to-transparent pointer-events-none"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  )}

                  {/* Stage Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden group"
                  >
                    {/* Animated Border Gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 rounded-2xl"
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative flex items-start gap-6">
                      {/* Icon Container with Animation */}
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 shadow-lg shadow-blue-500/10"
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(59, 130, 246, 0.1)",
                              "0 0 30px rgba(34, 211, 238, 0.2)",
                              "0 0 20px rgba(59, 130, 246, 0.1)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {stage.icon}
                        </motion.div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                              {stage.title}
                            </h3>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: 30 }}
                              transition={{ duration: 0.5 }}
                              className="h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                            />
                          </div>
                          <motion.div
                            className="flex-shrink-0"
                            animate={{ rotate: expandedStage === stage.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="text-blue-400"
                            >
                              <ArrowRight className="w-6 h-6" />
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm md:text-base ml-22 mt-3 relative">
                      {stage.description}
                    </p>

                    {/* Expanded Content */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: expandedStage === stage.id ? 1 : 0,
                        height: expandedStage === stage.id ? "auto" : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 ml-22 space-y-5 pt-4 border-t border-slate-700/50">
                        {/* Key Points */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            </motion.span>
                            Key Activities
                          </h4>
                          <ul className="space-y-2">
                            {stage.keyPoints.map((point, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="text-white/70 text-sm flex gap-3"
                              >
                                <span className="text-green-400 flex-shrink-0 mt-1">•</span>
                                <span>{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        {/* Goals */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Zap className="w-4 h-4 text-cyan-400" />
                            </motion.span>
                            Goals & Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {stage.goals.map((goal, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="text-white/70 text-sm flex gap-3"
                              >
                                <span className="text-cyan-400 flex-shrink-0 mt-1">✓</span>
                                <span>{goal}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Summary Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20 relative"
      >
        <div className="p-8 md:p-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl backdrop-blur-sm overflow-hidden relative group">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />

          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </motion.span>
              Why This Process Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Quality Assurance",
                  description: "Every stage includes checkpoints and approvals to maintain the highest quality standards.",
                  icon: CheckCircle
                },
                {
                  title: "Transparency",
                  description: "Regular meetings and clear communication keep you informed throughout the entire project lifecycle.",
                  icon: Users
                },
                {
                  title: "Efficiency",
                  description: "Our structured approach minimizes delays and ensures timely delivery without compromising quality.",
                  icon: Zap
                },
                {
                  title: "Support",
                  description: "We remain committed to your success even after launch, with ongoing monitoring and optimization.",
                  icon: Truck
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="space-y-3 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <h3 className="font-semibold text-blue-400 flex items-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.span>
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20 text-center relative"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Standard of Excellence?</h2>
        </motion.div>
        
        <p className="text-white/60 mb-8 text-lg">Let's discuss how we can help you build something extraordinary.</p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.a
            href="mailto:contact@infobluera.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 inline-block"
          >
            Start Your Project Today
          </motion.a>
          
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300 inline-block"
          >
            Schedule a Call
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
