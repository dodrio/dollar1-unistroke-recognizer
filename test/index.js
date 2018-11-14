import test from 'ava'
import GestureRecognizer from '../src'

const strokeZigZag = [
  { x: 310, y: 230 },
  { x: 333, y: 186 },
  { x: 356, y: 215 },
  { x: 375, y: 186 },
  { x: 399, y: 216 },
  { x: 418, y: 186 },
]

test('current wrapper worked', t => {
  const gr = new GestureRecognizer()
  t.is(gr.recognize(strokeZigZag, true), 'zig-zag')
  t.is(gr.recognize(strokeZigZag, false), 'zig-zag')
})
