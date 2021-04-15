module.exports = {
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": "components",
      "@config": "app.config",
      "@layouts": "components/@layouts",
      "@middlewares": "middlewares",
      "@ui": "components/@ui",
      "@utils": "utils",
    };
    return config;
  },
};
