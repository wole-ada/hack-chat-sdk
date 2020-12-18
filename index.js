import "@babel/polyfill"
import axios from "axios"

export default class ChatterSDK {
    constructor({ token, authUrl, responsesUrl }) {
       this.token = token;
       this.authUrl = authUrl;
       this.responsesUrl = responsesUrl;
    }


   async authenticate() {
       const auth = await axios.post(this.authUrl, { token: this.token });
       return auth;
   }

   async getResponses(message) {
      return await this.authenticate().then(async (auth) => {
          if(auth.data.success) {
	    return await axios.post(this.responsesUrl, { token: this.token, message });
          } else {
            throw new Error("[getResponses] Failed to get responses. Client token is missing or invalid");
          }
      });
   }
}

