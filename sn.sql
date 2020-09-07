DROP DATABASE IF EXISTS SnippetsDB;

CREATE DATABASE SnippetsDB;
USE SnippetsDB;
CREATE TABLE Snippet
(
  User INT NOT NULL,
  Creator varchar(255) NOT NULL ,
  Lang varchar(255) NOT NULL,
  Description varchar (255) NOT NULL,
  Snip varchar(255) NOT NULL
);

INSERT INTO Snippet(User,Creator, Lang, Description, Snip)
VALUES (1,'Dylan', 'Java', 'Describing', 'Textpad');