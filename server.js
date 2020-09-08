const express = require("express");
const mysql = require("mysql");
const app = express();
var http = require('http');
var fs = require('fs');

const dbInfo = {
  host: "localhost",
  user: "root",
  password: process.env.DBPASS,
  //Below can be chaged to link up with Dylans DB name as well as table name @ line 58  and buildFunction
  database: "SnippetsDB"
};

const connection = mysql.createConnection(dbInfo);
connection.connect(function(err) {
  if(err) throw err;
});


app.all('/', serveIndex); 
app.get("/snippets", listSnippets);
app.listen(3000, "localhost", startHandler);

function startHandler() {
  console.log("Server listening at http://localhost:3000")
  console.log("\x1b[31m", " FUNCTION JUNCTION is Aware");
  console.log("\x1b[37m","\x1b[41m","    ̿' ̿'\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿     ","\x1b[0m");
}

function listSnippets(req, res) {
  let ip = req.ip;
  console.log(ip," is querying");
  getAndListSnippets(req, res);
}


function writeResult(res, object) {
  res.writeHead(200, {"Content-Type" : "application/json"});
  res.end(JSON.stringify(object));
}


function getAndListSnippets(req, res) {
  //Below can be chaged to link up with Dylans table name as well as db name @ line 16 and buildFunction
  connection.query("SELECT * FROM Snippets ", function(err, dbResult) {
    if(err)
      writeResult(res, {error: err.message});
    else {
      let snippets = dbResult.map(function(snippet) {return buildSnippet(snippet)});
      writeResult(res, {result: snippets});
    }
  });
}

function buildSnippet(dbObject) {
  return {Id: dbObject.Snippet_Id,
          Creator: dbObject.Creator ,
          Language: dbObject.Language, 
          Description: dbObject.Snippet_Desc, 
          Snippet: dbObject.Snippet};
}


function serveIndex(req, res)
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Jatwells page connects here
  var index = fs.readFileSync('index.html');
  res.end(index);
}






