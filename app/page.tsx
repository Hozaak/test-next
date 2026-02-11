'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InternshipCard } from '@/components/InternshipCard'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, CheckCircle, Shield, Zap, Award, GraduationCap, ChevronLeft, ChevronRight, Globe, Users } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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

const collaborationSlides = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg', '/slide4.jpg', '/slide5.jpg', '/slide6.jpg'];

const globalRecognition = [
  { name: 'Tracxn', logo: '/company1.jpg', desc: 'Leading Startup Data Platform' },
  { name: 'YourStory', logo: '/company2.jpg', desc: 'Top Tech Media Platform' },
  { name: 'NASSCOM', logo: '/company3.jpg', desc: 'IT Industry Association' },
  { name: 'MSME', logo: '/company4.jpg', desc: 'Govt. of India recognized' },
  { name: 'Inc42', logo: '/company5.jpg', desc: 'Startup News Ecosystem' },
  { name: 'TechCrunch', logo: '/company6.jpg', desc: 'Global Innovation Hub' },
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const recognitionRef = useRef<HTMLDivElement>(null);

  // Optimized Hero Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % collaborationSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollRecognition = (direction: 'left' | 'right') => {
    if (recognitionRef.current) {
      const { scrollLeft, clientWidth } = recognitionRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      recognitionRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-[#F0FDF4] to-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-6 text-center lg:text-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-green-100/80 hover:bg-green-100 text-green-700 border-green-200 px-4 py-1.5 rounded-full font-semibold shadow-sm text-xs sm:text-sm">
                  <CheckCircle size={14} className="mr-2 inline" />
                  MSME Registered: UDYAM-MH-08-XXXXXXXX
                </Badge>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15]">
                    Unlock Your Career<br />
                    <span className="text-blue-600">With Industry Experts</span>
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0">
                    Join 7,000+ students building their future through verified internships and direct employer connections.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6 rounded-xl text-md shadow-md">
                    Find Internships <ArrowRight className="ml-2" size={18} />
                  </Button>
                  <div className="flex -space-x-2 items-center justify-center">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm bg-slate-200">
                        <img src={`/student${i}.jpg`} alt="Student" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <p className="pl-4 text-sm font-bold text-slate-700">7k+ Students</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Visual Slider */}
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[450px] rounded-2xl overflow-hidden shadow-xl border-[6px] border-white">
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full w-full"
                  style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                >
                  {collaborationSlides.map((src) => (
                    <div key={src} className="min-w-full h-full">
                      <img src={src} alt="Project" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                  {collaborationSlides.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all ${slideIndex === i ? 'bg-white w-6' : 'bg-white/50 w-1.5'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Recognition Slider Section */}
        <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 flex items-center gap-3">
                  <Globe className="text-blue-600" /> Global Recognition
                </h2>
                <p className="text-slate-500 text-lg">Trusted by the industry's most influential platforms</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => scrollRecognition('left')} 
                  className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-blue-600 text-slate-600 hover:text-blue-600 transition-all shadow-sm"
                  aria-label="Previous logo"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => scrollRecognition('right')} 
                  className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-blue-600 text-slate-600 hover:text-blue-600 transition-all shadow-sm"
                  aria-label="Next logo"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            
            <div 
              ref={recognitionRef}
              className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory"
            >
              {globalRecognition.map((item, i) => (
                <div key={i} className="min-w-[260px] md:min-w-[300px] group snap-center">
                  <div className="bg-slate-50/80 rounded-3xl border border-slate-100 p-10 h-44 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 shadow-sm hover:shadow-md hover:bg-white">
                    <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="mt-5 px-3">
                    <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Opportunities Section */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Featured Opportunities</h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
              <p className="text-slate-500 max-w-md mx-auto pt-2">Hand-picked roles from our verified corporate partners</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredInternships.map((internship) => (
                <motion.div key={internship.id} variants={fadeInUp} initial="initial" whileInView="whileInView">
                  <InternshipCard {...internship} />
                </motion.div>
              ))}
            </div>
            
            <div className="mt-14 text-center">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 font-black px-10 py-6 rounded-xl">
                View All Opportunities
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center px-4 space-y-10">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
              Ready to Launch Your <span className="text-blue-600">Career?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-7 rounded-xl text-lg shadow-lg">
                APPLY FOR INTERNSHIPS
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 font-bold px-12 py-7 rounded-xl text-lg transition-all hover:bg-slate-50">
                PARTNER WITH US
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
