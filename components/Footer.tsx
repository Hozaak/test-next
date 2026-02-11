import Link from 'next/link'
import { Mail, Linkedin, Twitter, ShieldCheck, Award, Users, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Official Blog', href: '/blog' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Support', href: '#' },
    ],
    Resources: [
      { label: 'Browse Internships', href: '/internships' },
      { label: 'Certification Courses', href: '/courses' },
      { label: 'Student Guides', href: '/blog' },
      { label: 'Hiring Solutions', href: '#' },
    ],
    Support: [
      { label: 'Help Center (FAQ)', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'MSME Verification', href: '#' },
    ],
  }

  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section: Branding & Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
                I
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-slate-900 leading-none">InternAdda</span>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">India's Adda for Internships</span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Empowering the next generation of professionals with verified opportunities, industry-recognized certifications, and direct mentorship. 
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "mailto:contact@internadda.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid: 2 columns on mobile, 3 on desktop */}
          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-5">
                <h3 className="font-black text-slate-900 text-sm uppercase tracking-wider">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-slate-200 mb-8">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 uppercase">MSME REGISTERED</p>
              <p className="text-[10px] text-slate-500 font-medium">UDYAM-MH-08-XXXXXXXX</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 uppercase">7,000+ STUDENTS</p>
              <p className="text-[10px] text-slate-500 font-medium">Verified Community</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 uppercase">500+ PARTNERS</p>
              <p className="text-[10px] text-slate-500 font-medium">Top Corporate Firms</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
            <MapPin size={12} className="text-slate-300" />
            <span>HQ: New Delhi, India • Serving Pan-India Students</span>
          </div>

          <p className="text-[11px] font-bold text-slate-400">
            © {currentYear} InternAdda Ecosystem. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
             <Link href="#" className="text-[11px] font-bold text-slate-400 hover:text-blue-600 transition-colors">HELP CENTER</Link>
             <Link href="#" className="text-[11px] font-bold text-slate-400 hover:text-blue-600 transition-colors">LEGAL</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
