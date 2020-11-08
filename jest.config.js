module.exports = {
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/scripts/jest/setupEnzyme.ts'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
