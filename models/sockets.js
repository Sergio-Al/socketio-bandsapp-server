const BandList = require("./band-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("a new client!");

      // Emit to the client an event that shows all the existing bands
      socket.emit("current-bands", this.bandList.getBands());
    });
  }
}

module.exports = Sockets;
