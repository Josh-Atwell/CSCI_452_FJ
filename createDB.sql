DROP DATABASE IF EXISTS SnippetsDB;

CREATE DATABASE SnippetsDB;

USE SnippetsDB;

CREATE TABLE Snippets(
  Snippet_Id int NOT NULL AUTO_INCREMENT,
  Creator varchar (255) NOT NULL,
  Lang varchar (255) NOT NULL,
  Description varchar (255) NOT NULL,
  Snippet varchar (255) NOT NULL,
  PRIMARY KEY(Snippet_Id)
);

INSERT INTO Snippets(Creator, Lang, Description, Snippet)
VALUES ("Dylan", "SQL", "AUTO_INCREMENT", "CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
); ");
INSERT INTO Snippets(Creator, Lang, Description, Snippet)
VALUES ("Jason", "Java", "DB connect from Function Junction", "function buildSnippet(dbObject) {
  return {creator: dbObject.User, language: dbObject.Creator, description: dbObject.Description, Snip: dbObject.Snippet};
}
");
INSERT INTO Snippets(Creator, Lang, Description, Snippet)
VALUES ("Josh", "jQuery", "Hiding", " $(this).hide();");
