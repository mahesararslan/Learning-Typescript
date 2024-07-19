import express from "express";

// enums stands for enumerations
// used when you know there are limited set of inputs to a func.

enum Direction { // by default values: // but if you assign any a value then you've to assign value to all
    up, // 1
    down, // 2
    left, // 3
    right // 4
}

function doSomething(keyPressed: Direction) {
    if(Direction.up) {
        console.log(Direction.up);
    }
    // ... similarly remaining checks
    
}

doSomething(Direction.up);

const app = express();

// Common use case in express:

// you can create a enum of standard status codes.
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/", (req, res) => {
    if(!req.query.userId) {
        res.status(ResponseStatus.Error).json({});
    }
     // and so on 
        res.status(ResponseStatus.Success).json({});
})