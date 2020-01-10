/* eslint-env jest */
import Reddit from './index';
import { REDDIT_URL, SUBREDDIT } from '../../mocks';

describe('Reddit', () => {
  it('isSubreddit returns expected value', () => {
    expect(Reddit.isSubreddit(REDDIT_URL)).toBe(true)
  })
  it('getSubreddit returns the correct subreddit', () => {
    expect(Reddit.getSubreddit(REDDIT_URL)).toBe(SUBREDDIT)
  })
  it('parseUrl returns expected values', () => {
    expect(Reddit.parseUrl([{url: REDDIT_URL}])).toMatchObject({parsedUrl: REDDIT_URL, isSubreddit: true, subreddit: SUBREDDIT})
  })
})
