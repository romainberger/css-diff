import fs from 'fs'
import path from 'path'
import {expect} from 'chai'
import diff, {parse, toString} from '../src'

const sourcePath = path.join(__dirname, 'diff-source.css')
const reversedPath = path.join(__dirname, 'diff-reversed.css')
const resultPath = path.join(__dirname, 'diff-result.css')
const orderPath = path.join(__dirname, 'diff-order.css')
const orderResultPath = path.join(__dirname, 'diff-order-result.css')

describe('Diff', () => {
  it('should return only the diff', () => {
    const source = fs.readFileSync(sourcePath, 'utf-8')
    const reversed = fs.readFileSync(reversedPath, 'utf-8')
    const expected = fs.readFileSync(resultPath, 'utf-8')

    const output = diff(source, reversed)
    expect(output).to.equal(expected)
  })

  it('should work with stringified css and should return a stringified version back', () => {
    const source = JSON.stringify(fs.readFileSync(sourcePath, 'utf-8'))
    const reversed = JSON.stringify(fs.readFileSync(reversedPath, 'utf-8'))
    const expected = fs.readFileSync(resultPath, 'utf-8')

    const output = diff(source, reversed)
    expect(output).to.equal(JSON.stringify(expected))
  })

  it('should ignore comments', () => {
    const source = `body {
  color: blue;
  /*this is a comment*/
  width: 50px;
}`
    const reversed = `body {
  color: blue;
  width: 60px;
}`
    const expected = `body {
  width: 60px;
}
`

    expect(diff(source, reversed)).to.equal(expected)
  })

  it('should not take order into account', () => {
    const source = fs.readFileSync(sourcePath, 'utf-8')
    const order = fs.readFileSync(orderPath, 'utf-8')
    const expected = fs.readFileSync(orderResultPath, 'utf-8')

    const output = diff(source, order)
    expect(output).to.equal(expected)
  })
})

describe('Parse', () => {
  it('should return the css as an object', () => {
    const css = 'body {width: 60px} .foo {height: 10px} body {height: 20px} .foo .bar {margin: 10px}'
    const expected = {
      body: {
        width: '60px',
        height: '20px',
      },
      '.foo': {
        height: '10px',
      },
      '.foo .bar': {
        margin: '10px',
      },
    }

    expect(parse(css)).to.eql(expected)
  })
})

describe('toString', () => {
  it('should return a string from a parsed css', () => {
    const css = {
      body: {
        width: '10px',
        margin: 'auto',
      },
      '.foo': {
        height: '20px',
      }
    }

    const expected = `body {
  width: 10px;
  margin: auto;
}
.foo {
  height: 20px;
}
`

    expect(toString(css)).to.equal(expected)
  })
})
