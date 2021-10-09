"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReaderRefactor = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReaderRefactor = /** @class */ (function () {
    function CsvFileReaderRefactor(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReaderRefactor.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n').map(function (row) { return row.split(','); }).map(this.mapRow);
    };
    return CsvFileReaderRefactor;
}());
exports.CsvFileReaderRefactor = CsvFileReaderRefactor;
