module.exports = {
  roots: ['./'],
  testRegex: '\\.(test|spec)\\.jsx?$',
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/(build|docs|node_modules|example)/'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
