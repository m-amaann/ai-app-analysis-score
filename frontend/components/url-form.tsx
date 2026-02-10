"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { QualityResult } from "@/lib/types"
import { ResultCard } from "./result-card"

export function UrlForm() {
  const [result, setResult] = useState<QualityResult | null>(null)

  function analyze() {
    setResult({
      score: 82,
      status: "Good",
      issues: ["Image size not optimized", "Missing meta description"],
      recommendations: ["Compress images", "Add SEO tags"],
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <Input placeholder="https://example.com" />
        <Button onClick={analyze}>Analyze</Button>
      </div>

      {result && <ResultCard result={result} />}
    </div>
  )
}
