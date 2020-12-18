const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger("combined"));

app.post("/authenticate", (req, res) => {
    if(req.body.token) {
        res.json({"success": true});
    } else {
        res.json({"success": false, "message": "No token"});
    }
    res.end();
});

app.post("/responses", (req, res) => {
    res.json({"success": true, "receivedMessage": req.body.message });
    res.end();
});


app.listen(process.env.PORT || 1337, () => {
    console.log("Serving on http://localhost:" + (process.env.PORT || 1337));
});
