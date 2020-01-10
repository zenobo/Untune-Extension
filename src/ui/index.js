const UI = {
  hideDefaultOption: (subreddit) => {
    document.getElementById('opt1').style.display = 'none';
    document.getElementById('header-subreddits').style.display = 'none';
    document.getElementById('subreddit').innerHTML = subreddit;
  },
  hidePlaylistOption: () => {
    document.getElementById('opt2').style.display = 'none';
  },
  setPlaylistButton: (youtubeURL) => {
    document.getElementById('youtube-url').href = youtubeURL;
    document.getElementById('youtube-button').classList.remove('playlist-btn-disabled');
  }
}

export default UI;
