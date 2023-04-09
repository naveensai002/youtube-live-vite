const Google_API_KEY = 'AIzaSyDOanJj2BTWzdls9nm_gI9b4eRcBA-Dk6Y';

export const youtube_API =
  ' https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  Google_API_KEY;

export const comment_API =
  'https://youtube.googleapis.com/youtube/v3/comments?key=' + Google_API_KEY;

export const YOUTUBE_SUGGESTIONS_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const VIDEO_CATEGORIES_LIST =
  'https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=' +
  Google_API_KEY;
