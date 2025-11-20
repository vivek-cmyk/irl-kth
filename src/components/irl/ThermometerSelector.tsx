import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LevelDefinition } from "@/types/irl";
import { LevelDetailTooltip } from "./LevelDetailTooltip";
import { cn } from "@/lib/utils";

interface ThermometerSelectorProps {
  levels: LevelDefinition[];
  selectedLevel: number;
  onSelectLevel: (level: number) => void;
}

export const ThermometerSelector = ({ levels, selectedLevel, onSelectLevel }: ThermometerSelectorProps) => {
  const getLevelColor = (level: number) => {
    if (level >= 1 && level <= 3) return "bg-level-early hover:bg-level-early/80";
    if (level >= 4 && level <= 6) return "bg-level-developing hover:bg-level-developing/80";
    return "bg-level-advanced hover:bg-level-advanced/80";
  };

  const getLevelBorderColor = (level: number) => {
    if (level >= 1 && level <= 3) return "border-level-early";
    if (level >= 4 && level <= 6) return "border-level-developing";
    return "border-level-advanced";
  };

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex flex-col-reverse gap-1 items-center">
        {levels.map((levelDef) => {
          const isSelected = selectedLevel === levelDef.level;
          
          return (
            <Tooltip key={levelDef.level}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onSelectLevel(levelDef.level)}
                  className={cn(
                    "w-12 h-8 rounded transition-all flex items-center justify-center text-xs font-bold border-2",
                    getLevelColor(levelDef.level),
                    isSelected 
                      ? cn("ring-4 ring-ring/50 scale-110", getLevelBorderColor(levelDef.level))
                      : "border-transparent opacity-70"
                  )}
                >
                  {levelDef.level}
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" className="max-w-xs">
                <LevelDetailTooltip level={levelDef} />
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};
