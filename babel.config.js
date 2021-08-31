module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            src: './src',
            components: './src/components',
            constants: './src/constants',
            data: './src/data',
            hooks: './src/hooks',
            screens: './src/screens',
            services: './src/services',
            store: './src/store',
            styles: './src/styles',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
