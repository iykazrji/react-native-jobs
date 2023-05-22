module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			"babel-preset-expo",
			"module:metro-react-native-babel-preset",
		],
		plugins: [
			"@babel/plugin-proposal-export-namespace-from",
			"react-native-reanimated/plugin",
			["module:react-native-dotenv"],
			require.resolve("expo-router/babel"),
			["@babel/plugin-proposal-decorators", { legacy: true }],
		],
	};
};
