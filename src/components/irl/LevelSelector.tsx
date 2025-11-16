import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LevelDefinition } from "@/types/irl";
import { cn } from "@/lib/utils";

interface LevelSelectorProps {
  levels: LevelDefinition[];
  selectedLevel: number;
  onSelectLevel: (level: number) => void;
}

const getLevelColor = (level: number) => {
  if (level <= 3) return "level-early";
  if (level <= 6) return "level-developing";
  return "level-advanced";
};

const getLevelLabel = (level: number) => {
  if (level <= 3) return "Early";
  if (level <= 6) return "Developing";
  return "Advanced";
};

export const LevelSelector = ({ levels, selectedLevel, onSelectLevel }: LevelSelectorProps) => {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(selectedLevel || null);

  return (
    <div className="space-y-2">
      {levels.map((levelDef) => {
        const isSelected = selectedLevel === levelDef.level;
        const isExpanded = expandedLevel === levelDef.level;
        const colorClass = getLevelColor(levelDef.level);

        return (
          <Card
            key={levelDef.level}
            className={cn(
              "cursor-pointer transition-all",
              isSelected && "ring-2 ring-primary"
            )}
            onClick={() => onSelectLevel(levelDef.level)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold text-white",
                      `bg-${colorClass}`
                    )}
                    style={{ backgroundColor: `hsl(var(--${colorClass}))` }}
                  >
                    {levelDef.level}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{levelDef.shortTitle}</h4>
                    <Badge variant="outline" className="text-xs">
                      {getLevelLabel(levelDef.level)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {levelDef.description}
                  </p>
                  
                  {levelDef.indicators && levelDef.indicators.length > 0 && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 p-0 h-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedLevel(isExpanded ? null : levelDef.level);
                        }}
                      >
                        <span className="text-xs text-primary flex items-center gap-1">
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-3 w-3" /> Hide details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-3 w-3" /> Show details
                            </>
                          )}
                        </span>
                      </Button>
                      
                      {isExpanded && (
                        <ul className="mt-3 space-y-1 pl-2 border-l-2 border-border">
                          {levelDef.indicators.map((indicator, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground">
                              • {indicator}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
