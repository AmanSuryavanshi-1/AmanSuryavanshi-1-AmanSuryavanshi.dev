// import React, { useRef, useEffect } from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { Project } from './projectsData'
// import { cn } from '@/lib/utils'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// function ProjectCard({ project }: { project: Project }) {
//   const videoRef = useRef<HTMLVideoElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             videoRef.current?.play()
//           } else {
//             videoRef.current?.pause()
//           }
//         })
//       },
//       { threshold: 0.5 }
//     )

//     if (videoRef.current) {
//       observer.observe(videoRef.current)
//     }

//     return () => {
//       if (videoRef.current) {
//         observer.unobserve(videoRef.current)
//       }
//     }
//   }, [])

//   const cardClassName = cn(
//     "relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 group border-2 border-sage-100/20 bg-forest-900/80 hover:border-sage-100/40",
//     {
//       'row-span-2': project.size === 'tall',
//       'row-span-1': project.size === 'default',
//       'sm:col-span-2 col-span-1': project.size === 'wide',
//     }
//   );

//   return (
//     <motion.div
//       className={cardClassName}
//       whileHover={{ scale: 1.02 }}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forest-900/30 group-hover:opacity-0 transition-opacity duration-300" />
      
//       {project.video ? (
//         <video
//           ref={videoRef}
//           src={project.video}
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         />
//       ) : project.image ? (
//         <Image
//           src={project.image}
//           alt={project.title}
//           width={800}
//           height={600}
//           className="w-full h-full object-cover"
//         />
//       ) : null}

//       <div className="absolute inset-0 bg-gradient-to-t from-forest-900/95 via-forest-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
//         <div className="absolute inset-0 flex flex-col justify-end p-6">
//           <div className="space-y-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
//             <h3 className="text-2xl font-bold text-lime-400">{project.title}</h3>
//             <p className="text-gray-200 text-sm leading-relaxed">{project.description}</p>
            
//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               {project.technologies.map((tech, index) => (
//                 <div key={index} className="flex flex-col items-center gap-1">
//                   <tech.icon className="w-6 h-6 text-lime-400 hover:text-lime-300 transition-colors" title={tech.name} />
//                   <span className="text-xs text-gray-300">{tech.name}</span>
//                 </div>
//               ))}
//             </div>

//             <Link href={`/project/${project.slug}`} className="inline-block">
//               <Button 
//                 className="mt-2 px-6 py-2 bg-lime-500 hover:bg-lime-400 text-forest-900 font-medium 
//                           transition-all duration-300 rounded-full text-sm border border-white/20 
//                           hover:border-white/40 shadow-md"
//               >
//                 View Details
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default ProjectCard
