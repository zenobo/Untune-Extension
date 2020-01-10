/* eslint-env jest */
import Utility from './index';
import { REDDIT_URL, SUBREDDIT } from '../../mocks';

describe('Utility', () => {
  it('isSubreddit returns expected value', () => {
    expect(
       Utility.includesSplit({url: REDDIT_URL, qString: 'reddit.com/r/', splitter: '/r/', index: 1})
    ).toBe('music/')
  })
})
