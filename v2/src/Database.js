// @flow

import Message from './Message';

class Database {
  
  messages: Array<Message>;

  constructor() {
    this.messages = [];
  }

  addMessage(message: Message): void {
    this.messages.push(message);
  }

  toString(): string {
    return this.messages.map(e => e.toString()).join("\n") + "\n";
  }

}

const singleton: Database = new Database();

export default { singleton }
