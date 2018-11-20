# dollar1-unistroke-recognizer

[![$1 Unistroke Recognizer Version](https://img.shields.io/badge/%241%20Unistroke%20Recognizer-July%2014%202018-brightgreen.svg)](https://depts.washington.edu/madlab/proj/dollar/dollar.js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Module System](https://img.shields.io/badge/module%20system-ES%20Module-brightgreen.svg)](#)
[![Dependency Status](https://img.shields.io/david/2players/dollar1-unistroke-recognizer.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/2players/dollar1-unistroke-recognizer.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/@2players/dollar1-unistroke-recognizer.svg)](#)

> A wrapper of [\$1 Unistroke Recognizer](https://depts.washington.edu/madlab/proj/dollar/index.html).

## Install

```
$ npm install @2players/dollar1-unistroke-recognizer
```

## Usage

```js
import GestureRecognizer from '@2players/dollar1-unistroke-recognizer'

// create recognizer with default strokes
const gr = new GestureRecognizer()

// create recognizer without default strokes
const gr = new GestureRecognizer({ defaultStrokes: false })

/**
 * recognize gestures
 */
const stroke = [
  { x: 310, y: 230 },
  { x: 333, y: 186 },
  { x: 356, y: 215 },
  { x: 375, y: 186 },
  { x: 399, y: 216 },
  { x: 418, y: 186 },
]

gr.recognize(stroke, true)
// 'zig-zag'

/**
 * add custom gesture
 *
 * If you don't know how to get enough points, you can try following app:
 *
 *   https://2players.github.io/unistroke-creator/
 */
const customStroke = [
  { x: 0, y: 0 },
  // ... more points
]
gr.add('a-name', customStroke)

/**
 * reset gestures
 *
 * Remove all customized gestures.
 */
gr.reset()
```

## Related

- [unistroke-creator](https://github.com/2players/unistroke-creator)

## License

MIT © 2Players Studio
