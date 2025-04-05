export function removeDuplicates(playlist) {
  return [...new Set(playlist)];
}

export function hasTrack(playlist, track) {
  return new Set(playlist).has(track);
}

export function addTrack(playlist, track) {
  const set = new Set(playlist);
  set.add(track);
  return [...set];
}

export function deleteTrack(playlist, track) {
  const set = new Set(playlist);
  set.delete(track);
  return [...set];
}

export function listArtists(playlist) {
  const artistSet = new Set();

  for (const track of playlist) {
    const artist = track.split(" - ")[1];
    artistSet.add(artist);
  }

  return [...artistSet];
}
