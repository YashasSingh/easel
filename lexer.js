import { EaselError } from './stdlib.js'

export const TOKENS = {
  LeftParen: 'LeftParen',
  RightParen: 'RightParen',
  LeftBrace: 'LeftBrace',
  RightBrace: 'RightBrace',
  LeftBracket: 'LeftBracket',
  RightBracket: 'RightBracket',
  Period: 'Period',
  Comma: 'Comma',
  Colon: 'Colon',
  Keyword: 'Keyword',
  Identifier: 'Identifier',
  String: 'String',
  Number: 'Number',
  Boolean: 'Boolean',
  Or: 'Or',
  Not: 'Not',
  Equiv: 'Equiv',
  NotEquiv: 'NotEquiv',
  Gt: 'Gt',
  Gte: 'Gte',
  Lt: 'Lt',
  Lte: 'Lte',
  Plus: 'Plus',
  Minus: 'Minus',
  Asterisk: 'Asterisk',
  Slash: 'Slash',
  EOF: 'EOF'
}



export class Token {
  constructor(type, value, content, line, column) {
    this.type = type
    this.value = value
    this.content = content
    this.line = line
    this.column = column
  }
  toString() {
    return this.value
  }
}


export class Lexer {
    constructor(program) {
      this.program = program
      this.tokens = []
      this.current = 0
      this.line = 1
      this.column = 1
    }
    error(msg) {
        throw new EaselError(`Error on ${this.line}:${this.column}: ${msg}`)
      }
}
export class Lexer {
    constructor(program) {
        this.program = program
        this.tokens = []
        this.current = 0
        this.line = 1
        this.column = 1
      }
      error(msg) {
          throw new EaselError(`Error on ${this.line}:${this.column}: ${msg}`)
        }
    peek() {
        if (this.current >= this.program.length) return '\0'
        return this.program[this.current]
      }
    advance() {
        if (this.current >= this.program.length) return '\0'
        this.column++
        return this.program[this.current++]
    }
    scanTokens() {
        while (this.peek() != '\0') this.scanToken()
        this.tokens.push(new Token(TOKENS.EOF, '\0', '\0', this.line, this.column))
        return this.tokens
  }
}