/* eslint-disable no-dupe-keys */
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  //testEnvironment: 'node',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transformIgnorePatterns: [],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    ".*\\.(tsx?)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    "^@/i18n/(.*)$": "<rootDir>/i18n/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",
  },
  automock: false,
  setupFilesAfterEnv: ["fetch-mock-jest",],
};
