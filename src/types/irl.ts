export type DimensionId = "CRL" | "TRL" | "BRL" | "IPRL" | "TMRL" | "FRL";

export interface LevelDefinition {
  level: number;
  shortTitle: string;
  description: string;
}

export interface DimensionState {
  dimension: DimensionId;
  level: number;
  justification: string;
  nextActions: string;
}

export interface AssessmentInput {
  date: string; // ISO date
  dimensions: DimensionState[];
}

export interface SummaryReport {
  date: string;
  overallBottleneckLevel: number;
  overallBottleneckDimension: DimensionId;
  snapshot: string;
  bottleneck: string;
  recommendedFocus: string[];
}
