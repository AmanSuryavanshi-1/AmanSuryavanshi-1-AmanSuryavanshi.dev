// import React, { useState, useRef, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// function ProjectCard({ project }: { project: Project }) {
//   const [isHovered, setIsHovered] = useState(false)
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

//   return (
//     <motion.div
//       className="relative overflow-hidden rounded-lg shadow-lg"
//       whileHover={{ scale: 1.05 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       {project.video ? (
//         <video
//           ref={videoRef}
//           src={project.video}
//           loop
//           muted
//           playsInline
//           className="w-full h-64 object-cover"
//         />
//       ) : (
//         <Image
//           src={project.image}
//           alt={project.title}
//           width={400}
//           height={300}
//           className="w-full h-64 object-cover"
//         />
//       )}
//       {/* ... rest of the component remains the same ... */}
//     </motion.div>
//   )
// }