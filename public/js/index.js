var socket = io();

socket.on('connect', function() {
    console.log('Connected to the server');
    socket.emit('createMessage', {
        to: 'example@example.com',
        text: 'Hello'
    });
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});

socket.on('disconnect', function() {
    console.log('Disonnected from the server');
});

socket.on('newEmail', function(email) {
    console.log('New email', email);
});