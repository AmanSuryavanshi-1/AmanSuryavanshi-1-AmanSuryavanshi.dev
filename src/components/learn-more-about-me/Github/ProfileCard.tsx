import { Github, ExternalLink, LinkIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProfileCardProps {
  userData: {
    avatar_url: string
    name: string
    login: string
    bio: string
    html_url: string
    blog?: string
  }
}

export function ProfileCard({ userData }: ProfileCardProps) {
  return (
    <Card className="w-full overflow-hidden rounded-2xl shadow-xl border border-sage-200 bg-white">
      <CardContent className="p-4 flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center">
          <div className="relative group mb-4">
            <img
              src={userData.avatar_url}
              alt="Avatar"
              className="w-28 h-28 rounded-full border-3 border-lime-600 transition-all duration-300 group-hover:scale-105 shadow-lg object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-full opacity-0 bg-forest-900 bg-opacity-70 group-hover:opacity-100">
              <Github className="w-6 h-6 text-lime-500" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-forest-900 mb-2 text-center">{userData.name || userData.login}</h3>
          <p className="text-forest-600 text-center text-sm mb-4 max-w-xs">{userData.bio}</p>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <Button
            asChild
            className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold transition-all duration-300 rounded-xl shadow-md flex items-center justify-center gap-2"
          >
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          {userData.blog && (
            <Button
              asChild
              variant="outline"
              className="w-full border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold transition-all duration-300 rounded-xl flex items-center justify-center gap-2"
            >
              <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                Website
                <LinkIcon className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
