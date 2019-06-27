"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setTestFileContent_1 = require("./setTestFileContent");
var removeWhiteSpace = function (str) { return str.replace(/\s+/g, ' ').trim(); };
describe('setTestFileContent', function () {
    it('it returns a block of text with a default spec if no specs are passed in', function () {
        var input = 'myUtil';
        var expected = removeWhiteSpace("import { myUtil } from './myUtil';\n\n    describe('myUtil', () => {\n        it('does things', () => {\n            expect.hasAssertions();\n        });\n    });\n\n    ");
        var content = removeWhiteSpace(setTestFileContent_1.setTestFileContent(input, []));
        expect(content).toEqual(expected);
    });
    it('it returns a block of text with it blocks for each spec passed in', function () {
        var fileName = 'truncateString';
        var specs = [
            'it returns the complete string if shorter than max value',
            'it returns a truncated string if >= max value',
            'it appends ellipses to a truncated string',
        ];
        var expected = removeWhiteSpace("import { truncateString } from './truncateString';\n\n    describe('truncateString', () => {\n        it('it returns the complete string if shorter than max value', () => {\n            expect.hasAssertions();\n        });\n        it('it returns a truncated string if >= max value', () => {\n          expect.hasAssertions();\n       });\n       it('it appends ellipses to a truncated string', () => {\n        expect.hasAssertions();\n     });\n    });\n\n    ");
        var content = removeWhiteSpace(setTestFileContent_1.setTestFileContent(fileName, specs));
        expect(content).toEqual(expected);
    });
});
