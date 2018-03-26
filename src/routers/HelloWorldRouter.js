// @flow

import AbstractRouter from '../utils/AbstractRouter';

class HelloWorldRouter extends AbstractRouter {
  
  constructor() {
    super('GET', '/', false);
  }

  async content(request: Request): Promise<any> {
    return 'hello, world!\n';
  }

}

export default new HelloWorldRouter().router;
