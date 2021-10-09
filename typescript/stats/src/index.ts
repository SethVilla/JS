import {MatchReader} from './MatchReader'
import { CsvFileReaderRefactorV2 } from './CsvFileReaderRefactorV2';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReports } from './reportTargets/HtmlReports';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load()

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReports()
// )

const summary = Summary.winsAnalysisWithHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches);
