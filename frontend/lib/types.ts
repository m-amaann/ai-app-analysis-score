export interface QualityResult {
  score: number
  status: "Good" | "Average" | "Poor"
  issues: string[]
  recommendations: string[]
}
