"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    roots: ['<rootDir>/src'],
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    preset: '@shelf/jest-mongodb',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/protocols/',
        '/interfaces/',
        '/server.ts',
        'src/domain/models'
    ]
};
exports.default = config;
