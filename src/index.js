import Reddit from './reddit';
import UI from './ui';
import Utility from './utility';
import { PLAYLIST_BASE } from './data/constants';
import getYouTubeID from 'get-youtube-id';

document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.query({active:true,currentWindow:true},function(tab){
    const {url, subreddit, isSubreddit} = Reddit.parseUrl(tab);

    // Get posts if user is on reddit
    if(isSubreddit){
      // load posts
      loadPosts(subreddit)
      .then(response => {
        let { posts, playlistURL } = parseIds(response);
        UI.setPlaylistButton(playlistURL);
      });
      // hide default homescreen
      UI.hideDefaultOption(subreddit)
    }else{
      // hide playlist screen
      UI.hidePlaylistOption()
    }
  });

}, false);

export const parseIds = (data) => {
  let posts = [];
  let playlistURL = PLAYLIST_BASE;
  let youtubeId;

  data.data.children.map((val)=>{
    let {url, permalink, title} = val.data;
    // add video
    youtubeId = getYouTubeID(url);
    if(youtubeId && youtubeId.length == 11){
      posts.push({url, permalink, title, youtubeId: youtubeId});
      playlistURL += `, ${youtubeId}`;
    }
  })
  return { posts, playlistURL };
}

async function loadPosts(subreddit){
  // Get posts
  let response = await fetch(`https://www.reddit.com/r/${subreddit}/hot/.json?count=30`);
  let data = await response.json()
  return data;
}
