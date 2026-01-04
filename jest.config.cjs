module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy', // CSS modules
		'\\.(jpg|jpeg|png|gif|mp4|svg)$': '<rootDir>/__mocks__/fileMock.js', // Static assets
	},
};
