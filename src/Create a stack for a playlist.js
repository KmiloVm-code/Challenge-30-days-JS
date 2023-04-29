class Node {
  constructor(value) {
    // Tu código aquí 👈🏻
    this.value = value;
    this.next = null;
  }
}

class Playlist {
  constructor() {
    // Tu código aquí 👈🏻
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  addSong(song) {
    // Tu código aquí 👈🏻
    const newNode = new Node(song);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
  }
  this.length++;
  return this;
}

  playSong() {
    // Tu código aquí 👈🏻
    if (!this.top) {
      throw new Error("No hay canciones en la lista");
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const song = this.top.value;
    this.top = this.top.next;
    this.length--;    
    return song;
  }

  getPlaylist() {
    // Tu código aquí 👈🏻
    const list = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }
}

// Input:
const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

console.log(playlist.getPlaylist());

console.log(playlist.playSong());
// Output: "Hotel California"
console.log(playlist.playSong());
// Output: "Stairway to Heaven"
console.log(playlist.playSong());
// Output: "Bohemian Rhapsody"
console.log(playlist.playSong());
// Output: Error: No hay canciones en la lista

// Input:
const playlist2 = new Playlist();

playlist2.addSong("Bohemian Rhapsody");
playlist2.addSong("Stairway to Heaven");
playlist2.addSong("Hotel California");

console.log(playlist2.getPlaylist());
// Output: ["Hotel California", "Stairway to Heaven", "Bohemian Rhapsody"]