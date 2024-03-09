import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {   // req --> request  , res --> response
    console.log(req.rawHeaders);  // rawHeaders tells where the request is orignated from all the raw data of request.
    res.send("<h1>Hello Yash!!</h1>"); // this will show Hello world in chrome
})

app.get("/about", (req, res) => {   
    res.send("<h1>About Me</h1><p>My name is yash</p>");  // http://localhost:3000/about
})

app.get("/contact", (req, res) => {    
    res.send("<h1Contact me</h1><p>+91-123456433<p>");    // http://localhost:3000/contact
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});