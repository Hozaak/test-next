'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InternshipCard } from '@/components/InternshipCard'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, BookOpen, Briefcase, CheckCircle, Shield, Zap, Star, GraduationCap, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  viewport: { once: true },
}

const featuredInternships = [
  {
    id: '1',
    title: 'Python Developer Intern',
    company: 'Arjuna AI Solutions',
    stipend: '₹2,000 - ₹8,000',
    location: 'Remote',
    duration: '3-6 months',
    skills: ['Python', 'Django'],
    applicants: 131,
    isRecommended: true,
    image: '/python.jpg'
  },
  {
    id: '2',
    title: 'Web Development Intern',
    company: 'InternAdda Enterprises',
    stipend: '₹2,500 - ₹5,000',
    location: 'Remote',
    duration: '2-3 months',
    skills: ['React', 'Next.js'],
    applicants: 150,
    isRecommended: true,
    image: '/react.jpg'
  },
  {
    id: '3',
    title: 'Data Science Intern',
    company: 'Larex Systems',
    stipend: '₹3,000 - ₹7,000',
    location: 'Remote',
    duration: '3-6 months',
    skills: ['Python', 'Pandas'],
    applicants: 130,
    isRecommended: true,
    image: '/datascience.jpg'
  },
]

const collaborationSlides = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg', '/slide4.jpg' , '/slide5.jpg', '/slide6.jpg'];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % collaborationSlides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Hero Section - Educational Blue/White Theme */}
        <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-[#E0F2FE] to-[#F8FAFC]">
          <div className="relative w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  className="space-y-8 text-center lg:text-left"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="inline-block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Badge className="bg-blue-600/10 text-blue-700 border-blue-200 px-4 py-2 rounded-full font-bold">
                      <CheckCircle size={16} className="mr-2" />
                      GOVERNMENT RECOGNIZED MSME
                    </Badge>
                  </motion.div>

                  <div className="space-y-4">
                    <h1 className="text-4xl sm:text-6xl font-black text-[#0F172A] leading-tight">
                      India's Most Trusted<br />
                      <span className="text-blue-600">Learning & Career</span> Platform
                    </h1>
                    <p className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                      7,000+ Students Enrolled. Gain industry-ready skills with verified internships and direct employer interviews.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-7 rounded-xl text-lg shadow-lg">
                      Explore Internships
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                    <div className="flex -space-x-3 items-center justify-center">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                          <img src={`/student${i}.jpg`} alt="Student" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      <p className="pl-6 text-sm font-bold text-slate-700 underline">7k+ Students Enrolled</p>
                    </div>
                  </div>
                </motion.div>

                {/* Right Visual Slider */}
                <motion.div
                  className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={slideIndex}
                      src={collaborationSlides[slideIndex]}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-blue-900/10" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Opportunities - Clean Look, No Filters */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div className="text-center mb-16 space-y-4" {...fadeInUp}>
              <h2 className="text-4xl font-black text-slate-900">Premium Internships</h2>
              <p className="text-slate-500">Hand-picked roles from our verified corporate partners</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredInternships.map((internship) => (
                <motion.div key={internship.id} variants={fadeInUp} initial="initial" whileInView="whileInView">
                  <InternshipCard {...internship} />
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 font-bold px-8">
                View All Opportunities
              </Button>
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="py-20 bg-[#F1F5F9]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900 leading-tight">
                  How We Build <span className="text-blue-600">Student Trust.</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: Shield, title: "Verified Employer Audit", desc: "Every company is vetted through MCA/MSME records before listing." },
                    { icon: Zap, title: "Zero Middlemen", desc: "Direct interview routing to the HR decision-makers." },
                    { icon: Award, title: "Industry Certificates", desc: "Blockchain-verified certificates recognized by 150+ companies." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                      <item.icon className="text-blue-600 flex-shrink-0" size={32} />
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-600 rounded-3xl p-10 text-white space-y-6 shadow-xl">
                <Star className="text-yellow-400 fill-yellow-400" size={48} />
                <h3 className="text-3xl font-black">Join a Community of Achievers</h3>
                <p className="text-blue-100 leading-relaxed">
                  "InternAdda provided me more than just an internship; they gave me the mentorship needed to crack my dream job at a top startup."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-400 overflow-hidden" />
                  <div>
                    <p className="font-bold">Rahul Verma</p>
                    <p className="text-sm text-blue-200">Placed at Larex Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW TRUST SECTION: Expert Mentorship */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-slate-900">Learn from Industry Leaders</h2>
              <p className="text-slate-500">Mentorship programs designed by professionals from top companies</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: GraduationCap, title: "Career Coaching", desc: "1-on-1 resume reviews and mock interviews with HR experts." },
                { icon: BookOpen, title: "Skill Workshops", desc: "Hands-on projects in Python, React, and Data Science." },
                { icon: Users, title: "Alumni Network", desc: "Connect with 7,000+ students already working in the industry." }
              ].map((item, i) => (
                <div key={i} className="text-center p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="text-blue-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section - Clean Branding */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center px-4 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Your Professional Journey <span className="text-blue-600">Starts Here.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-7 rounded-xl">
                APPLY FOR INTERNSHIPS
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 font-bold px-12 py-7 rounded-xl">
                HIRE FROM US
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
