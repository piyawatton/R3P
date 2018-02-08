import expect from 'expect'
import { assign, reduce, isObject, isArray } from 'lodash'
import * as utils from '../../lib/utils/url'


describe('Utilities url method', () => {

  it('should return url with query string"', () => {
    const params = {
      test: {
        x: 1,
        y: [1]
      }
    }
    expect(utils.endpointWithParams('test.com', params)).toEqual('test.com?test[x]=1&test[y][0]=1');
  })

})
