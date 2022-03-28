//server.js actully run, listening requests and render and serve the app
import express from "express"
import React from "react"
//do the actual rendering of the app
import {renderToString} from "react-dom/server"
// this s the server side equivalent of BrowaweRouter
import {StaticRouter} from "react-router-dom/server"
import App from "./src/App"
import path from "path"
import fs from "fs"

const app = express()

// statically serve the files inside the build folder, but ignore the index file
app.use(express.static('./build',{index:false}))

// this route will respond to any request on any path (send our html)
app.get("/*", (req,res) => {
// renderToString is a function that we can pass JSX to, take that and render it into actual html sting
    const reactApp = renderToString(
        // in order for it to work, we have to set up routing on our server for the frontend
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>    
    );

    const templateFile = path.resolve('./build/index.html');
    fs.readFile(templateFile, 'utf8', (err,data) => {
        if(err) {
            return res.status(500).send(err);
        }
        //load the index.html file for the build folder and manually replace id=root with reactApp
        return res.send(
            data.replace('<div id="root"></div>',`<div id="root">${reactApp}</div>`)
        )
    });
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080")
})

