# Group Chat Application Backend - Week 2 Project

you are tasked with building the backend of the new WhatsApp application that will take over the chatting industry.

## Features to support

### - Group chatting

the idea here is to allow four groups as static routes

```bash
# each of these routes are a group that anyone can access and see their content as well as sending their own messages to them

# for important messages
/announcements

# for help with homeworks
/homeworks

# for questions that are unrelated to the two above
/q-and-a

# for any other kind of messages
/random-chatting

```

each route should have a way to get the messages and send to it, update,delete messages.
it is up to you how you implement it make sure that have almost all the main features that WhatsApp provides

### - Private message chatting (which should create a seprate room for them)

we need each user to be able to communicate with another user in private...
meaning that when a person tries to get his/her messages it only shows messages exchanged between the two users

an example is the following:

```bash
# Mohammed
/sara/getmessages
# returns messages between Sara and Mohammed


# Sultan
/sara/getmessages
# returns messages between Sara and Sultan
```

and so on

### - Allow deleting full private converstions

just allow the reset of private messages so that if sensitive data was sent it can get fully removed.

## Bonus

- block users using ip addresses

implement the ability to block a user from ever sending anything to your server, you don't need to make this dynamic (since only admins should be able to block users)

- recongnize each person after asking them for a name once...

find a way to make requests not require names for each message they send

- add the ability to search all the messages availiable

basically a global search for all the available message to that user (do not allow him/her to search other people's private messages).

- put on a profile status

add a route for viewing a person's public profile
another for editing your own and another for updating and one for removing your profile.

- deleteing a specific message

whether this be in a group or private, make sure to not allow the users to delete other people's messages, only allow them to do so on their messages

- persistence

All the messages and information should not get reset on a server restart, so to save them in case of a shutdown,

just write everything to json files and use them throughout your program

## Testing

in a real enviourment ip addresses will be different by nature.

you can test your program by sending requests from your mobile, or by hardcoding an ip address for each request you send to simulate different users.

## Conclusion

Please don't hastate to contact your instructors for questions  
have fun and good luck :)
