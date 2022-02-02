import axios from 'axios';

const KEY = 'AIzaSyCgzAdgy1qC9hrT-oFiVZTNZO8C7xgwK5E';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})