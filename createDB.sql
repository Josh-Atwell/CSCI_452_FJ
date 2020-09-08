DROP DATABASE IF EXISTS SnippetsDB;

CREATE DATABASE SnippetsDB;
USE SnippetsDB;
CREATE TABLE Snippet
(
  Id INT NOT NULL AUTO_INCREMENT,
  Creator varchar(255) NOT NULL ,
  Lang varchar(255) NOT NULL,
  Description varchar (255) NOT NULL,
  Snippet varchar(255) NOT NULL
  PRIMARY KEY(Id),
  UNIQUE KEY `UniqueIdandCreator` (`Id`,`Creator`)
);

INSERT INTO Snippet(Creator, Lang, Description, Snippet)
VALUES ('Dylan', 'Java', 'Describing', 'Textpad');