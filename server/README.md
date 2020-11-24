# Server

.env
-

```dotenv
JWT_SECRET=SECRET HERE # Can use require('crypto').randomBytes(64).toString('hex'); in command line or do 'node generate_hex_bytes.js', referring to the js file in the /server/ directory
MONGO_CONN_URL=URL_HERE # Connection URL for the mongoDB database
```