const Google_API_KEY = 'AIzaSyAUu7__bVzAeugGk8NLgZ6V2Mud-z6S7-U';

export const youtube_API =
  ' https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  Google_API_KEY;

export const comment_API =
  'https://youtube.googleapis.com/youtube/v3/comments?key=' + Google_API_KEY;

// ' https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=49&regionCode=US&key=';
