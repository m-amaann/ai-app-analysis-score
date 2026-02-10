import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ScoreRing from "@/components/score-ring"
import IssueItem from "@/components/issue-item"
import RecommendationItem from "@/components/recommendation-item"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl space-y-10">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-semibold text-slate-800">
            Website Quality Score
          </h1>
          <p className="text-slate-500 text-lg">
            Analyze any website for quality and performance.
          </p>
        </div>

        {/* URL Input */}
        <div className="flex gap-3">
          <Input
            placeholder="https://example.com"
            className="h-14 text-base"
          />
          <Button className="h-14 px-8 text-base">
            Analyze
          </Button>
        </div>

        {/* Result Card */}
        <Card className="p-8 space-y-6 shadow-xl">

          {/* Score Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <ScoreRing score={85} />

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold text-slate-800">
                  85 / 100
                </h2>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  HIGH
                </span>
              </div>
              <p className="text-slate-500">
                Website quality score computed in ~6 minutes.
              </p>
            </div>
          </div>

          {/* Issues */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-700">
              Issues Found
            </h3>
            <IssueItem text="Page load is slow" />
            <IssueItem text="2 JavaScript errors detected" />
          </div>

          {/* Recommendations */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-700">
              Recommendations
            </h3>
            <RecommendationItem text="Optimize images to reduce load time." />
            <RecommendationItem text="Fix JavaScript errors to improve stability." />
          </div>

        </Card>
      </div>
    </main>
  )
}
