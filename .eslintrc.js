module.exports = {
    extends: [
        'airbnb-base',
        "p5js",
        'p5js/dom',
        'p5js/sound',
    ],
    'env': {
      'browser': true,
      'es6': true,
    },
    plugins: [
      'import',
      'json',
    ],
    globals: {
      'p5': true,
      'preload': true,
      'setup': true,
      'draw': true,
    },
    rules: {
      'no-new': 'off',
      'no-unused-vars': [
        'error',
        {'varsIgnorePattern': 'preload|setup|draw'},
      ]
    },
  };