import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import ScoreRing from "./score-ring"

import { QualityResult } from "@/lib/types"

export function ResultCard({ result }: { result: QualityResult }) {
  return (
    <Card className="
      w-full
      rounded-2xl
      border-muted/40
      shadow-sm
      transition-all
      hover:shadow-md
    ">
      <CardContent
        className="
          flex flex-col items-center gap-5
          p-4

          sm:p-5
          md:flex-row md:items-start md:gap-6 md:p-6
          lg:gap-8 lg:p-8
          xl:p-10
          2xl:p-12
        "
      >
        {/* Score */}
        <div
          className="
            flex-shrink-0
            sm:scale-95
            md:scale-100
            lg:scale-105
            xl:scale-110
            2xl:scale-125
          "
        >
          <ScoreRing score={result.score} />
        </div>

        {/* Content */}
        <div className="w-full">
          <Badge
            className="
              mb-3
              text-xs font-medium

              sm:text-sm
              lg:text-base
            "
          >
            {result.status}
          </Badge>

          <ul
            className="
              list-disc
              pl-5
              space-y-1
              text-xs
              text-muted-foreground

              sm:text-sm
              md:space-y-1.5
              lg:text-base lg:space-y-2
              xl:text-lg
            "
          >
            {result.issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
