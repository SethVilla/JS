"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReaderRefactorV2 = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReaderRefactorV2 = /** @class */ (function () {
    function CsvFileReaderRefactorV2(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReaderRefactorV2.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n').map(function (row) { return row.split(','); });
    };
    return CsvFileReaderRefactorV2;
}());
exports.CsvFileReaderRefactorV2 = CsvFileReaderRefactorV2;
