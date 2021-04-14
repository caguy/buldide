module.exports = {
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": "components",
      "@layouts": "components/@layouts",
      "@ui": "component/@ui",
    };
    return config;
  },
};
