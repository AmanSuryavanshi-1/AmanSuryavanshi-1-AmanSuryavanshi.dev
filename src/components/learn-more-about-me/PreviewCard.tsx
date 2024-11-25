import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowUpRight} from 'lucide-react'
import { projects } from '@/components/projects/projectsData'
import { useRef, useEffect } from 'react'

interface PreviewCardProps {
  type: 'projects' | 'blogs'
  onEnter: () => void
}

export default function PreviewCard({ type, onEnter }: PreviewCardProps) {
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  
  const videoProjects = projects.filter(project => project.video).slice(0, 2)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef1.current?.play()
            videoRef2.current?.play()
          } else {
            videoRef1.current?.pause()
            videoRef2.current?.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (videoRef1.current) observer.observe(videoRef1.current)
    if (videoRef2.current) observer.observe(videoRef2.current)

    return () => {
      if (videoRef1.current) observer.unobserve(videoRef1.current)
      if (videoRef2.current) observer.unobserve(videoRef2.current)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full left-0 w-full mt-2 bg-forest-900 rounded-lg shadow-xl border-2 border-sage-300 p-4 z-10"
    >
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h3 className="text-sage-100 font-semibold">
            {type === 'projects' ? 'Featured Projects' : 'Latest Blogs'}
          </h3>
          {type === 'projects' ? (
            <div className="grid grid-cols-2 gap-2">
              {videoProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="bg-forest-700 p-2 rounded group hover:bg-forest-500 transition-colors duration-300"
                >
                  <video
                    ref={index === 0 ? videoRef1 : videoRef2}
                    src={project.video}
                    className="w-full h-20 object-cover rounded"
                    muted
                    loop
                    playsInline
                  />
                  <p className="text-sage-100 text-sm mt-2 line-clamp-1">{project.title}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              <div className="bg-forest-700 p-2 rounded hover:bg-forest-500 transition-colors duration-300">
                <p className="text-sage-100 text-sm">Latest Blog Post Title</p>
                <p className="text-sage-300 text-xs">2 days ago</p>
              </div>
              <div className="bg-forest-700 p-2 rounded hover:bg-forest-500 transition-colors duration-300">
                <p className="text-sage-100 text-sm">Another Blog Post Title</p>
                <p className="text-sage-300 text-xs">1 week ago</p>
              </div>
            </div>
          )}
        </div>
        <Button 
          onClick={onEnter}
          className="w-full bg-lime-500 hover:bg-lime-700 text-forest-900 font-semibold group"
        >
          View All {type === 'projects' ? 'Projects' : 'Blogs'}
          <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  )
}