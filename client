#! /bin/bash

# Read in in profile
declare -a profile
readarray -t profile < profile.txt

server="http://${profile[0]}/"
user=${profile[1]}

# Send a test request
echo "$server"
echo "$user"
curl -X GET $server
echo "Type and press enter to send a message"
echo ":h - display instructions"
echo ":ls - print all messages"
echo ":q - quit"
    
# Read eval print loop
while true; do

  read -p "$user > " COMMAND
  
  # Help list commands
  if [ "$COMMAND" == ":h" ]; then
    echo "Type and press enter to send a message"
    echo ":h - display instructions"
    echo ":ls - print all messages"
    echo ":q - quit"
    continue
  fi
  
  # List all messages
  if [ "$COMMAND" == ":ls" ]; then
    server="http://${profile[0]}/allMessages"    
    curl -X GET $server
    continue
  fi
  
  # Quit
  if [ "$COMMAND" == ":q" ]; then
    break
  fi
  
  # Send message 
  server="http://${profile[0]}/sendMessage"
  json="{\"sender\": \"$user\", \"content\": \"$COMMAND\"}"  
  curl -d "$json" -H "Content-Type: application/json" -X POST $server

done
