export default {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "@shelf/jest-mongodb",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "<rootDir>/src/presentation/controllers/signup/signup-protocols.ts",
    "<rootDir>/src/domain/",
    "<rootDir>/src/presentation/protocols",
    "<rootDir>/src/data/protocols",
    "<rootDir>/src/data/usecases/add-account/db-add-account-protocols.ts",
  ],
};

// aqui é adicionando só oque eu quero....
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
