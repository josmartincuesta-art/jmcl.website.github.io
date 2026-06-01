// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCo9zMeEgfpzdReBmWBFDKFfgPPPXsJEkWDobkyRDmPF-4dlTpwPq9UU1r78mv8qtsaHG8NbHGpIYyQ57BG3IFqymhaQP12Wjw7Pas8P6bdwlIANqp5mXUZR7pUFsBUXlvHzB5XQlMqtDVjqOinJLFQQMeCXmKuG987xzMADynm99aT3mhL0YUs8-QEBBdGQ7Gq0_bgL-_4vAie8vlcmHdiOCUOzujrk1Dd7u0JzuC_LHxTajrEyu2YvU5IaqAh3lqYhybLweAbnl7CVk_DuVMe0wvCNuF0K66IBuwxEwT4zz9O7d5FMiIJSndwswUi';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);






// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBhoRUQ2LGYr4J4xT9jcd0JWFiIgcfErVjFS8z_1r1rNMfonwAL3i21-P_AuaAbxvU9UeClSzd5PTe1edmaJKEGhUQ2-e1RBZzabC-oG4-oB_POb2XhMJRXsoXMlLLeKDoRoHRL3Qyy5j298dkwZH0c68LnX1kMwtivpBEUEL-uO9hFo7y_zbQ13cH4G-t37Sog5QrXTz4B0k-Q37Yx-CK2vBk4OZKkBUy22HOLEVAE1OhoPAIDGFPNIIyZENcTcHtJDyChjcuIA7mVjf1w-70a9gApm8cL7JFdfaeJyYHnGmH3GbjQh-BYLCBL1WI4';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);








// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQAR9SdHV091OgFGrqZPX54qEISKrfBu9bS2trekiIW0C8vEdympckiRGcARMDdMN3WOfu7eq8XP7t7nJlryvq-vzjV2yogsIw1_NYZgfgJSWf-QSnBF90WECmKi8r7deTwGuDg5qqAP9Y68VHR1wWCi_3dv1205Oy9wELVhpscpamxX3LTeq_rxB1t4MnU8iHo9Jg4Iqv8sKBJSVcZaodNLd4ziU_ux6eA1bm9wRHA4NwH_RxbZcRC6YtwhhUlcUa3rrb7Fp3duluSNBiQuayav7McNfrO9EkNq_OrHNhP0YNk8HbTFRCHMIHrpR7s1';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const tracksUri = [
  'spotify:track:29y3JEu8Xabov4zLy01Y8F','spotify:track:1b9YDjE91w8vt0sidxorNS','spotify:track:6MkLV30NQew77v6cUGWNFu','spotify:track:5XWmA3zc36w5A6c2OVONnm','spotify:track:3SpyIpdHoIax6g9EmHOZx2'
];

async function createPlaylist(tracksUri){
  const { id: user_id } = await fetchWebApi('v1/me', 'GET')

  const playlist = await fetchWebApi(
    `v1/users/${user_id}/playlists`, 'POST', {
      "name": "My top tracks playlist",
      "description": "Playlist created by the tutorial on developer.spotify.com",
      "public": false
  })

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
    'POST'
  );

  return playlist;
}

const createdPlaylist = await createPlaylist(tracksUri);
console.log(createdPlaylist.name, createdPlaylist.id);
Result


const playlistId = '02pYoKCwLk6TOvfRxSe9vF';

<iframe
  title="Spotify Embed: Recommendation Playlist "
  src={`https://open.spotify.com/embed/playlist/02pYoKCwLk6TOvfRxSe9vF?utm_source=generator&theme=0`}
  style="border-radius:12px" 
  width="100%"
  height="100%"
  style={{ minHeight: '360px' }}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>