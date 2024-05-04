import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
