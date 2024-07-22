const path = require("path");
const http = require("http");
const express = require("express");
const socket_io = require("socket.io");
const formatMessage = require("./public/js/messages");
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
} = require("./public/js/users");
const app = express();
const server = http.createServer(app);
const botName = "ChatBot Cord";
const io = socket_io(server, {
    cors: { origin: "*" },
});

app.use(express.static("public"));

io.on("connection", (socket) => {
    socket.on("joinRoom", ({ username, room }) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);

        socket.emit("message", formatMessage(botName, "Welcome to ChatCord!"));
        socket.broadcast
            .to(user.room)
            .emit(
                "message",
                formatMessage(botName, `${user.username} has joined the chat!`)
            );
        io.to(user.room).emit("roomUser", {
            room: user.room,
            users: getRoomUsers(user.room),
        });
    });

    socket.on("chatMessage", (msg) => {
        const user = getCurrentUser(socket.id);
        // console.log(user)
        io.to(user.room).emit("message", formatMessage(user.username, msg));
    });
    socket.on("disconnect", () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit(
                "message",
                formatMessage(botName, `${user.username} has left the chat!`)
            );
            io.to(user.room).emit("roomUser", {
                room: user.room,
                users: getRoomUsers(user.room),
            });
        }
    });
});
const PORT = 8000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
