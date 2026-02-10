type ScoreRingProps = {
  score: number
}

export default function ScoreRing({ score }: ScoreRingProps) {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      <svg className="h-full w-full -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          strokeWidth="10%"
          className="fill-none stroke-muted"
        />
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          strokeWidth="10%"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * score) / 100}
          className="fill-none stroke-primary transition-all duration-500"
        />
      </svg>
      <span className="absolute text-lg font-semibold">
        {score}%
      </span>
    </div>
  )
}
