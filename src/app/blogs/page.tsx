import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sage-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-forest-900 mb-4">
            Our Blog
          </h1>
          <div className="h-1 w-24 bg-lime-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-sage-300/30">
          <h2 className="text-2xl font-semibold text-forest-700 mb-6">
            Something Exciting is Brewing! 🚀
          </h2>
          <p className="text-xl text-forest-500 mb-8">
            We&apos;re crafting amazing content to share with you. Our blog will feature insights about:
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {['Technical Insights', 'Best Practices', 'Industry Trends', 'Tutorial Guides'].map((item) => (
              <div key={item} className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg">
                <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
                <span className="text-forest-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-8">
            <div className="animate-pulse inline-block px-6 py-3 bg-forest-900/90 rounded-full">
              <span className="text-sage-100 text-lg">
                Coming Soon...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
