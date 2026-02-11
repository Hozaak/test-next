'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrustBadges } from '@/components/TrustBadges'
import { InternshipCard } from '@/components/InternshipCard'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  ArrowRight, Search, TrendingUp, Users, BookOpen, 
  Briefcase, CheckCircle, Star, Shield, Zap, Clock, 
  ChevronLeft, ChevronRight, Award, Sparkles, Target,
  Rocket, GraduationCap, Building2, Globe2, Brain,
  Code2, Database, LineChart, Cpu, Laptop
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useState, useEffect, useRef } from 'react'

// Enhanced animations with 3D transforms
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-100px" },
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  viewport: { once: true },
}

const float3D = {
  initial: { y: 0, rotateX: 0, rotateY: 0 },
  whileInView: { 
    y: [-10, 10, -10],
    rotateX: [0, 5, 0],
    rotateY: [0, 5, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  },
}

const glowPulse = {
  initial: { boxShadow: "0 0 0 0 rgba(99, 102, 241, 0)" },
  whileInView: {
    boxShadow: ["0 0 0 0 rgba(99, 102, 241, 0)", "0 0 30px 5px rgba(99, 102, 241, 0.3)", "0 0 0 0 rgba(99, 102, 241, 0)"],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
}

// Enhanced internship data
const featuredInternships = [
  {
    id: '1',
    title: 'AI/ML Engineer Intern',
    company: 'Neural Labs',
    stipend: '₹3,000 - ₹12,000',
    location: 'Remote • Global',
    duration: '4-6 months',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
    applicants: 189,
    isRecommended: true,
    logo: '🧠',
    color: 'from-purple-500 to-blue-500'
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'TechFlow India',
    stipend: '₹4,000 - ₹15,000',
    location: 'Remote • Hybrid',
    duration: '3-6 months',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    applicants: 245,
    isRecommended: true,
    logo: '⚡',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '3',
    title: 'Cloud Architecture Intern',
    company: 'CloudMatrix',
    stipend: '₹3,500 - ₹14,000',
    location: 'Remote • Flexible',
    duration: '4-6 months',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    applicants: 156,
    isRecommended: true,
    logo: '☁️',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: '4',
    title: 'Cybersecurity Analyst',
    company: 'SecureNet',
    stipend: '₹3,000 - ₹13,000',
    location: 'Remote • WFH',
    duration: '3-5 months',
    skills: ['Network Security', 'Kali Linux', 'Python', 'SIEM'],
    applicants: 112,
    isRecommended: true,
    logo: '🔒',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: '5',
    title: 'Blockchain Developer',
    company: 'ChainForge',
    stipend: '₹4,500 - ₹18,000',
    location: 'Remote • Global',
    duration: '4-6 months',
    skills: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts'],
    applicants: 98,
    isRecommended: true,
    logo: '⛓️',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: '6',
    title: 'Data Science Intern',
    company: 'Analytix AI',
    stipend: '₹3,200 - ₹14,000',
    location: 'Remote • Flexible',
    duration: '3-6 months',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'Tableau'],
    applicants: 203,
    isRecommended: true,
    logo: '📊',
    color: 'from-indigo-500 to-purple-500'
  },
]

const qualityMetrics = [
  {
    icon: Shield,
    title: 'MANUAL EMPLOYER AUDIT',
    description: 'Every company verified through MCA/MSME records and background checks.',
    gradient: 'from-blue-500 to-indigo-500',
    stats: '100% Verified'
  },
  {
    icon: Zap,
    title: 'DIRECT INTERVIEW ROUTING',
    description: 'AI-powered matching routes your profile directly to decision makers.',
    gradient: 'from-purple-500 to-pink-500',
    stats: '3x Faster'
  },
  {
    icon: Award,
    title: 'BLOCKCHAIN CERTIFICATES',
    description: 'Tamper-proof credentials recognized by 200+ global enterprises.',
    gradient: 'from-emerald-500 to-teal-500',
    stats: 'Blockchain Secured'
  },
]

const globalPartners = [
  { 
    name: 'Tracxn', 
    title: 'Leading Startup Data Platform', 
    quote: '"InternAdda has built a transparent ecosystem that reduces hiring friction by 80% for startups."', 
    logo: '📊',
    gradient: 'from-blue-600 to-indigo-600'
  },
  { 
    name: 'YourStory', 
    title: 'Indian Startup Media Platform', 
    quote: '"The most trusted internship platform in India. Setting new standards in transparency."', 
    logo: '📰',
    gradient: 'from-red-600 to-orange-600'
  },
  { 
    name: 'NASSCOM', 
    title: 'National IT Industry Association', 
    quote: '"Bridging the skill gap between academia and industry with quality internships."', 
    logo: '🏢',
    gradient: 'from-purple-600 to-pink-600'
  },
  { 
    name: 'TechCrunch', 
    title: 'Global Tech Innovation', 
    quote: '"Revolutionizing how 100,000+ students find their first career opportunity."', 
    logo: '⚡',
    gradient: 'from-green-600 to-emerald-600'
  },
]

const homeStats = [
  { value: '10,000+', label: 'ACTIVE LEARNERS', icon: Users, prefix: '👥' },
  { value: '500+', label: 'COMPANY PARTNERS', icon: Building2, prefix: '🏢' },
  { value: '₹8,500', label: 'AVG. MONTHLY STIPEND', icon: TrendingUp, prefix: '💰' },
  { value: '24 Hours', label: 'AVG. RESPONSE TIME', icon: Clock, prefix: '⚡' },
]

const skills = [
  { name: 'AI/ML', icon: Brain, color: 'from-purple-400 to-purple-600' },
  { name: 'Web Dev', icon: Code2, color: 'from-blue-400 to-blue-600' },
  { name: 'Data Science', icon: Database, color: 'from-green-400 to-green-600' },
  { name: 'Cloud', icon: Globe2, color: 'from-orange-400 to-orange-600' },
  { name: 'Cybersecurity', icon: Shield, color: 'from-red-400 to-red-600' },
  { name: 'Blockchain', icon: Cpu, color: 'from-yellow-400 to-yellow-600' },
  { name: 'DevOps', icon: Laptop, color: 'from-indigo-400 to-indigo-600' },
  { name: 'UI/UX', icon: Sparkles, color: 'from-pink-400 to-pink-600' },
]

const whyChooseFeatures = [
  {
    icon: Rocket,
    title: 'Accelerated Growth',
    description: 'Work on real projects that matter. Build portfolio that stands out.',
    gradient: 'from-blue-500 to-indigo-500',
    stats: '10x Learning'
  },
  {
    icon: Target,
    title: 'Precision Matching',
    description: 'AI algorithms match you with opportunities aligned to your skills.',
    gradient: 'from-purple-500 to-pink-500',
    stats: '95% Match Rate'
  },
  {
    icon: GraduationCap,
    title: 'Expert Mentorship',
    description: 'Learn from industry veterans with 10+ years of experience.',
    gradient: 'from-emerald-500 to-teal-500',
    stats: '1:1 Mentoring'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Certificates valued by 500+ leading companies globally.',
    gradient: 'from-orange-500 to-red-500',
    stats: 'Global Recognition'
  },
  {
    icon: Briefcase,
    title: 'Placement Assistance',
    description: 'Guaranteed interview opportunities with top partners.',
    gradient: 'from-cyan-500 to-blue-500',
    stats: '90% Placement'
  },
  {
    icon: Star,
    title: 'Career Growth',
    description: 'Dedicated career coach and resume building workshops.',
    gradient: 'from-yellow-500 to-amber-500',
    stats: 'Lifetime Access'
  },
]

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacityRange = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // 3D Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleCarouselNext = () => {
    setCarouselIndex((prev) => (prev + 1) % globalPartners.length)
  }

  const handleCarouselPrev = () => {
    setCarouselIndex((prev) => (prev - 1 + globalPartners.length) % globalPartners.length)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        
        {/* 3D Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl" />
        </div>

        {/* Enhanced Hero Section with 3D Parallax */}
        <section 
          ref={heroRef}
          className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content with Enhanced Animations */}
                <motion.div
                  className="space-y-10"
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Premium Badge with Glow */}
                  <motion.div
                    className="inline-block"
                    variants={glowPulse}
                    initial="initial"
                    animate="whileInView"
                  >
                    <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary border-primary/30 px-6 py-2.5 rounded-full text-sm font-bold backdrop-blur-sm">
                      <Sparkles size={16} className="mr-2 text-primary" />
                      MSME REGISTERED • UDYAM-MH-08-XXXXXXX
                    </Badge>
                  </motion.div>

                  {/* Main Headline with Gradient Text */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                      <span className="text-white">India's #1</span>
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                        Tech Internship
                      </span>
                      <br />
                      <span className="text-white">Ecosystem</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed">
                      Join <span className="text-primary font-bold">10,000+</span> students who've accelerated their careers. 
                      Verified companies. <span className="text-secondary">Premium stipends.</span> Direct mentorship.
                    </p>
                  </motion.div>

                  {/* Enhanced CTA Buttons with 3D Hover */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-5"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Button
                      size="lg"
                      className="group relative bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg px-10 py-7 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
                    >
                      <span className="relative z-10 flex items-center">
                        Explore Opportunities
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                    
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50"
                    >
                      <GraduationCap className="mr-2" size={22} />
                      Practice Mode
                    </Button>
                  </motion.div>

                  {/* Enhanced Social Proof with 3D Cards */}
                  <motion.div
                    className="flex items-center gap-8 pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="flex -space-x-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-slate-900 flex items-center justify-center text-white font-bold"
                          whileHover={{ scale: 1.2, y: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {String.fromCharCode(64 + i)}
                        </motion.div>
                      ))}
                    </div>
                    <div>
                      <p className="text-2xl font-black text-white">10,000+</p>
                      <p className="text-sm text-gray-400 font-semibold">STUDENTS PLACED IN 2024</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Visual - 3D Floating Elements */}
                <motion.div
                  className="relative h-[500px] hidden lg:block"
                  variants={float3D}
                  initial="initial"
                  animate="whileInView"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Main 3D Card */}
                    <motion.div
                      className="relative w-96 h-96 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
                      style={{
                        transform: `perspective(1000px) rotateY(${mousePosition.x * 20}deg) rotateX(${-mousePosition.y * 20}deg)`,
                      }}
                    >
                      {/* Floating Elements */}
                      <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-3xl shadow-lg animate-float">
                        🚀
                      </div>
                      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg animate-float-delayed">
                        💼
                      </div>
                      
                      {/* Content */}
                      <div className="h-full flex flex-col justify-center space-y-6">
                        <div className="space-y-2">
                          <p className="text-primary font-bold text-sm">FEATURED OPPORTUNITY</p>
                          <h3 className="text-2xl font-black text-white">AI Research Intern</h3>
                          <p className="text-gray-400">Neural Labs • ₹12,000/month</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {['Python', 'TensorFlow', 'PyTorch'].map((skill) => (
                            <Badge key={skill} className="bg-white/10 text-white border-white/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="pt-4 border-t border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Only 3 spots left</span>
                            <Button className="bg-primary hover:bg-primary/90 text-white">
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Stats Row with 3D Hover */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
                variants={staggerContainer}
                initial="initial"
                animate="whileInView"
              >
                {homeStats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      className="group relative"
                      variants={fadeInUp}
                      whileHover={{ y: -10 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl">
                            <Icon className="text-primary" size={28} />
                          </div>
                          <div>
                            <p className="text-3xl sm:text-4xl font-black text-white">{stat.value}</p>
                            <p className="text-xs text-gray-400 font-semibold mt-1">{stat.label}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Quality Assurance Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-20 space-y-4"
                {...fadeInUp}
              >
                <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2 rounded-full text-sm font-bold mb-4">
                  WHY TRUST US
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-black">
                  <span className="text-white">Quality </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Assured.
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Every internship undergoes rigorous verification. We don't compromise on quality.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Quality Features with 3D Cards */}
                <motion.div
                  className="space-y-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  {qualityMetrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      className="group relative"
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <div className="flex gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                              <metric.icon className="text-white" size={32} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="font-black text-xl text-white">{metric.title}</h3>
                              <Badge className="bg-gradient-to-r from-primary/30 to-secondary/30 text-white border-0">
                                {metric.stats}
                              </Badge>
                            </div>
                            <p className="text-gray-400 leading-relaxed">{metric.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced Global Recognition Carousel */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-6 py-2 rounded-full text-sm font-bold mb-6">
                    TRUSTED BY INDUSTRY LEADERS
                  </Badge>
                  
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10">
                      <blockquote className="space-y-6">
                        <div className="text-6xl text-primary/20 font-serif">"</div>
                        <p className="text-xl sm:text-2xl font-semibold text-white italic leading-relaxed">
                          {globalPartners[carouselIndex].quote}
                        </p>
                        <div className="flex items-center gap-5">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-3xl font-bold shadow-xl">
                            {globalPartners[carouselIndex].logo}
                          </div>
                          <div>
                            <p className="font-black text-xl text-white">{globalPartners[carouselIndex].name}</p>
                            <p className="text-gray-400">{globalPartners[carouselIndex].title}</p>
                          </div>
                        </div>
                      </blockquote>
                      
                      {/* Enhanced Navigation */}
                      <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          {globalPartners.map((_, idx) => (
                            <button
                              key={`dot-${idx}`}
                              onClick={() => setCarouselIndex(idx)}
                              className={`relative transition-all duration-300 ${
                                idx === carouselIndex ? 'w-10' : 'w-3'
                              } h-3 rounded-full bg-gradient-to-r from-primary to-secondary`}
                            >
                              <span className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary ${
                                idx === carouselIndex ? 'animate-ping opacity-25' : ''
                              }`} />
                            </button>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={handleCarouselPrev}
                            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={handleCarouselNext}
                            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Domain Filter Section */}
        <section className="py-12 bg-slate-900/50 backdrop-blur-sm border-y border-white/5 sticky top-0 z-20">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
                <div>
                  <h2 className="text-2xl font-black text-white mb-2">Browse by Domain</h2>
                  <p className="text-gray-400">Find your perfect internship in emerging technologies</p>
                </div>
                <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 px-6 py-3 rounded-xl">
                  View All Domains
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  All Domains
                </motion.button>
                
                {skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <motion.button
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                      <div className="relative px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl text-white font-semibold flex items-center gap-3 transition-all duration-300">
                        <Icon size={20} className={`text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`} />
                        {skill.name}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Featured Opportunities Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16 space-y-4"
                {...fadeInUp}
              >
                <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2 rounded-full text-sm font-bold mb-4">
                  TRENDING NOW
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-black">
                  <span className="text-white">Featured </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Opportunities
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Hand-picked premium internships from top tech companies
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {featuredInternships.map((internship) => (
                  <motion.div
                    key={internship.id}
                    variants={fadeInUp}
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="group relative h-full">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
                      <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                        {/* Company Logo/Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${internship.color} flex items-center justify-center text-3xl mb-5 shadow-lg`}>
                          {internship.logo}
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-start justify-between">
                              <h3 className="text-xl font-black text-white mb-1">{internship.title}</h3>
                              {internship.isRecommended && (
                                <Badge className="bg-primary/20 text-primary border-primary/30">
                                  🔥 Hot
                                </Badge>
                              )}
                            </div>
                            <p className="text-gray-400 font-medium">{internship.company}</p>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {internship.skills.map((skill) => (
                              <Badge key={skill} className="bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 transition-colors">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="space-y-2 pt-2">
                            <div className="flex items-center text-gray-400">
                              <Briefcase size={16} className="mr-2" />
                              <span className="text-sm">{internship.stipend}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <Globe2 size={16} className="mr-2" />
                              <span className="text-sm">{internship.location}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <Clock size={16} className="mr-2" />
                              <span className="text-sm">{internship.duration}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <Users size={16} className="mr-2" />
                              <span className="text-sm">{internship.applicants}+ applicants</span>
                            </div>
                          </div>
                          
                          <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-6 rounded-xl group-hover:shadow-lg transition-all duration-300">
                            Apply Now
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                className="text-center mt-16"
                {...fadeInUp}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 font-bold px-12 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  View All 500+ Internships
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us Section */}
        <section className="py-24 sm:py-32 bg-slate-900">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-20 space-y-4"
                {...fadeInUp}
              >
                <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-6 py-2 rounded-full text-sm font-bold mb-4">
                  WHY INTERNADDA
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-black">
                  <span className="text-white">Accelerate Your </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Career Growth
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Everything you need to transition from student to professional
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {whyChooseFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative"
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="text-white" size={32} />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-black text-white">{feature.title}</h3>
                          <Badge className="bg-white/10 text-white border-white/20">
                            {feature.stats}
                          </Badge>
                        </div>
                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                      </div>
                      
                      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="text-primary" size={24} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          
          <div className="relative w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <motion.h2
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight"
                {...fadeInUp}
              >
                Ready to Launch Your
                <br />
                <span className="relative">
                  Tech Career?
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-white/30 rounded-full" />
                </span>
              </motion.h2>
              
              <motion.p
                className="text-xl text-white/90 max-w-2xl mx-auto"
                {...fadeInUp}
              >
                Join 10,000+ students who've already transformed their careers through InternAdda.
                Your dream internship is just one click away.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                {...fadeInUp}
              >
                <Button
                  size="lg"
                  className="group bg-white text-primary hover:bg-white/90 font-bold text-lg px-12 py-7 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
                >
                  Apply Now - It's Free
                  <Rocket className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={22} />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-12 py-7 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  Talk to Career Coach
                  <GraduationCap className="ml-2" size={22} />
                </Button>
              </motion.div>
              
              <motion.div
                className="flex items-center justify-center gap-8 pt-8 text-white/80"
                {...fadeInUp}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-white" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-white" />
                  <span>24x7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-white" />
                  <span>Money-back guarantee</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </>
  )
}
