//server.js actully run, listening requests and render and serve the app
import express from "express"
import React from "react"
//do the actual rendering of the app
import {renderToString} from "react-dom/server"

const app = express()

// this route will respond to any request on any path (send our html)
app.get("/*", (req,res) => {
// renderToString is a function that we can pass JSX to, take that and render it into actual html sting
    const reactApp = renderToString(
        <h1>Hello, beautiful</h1>
    )
// send the html string back to de client
    return res.send(`
    <html>
        <body>
            <div id="root">${reactApp}</div>
        </body>
    </html>
    `)
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080")
})

