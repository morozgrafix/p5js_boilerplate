const js = require('@eslint/js');
const globals = require('globals');
const p5 = require('eslint-config-p5js');
const p5Sound = require('eslint-config-p5js/sound');
const json = require('eslint-plugin-json');

module.exports = [
  {
    ignores: ['src/libs/**', 'output/**', 'assets/**'],
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.browser,
        ...p5.globals,
        ...p5Sound.globals,
        Pane: 'readonly',
        SVG: 'readonly',
        SvgFont: 'readonly',
        OpenSimplexNoise: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-new': 'off',
      // p5 invokes these callbacks from global mode.
      'no-unused-vars': ['error', {
        varsIgnorePattern: '^(preload|setup|draw|windowResized|mousePressed|mouseReleased|mouseClicked|doubleClicked|mouseMoved|mouseDragged|mouseWheel|keyPressed|keyReleased|keyTyped|touchStarted|touchMoved|touchEnded|deviceMoved|deviceTurned|deviceShaken)$',
      }],
    },
  },
  {
    files: ['eslint.config.js'],
    languageOptions: { sourceType: 'commonjs', globals: globals.node },
    rules: js.configs.recommended.rules,
  },
  {
    ...json.configs.recommended,
    files: ['package.json'],
  },
];
