var socket = io();

socket.on('connect', function() {
    console.log('Connected to the server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});

socket.on('disconnect', function() {
    console.log('Disonnected from the server');
});

socket.emit('createMessage', {
    from: 'Frank',
    text: 'Hi'
}, function (data) {
    console.log('From server', data);
});