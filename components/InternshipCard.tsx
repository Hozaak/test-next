'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Zap, MapPin, BookOpen, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAuth } from '@/lib/auth-context'
import { useState } from 'react'
import Link from 'next/link'

interface InternshipCardProps {
  id: string
  title: string
  company: string
  stipend: string
  location: string
  duration: string
  skills: string[]
  applicants: number
  isRecommended?: boolean
  image?: string
}

export function InternshipCard({
  id,
  title,
  company,
  stipend,
  location,
  duration,
  skills,
  applicants,
  isRecommended,
  image,
}: InternshipCardProps) {
  const { user } = useAuth()
  const [isApplying, setIsApplying] = useState(false)

  const handleApply = async () => {
    if (!user) {
      // Redirect to sign in if not logged in
      window.location.href = '/auth/signin'
      return
    }

    setIsApplying(true)
    try {
      // Here you would make an API call to record the application
      // For now, we'll just show a success message
      console.log(`Applied to ${title} at ${company}`)
      // You can add toast notification here
    } finally {
      setIsApplying(false)
    }
  }

  return (
    <motion.div
      className="relative group rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-accent text-accent-foreground">Recommended</Badge>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-32 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden flex items-center justify-center">
        {image ? (
          <img src={image || "/placeholder.svg"} alt={company} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="font-bold text-lg text-primary">
                {company.charAt(0).toUpperCase()}
              </span>
            </div>
            <p className="text-xs font-semibold text-muted-foreground text-center px-3">{company}</p>
          </div>
        )}

        {/* Applicants Badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            <Zap size={14} className="mr-1" />
            {applicants} Applied
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-3">
        {/* Verified Badge & Title */}
        <div>
          <div className="flex items-start gap-2 mb-1">
            <h3 className="font-bold text-sm text-foreground leading-tight flex-1">{title}</h3>
            <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
          </div>
          <p className="text-xs text-muted-foreground">{company}</p>
        </div>

        {/* Stipend */}
        <div className="flex items-baseline gap-1">
          <p className="text-sm font-bold text-primary">{stipend}</p>
          <p className="text-xs text-muted-foreground">/mo</p>
        </div>

        {/* Details Row */}
        <div className="flex items-center gap-3 text-xs border-t border-border pt-2">
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-secondary flex-shrink-0" />
            <span className="text-muted-foreground">{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} className="text-secondary flex-shrink-0" />
            <span className="text-muted-foreground">{duration}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1">
          {skills.slice(0, 2).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs bg-primary/10 text-primary px-2 py-0.5">
              {skill}
            </Badge>
          ))}
          {skills.length > 2 && (
            <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground px-2 py-0.5">
              +{skills.length - 2}
            </Badge>
          )}
        </div>

        {/* Apply Button */}
        {user ? (
          <Button
            onClick={handleApply}
            disabled={isApplying}
            className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold text-sm rounded-lg mt-2 h-9"
          >
            {isApplying ? 'Applying...' : 'Apply Now'}
          </Button>
        ) : (
          <Link href="/auth/signin" className="block">
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold text-sm rounded-lg mt-2 h-9">
              Sign In to Apply
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  )
}
