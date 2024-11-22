import { Card, CardContent } from '@/components/ui/card'

interface StatCardProps {
  icon: React.ElementType
  title: string
  value: number | string
}

export function StatCard({ icon: Icon, title, value }: StatCardProps) {
  return (
    <Card className="group overflow-hidden rounded-3xl border-4 border-sage-100 bg-gradient-to-br from-lime-500 to-lime-100 hover:from-forest-900 hover:to-forest-500 transition-all duration-300 shadow-lg shadow-forest-500">
      <CardContent className="p-4 flex items-center gap-4">
        <div className="p-2 rounded-full bg-forest-900 border-[3px] shadow-md shadow-forest-900 border-sage-100 text-lime-500 group-hover:bg-lime-500 group-hover:text-forest-900 transition-colors duration-300">
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-forest-900 group-hover:text-lime-500 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-md text-forest-700 group-hover:text-sage-100 transition-colors duration-300">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
