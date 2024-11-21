import { Code, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface LatestRepoCardProps {
  repo: {
    name: string
    description: string
    html_url: string
    homepage: string | null
    stargazers_count: number
    language: string | null
  }
  topics: string[]
}

export function LatestRepoCard({ repo, topics }: LatestRepoCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-xl border border-sage-200 bg-white hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-3 sm:p-5 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-lime-100 p-2 rounded-lg">
            <Code className="w-5 h-5 text-lime-600" />
          </div>
          <h4 className="text-lg font-bold text-forest-900">Latest Project</h4>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-2">
              <p className="text-lg font-bold text-forest-700 truncate max-w-full sm:max-w-[80%]">{repo.name}</p>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lime-600 border-b rounded-xl text-sm px-2 py-0.5 border-lime-600 flex items-center gap-2 justify-center hover:text-lime-800 transition-colors duration-300 whitespace-nowrap"
              >
                Repository <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-forest-600 text-sm mb-4">
              {repo.description || 'No description available'}
            </p>
            <div className="text-forest-700 mb-4">
              {topics.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm">Topics:</span>
                  {topics.map((topic) => (
                    <span 
                      key={topic} 
                      className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-2 text-sm text-forest-600">
                {repo.stargazers_count} stars
              </div>
            </div>
          </div>
          <Button
            asChild
            className="w-full bg-forest-900 hover:bg-forest-800 text-white hover:text-white hover:bg-forest-500 font-semibold transition-all duration-300 rounded-xl shadow-md flex items-center justify-center gap-2"
          >
            <a href={repo.homepage || repo.html_url} target="_blank" rel="noopener noreferrer">
              View Project
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
