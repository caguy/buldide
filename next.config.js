module.exports = {
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": "components",
      "@config": "app.config",
      "@context": "components/@context",
      "@helpers": "components/@helpers",
      "@layouts": "components/@layouts",
      "@models": "models",
      "@middlewares": "middlewares",
      "@ui": "components/@ui",
      "@utils": "utils",
    };
    return config;
  },
};
