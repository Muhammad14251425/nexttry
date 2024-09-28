'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Truck, BarChart, Globe, ArrowRight } from 'lucide-react'

export default function Component() {
  const [activeTab, setActiveTab] = useState('achievements')
  const [isPaused, setIsPaused] = useState(false)

  const tabs = [
    { id: 'achievements', label: 'Achievements', icon: BarChart },
    { id: 'vision', label: 'Vision', icon: Globe },
    { id: 'mission', label: 'Mission', icon: Truck },
  ]

  const content = {
    achievements: {
      title: 'Our Achievements',
      description: '3Ulogistics has been at the forefront of the logistics industry, consistently delivering outstanding results. Our commitment to innovation and customer satisfaction sets us apart in the fast-paced world of logistics.',
      stats: [
        { label: 'Successful Deliveries', value: '1M+' },
        { label: 'Client Satisfaction', value: '99%' },
        { label: 'Countries Served', value: '50+' },
      ],
    },
    vision: {
      title: 'Our Vision',
      description: 'Working towards revolutionizing and disrupting the logistics industry in Pakistan through technology and services, we are penetrating the industry via digitalization of transport services, ensuring absolute excellence.',
    },
    mission: {
      title: 'Our Mission',
      description: 'To ensure absolute excellence in transport services, we are integrating Phase 1 stage, allowing our clients with transparency in real-time access and updates of their dispatches. Phase 2 will lead our clients to a completely optimized supply chain system, allowing them direct access to their dispatches and removal of unnecessary intermediaries from the process.',
    },
  }

  // Automatically cycle through tabs every 4 seconds, but pause when isPaused is true
  useEffect(() => {
    if (isPaused) return

    const intervalId = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === prevTab)
        const nextIndex = (currentIndex + 1) % tabs.length
        return tabs[nextIndex].id
      })
    }, 4000) // Change every 4 seconds

    return () => clearInterval(intervalId) // Cleanup interval on component unmount
  }, [isPaused]) // Re-run the effect when isPaused changes

  // Handle mouse enter and leave events to pause and resume automatic tab switching
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // When user clicks a tab, change the active tab and stop automatic switching temporarily
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    setIsPaused(true)

    // Resume automatic switching after a small delay when a tab is clicked
    setTimeout(() => setIsPaused(false), 4000)
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white h-[500px] rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full">
        <div className="flex items-center">
          <div className="w-1/3 h-[500px] bg-[#ED3224] p-8 text-white flex justify-center flex-col">
            <h1 className="text-3xl font-bold mb-6">3Ulogistics</h1>
            <nav className="space-y-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center w-full text-left py-3 px-4 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-white text-[#ED3224]' : 'text-white hover:[#ED3224]'
                    }`}
                >
                  <tab.icon className="w-5 h-5 mr-3" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="w-2/3 p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* @ts-ignore */}
                <h2 className="text-3xl font-bold mb-6">{content[activeTab].title}</h2>
                {/* @ts-ignore */}
                <p className="text-gray-600 mb-8">{content[activeTab].description}</p>
                {activeTab === 'achievements' && (
                  <div className="grid grid-cols-3 gap-6">
                    {content.achievements.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 rounded-lg p-6 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-3xl font-bold text-[#ED3224] mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                )}
                {(activeTab === 'vision' || activeTab === 'mission') && (
                  <motion.button
                    className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#ED3224] hover:bg-[#ED3224] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
