'use client'
import { useState } from 'react';
import Image from "next/image";
import Welcome from './pages/Welcome';


function Posts() { return <div>Posts content</div> }
function Settings() { return <div>Settings content</div> }
function FindMe() { return <div>Settings content</div> }

export default function Home() {
   const [tab, setTab] = useState('about')

  // Tab config map
  const tabs = [
    { key: 'welcome', label: 'Welcome', component: <Welcome /> },
    { key: 'projects', label: 'Projects', component: <Posts /> },
    { key: 'career', label: 'Career', component: <Settings /> },
    { key: 'find_me', label: 'Find Me', component: <FindMe /> },
  ]
  return (
    <div className="font-sans flex">
      <div className="font-mono menu-left border-r border-gray-600 p-10 w-80 h-screen flex items-center justify-end">
        <ol className="text-right leading-12">
          {tabs.map((t) => (
          <li
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`pb-0 ${
              tab === t.key ? 'border-b-2 border-blue-500 font-semibold' : ''
            }`}
          >
            {t.label}
          </li>
        ))}
        </ol>
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center p-10 sm:items-start">
        {tabs.map((t) => (
          tab === t.key && (
            <div key={t.key}>
              {t.component}
            </div>
          )
        ))}
      </main>
    </div>
  );
}
