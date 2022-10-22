function make_album(atrist, album, track) {
  if (arguments.length == 3) {
    console.log({
      artist_name: atrist,
      artist_album: album,
      No_of_track: track,
    });
  } else {
    console.log({ artist_name: atrist, artist_album: album });
  }
}
console.log(make_album("arjeet", "tum hi ho", 8));
console.log(make_album("atif", "kuch is tarha"));
console.log(make_album("sidhu", "game"));
