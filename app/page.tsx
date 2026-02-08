'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Welcome from './pages/Welcome'

export default function Home() {
  return <Welcome />
}
