module.exports = {
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": "components",
      "@layouts": "components/@layouts",
      "@ui": "components/@ui",
    };
    return config;
  },
};
