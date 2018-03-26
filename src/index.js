// @flow
import http from 'http';
import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import HelloWorldRouter from './routers/HelloWorldRouter';
import PostSendMessageRouter from './routers/PostSendMessageRouter';
import GetAllMessagesRouter from './routers/GetAllMessagesRouter';
import Api from './utils/Api';

const api: Api = new Api('', [bodyParser.json()], [HelloWorldRouter, PostSendMessageRouter, GetAllMessagesRouter]);

const server: http.Server = http.createServer(api.app);

const onError = (err: Error): void => {
  console.log(err);
};

const onListening = (): void => {
  const host = server.address().address;
  const port = server.address().port;
  
  console.log(`Listening on ${host}:${port}`);
};

server.on('error', onError);
server.on('listening', onListening);
server.listen(20000);
