// @flow

class Message {
  
  sender: string;
  content: string;
  timestamp: Date;

  constructor(sender: string, content: string) {
    this.sender = sender;
    this.content = content;
    this.timestamp = new Date();
  }

  toString(): string {
    return this.timestamp.toLocaleFormat("%B %e, %Y, %r") + ": " + this.sender + " > " + this.content;
  }

}

export default Message;
