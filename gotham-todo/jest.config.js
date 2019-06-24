module.exports = {
  globals: {
    'vue-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^~~/(.*)$': '<rootDir>/test/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  collectCoverage: false,
  coverageReporters: ['html', 'text'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{vue,ts,js}']
}
