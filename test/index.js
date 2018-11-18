import test from 'ava'
import GestureRecognizer from '../src'
import {
  strokeZigZag,
  strokeS1,
  strokeS2,
  strokel1,
  strokel2,
} from './_strokes'

test('recoginizer with default strokes: working', t => {
  const gr = new GestureRecognizer()
  t.is(gr.recognize(strokeZigZag, true), 'zig-zag')
  t.is(gr.recognize(strokeZigZag, false), 'zig-zag')
})

test('recognizer with default strokes: add a custom stroke - S', t => {
  const gr = new GestureRecognizer()
  t.not(gr.recognize(strokeS2, false), 's')
  t.not(gr.recognize(strokel2, false), 'l')
  gr.add('s', strokeS1)
  gr.add('l', strokel1)
  t.is(gr.recognize(strokeS2, false), 's')
  t.is(gr.recognize(strokel2, false), 'l')
})

test('recognizer without default strokes', t => {
  const gr = new GestureRecognizer({ defaultStrokes: false })
  const noMatch = 'No match.'
  t.is(gr.recognize(strokeZigZag, true), noMatch)
  t.is(gr.recognize(strokeZigZag, false), noMatch)
})

test('recognizer without default strokes: add a custom stroke', t => {
  const gr = new GestureRecognizer({ defaultStrokes: false })
  t.not(gr.recognize(strokeS2, false), 's')
  t.not(gr.recognize(strokel2, false), 'l')
  gr.add('s', strokeS1)
  gr.add('l', strokel1)
  t.is(gr.recognize(strokeS2, false), 's')
  t.is(gr.recognize(strokel2, false), 'l')
})
