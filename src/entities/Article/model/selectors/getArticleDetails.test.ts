import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from './getArticleDetails'

describe('getArticleDetailsData', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      subtitle: 'title'
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })
  test('with empty data', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })

  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }
    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true)
  })
  test('with empty loading', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(undefined)
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'text'
      }
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('text')
  })
  test('with empty error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})
