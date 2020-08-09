# Server

### Socket Data Scheme

Connecting
-

CLIENT --> SERVER (`join` channel)

```json
{
  "username": "usernameHereWhoJoined"
}
```

SERVER --> ALL CLIENTS (`connections` channel)

```json
{
  "username": "usernameHereWhoJoined",
  "totalCount": "<int>"
}
```

Messaging
-

CLIENT --> SERVER (`message` channel)

```json
{
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
Disconnecting
-

CLIENT --> SERVER (`disconnect` channel)

```No data```

SERVER --> ALL CLIENTS (`leave` channel)

```json
{
  "username": "usernameHereWhoLeft",
  "totalCount": "<int>"
}
```