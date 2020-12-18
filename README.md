# HackWeek2020: Node SDK for Bot API

## Installation
 
- Clone repo
- Run `yarn install` and `yarn run build` to generate the distributed Chatter API module (`dist/index.js`)

## Usage

Create a `.env` file with the following entries. The API will use these when making requests

```js
CHAT_TOKEN=
AUTH_URL=
RESPONSES_URL=
```

The SDK contains two methods that send POST requests to the Bot API

- `authenticate`
- `getResponses` -> currently calls `authenticate` first to make sure token is valid before moving on. Will need to modify logic once details are finalized

To use the SDK

```js
const Chatter = require("./dist/").default;
const chatterInstance = new Chatter({
    "token": process.env.CHAT_TOKEN,
    "authUrl": process.env.AUTH_URL,
    "responsesUrl": process.env.RESPONSES_URL
});

chatterInstance.authenticate().then(...).catch(...)
chatterInstance.getResponses(messageString).then(...).catch(...);
```

For the webhooks, you can run a server using `yarn run server`. There are two routes:

- `/authenticate`
- `/responses`

The server can be triggered using the implementation example above or you can take a look at `test.js`

##  Note

If there are any changes made to `index.js`, make sure to run `yarn run build` before testing changes
