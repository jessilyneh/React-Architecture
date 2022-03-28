//server.js actully run, listening requests and render and serve the app
import express from "express"
import React from "react"
//do the actual rendering of the app
import {renderToString} from "react-dom/server"
import {Home} from "./src/pages/Home"

const app = express()

// statically serve the files inside the build folder, but ignore the index file
app.use(express.static('./build',{index:false}))

// this route will respond to any request on any path (send our html)
app.get("/*", (req,res) => {
// renderToString is a function that we can pass JSX to, take that and render it into actual html sting
    const reactApp = renderToString(
        <Home />
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

