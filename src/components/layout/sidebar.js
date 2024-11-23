import { useState } from 'react'
// import Bars3Icon from '@heroicons/react/24/outline'
import {  XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const sidebarLinks = [
  { name: 'Homepage', link: '/home' },
  { name: 'Events', link: '/events' },
  { name: 'Teaching Resources', link: '/teaching-resources' },
  { name: 'Chat Room',link: '/chatroom' },
  { name: 'Getting Started', link: '/getting-started' },
  { name: 'Account Settings', link: '/account-settings' },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Sidebar({ content }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="h-screen flex overflow-auto bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-0 z-10 overflow-y-auto bg-gray-800 bg-opacity-75 sm:hidden
         ${sidebarOpen ? 'block' : 'hidden'}`} 
         onClick={() => setSidebarOpen(false) }
         >
        <div className="flex justify-end p-4">
          <XMarkIcon className="h-8 w-8 text-white" onClick={() => setSidebarOpen(false)} />
        </div>
      </div>

      <div className="flex-shrink-0 w-64 bg-gray-800 text-white p-4 hidden sm:block">
        <div className="flex items-center space-x-2 mb-6">
          <img
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold">Company</span>
        </div>

        <nav className="space-y-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className={`block px-3 py-2 rounded-md text-gray-300 ${location.pathname === link.link ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col ">
        {/* <div className="relative flex items-center justify-between bg-gray-800 p-4 sm:hidden">
          <button
            className="text-gray-300"
            onClick={() => setSidebarOpen(false)
            }
          >
            <Bars3Icon className="h-8 w-8 text-white" />
          </button>
          <span className="text-white font-semibold text-lg">Dashboard</span>
        </div> */}
        <main className="flex-1 p-6 overflow-y-scroll">
          <h1 className="text-xl font-semibold  text-gray-900">{content}</h1>
          {/* Your main content goes here */}
          
          
        </main>
      </div>
    </div>
  )
}
