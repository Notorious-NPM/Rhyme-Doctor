const startingText = func =>
`function ${func}() {

}
`;

export default class Rooms {
  constructor(io) {
    this.io = io;
    this.store = new Map();
  }

  findOrCreate(roomId, title) {
    let room = this.store.get(roomId);
    if (!room) {
      room = new Map();
      room.set('id', roomId);
      room.set('text', startingText(title)); // eslint-disable-line
      this.store.set(roomId, room);
    }
    return room;
  }
}
