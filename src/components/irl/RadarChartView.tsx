import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";
import { DIMENSION_LABELS } from "@/data/irlDefinitions";
import { DimensionId } from "@/types/irl";

interface RadarChartViewProps {
  dimensions: Array<{ dimension: DimensionId; level: number }>;
  size?: "small" | "large";
}

export const RadarChartView = ({ dimensions, size = "small" }: RadarChartViewProps) => {
  const chartData = dimensions.map((dim) => ({
    dimension: DIMENSION_LABELS[dim.dimension].replace(" Readiness", "").replace(/\s*\([^)]*\)/, ""),
    level: dim.level,
    fullMark: 9,
  }));

  const height = size === "large" ? 500 : 320;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart data={chartData}>
        <PolarGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <PolarAngleAxis
          dataKey="dimension"
          tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 9]}
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
          tickCount={10}
        />
        <Radar
          name="Current Level"
          dataKey="level"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
        />
        {size === "large" && <Legend />}
      </RadarChart>
    </ResponsiveContainer>
  );
};
