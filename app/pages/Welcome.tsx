'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";
import TypingText from '.././components/TypingText';


export default function Welcome() {

  return (
    <div className={`relative font-mono whitespace-pre-line`}>
      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={80}
          height={12}
          priority
        />
        <Image
          src="/cute-baby.jpg"
          alt="Vercel logomark"
          width={500}
          height={38}
        />
        <TypingText 
          text={`Hi, I'm Wahyu.\nI build modern web experiences.\nLaravel • React • Next.js .\n tes aja`} 
        />
    </div>
  )
}
