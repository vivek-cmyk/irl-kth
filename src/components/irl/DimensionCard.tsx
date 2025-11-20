import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ThermometerSelector } from "./ThermometerSelector";
import { IRL_DEFINITIONS, DIMENSION_LABELS, DIMENSION_SUMMARY } from "@/data/irlDefinitions";
import { DimensionId, DimensionState } from "@/types/irl";

interface DimensionCardProps {
  dimension: DimensionId;
  state: DimensionState;
  onUpdate: (field: keyof DimensionState, value: any) => void;
}

export const DimensionCard = ({ dimension, state, onUpdate }: DimensionCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col items-center space-y-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="text-center cursor-help">
                <h3 className="font-bold text-lg">{DIMENSION_LABELS[dimension]}</h3>
              </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-xs text-muted-foreground">{DIMENSION_SUMMARY[dimension]}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <ThermometerSelector
          levels={IRL_DEFINITIONS[dimension]}
          selectedLevel={state.level}
          onSelectLevel={(level) => onUpdate("level", level)}
        />

        {state.level > 0 && (
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              {IRL_DEFINITIONS[dimension].find(l => l.level === state.level)?.shortTitle}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
