export default {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};

// module.exports = {
//   roots: ["<rootDir>/src"],
//   clearMocks: true,
//   collectCoverage: true,
//   collectCoverageFrom: [
//     "<rootDir>/src/presentation/controllers/signup/signup.spec.ts",
//     "<rootDir>/src/presentation/controllers/signup/signup.ts",
//   ],
//   coverageDirectory: "coverage",
//   coverageProvider: "v8",
//   transform: {
//     ".+\\.ts$": "ts-jest",
//   },
// };




