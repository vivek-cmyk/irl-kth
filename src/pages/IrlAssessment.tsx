import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DIMENSION_ORDER, DIMENSION_LABELS, DIMENSION_SUMMARY, IRL_DEFINITIONS } from "@/data/irlDefinitions";
import { DimensionId, DimensionState, SummaryReport } from "@/types/irl";

const IrlAssessment = () => {
  const [assessmentDate, setAssessmentDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  
  const [dimensions, setDimensions] = useState<DimensionState[]>(
    DIMENSION_ORDER.map((dim) => ({
      dimension: dim,
      level: 0,
      justification: "",
      nextActions: "",
    }))
  );

  const [summaryReport, setSummaryReport] = useState<SummaryReport | null>(null);

  const updateDimension = (dimension: DimensionId, field: keyof DimensionState, value: any) => {
    setDimensions((prev) =>
      prev.map((dim) =>
        dim.dimension === dimension ? { ...dim, [field]: value } : dim
      )
    );
  };

  const isFormValid = () => {
    return assessmentDate && dimensions.every((dim) => dim.level > 0);
  };

  const generateSummary = () => {
    const levels = dimensions.map((d) => d.level);
    const minLevel = Math.min(...levels);
    const bottleneckDim = dimensions.find((d) => d.level === minLevel)!;

    // Generate snapshot
    const highDims = dimensions.filter((d) => d.level >= 7).map((d) => DIMENSION_LABELS[d.dimension]);
    const lowDims = dimensions.filter((d) => d.level <= 3).map((d) => DIMENSION_LABELS[d.dimension]);
    
    let snapshot = `Your startup shows `;
    if (highDims.length > 0) {
      snapshot += `strong progress in ${highDims.join(", ")} (level 7+)`;
      if (lowDims.length > 0) {
        snapshot += `, but `;
      } else {
        snapshot += `. `;
      }
    }
    if (lowDims.length > 0) {
      snapshot += `needs significant development in ${lowDims.join(", ")} (level 3 or below)`;
    }
    snapshot += `. Overall, your readiness levels range from ${minLevel} to ${Math.max(...levels)}.`;

    // Generate bottleneck description
    const bottleneckLabel = DIMENSION_LABELS[bottleneckDim.dimension];
    const currentLevel = IRL_DEFINITIONS[bottleneckDim.dimension].find(
      (l) => l.level === bottleneckDim.level
    )!;
    const nextLevel = IRL_DEFINITIONS[bottleneckDim.dimension].find(
      (l) => l.level === bottleneckDim.level + 1
    );

    const bottleneck = `${bottleneckLabel} is at level ${bottleneckDim.level} (${currentLevel.shortTitle}). ${currentLevel.description} This is currently your primary constraint limiting overall progress.`;

    // Generate recommendations based on next level
    const recommendedFocus: string[] = [];
    if (nextLevel) {
      recommendedFocus.push(
        `Move towards level ${nextLevel.level}: ${nextLevel.shortTitle}`
      );
      recommendedFocus.push(`Focus on: ${nextLevel.description}`);
      
      // Add dimension-specific actions
      if (bottleneckDim.dimension === "CRL") {
        recommendedFocus.push("Conduct more customer interviews and gather feedback");
        recommendedFocus.push("Test your value proposition with target segments");
      } else if (bottleneckDim.dimension === "TRL") {
        recommendedFocus.push("Advance prototype development and testing");
        recommendedFocus.push("Validate technical feasibility in realistic conditions");
      } else if (bottleneckDim.dimension === "BRL") {
        recommendedFocus.push("Refine your business model and revenue streams");
        recommendedFocus.push("Test pricing and cost assumptions");
      } else if (bottleneckDim.dimension === "IPRL") {
        recommendedFocus.push("Conduct freedom-to-operate analysis");
        recommendedFocus.push("Consider filing key IP applications");
      } else if (bottleneckDim.dimension === "TMRL") {
        recommendedFocus.push("Identify and recruit missing competencies");
        recommendedFocus.push("Clarify roles and commitment within the team");
      } else if (bottleneckDim.dimension === "FRL") {
        recommendedFocus.push("Develop and test your funding pitch");
        recommendedFocus.push("Identify and approach relevant funding sources");
      }
    }

    setSummaryReport({
      date: assessmentDate,
      overallBottleneckLevel: minLevel,
      overallBottleneckDimension: bottleneckDim.dimension,
      snapshot,
      bottleneck,
      recommendedFocus: recommendedFocus.slice(0, 5),
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">IRL Assessment & Summary</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rate your startup across six readiness dimensions, then generate a brief summary and focus recommendation. 
            Nothing is saved; copy the result into your own tracker if you want to keep it.
          </p>
        </div>

        {/* Assessment Form */}
        <Card>
          <CardHeader>
            <CardTitle>Assessment Form</CardTitle>
            <CardDescription>Complete all six dimensions to generate your summary</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Date Input */}
            <div className="space-y-2">
              <Label htmlFor="assessment-date">Assessment Date</Label>
              <Input
                id="assessment-date"
                type="date"
                value={assessmentDate}
                onChange={(e) => setAssessmentDate(e.target.value)}
              />
            </div>

            {/* Dimensions */}
            {DIMENSION_ORDER.map((dimId) => {
              const dimState = dimensions.find((d) => d.dimension === dimId)!;
              const selectedLevel = dimState.level > 0 
                ? IRL_DEFINITIONS[dimId].find((l) => l.level === dimState.level)
                : null;

              return (
                <div key={dimId} className="space-y-4 p-4 rounded-lg bg-muted/30 border border-border">
                  <div>
                    <Label className="text-lg font-semibold">{DIMENSION_LABELS[dimId]}</Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      {DIMENSION_SUMMARY[dimId]}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`level-${dimId}`}>Level (1-9)</Label>
                    <Select
                      value={dimState.level > 0 ? dimState.level.toString() : ""}
                      onValueChange={(value) => updateDimension(dimId, "level", parseInt(value))}
                    >
                      <SelectTrigger id={`level-${dimId}`}>
                        <SelectValue placeholder="Select level..." />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => {
                          const def = IRL_DEFINITIONS[dimId].find((l) => l.level === level)!;
                          return (
                            <SelectItem key={level} value={level.toString()}>
                              Level {level}: {def.shortTitle}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedLevel && (
                    <div className="p-3 bg-card rounded-md border border-border">
                      <p className="text-sm font-medium mb-1">{selectedLevel.shortTitle}</p>
                      <p className="text-sm text-muted-foreground">{selectedLevel.description}</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor={`justification-${dimId}`}>Justification (optional)</Label>
                    <Textarea
                      id={`justification-${dimId}`}
                      placeholder="Why did you choose this level?"
                      value={dimState.justification}
                      onChange={(e) => updateDimension(dimId, "justification", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`actions-${dimId}`}>Next Actions (optional)</Label>
                    <Textarea
                      id={`actions-${dimId}`}
                      placeholder="What are your next steps for this dimension?"
                      value={dimState.nextActions}
                      onChange={(e) => updateDimension(dimId, "nextActions", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              );
            })}

            <Button
              onClick={generateSummary}
              disabled={!isFormValid()}
              size="lg"
              className="w-full"
            >
              Generate Summary Report
            </Button>
          </CardContent>
        </Card>

        {/* Summary Report */}
        {summaryReport && (
          <Card className="border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">IRL Summary Report</CardTitle>
                <Badge variant="outline" className="text-base px-3 py-1">
                  {summaryReport.date}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Snapshot</h3>
                <p className="text-muted-foreground">{summaryReport.snapshot}</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-warning">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">Bottleneck</h3>
                  <Badge className="bg-warning text-warning-foreground">
                    {DIMENSION_LABELS[summaryReport.overallBottleneckDimension]} – Level {summaryReport.overallBottleneckLevel}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{summaryReport.bottleneck}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Recommended Focus</h3>
                <ul className="space-y-2">
                  {summaryReport.recommendedFocus.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-medium mt-0.5">•</span>
                      <span className="text-muted-foreground">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default IrlAssessment;
