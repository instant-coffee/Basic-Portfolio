import { Card, CardContent } from "@/components/ui/card"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Card className="border-primary/20 hover:border-primary/50 transition-colors">
      <CardContent className="flex items-center justify-center p-4 h-full">
        <span className="font-medium">{name}</span>
      </CardContent>
    </Card>
  )
}

