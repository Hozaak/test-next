'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  CheckCircle2,
  Building2,
  ArrowRight,
  Award,
  Briefcase,
  Clock,
  LayoutGrid,
} from 'lucide-react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { InternshipCard } from '@/components/InternshipCard'
import { Button } from '@/components/ui/button'

import { MOCK_INTERNSHIPS, CATEGORIES } from '@/constants'

const Home = () => {
  const safeInternships = Array.isArray(MOCK_INTERNSHIPS)
    ? MOCK_INTERNSHIPS
    : []

  const safeCategories = Array.isArray(CATEGORIES)
    ? CATEGORIES
    : []

  const [selectedCategory, setSelectedCategory] = useState(
    safeCategories[0] || 'All Internships'
  )
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    Array(6).fill(false)
  )

  const displayedInternships = useMemo(
    () => safeInternships.slice(0, 3),
    [safeInternships]
  )

  const sliderImages = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
    '/slide4.jpg',
    '/slide5.jpg',
    '/slide6.jpg',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      )
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const filteredInternships =
    selectedCategory === 'All Internships'
      ? displayedInternships
      : displayedInternships.filter(
          (i: any) => i?.category === selectedCategory
        )

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const updated = [...prev]
      updated[index] = true
      return updated
    })
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative pt-12 pb-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs mb-6 uppercase tracking-wider">
                <CheckCircle2 size={14} />
                MSME Registered
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                India's Largest Dedicated <br />
                <span className="text-indigo-600">
                  Internship Ecosystem.
                </span>
              </h1>

              <p className="text-base text-slate-500 max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0">
                Access verified companies. Transparent stipends.
                Direct interview pipelines.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/internships">
                  <Button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold text-sm hover:bg-indigo-700 flex items-center gap-2">
                    Find Internships <ArrowRight size={16} />
                  </Button>
                </Link>

                <Link href="/tests">
                  <Button
                    variant="outline"
                    className="px-6 py-3 font-bold text-sm rounded-lg border border-slate-300"
                  >
                    Practice Mode
                  </Button>
                </Link>
              </div>
            </div>

            {/* SLIDER */}
            <div className="hidden lg:block relative">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl aspect-[4/3] flex items-center justify-center relative">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={sliderImages[currentSlide] || ''}
                      className="w-full h-full object-cover"
                      onLoad={() => handleImageLoad(currentSlide)}
                      style={{
                        display: imagesLoaded[currentSlide]
                          ? 'block'
                          : 'none',
                      }}
                      alt="Slide"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* METRICS */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Roles', value: '300+', icon: Briefcase },
              { label: 'Corporate Partners', value: '150+', icon: Building2 },
              { label: 'Avg. Stipend', value: '₹6,500', icon: Award },
              { label: 'Hiring Time', value: '48 Hours', icon: Clock },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="p-2 bg-slate-50 rounded-lg text-indigo-600 border border-slate-100">
                  <stat.icon size={20} />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Featured Opportunities
          </h2>

          <div className="flex flex-wrap gap-2 justify-center">
            {safeCategories.slice(0, 4).map((cat: string) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-500 border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship: any) =>
            internship ? (
              <InternshipCard
                key={internship.id}
                internship={internship}
              />
            ) : null
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/internships">
            <Button
              variant="outline"
              className="flex items-center gap-2 px-8 py-3 border border-slate-200 text-slate-900 rounded-lg font-bold text-sm"
            >
              <LayoutGrid size={16} className="text-indigo-600" />
              View All Internships ({safeInternships.length})
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
