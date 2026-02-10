import { CheckCircle } from "lucide-react"

export default function RecommendationItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border bg-white">
      <CheckCircle className="text-green-500 w-5 h-5" />
      <span className="text-slate-700">{text}</span>
    </div>
  )
}
