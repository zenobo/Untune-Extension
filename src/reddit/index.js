import Utility from '../utility';

const Reddit = {
  parseUrl: (url) => {
    const parsedUrl = url[0].url.toLowerCase();
    const isSubreddit = Reddit.isSubreddit(parsedUrl);
    const subreddit = Reddit.getSubreddit(parsedUrl);

    return { parsedUrl, isSubreddit, subreddit };
  },
  isSubreddit: (parsedUrl) => {
    return parsedUrl.includes('reddit.com/r/');
  },
  getSubreddit: (url) => {
    let subreddit = Utility.includesSplit({url, qString: 'reddit.com/r/', splitter: '/r/', index: 1});
    subreddit = Utility.includesSplit({url: subreddit, qString: '/', splitter: '/', index: 0});
    return subreddit;
  }
};

export default Reddit;
