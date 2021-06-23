module.exports = {
  reactStrictMode: true,
  webpack: config => {
    return {
      ...config,
      module: {
        ...(config.module || {}),
        noParse: [
          ...(config.module.noParse || []),
          require.resolve('prettier/parser-typescript.js'),
        ],
      },
    };
  },
};
