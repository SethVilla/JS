"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const matchReader = MatchReader.fromCsv('football.csv');
// matchReader.load()
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReports()
// )
// const summary = Summary.winsAnalysisWithHtmlReport('Man United')
// summary.buildAndPrintReport(matchReader.matches);
var test = new Date();
function formatDate(date) {
    var year = date.getFullYear(), month = date.getMonth() + 1, // months are zero indexed
    day = date.getDate(), hour = date.getHours(), minute = date.getMinutes(), second = date.getSeconds(), hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
    minuteFormatted = minute < 10 ? "0" + minute : minute, morning = hour < 12 ? " am" : " pm";
    return (month + "/" + day + "/" + year + " " + hourFormatted + ":" +
        minuteFormatted + morning).split(' ');
}
console.log(formatDate(test));
