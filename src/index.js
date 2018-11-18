import DollarRecognizer, { Point } from './vendor/dollar'

const pointMaker = ({ x, y }) => new Point(x, y)

// wrap DollarRecognizer's API in JavaScript style
class GestureRecognizer {
  constructor({ defaultStrokes = true } = {}) {
    this.dollarRecognizer = new DollarRecognizer({ defaultStrokes })
  }

  recognize(points, useProtractor) {
    const result = this.dollarRecognizer.Recognize(
      points.map(pointMaker),
      useProtractor
    )

    const name = result.Name
    return name
  }

  add(name, points) {
    return this.dollarRecognizer.AddGesture(name, points.map(pointMaker))
  }

  reset() {
    return this.DeleteUserGestures()
  }
}

export default GestureRecognizer
