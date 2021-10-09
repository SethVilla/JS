import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReports } from "./reportTargets/HtmlReports";

export interface Analyzer {
  run(macthes: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget) {}

    static winsAnalysisWithHtmlReport(team: string) : Summary {
      return new Summary(
        new WinsAnalysis(team),
        new HtmlReports()
      )
    }

    buildAndPrintReport(matches: MatchData[]) : void {
      const output = this.analyzer.run(matches);
      this.outputTarget.print(output)
    }
}
