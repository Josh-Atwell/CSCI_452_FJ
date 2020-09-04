const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const app = express();

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const dbInfo = {
  host: "localhost",
  user: "root",
  password: process.env.DBPASS,
  database: "SongsDb"
};

const connection = mysql.createConnection(dbInfo);
connection.connect(function(err) {
  if(err) throw err;
});

const sessionOptions = {
  secret: "the code is in the node",
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60000}
};
app.use(session(sessionOptions));

app.get("/functions", listFunctions);
app.listen(3000, "localhost", startHandler);

function startHandler() {
  console.log("Server listening at http://localhost:3000")
  console.log("\x1b[31m", " FUNCTION JUNCTION is Aware");
  console.log("\x1b[37m","\x1b[41m","    ̿' ̿'\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿     ","\x1b[0m");
}

function listFunctions(req, res) {
  let ip = req.ip;
  console.log(ip," is querying");
  getAndListFunctions(req, res);
}


function writeResult(res, object) {
  res.writeHead(200, {"Content-Type" : "application/json"});
  res.end(JSON.stringify(object));
}


function getAndListFunctions(req, res) {
  connection.query("SELECT * FROM Songs ", function(err, dbResult) {
    if(err)
      writeResult(res, {error: err.message});
    else {
      let nodes = dbResult.map(function(node) {return buildNode(node)});
      writeResult(res, {result: nodes});
    }
  });
}

function buildNode(dbObject) {
  return {creator: dbObject.Id, language: dbObject.UserId, description: dbObject.Name, snippet:"null"};
}









