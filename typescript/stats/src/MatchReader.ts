import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';
import {MatchData} from './MatchData';
import { CsvFileReaderRefactorV2} from './CsvFileReaderRefactorV2'

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string) : MatchReader {
    return new MatchReader(new CsvFileReaderRefactorV2(filename))
  }
  matches: MatchData[] = []
  constructor(public reader: DataReader){}
  load(): void {
    this.reader.read()
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ]
    )
  }
}
