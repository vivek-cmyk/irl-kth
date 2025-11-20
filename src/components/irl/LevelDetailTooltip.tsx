import { LevelDefinition } from "@/types/irl";

interface LevelDetailTooltipProps {
  level: LevelDefinition;
}

export const LevelDetailTooltip = ({ level }: LevelDetailTooltipProps) => {
  return (
    <div className="space-y-2 text-sm">
      <div>
        <span className="font-bold">Level {level.level}: {level.shortTitle}</span>
      </div>
      <p className="text-muted-foreground">{level.description}</p>
      {level.indicators && level.indicators.length > 0 && (
        <div>
          <p className="font-semibold mb-1">Indicators:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {level.indicators.map((indicator, idx) => (
              <li key={idx} className="text-xs">{indicator}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
