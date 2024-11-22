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
    <Card className="group overflow-hidden rounded-3xl border-4 border-sage-100 bg-gradient-to-br from-lime-500 to-lime-100 hover:from-forest-900 hover:to-forest-500 transition-all duration-300 shadow-lg shadow-forest-500">
      <CardContent className="p-5 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-forest-900 border-[3px] shadow-md shadow-forest-900 border-sage-100 text-lime-500 group-hover:bg-lime-500 group-hover:text-forest-900 transition-colors duration-300">
            <Code className="w-4 h-4" />
          </div>
          <h4 className="text-xl font-bold text-forest-900 group-hover:text-lime-500 transition-colors duration-300">
            Latest Project
          </h4>
        </div>
        
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <p className="text-lg font-bold text-forest-700 group-hover:text-sage-100 transition-colors duration-300 truncate max-w-full sm:max-w-[80%]">
                {repo.name}
              </p>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest-900 group-hover:text-sage-100 border-[2px] rounded-full text-sm px-3 py-1 border-sage-100 flex items-center gap-2 justify-center hover:bg-forest-900/20 transition-all duration-300 whitespace-nowrap"
              >
                Repository <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-forest-700 group-hover:text-sage-100 text-sm mb-4 transition-colors duration-300">
              {repo.description || 'No description available'}
            </p>
            <div className="text-forest-700 mb-4">
              {topics.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-forest-900 group-hover:text-sage-100 transition-colors duration-300">
                    Topics:
                  </span>
                  {topics.map((topic) => (
                    <span 
                      key={topic} 
                      className="bg-forest-900/10 group-hover:bg-forest-900/20 text-forest-900 group-hover:text-sage-100 px-3 py-1 rounded-full text-xs font-medium border border-sage-100 transition-colors duration-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
              {repo.stargazers_count > 0 && <div className="mt-2 text-sm text-forest-700 group-hover:text-sage-100 transition-colors duration-300">
                {repo.stargazers_count} stars
              </div>}
            </div>
          </div>
          <Button
            asChild
            className="w-full bg-forest-900 border-[3px] border-sage-100 hover:bg-lime-500 text-sage-100 hover:text-forest-900 font-bold transition-all duration-300 rounded-full shadow-md flex items-center justify-center gap-2"
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
