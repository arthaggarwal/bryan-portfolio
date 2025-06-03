
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/achievements', label: 'Achievements' },
];

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary text-secondary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-semibold transition-all duration-150 ease-in-out',
                  pathname === link.href
                    ? 'bg-primary text-primary-foreground shadow-sm' // Use primary (green) for active link
                    : 'hover:bg-secondary-foreground/10 hover:text-secondary-foreground',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-primary' // Use primary for focus ring
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
