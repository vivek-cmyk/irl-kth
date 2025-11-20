import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, RotateCcw } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DIMENSION_ORDER, DIMENSION_LABELS } from "@/data/irlDefinitions";
import { DimensionId, DimensionState, SummaryReport } from "@/types/irl";
import { RadarChartView } from "@/components/irl/RadarChartView";
import { DimensionCard } from "@/components/irl/DimensionCard";
import { IRL_DEFINITIONS } from "@/data/irlDefinitions";
import { useToast } from "@/hooks/use-toast";

const IrlAssessment = () => {
  const [assessmentDate, setAssessmentDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  
  const [dimensions, setDimensions] = useState<DimensionState[]>(
    DIMENSION_ORDER.map((dim) => ({
      dimension: dim,
      level: 0,
    }))
  );

  const [summaryReport, setSummaryReport] = useState<SummaryReport | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

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

    const bottleneckLabel = DIMENSION_LABELS[bottleneckDim.dimension];
    const currentLevel = IRL_DEFINITIONS[bottleneckDim.dimension].find(
      (l) => l.level === bottleneckDim.level
    )!;
    const nextLevel = IRL_DEFINITIONS[bottleneckDim.dimension].find(
      (l) => l.level === bottleneckDim.level + 1
    );

    const bottleneck = `${bottleneckLabel} at Level ${bottleneckDim.level}: ${currentLevel.shortTitle}`;

    // Extract 3-5 indicators from next level for recommended focus
    const recommendedFocus: string[] = [];
    if (nextLevel && nextLevel.indicators && nextLevel.indicators.length > 0) {
      recommendedFocus.push(...nextLevel.indicators.slice(0, 5));
    }

    setSummaryReport({
      date: assessmentDate,
      overallBottleneckLevel: minLevel,
      overallBottleneckDimension: bottleneckDim.dimension,
      snapshot: "", // Removed verbose snapshot
      bottleneck,
      recommendedFocus,
    });
  };

  const copyToClipboard = async () => {
    if (!summaryReport) return;
    
    const text = `IRL Assessment - ${summaryReport.date}\n\nBottleneck: ${summaryReport.bottleneck}\n\nRecommended Focus:\n${summaryReport.recommendedFocus.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}`;
    
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "Summary report copied successfully",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const hasSelections = dimensions.some((dim) => dim.level > 0);

  const resetAssessment = () => {
    setDimensions(
      DIMENSION_ORDER.map((dim) => ({
        dimension: dim,
        level: 0,
      }))
    );
    setSummaryReport(null);
    toast({
      title: "Assessment reset",
      description: "All selections cleared. You can start a new assessment.",
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-4xl font-bold text-foreground">IRL Assessment</h1>
            {hasSelections && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Reset Assessment?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will clear all your dimension selections and the summary report. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={resetAssessment}>Reset</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
          <div className="flex items-center justify-center gap-4">
            <Label htmlFor="assessment-date" className="text-sm text-muted-foreground">
              Date:
            </Label>
            <Input
              id="assessment-date"
              type="date"
              value={assessmentDate}
              onChange={(e) => setAssessmentDate(e.target.value)}
              className="w-48"
            />
          </div>
        </div>

        {/* Live Radar Chart */}
        {hasSelections && (
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <RadarChartView dimensions={dimensions} size="small" />
            </CardContent>
          </Card>
        )}

        {/* Assessment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIMENSION_ORDER.map((dim) => {
            const state = dimensions.find((d) => d.dimension === dim)!;
            return (
              <DimensionCard
                key={dim}
                dimension={dim}
                state={state}
                onUpdate={(field, value) => updateDimension(dim, field, value)}
              />
            );
          })}
        </div>

        {/* Generate Button */}
        {isFormValid() && !summaryReport && (
          <div className="flex justify-center">
            <Button onClick={generateSummary} size="lg" className="px-8">
              Generate Summary Report
            </Button>
          </div>
        )}

        {/* Summary Report */}
        {summaryReport && (
          <div className="space-y-6 pt-8 border-t">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-foreground">Summary Report</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="gap-2"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>

            {/* Large Radar Chart with Bottleneck Highlight */}
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <RadarChartView
                  dimensions={dimensions}
                  size="large"
                  highlightDimension={summaryReport.overallBottleneckDimension}
                />
              </CardContent>
            </Card>

            {/* Bottleneck */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">
                    Bottleneck
                  </Badge>
                  <div>
                    <p className="text-lg font-semibold">{summaryReport.bottleneck}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Focus */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h3 className="text-xl font-semibold">Recommended Focus</h3>
                <ul className="space-y-2">
                  {summaryReport.recommendedFocus.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default IrlAssessment;
