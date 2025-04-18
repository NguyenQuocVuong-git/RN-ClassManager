module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@app': './src/app',
            '@pages': './src/pages',
            '@theme': './theme.js',
          },
        },
      ],
       "nativewind/babel",
    ],

  }
}
