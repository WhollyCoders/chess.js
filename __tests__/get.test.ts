import { Chess, PAWN, WHITE, BLACK } from '../src/chess'

test('get', () => {
  const chess = new Chess()
  expect(chess.get('a2')).toEqual({ type: PAWN, color: WHITE })
  expect(chess.get('a7')).toEqual({ type: PAWN, color: BLACK })
})

test('get - capitalized square', () => {
  const chess = new Chess()
  expect(chess.get('A2')).toEqual({ type: PAWN, color: WHITE })
  expect(chess.get('A7')).toEqual({ type: PAWN, color: BLACK })
})

test('get - returns false for empty square', () => {
  const chess = new Chess()
  expect(chess.get('a4')).toEqual(false)
})

test('get - returns false for invalid square', () => {
  const chess = new Chess()
  expect(chess.get('bad-square')).toEqual(false)
})
