import {MatchReader} from './MatchReader'
import { CsvFileReaderRefactorV2 } from './CsvFileReaderRefactorV2';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReports } from './reportTargets/HtmlReports';
const csvFileReader = new CsvFileReaderRefactorV2('football.csv')
const matchReader = new MatchReader(csvFileReader);
matchReader.load()

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReports()
)

summary.buildAndPrintReport(matchReader.matches);
