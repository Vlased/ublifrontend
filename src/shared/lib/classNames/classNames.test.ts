import { classNames } from './classNames'

describe('classNames', () => {
  test('single class name', () => {
    expect(classNames(['className'])).toBe('className')
  })
  test('several class names', () => {
    expect(classNames(['className1', 'className2'])).toBe('className1 className2')
  })
  test('classes with mods', () => {
    expect(classNames(
      ['className'],
      { hovered: false, scrollable: true }
    )).toBe('className scrollable')
  })
  test('classes with undefined mods', () => {
    expect(classNames(
      ['className'],
      { hovered: true, scrollable: undefined }
    )).toBe('className hovered')
  })
})
