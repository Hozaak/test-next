'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircle2, Users, Building2, ArrowRight, 
  ShieldCheck, Star, Award, Briefcase, Zap,
  Globe, Clock, LayoutGrid, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { InternshipCard } from '@/components/InternshipCard';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const recognitionRef = useRef<HTMLDivElement>(null);

  // Images for the Hero Slider
  const sliderImages = [
    "/slide1.jpg", "/slide2.jpg", "/slide3.jpg", 
    "/slide4.jpg", "/slide5.jpg", "/slide6.jpg"
  ];

  // Recognition Logos
  const globalRecognition = [
    { name: 'Tracxn', logo: '/company1.jpg', desc: 'Leading Startup Data Platform' },
    { name: 'YourStory', logo: '/company2.jpg', desc: 'Top Tech Media Platform' },
    { name: 'NASSCOM', logo: '/company3.jpg', desc: 'IT Industry Association' },
    { name: 'MSME', logo: '/company4.jpg', desc: 'Govt. of India recognized' },
    { name: 'Inc42', logo: '/company5.jpg', desc: 'Startup News Ecosystem' },
  ];

  // Auto-slide effect for Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const scrollRecognition = (direction: 'left' | 'right') => {
    if (recognitionRef.current) {
      const { scrollLeft, clientWidth } = recognitionRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      recognitionRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      {/* 1. HERO SECTION - CENTERED FOR MOBILE */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#F0FDF4] to-[#F8FAFC] border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-1.5 rounded-full font-bold shadow-sm text-xs uppercase tracking-wider">
                <CheckCircle2 size={14} className="inline mr-2" /> 
                MSME Registered: UDYAM-MH-08-XXXXXXXX
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                India's Most Trusted <br/>
                <span className="text-indigo-600">Internship Ecosystem.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-500 max-w-lg mb-8 mx-auto lg:mx-0">
                Join 7,000+ students building their future through verified internships and direct employer connections.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-7 rounded-xl text-lg shadow-lg">
                  Find Internships <ArrowRight className="ml-2" size={20} />
                </Button>
                <div className="flex -space-x-3 items-center justify-center">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm bg-slate-200">
                      <img src={`/student${i}.jpg`} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <p className="pl-6 text-sm font-bold text-slate-700">7k+ Students Enrolled</p>
                </div>
              </div>
            </motion.div>

            {/* Auto-Scrolling Hero Visual */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
              <AnimatePresence mode='wait'>
                <motion.img 
                  key={currentSlide}
                  src={sliderImages[currentSlide]} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-4 right-4 flex gap-1.5">
                {sliderImages.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${currentSlide === i ? 'bg-white w-6' : 'bg-white/50 w-1.5'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GLOBAL RECOGNITION SLIDER */}
      <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                <Globe className="text-indigo-600" /> Global Recognition
              </h2>
              <p className="text-slate-500">Trusted by the industry's most influential platforms</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => scrollRecognition('left')} className="p-3 rounded-full border hover:bg-slate-50 transition-all shadow-sm"><ChevronLeft size={20} /></button>
              <button onClick={() => scrollRecognition('right')} className="p-3 rounded-full border hover:bg-slate-50 transition-all shadow-sm"><ChevronRight size={20} /></button>
            </div>
          </div>
          
          <div ref={recognitionRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory">
            {globalRecognition.map((item, i) => (
              <div key={i} className="min-w-[260px] md:min-w-[300px] group snap-center">
                <div className="bg-slate-50/80 rounded-3xl border border-slate-100 p-10 h-44 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 shadow-sm hover:bg-white">
                  <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="mt-4 px-3">
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY METRICS */}
      <div className="bg-[#F8FAFC] border-b border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Roles', value: '300+', icon: Briefcase },
              { label: 'Corporate Partners', value: '150+', icon: Building2 },
              { label: 'Avg. Stipend', value: '₹6,500', icon: Award },
              { label: 'Hiring Time', value: '48 Hours', icon: Clock },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                <div className="p-3 bg-white rounded-xl text-indigo-600 shadow-sm border border-slate-100">
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. FEATURED OPPORTUNITIES */}
      <section className="py-20 container mx-auto px-4">
        <motion.div className="text-center mb-16 space-y-3" {...fadeInUp}>
          <h2 className="text-4xl font-black text-slate-900">Featured Opportunities</h2>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 pt-2">Hand-picked roles from our verified corporate partners</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Use your InternshipCard component here */}
          {/* featuredInternships.map(internship => (
            <InternshipCard key={internship.id} {...internship} />
          )) */}
        </div>

        <div className="mt-14 text-center">
          <Button variant="outline" className="border-2 border-indigo-600 text-indigo-600 font-black px-10 py-6 rounded-xl">
            View All Internships
          </Button>
        </div>
      </section>

      {/* 5. QUALITY ASSURANCE SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black leading-tight">How we ensure <br/><span className="text-indigo-400">Quality.</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Manual Employer Audit", desc: "Every company is verified through MCA/MSME records before listing.", icon: ShieldCheck },
                  { title: "Direct Interview Routing", desc: "Our platform routes your assessment directly to the decision maker.", icon: Zap },
                  { title: "Certificate Ledger", desc: "Blockchain-ready certificates recognized by 150+ companies.", icon: Award }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                    <step.icon className="text-indigo-400 shrink-0" size={32} />
                    <div>
                      <h4 className="font-bold text-lg uppercase tracking-wider">{step.title}</h4>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
               <div className="bg-indigo-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                  <Star className="text-yellow-400 fill-yellow-400 absolute -top-4 -right-4 w-24 h-24 opacity-20" />
                  <h3 className="text-3xl font-black mb-6 italic">"The most transparent platform I have ever used for my career."</h3>
                  <div className="flex items-center gap-4 pt-6 border-t border-indigo-400">
                    <div className="w-14 h-14 rounded-full bg-indigo-400 border-2 border-white" />
                    <div>
                      <p className="font-bold text-lg">DU Student Alumni</p>
                      <p className="text-indigo-200 text-sm uppercase tracking-widest">7,000+ Placed</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Ready to Integrate into the <span className="text-indigo-600">Workforce?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-12 py-8 rounded-2xl text-lg shadow-xl">
              APPLY NOW
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 font-black px-12 py-8 rounded-2xl text-lg transition-all hover:bg-slate-50">
              PARTNER WITH US
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
