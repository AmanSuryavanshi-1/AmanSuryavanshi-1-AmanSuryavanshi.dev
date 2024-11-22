import { Github, ExternalLink, LinkIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

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
    <Card className="group overflow-auto rounded-3xl border-4 border-sage-100 bg-gradient-to-br from-lime-500 to-lime-100 hover:from-forest-900 hover:to-forest-500 transition-all duration-300 shadow-lg shadow-forest-500">
      <CardContent className="p-[1.1rem] flex flex-col items-center justify-between">
        <div className="flex flex-col items-center flex-grow">
          <div className="relative group mt-2 mb-4">
            <Image
              src={userData.avatar_url}
              alt="Avatar"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full border-[3px] border-sage-100 shadow-md shadow-forest-900 transition-all duration-300 group-hover:scale-105 object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-forest-900 group-hover:text-lime-500 mb-3 text-center transition-colors duration-300">
            {userData.name || userData.login}
          </h3>
          <p className="text-forest-700  group-hover:text-sage-100 text-center text-sm mb-4 max-w-xs transition-colors duration-300">
            {userData.bio}
          </p>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <Button
            asChild
            className="w-full bg-forest-900 border-[3px] border-sage-100 hover:bg-lime-500 text-sage-100 hover:text-forest-900 font-bold transition-all duration-300 rounded-full shadow-md flex items-center justify-center gap-2"
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
              className="w-full bg-transparent border-[3px] border-sage-100 text-forest-900 group-hover:text-sage-100 hover:bg-forest-900/20 font-bold transition-all duration-300 rounded-full flex items-center justify-center gap-2"
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
