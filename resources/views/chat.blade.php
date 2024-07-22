<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
    integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
  <link rel="stylesheet" href="{{ asset('/css/style.css') }}">
  <title>ChatCord App</title>
</head>

<body>
  <div class="chat-container">
    <header class="chat-header">
      <h1><i class="fas fa-smile"></i> ChatCord</h1>
      <a href="{{ url('/') }}" class="btn">Leave Room</a>
    </header>
    <main class="chat-main">
      <div class="chat-sidebar">
        <h3><i class="fas fa-comments"></i> Room Name:</h3>
        <h2 id="room-name"></h2>
        <h3><i class="fas fa-users"></i> Users</h3>
        <ul id="users">
          <li>Brad</li>
          <li>John</li>
          <li>Mary</li>
          <li>Paul</li>
          <li>Mike</li>
        </ul>
      </div>
      <div class="chat-messages">

      </div>
    </main>
    <div class="chat-form-container">
      <form id="chat-form">
        <input id="msg" type="text" placeholder="Enter Message" required autocomplete="off" />
        <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
      </form>
    </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
    integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.12.3/qs.min.js"
    integrity="sha512-44BDaDSsjSe2hSjVA42JrU77ADA4Uzcl3ZJq6tR+9Q1zA0e428UYZKdg9L7f8OFtj0SMdKv7ZCeJWNkgxiDAFQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
  <script src="{{ asset('js/main.js') }}"></script>
</body>

</html>
