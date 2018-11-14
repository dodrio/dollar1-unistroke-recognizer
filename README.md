# dollar1-unistroke-recognizer

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Module System](https://img.shields.io/badge/module%20system-ES%20Module-brightgreen.svg)](#)
[![Dependency Status](https://img.shields.io/david/2players/dollar1-unistroke-recognizer.svg)](#)
[![DevDependency Status](https://img.shields.io/david/2players/dollar1-unistroke-recognizer.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/2players/dollar1-unistroke-recognizer.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/dollar1-unistroke-recognizer.svg)](#)

> A wrapper of [\$1 Unistroke Recognizer](https://depts.washington.edu/madlab/proj/dollar/index.html).

## Install

```
$ npm install @2players/dollar1-unistroke-recognizer
```

## Usage

```js
import GestureRecognizer from '@2players/dollar1-unistroke-recognizer'

const gr = new GestureRecognizer()
const stroke = [
  { x: 310, y: 230 },
  { x: 333, y: 186 },
  { x: 356, y: 215 },
  { x: 375, y: 186 },
  { x: 399, y: 216 },
  { x: 418, y: 186 },
]

const strokeName = gr.recognize(stroke, true)
console.log(strokeName)
// 'zig-zag'
```
