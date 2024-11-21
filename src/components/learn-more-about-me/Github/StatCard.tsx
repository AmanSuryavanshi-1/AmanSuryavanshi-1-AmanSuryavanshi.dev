import { Card, CardContent } from '@/components/ui/card'

interface StatCardProps {
  icon: React.ElementType
  title: string
  value: number | string
}

export function StatCard({ icon: Icon, title, value }: StatCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-md border border-sage-200 bg-white hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-3 py-auto flex items-center gap-3">
        <div className="bg-lime-100 p-2 rounded-lg">
          <Icon className="w-5 h-5 text-lime-600" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-forest-700">{title}</h4>
          <p className="text-lg font-bold text-forest-900">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
