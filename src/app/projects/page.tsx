import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sage-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-forest-900">
            Project Showcase
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-lime-500 rounded-full"></div>
            <div className="h-1 w-24 bg-lime-500 rounded-full"></div>
            <div className="h-1 w-12 bg-lime-500 rounded-full"></div>
          </div>
        </div>

        {/* Project Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="group relative bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-sage-300/30 
                        hover:bg-white/70 transition-all duration-300 cursor-not-allowed"
            >
              {/* Placeholder Image */}
              <div className="h-40 bg-forest-700/10 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full animate-pulse bg-gradient-to-r from-sage-300/20 to-lime-500/20"></div>
              </div>
              
              {/* Project Info */}
              <div className="space-y-2">
                <div className="h-6 w-3/4 bg-forest-700/10 rounded animate-pulse"></div>
                <div className="h-4 w-1/2 bg-forest-700/10 rounded animate-pulse"></div>
              </div>

              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/60 
                            transition-all duration-300 rounded-xl flex items-center justify-center">
                <span className="text-sage-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            {['Web Apps', 'Mobile Apps', 'UI/UX Design', 'Full-Stack Projects'].map((tech) => (
              <div key={tech} 
                   className="px-4 py-2 bg-white/70 rounded-full border border-sage-300/30 
                             text-forest-700 flex items-center gap-2">
                <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
                {tech}
              </div>
            ))}
          </div>

          <p className="text-forest-700 text-lg max-w-2xl mx-auto">
            Stay tuned as we showcase a collection of innovative projects demonstrating our technical expertise and creative problem-solving abilities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
