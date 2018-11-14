import test from 'ava'
import GestureRecognizer from '../src'
import { strokeZigZag, strokeS1, strokeS2 } from './_strokes'

test('default strokes are working', t => {
  const gr = new GestureRecognizer()
  t.is(gr.recognize(strokeZigZag, true), 'zig-zag')
  t.is(gr.recognize(strokeZigZag, false), 'zig-zag')
})

test('add a custom stroke - S', t => {
  const gr = new GestureRecognizer()
  t.not(gr.recognize(strokeS2, false), 's')
  gr.add('s', strokeS1)
  t.is(gr.recognize(strokeS2, false), 's')
})
