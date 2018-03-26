// @flow

import AbstractRouter from '../utils/AbstractRouter';
import Database from '../Database';

class GetAllMessagesRouter extends AbstractRouter {
  
  constructor() {
    super('GET', '/allMessages', false);
  }

  async content(request: Request): Promise<any> {
    return Database.singleton.toString();
  }

}

export default new GetAllMessagesRouter().router;
