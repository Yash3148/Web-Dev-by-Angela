import express from "express";
const app = express();

app.get("/", (req, res) => {  
    res.send("<h1>Home Page</h1>");
})

app.post("/register", (req, res) => {   
    res.sendStatus(201); 
})

app.put("/user/yash", (req, res) => {   
    res.sendStatus(200); 
})

app.patch("/user/yash", (req, res) => {    
    res.sendStatus(200); 
})

app.delete("/user/yash", (req, res) => {    
    res.sendStatus(200); 
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});