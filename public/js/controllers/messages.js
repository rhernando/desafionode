'use strict';

//MESSAGES through socket.io
angular.module('desafio.messages').controller('MessagesController', ['$scope', 'Global', 'socket', 'Messages', function ($scope, Global, socket, Messages) {
    console.log(Global);
    $scope.global = Global;

    socket.on('init', function (data) {
        console.log(data);
    });

    socket.on('send:message', function (message) {
        $scope.messages.push(message);
    });

    socket.on('user:join', function (data) {
        console.log(data);
        $scope.messages.push({
            username: 'System',
            type: 'System',
            content: 'User ' + Global.user.username + ' has joined.'
        });
    });

    // add a message to the conversation when a user disconnects or leaves the room
    socket.on('user:left', function (data) {
        console.log(data);
        $scope.messages.push({
            username: 'System',
            type: 'System',
            content: 'User ' + Global.user.username + ' has left.'
        });

    });

    // Methods published to the scope
    // ==============================

    $scope.sendMessage = function () {
        console.log($scope.message);
        socket.emit('send:message', {
            content: $scope.message,
            username: Global.user.username
        });

        // add the message to our model locally
        $scope.messages.push({
            username: Global.user.username,
            content: $scope.message
        });

        // clear message box
        $scope.message = '';
    };

    $scope.find = function () {
        Messages.query(function (messages) {
            $scope.messages = messages;
        });
    };

}]);