'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import Welcome from './pages/Welcome';
// import Projects from './pages/Projects';
// import Career from './pages/Career';
// import ScrollTrigger from './pages/FindMe';
import { div } from 'framer-motion/client';

import Image from "next/image";

import { useState } from 'react';

export default function SideBar() {
    const pathname = usePathname()
   const [tab, setTab] = useState('welcome')
  // Tab config map
  const tabs = [
  { href: '/', label: 'Welcome' },
  { href: '/projects', label: 'Projects' },
  { href: '/career', label: 'Career' },
  { href: '/findme', label: 'Find Me' },
]
    return(
        <div className="font-mono menu-left border-r border-gray-600 p-10 w-80 h-screen flex items-center justify-end relative">
          <ol className="text-right leading-12">
            {tabs.map((t) => (
              <li key={t.href} className="pb-0">
                <Link
                  href={t.href}
                  className={`block ${
                    pathname === t.href
                      ? 'border-b-2 border-blue-500 font-semibold'
                      : ''
                  }`}
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ol>
          <Image
            className="dark:invert absolute bottom-2 left-1/2 -translate-1/2"
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={12}
            priority
          />
        </div>
    )
}