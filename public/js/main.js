const socket = io("http://localhost:8000");
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
});

socket.emit("joinRoom", { username, room });
socket.on("roomUser", ({ room, users }) => {
    outputRoomName(room);
    outputUsers(users);
});
socket.on("message", (message) => {
    outputMessage(message);
    $(".chat-messages").scrollTop($(".chat-messages")[0].scrollHeight);
});
socket.on("connection", () => {});

$("#chat-form").on("submit", function (e) {
    e.preventDefault();
    const msg = $("#msg").val();
    socket.emit("chatMessage", msg);
});

function outputMessage(msg) {
    const div = `<div class="message"> 
    <p class="meta">${msg.username} <span>${msg.time}</span></p>
          <p class="text">
        ${msg.text}
          </p></div>`;
    $(".chat-messages").append(div);
    $("#msg").val("");
}
function outputRoomName(room) {
    $("#room-name").html(room);
}
function outputUsers(users) {
    $("#users").html(`
        ${users.map((user) => `<li>${user.username}</li>`).join("")}
    `);
}
