# Server

### Socket Data Scheme

Connecting
-

CLIENT --> SERVER (`connection` channel)

```json
{
  "username": "usernameHereWhoJoined"
}
```

SERVER --> ALL CLIENTS (`connections` channel)

```json
{
  "username": "usernameHereWhoJoined"
}
```

Messaging
-

CLIENT --> SERVER (`message` channel)

```json
{
  "username": "usernameHereWhoMessaged",
  "message": "messageHereThatWasSent"
}
```

SERVER --> ALL CLIENTS (`messages` channel)

```json
{
  "username": "usernameHereWhoMessaged",
  "message": "messageHereThatWasSent"
}
```