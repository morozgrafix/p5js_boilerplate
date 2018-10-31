# P5JS Boilerplate 🍳
yet another version of p5.js boilerplate, partially based on https://github.com/JForsaken/p5js-boilerplate by [JForsaken](https://github.com/JForsaken)





# P5JS Boilerplate 🍳

This boilerplate is a foolproof starter kit that lets you develop JavaScript animations / games / whatever else.
You might have heard about P5JS by watching Daniel Shiffman's [YouTube channel](https://www.youtube.com/user/shiffman).

## Getting Started

1. Install `node` and `npm` using [nvm](https://github.com/creationix/nvm).
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

ESLint is included in the boilerplate to encourage good practices, which supports **ES6**.
It will lint prior to commits and will refuse them if errors are present, so code responsibly 😉.