const dotenv = require("dotenv").config();
const Chatter = require("./dist").default;

const chatter = new Chatter({
  "token": process.env.CHAT_TOKEN,
  "authUrl": process.env.AUTH_URL,
  "responsesUrl": process.env.RESPONSES_URL
});


try {
    chatter.authenticate()
      .then((response) => {
         console.log(response.data);
      })
      .catch((err) => {
          console.log("Error in authenticate\n", err);
      });

    chatter.getResponses("Hi")
      .then((response) => {
         console.log(response.data);
    })
      .catch((err) => {
         console.log("Error in getResponses\n", err);
    });
} catch(e) {
   console.log("An error occurred\n", e);
}


