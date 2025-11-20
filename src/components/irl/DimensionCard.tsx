import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LevelSelector } from "./LevelSelector";
import { IRL_DEFINITIONS, DIMENSION_LABELS, DIMENSION_SUMMARY } from "@/data/irlDefinitions";
import { DimensionId, DimensionState } from "@/types/irl";

interface DimensionCardProps {
  dimension: DimensionId;
  state: DimensionState;
  onUpdate: (field: keyof DimensionState, value: any) => void;
}

export const DimensionCard = ({ dimension, state, onUpdate }: DimensionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/30">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{DIMENSION_LABELS[dimension]}</CardTitle>
            <CardDescription className="mt-1">{DIMENSION_SUMMARY[dimension]}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {isExpanded ? (
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-3 block">Select Level (1-9)</Label>
              <LevelSelector
                levels={IRL_DEFINITIONS[dimension]}
                selectedLevel={state.level}
                onSelectLevel={(level) => onUpdate("level", level)}
              />
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            {state.level > 0 ? (
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                  <span className="font-bold text-primary text-2xl">{state.level}</span>
                  <span className="text-sm text-muted-foreground">
                    {IRL_DEFINITIONS[dimension].find(l => l.level === state.level)?.shortTitle}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Click expand to change</p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Click expand to select a level</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
