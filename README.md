# Chatroom

A simple chatroom application built with Node.js for learning purposes. It's built with an ES5 version (the `v1` folder), an ES6 and Flow version (the `v2` folder), and a simple shell client.

## Install

In the folder of whichever version you want to use, `npm install`.

## Usage

This repository contains implementations of the server, and a simple shell-based client.

### Server

To startup the server, run `npm start` or `npm start &` in whichever version's folder you wish to use.

### Client

To use the client, you need to fill `profile.txt` with the hostname and port of the server, and the username you wish to use with the chatroom.
```
localhost:20000
my_username
```

After filling out `profile.txt`, make the client scripts executable.
```
chmod +x test
chmod +x send
chmod +x messages
```

Run `./test` to test the connection. You should see the HTTP address of the server, your username, and "hello, world!"
Run `./send [content]` to send a message [content].
Run `./messages` to see all messages sent so far.

## Default Server

There is a server running at 68.175.142.250:30000 for testing purposes.
