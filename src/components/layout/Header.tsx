'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/content';

const NAV_LINKS = navLinks;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAnimated, setMobileAnimated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileAnimated(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      const t = setTimeout(() => setMobileAnimated(true), 30);
      return () => clearTimeout(t);
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      router.push(href);
    }
  };

  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled
      ? 'bg-[#101113]/90 backdrop-blur-md border-b border-[#303136]/70 shadow-lg shadow-black/20'
      : 'bg-transparent'
  );

  return (
    <>
      <header className={headerClasses} role="banner">
        <div
          style={{
            maxWidth: '1240px',
            width: '100%',
            margin: '0 auto',
            padding: scrolled
              ? '0.85rem clamp(1.5rem, 4vw, 2.5rem)'
              : '1.25rem clamp(1.5rem, 4vw, 2.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            transition: 'padding 0.3s ease',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em',
              textDecoration: 'none',
              color: 'var(--color-primary)',
              fontWeight: 600,
            }}
            className="hover:opacity-80 transition-opacity"
            aria-label="Thols home"
          >
            THOLS.
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className="link-underline text-[0.875rem] font-normal text-[#B4B3B0] hover:text-[#F4F0E9] transition-colors"
                style={{
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.01em',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <Link
              href="#contact"
              onClick={(e) => handleNavClick('#contact', e)}
              className="hidden md:inline-flex items-center gap-1.5 text-[0.78rem] font-mono tracking-wider uppercase text-[#DDA875] hover:text-[#E9B98F] border border-[#303136] hover:border-[#DDA875] bg-[#1C1D20] px-4 py-1.5 transition-all"
            >
              Let&apos;s Connect
            </Link>

            {/* Mobile menu button (HIDDEN on desktop) */}
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden flex items-center justify-center p-2 text-[#F4F0E9] bg-[#1C1D20] border border-[#303136] hover:border-[#DDA875] transition-colors cursor-pointer"
            >
              {mobileOpen ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal={mobileOpen}
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-0 z-40 bg-[#101113]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 p-6 transition-all duration-300 md:hidden',
          mobileOpen ? 'flex opacity-100' : 'hidden opacity-0 pointer-events-none'
        )}
      >
        {NAV_LINKS.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(link.href, e)}
            className="text-[clamp(1.75rem,6vw,2.5rem)] font-medium text-[#F4F0E9] hover:text-[#DDA875] transition-colors tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              transitionDelay: `${index * 50}ms`,
            }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="#contact"
          onClick={(e) => handleNavClick('#contact', e)}
          className="mt-4 text-[0.82rem] font-mono tracking-wider uppercase text-[#DDA875] border border-[#DDA875] px-6 py-2.5 bg-[#1C1D20]"
        >
          Let&apos;s Connect
        </Link>
      </div>
    </>
  );
}
