import fs from 'fs';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResult, string]
export class CsvFileReader {
data: MatchData[] = []
constructor(public filename: string){}
read(): void {
  this.data = fs.readFileSync(this.filename, {
    encoding: 'utf-8'
  }).split('\n').map((row: string): string[] => row.split(',')).map(
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
