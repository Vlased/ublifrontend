import { getQueryParams } from './addQueryParams'

describe('addQueryParam', () => {
  test('with one param', () => {
    const params = getQueryParams({
      test: 'value'
    })
    expect(params).toBe('?test=value')
  })

  test('with a couple of params', () => {
    const params = getQueryParams({
      test1: 'value1',
      test2: 'value2'
    })
    expect(params).toBe('?test1=value1&test2=value2')
  })

  test('with undefined', () => {
    const params = getQueryParams({
      test1: 'value1',
      test2: undefined
    })
    expect(params).toBe('?test1=value1')
  })
})
