// @flow
import { Request } from 'express';
import AbstractRouter from '../utils/AbstractRouter';
import Message from '../Message';
import Database from '../Database';

class PostSendMessageRouter extends AbstractRouter {
  
  constructor() {
    super('POST', '/sendMessage', false);
  }

  async content(request: Request): Promise<any> {
    const sender: string = request.body.sender;
    const content: string = request.body.content;
    Database.singleton.addMessage(new Message(sender, content));
    return '';
  }
  
}

export default new PostSendMessageRouter().router;
