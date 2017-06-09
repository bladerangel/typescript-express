/**
 * Created by Rangel on 09/06/2017.
 */
import * as express from "express";

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})