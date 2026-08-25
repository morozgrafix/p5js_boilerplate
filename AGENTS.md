# AGENTS.md

## Project overview

This repository is a lightweight p5.js sketch playground served directly in the browser. There is no bundler or application framework. `index.html` loads p5.js, optional libraries from `src/libs`, and one active sketch from `src`.

## Repository layout

- `index.html`: browser entry point and active sketch selection.
- `src/sketch.js`: minimal starter sketch.
- `src/*.js`: standalone sketches and experiments.
- `src/libs/`: vendored third-party libraries and SVG font assets. Avoid modifying vendored files unless the task explicitly requires it.
- `css/style.css`: page-level styling.
- `output/`: generated artifacts; ignored by Git.

## Setup and commands

Install dependencies with:

```sh
npm install
```

Start the development server with live reload:

```sh
npm start
```

The site is normally available at `http://localhost:3000`.

Run linting with:

```sh
npm run lint
```

The lint script includes `--fix`, so it may modify source files. Review the resulting diff after running it. There is currently no automated test suite.

## Development conventions

- Sketches use p5.js global mode. Lifecycle functions such as `preload`, `setup`, and `draw`, along with p5 globals, do not need imports.
- Keep each experiment self-contained in its own file under `src`.
- To display a different sketch, change the final sketch `<script>` in `index.html`. Do not remove shared library scripts needed by other sketches without checking their consumers.
- Preserve the existing plain-script loading model unless a task explicitly calls for a build system or modules.
- Keep generated images, SVG exports, PDFs, and similar artifacts in `output/` so they remain untracked.
- Do not reformat or lint vendored/minified files in `src/libs` as part of unrelated work.

## Verification

For JavaScript changes:

1. Run `npm run lint` and review any automatic fixes.
2. Run `npm start` and open the active sketch in a browser.
3. Check the browser console for load errors and verify the canvas behavior visually.

For changes to a sketch that is not currently loaded, temporarily select it in `index.html` for verification, but do not leave that selection changed unless it is part of the requested result.

## Git hygiene

- Keep unrelated sketches and local experiments out of commits.
- Stage only files relevant to the requested change; the working tree may contain user-owned modifications.
- Do not commit files from `output/` or dependency directories such as `node_modules/`.

## Do

- Read existing code before modifying anything
- Match existing patterns, naming, and style
- Handle errors gracefully — no silent failures
- Keep changes small and scoped to what was asked
- Ask clarifying questions before guessing

## Don't

- Install new dependencies without asking
- Delete or overwrite files without confirming
- Hardcode secrets, API keys, or credentials
- Rewrite working code unless explicitly asked
- Push, deploy, or force-push without permission
- Make changes outside the scope of the request

## When Stuck

- If a task is large, break it into steps and confirm the plan first
- If you can't fix an error in 2 attempts, stop and explain the issue

## Git

- Small, focused commits with descriptive messages
- Never force push

## Response Style

- always respond with clear & concise messages
- use plain English when explaining to the User
- avoid long sentences, complex words, or long paragraphs
