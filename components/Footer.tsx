import Link from 'next/link'
import { Mail, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Resources: [
      { label: 'Internships', href: '/internships' },
      { label: 'Courses', href: '/courses' },
      { label: 'Guides', href: '/blog' },
      { label: 'FAQ', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
  }

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mb-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                I
              </div>
              <span>InternAdda</span>
            </Link>
            <p className="text-sm text-foreground/70 mb-4">
              India's Adda for Internships. Learn • Intern • Earn. Connect with verified internship opportunities.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground/70 hover:text-primary"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground/70 hover:text-primary"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contact@internadda.com"
                className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground/70 hover:text-primary"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={`${category}-${idx}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/60">
              MSME Registered • Udyam Registration Number
            </p>
            <p className="text-xs text-foreground/60">
              Trusted by 7,000+ Students • 500+ Verified Internships
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/60">
            © {currentYear} InternAdda. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
