"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const PROJECTS = [
    {
        id: 1,
        title: "Niska",
        category: "Delivery & Inventory Management Mobile Application",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop",
        color: "#FACC15",
        description: "A mobile application developed to simplify delivery operations and inventory management for retail brands with real-time stock updates, billing, and shop location management.",
        technologies: ["Flutter", "Dart", "Firebase Firestore", "Firebase Cloud Messaging"],
        details: "Niska enables efficient handling of stock updates, billing processes, and shop location management through a single mobile interface with admin dashboard support.",
        year: "2023",
        link: "#",
        longDescription: `Niska is a mobile application developed to simplify delivery operations and inventory management for retail brands. The platform enables efficient handling of stock updates, billing processes, and shop location management through a single mobile interface.

Built using Flutter for a seamless cross-platform experience and Firebase for real-time data storage and notifications, the application allows businesses to track stock movements, calculate product pricing, and manage delivery-related information efficiently.

The system also supports an admin dashboard that provides centralized monitoring of inventory updates, shop details, and operational activities.

Problem:
Retail distribution teams often face difficulties managing stock updates, billing, and shop information using manual or disconnected systems. This leads to delays in operations, inaccurate stock records, and limited visibility of delivery activities. A centralized digital solution was required to simplify stock tracking, billing, and shop management while improving communication between field staff and administrators.

Solution:
Niska was developed as a mobile-based system to digitize and streamline delivery support operations. The application integrates inventory management, billing, and shop location tracking into a single platform, allowing teams to manage daily operations more efficiently. Using Firebase for real-time database management and notifications ensures that updates are instantly synchronized across the system, enabling faster and more reliable business processes.

Key Features:
• Automated price calculation and billing system
• Real-time stock update management
• Shop location tracking
• Push notifications for operational updates
• Admin dashboard for monitoring activities
• Cloud-based data management`,
        challenges: [
            "Retail distribution teams often face difficulties managing stock updates, billing, and shop information using manual or disconnected systems",
            "Delays in operations and inaccurate stock records",
            "Limited visibility of delivery activities",
            "Lack of centralized digital solution for stock tracking"
        ],
        results: [
            "Automated price calculation and billing system",
            "Real-time stock update management",
            "Shop location tracking",
            "Push notifications for operational updates",
            "Admin dashboard for monitoring activities",
            "Cloud-based data management"
        ]
    },
    {
        id: 2,
        title: "CityHub",
        category: "Smart City Dashboard",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
        color: "#3B82F6",
        description: "An intelligent city management system providing real-time analytics and data visualization for urban planning.",
        technologies: ["Next.js", "PostgreSQL", "Python", "D3.js"],
        details: "CityHub transforms urban data into actionable insights with interactive dashboards and real-time monitoring capabilities for city administrators.",
        year: "2023",
        link: "#",
        longDescription: `CityHub is an enterprise-grade smart city management platform designed to help urban administrators make data-driven decisions. It integrates data from various city systems to provide real-time insights.

• Real-time traffic flow monitoring and optimization
• Energy consumption tracking and reduction
• Public safety analytics and incident tracking
• Environmental quality monitoring
• Citizen feedback and complaint management
• Predictive maintenance for city infrastructure`,
        challenges: [
            "Processing millions of data points",
            "Real-time data visualization",
            "Integration with legacy systems"
        ],
        results: [
            "25% reduction in traffic congestion",
            "15% reduction in energy consumption",
            "40% faster response to citizen complaints"
        ]
    },
    {
        id: 3,
        title: "Perfect Tradelinks",
        category: "EdTech Mobile App",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        color: "#10B981",
        description: "A mobile-first educational platform connecting students with experienced mentors for personalized learning experiences.",
        technologies: ["Flutter", "Firebase", "REST API", "Redux"],
        details: "Perfect Tradelinks offers personalized learning paths, real-time collaboration tools, and progress tracking for students worldwide.",
        year: "2024",
        link: "#",
        longDescription: `Perfect Tradelinks bridges the gap between learners and experienced professionals through a mobile-first platform. Students can connect with mentors, access curated learning materials, and track their progress.

• Personalized learning paths based on goals
• Real-time video and text communication
• Progress tracking and analytics
• Curated course libraries
• Gamification and achievement badges
• Community-driven learning resources`,
        challenges: [
            "Cross-platform mobile development",
            "Real-time communication reliability",
            "Personalization algorithm optimization"
        ],
        results: [
            "10,000+ active users",
            "85% student satisfaction rate",
            "Average 20+ hours learning per month"
        ]
    },
    {
        id: 4,
        title: "Yadava",
        category: "Healthcare Management",
        image: "https://images.unsplash.com/photo-1576091160399-986f8a0e82d0?q=80&w=2070&auto=format&fit=crop",
        color: "#EC4899",
        description: "Advanced healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.",
        technologies: ["Next.js", "GraphQL", "PostgreSQL", "Tailwind"],
        details: "Yadava streamlines healthcare operations with HIPAA-compliant patient management and integrated telemedicine solutions.",
        year: "2024",
        link: "#",
        longDescription: `Yadava is a comprehensive healthcare platform that modernizes patient care and clinic management. Built with security and compliance at its core.

• Electronic patient records (EHR) management
• Appointment scheduling and reminders
• Telemedicine with encrypted video calls
• Prescription management system
• Lab results integration
• Insurance claim processing
• HIPAA-compliant data storage`,
        challenges: [
            "HIPAA compliance and data security",
            "System reliability and uptime",
            "Integration with medical devices"
        ],
        results: [
            "100% HIPAA compliant",
            "99.99% uptime guarantee",
            "50+ hospitals integrated"
        ]
    },
    {
        id: 5,
        title: "Hira Ayurvedic Hospital",
        category: "Healthcare Platform",
        image: "https://images.unsplash.com/photo-1631217b60f2-d0a4f0e37cf9?q=80&w=2070&auto=format&fit=crop",
        color: "#F59E0B",
        description: "Traditional Ayurvedic medicine practice management system with online consultation and treatment tracking.",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        details: "A specialized platform for Ayurvedic practitioners to manage patient consultations, treatment plans, and wellness tracking.",
        year: "2023",
        link: "#",
        longDescription: `Hira Ayurvedic Hospital's digital platform preserves traditional medicine practices while bringing them into the modern digital era.

• Online consultation booking
• Treatment plan management
• Herbal medicine catalog
• Patient wellness tracking
• Ayurvedic assessment tools
• Appointment reminders
• Digital prescriptions`,
        challenges: [
            "Preserving traditional knowledge",
            "Creating Ayurvedic-specific workflows",
            "Patient education integration"
        ],
        results: [
            "500+ patients served",
            "95% patient retention rate",
            "30+ treatment protocols documented"
        ]
    },
    {
        id: 6,
        title: "Enterprise Dashboard",
        category: "Business Intelligence",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        color: "#8B5CF6",
        description: "Comprehensive analytics dashboard for enterprise data visualization and business intelligence.",
        technologies: ["React", "D3.js", "PostgreSQL", "AWS"],
        details: "Enterprise Dashboard provides real-time analytics, custom reporting, and predictive insights for data-driven decision making.",
        year: "2024",
        link: "#",
        longDescription: `A powerful business intelligence platform that transforms raw data into actionable insights. Used by Fortune 500 companies.

• Real-time data visualization
• Custom dashboard creation
• Predictive analytics
• Data export in multiple formats
• Role-based access control
• Automated reporting
• API for data integration`,
        challenges: [
            "Handling large datasets",
            "Real-time data processing",
            "Complex visualization requirements"
        ],
        results: [
            "1M+ data points processed daily",
            "80% faster report generation",
            "Used by 50+ enterprises"
        ]
    },
];

export default function ProjectPage() {
    const params = useParams();
    const projectId = parseInt(params.id as string);
    const project = PROJECTS.find(p => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#040718] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <Link href="/#portfolio" className="text-blue-400 hover:text-blue-300">
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#040718] text-white">
            {/* Back Button */}
            <div className="sticky top-0 z-40 bg-[#040718]/80 backdrop-blur-md border-b border-slate-700/50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Link href="/#portfolio" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group">
                        <motion.span
                            animate={{ x: [0, -4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </motion.span>
                        Back to Portfolio
                    </Link>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040718]" />
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <div>
                        <p className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: project.color }}>
                            {project.category}
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            {project.title}
                        </h1>
                        <p className="text-lg text-white/60">Project Year: {project.year}</p>
                    </div>
                </motion.div>

                {/* Quick Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl"
                >
                    <p className="text-white/80 text-lg leading-relaxed">
                        {project.description}
                    </p>
                </motion.div>

                {/* Long Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold">Project Overview</h2>
                    <div className="text-white/80 whitespace-pre-line leading-relaxed">
                        {project.longDescription}
                    </div>
                </motion.div>

                {/* Challenges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold">Challenges</h2>
                    <div className="grid gap-3">
                        {project.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                                <span className="text-red-400 font-bold flex-shrink-0">•</span>
                                <p className="text-white/80">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Results */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold">Results & Impact</h2>
                    <div className="grid gap-3">
                        {project.results.map((result, idx) => (
                            <div key={idx} className="flex gap-3 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/30">
                                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                                <p className="text-white/80">{result}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <motion.span
                                key={tech}
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg font-medium text-white"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 pt-8 border-t border-slate-700/50"
                >
                    <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                    >
                        <ExternalLink className="w-5 h-5" />
                        View Project
                    </motion.a>
                    <Link
                        href="/#portfolio"
                        className="px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all"
                    >
                        Back to Portfolio
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
