import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Dot } from "recharts";
import { DIMENSION_LABELS } from "@/data/irlDefinitions";
import { DimensionId } from "@/types/irl";

interface RadarChartViewProps {
  dimensions: Array<{ dimension: DimensionId; level: number }>;
  size?: "small" | "large";
  highlightDimension?: DimensionId;
}

export const RadarChartView = ({ dimensions, size = "small", highlightDimension }: RadarChartViewProps) => {
  const chartData = dimensions.map((dim) => ({
    dimension: DIMENSION_LABELS[dim.dimension].replace(" Readiness", "").replace(/\s*\([^)]*\)/, ""),
    level: dim.level,
    fullMark: 9,
    isBottleneck: highlightDimension === dim.dimension,
  }));

  const height = size === "large" ? 500 : 320;

  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (payload.isBottleneck) {
      return (
        <g>
          <circle cx={cx} cy={cy} r={8} fill="hsl(var(--destructive))" opacity={0.3} />
          <circle cx={cx} cy={cy} r={5} fill="hsl(var(--destructive))" stroke="hsl(var(--destructive-foreground))" strokeWidth={2} />
        </g>
      );
    }
    return <Dot {...props} />;
  };

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
          dot={<CustomDot />}
        />
        {size === "large" && <Legend />}
      </RadarChart>
    </ResponsiveContainer>
  );
};
