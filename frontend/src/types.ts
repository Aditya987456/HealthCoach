export interface ReportSection {
  summary: string;
  informationType: string;
  supportingEvidence: string[];
}

export interface Report {
  weeklySummary: string;

  nutrition: ReportSection;
  exercise: ReportSection;
  sleep: ReportSection;
  waterIntake: ReportSection;
  symptomsStress: ReportSection;
  engagementLevel: ReportSection;
  keyBarriers: ReportSection;
  pendingActions: ReportSection;
  riskFlags: ReportSection;
  recommendedNextAction: ReportSection;
}