# P5JS Boilerplate 🍳
yet another version of p5.js boilerplate, partially based on https://github.com/JForsaken/p5js-boilerplate by [JForsaken](https://github.com/JForsaken)

## Getting Started

1. Install `node` and `npm` using [nvm](https://github.com/creationix/nvm) or [brew](https://brew.sh/).
2. Clone the project.
3. `cd` to your the cloned project's path.
4. Run `npm start`.
5. Your browser should open at [localhost:3000](http://localhost:3000).

Wait, *that's it* 🤔? 
Yup 🍺😏.

## Additional Information

### files

This boilerplate runs through `sketch.js` as the starting point, which instantiates the canvas.

### lifecycle

The two main functions that you will need to remember are `setup()` and `draw()`, which are both in `sketch.js`.
The setup function runs only once, before the first frame is drawn.
The draw function is called on every frame.

You might need to read P5JS' [examples](https://p5js.org/examples/) and [doc](https://p5js.org/reference/) for help.

### linting

ESLint uses the flat configuration in `eslint.config.js`, with recommended JavaScript rules,
p5.js global names, and JSON validation for `package.json`.

Run `npm run lint` to check source files, including `src/my_sketches`, and apply automatic
fixes. Vendored libraries in `src/libs` and generated output are excluded.

ESLint 10 requires Node.js 20.19+, 22.13+, or 24+.
