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
    let day = this.timestamp.getDate();
    let monthIndex = this.timestamp.getMonth() + 1;
    let year = this.timestamp.getFullYear();
    let hours = this.timestamp.getHours();
    let minutes = this.timestamp.getMinutes();
    let amPm = hours >= 12 ? "PM" : "AM";
    let timeString = monthIndex + "/" + day + "/" + year + " " + hours + ":" + minutes + " " + amPm;
    return timeString + ": " + this.sender + " > " + this.content;
  }

}

export default Message;
