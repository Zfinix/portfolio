"use client"

import { useState, useEffect } from 'react'
import { ExternalLinkIcon } from 'lucide-react'

interface OGData {
  title: string
  description: string
  image: string
  siteName: string
  url: string
}

interface LinkPreviewProps {
  url: string
  children: React.ReactNode
  showPreview?: boolean
  className?: string
}

export function LinkPreview({ 
  url, 
  children, 
  showPreview = false, 
  className = "" 
}: LinkPreviewProps) {
  const [ogData, setOgData] = useState<OGData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Test with static data for debugging
  const testData: OGData = {
    title: "Test Preview Title",
    description: "This is a test preview description to verify the component is working correctly.",
    image: "https://via.placeholder.com/400x200/6366f1/white?text=Test+Preview",
    siteName: "Test Site",
    url: url
  }

  useEffect(() => {
    if (showPreview && !ogData && !loading && !error) {
      fetchOGData()
    }
  }, [showPreview, ogData, loading, error])

  const fetchOGData = async () => {
    console.log('Fetching OG data for:', url)
    setLoading(true)
    try {
      const response = await fetch(`/api/og-preview?url=${encodeURIComponent(url)}`)
      console.log('Response status:', response.status)
      if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`)
      
      const data = await response.json()
      console.log('OG data received:', data)
      setOgData(data)
    } catch (err) {
      console.error('Error fetching OG data:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const handleMouseEnter = () => {
    console.log('Mouse entered link:', url)
    setIsHovered(true)
    if (!ogData && !loading && !error) {
      console.log('Triggering fetch for:', url)
      fetchOGData()
    }
  }

  const handleMouseLeave = () => {
    console.log('Mouse left link:', url)
    setIsHovered(false)
  }

  return (
    <div className="relative inline-block">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} ${isHovered ? 'bg-zinc-100 dark:bg-zinc-800' : ''} transition-colors`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>

      {/* Preview Card */}
      {(isHovered || showPreview) && (ogData || testData) && (() => {
        const displayData = ogData || testData
        return (
          <div className="absolute z-50 w-80 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-xl p-4 mt-2 -left-4 transform">
            {displayData.image && (
              <div className="w-full h-40 mb-3 rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={displayData.image}
                  alt={displayData.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            )}
            
            <div className="space-y-2">
              {displayData.title && (
                <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 line-clamp-2">
                  {displayData.title}
                </h4>
              )}
              
              {displayData.description && (
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3">
                  {displayData.description}
                </p>
              )}
              
              <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-700">
                {displayData.siteName && (
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    {displayData.siteName}
                  </span>
                )}
                <ExternalLinkIcon className="h-3 w-3 text-zinc-400 dark:text-zinc-500" />
              </div>
            </div>
          </div>
        )
      })()}

      {/* Loading State */}
      {(isHovered || showPreview) && loading && (
        <div className="absolute z-50 w-80 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-xl p-4 mt-2 -left-4">
          <div className="animate-pulse">
            <div className="w-full h-40 bg-zinc-200 dark:bg-zinc-700 rounded-md mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
              <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
              <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 