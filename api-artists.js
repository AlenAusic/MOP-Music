API_KEY = "017bfda7b81a6fcf65fe34db36d3e182";
SHARED_SECRET = "2b4d503bf37c6a7e19b57be174e023ae";

//www.last.fm/api/show/geo.getTopArtists

url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${COUNTRY}&api_key=${API_KEY}&format=json`;

url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${ARTIST_NAME}&api_key=${API_KEY}&format=json`;

url2 = https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=017bfda7b81a6fcf65fe34db36d3e182&format=json