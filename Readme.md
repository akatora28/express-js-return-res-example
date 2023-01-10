# Example Code for Dev.To Article:

[Why you should ALWAYS use return before res.send in Express APIs and Applications](https://dev.to/adamkatora/why-you-should-always-use-return-before-ressend-in-express-apis-and-applications-k9k)

Install with:

```bash
npm install
```

Start Express.js server with:
```bash
npm run start
```

From a new terminal, you can use the npm curl scripts to make a POST request to the `/login` endpoint. **Only tested on Unix-like systems**

```bash
npm run curl-right-password
npm run curl-wrong-password
```

## About

The program intentionally continues execution after the `res.send()` calls on lines 15 & 18. If you comment lines 15 & 18 then uncomment lines 16 & 19, the function will exit before reaching the `db.set()` call on line 24.
