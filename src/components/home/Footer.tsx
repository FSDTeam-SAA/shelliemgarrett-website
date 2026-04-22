'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-14 sm:py-16">
          <div className="lg:flex justify-between">

            {/* Company Info */}
            <div className="flex flex-col max-w-xl">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Image src="/images/mainLogo.png" width={300} height={300} alt='logo' className='w-full h-full'/>
                </div>
                {/* <span className="text-lg font-semibold text-foreground">
                  DonorsChoose
                </span> */}
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed">
                Supporting teachers and students since 2000. DonorsChoose makes
                it easy for anyone to help a classroom in need.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col mt-5 lg:mt-0 ">
              <h3 className="font-semibold text-foreground mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '/' },
                  // { label: 'What we do', href: '#' },
                  { label: 'How it works', href: '/how-it-works' },
                  { label: 'About us', href: '#' },
                  // { label: 'More', href: '#' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col mt-5 lg:mt-0">
              <h3 className="font-semibold text-foreground mb-5">
                Contact Us
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    123 Finance Street <br />
                    Douala, Cameroon
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+237123456789"
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    +237 123 456 789
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:info@creditmatch.com"
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    info@creditmatch.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-foreground/60">
            © 2025 Company name. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-service"
              className="text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}