module.exports = {
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": "components",
      "@config": "app.config",
      "@layouts": "components/@layouts",
      "@ui": "components/@ui",
    };
    return config;
  },
};
