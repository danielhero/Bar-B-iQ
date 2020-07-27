USE [master]
GO
IF db_id('Bar-B-iQ') IS NULL
  CREATE DATABASE [Bar-B-iQ]
GO
USE [Bar-B-iQ]
GO

DROP TABLE IF EXISTS [History];
DROP TABLE IF EXISTS [Note];
DROP TABLE IF EXISTS [Tip];
DROP TABLE IF EXISTS [Doneness];
DROP TABLE IF EXISTS [User];
DROP TABLE IF EXISTS [Cut];
DROP TABLE IF EXISTS [Animal];

CREATE TABLE [User] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [FirstName] nvarchar(255) NOT NULL,
  [LastName] nvarchar(255),
  [Email] nvarchar(255) NOT NULL,
  [FirebaseUserId] nvarchar(255)
)
GO

CREATE TABLE [Note] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [Text] nvarchar(255) NOT NULL,
  [UserId] int
)
GO

CREATE TABLE [Tip] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [TipOfTheDay] nvarchar(255)
)
GO

CREATE TABLE [History] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [UserId] int NOT NULL,
  [DonenessId] int NOT NULL,
  [DateCooked] datetime NOT NULL,
  [Comment] nvarchar(255)
)
GO

CREATE TABLE [Animal] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [AnimalType] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Cut] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [CutType] nvarchar(255),
  [Weight] nvarchar(255),
  [AnimalId] int
)
GO

CREATE TABLE [Doneness] (
  [Id] int PRIMARY KEY IDENTITY NOT NULL,
  [DonenessChoice] nvarchar(255) NOT NULL,
  [CutId] int NOT NULL,
  [CookTime] int NOT NULL,
  [Temperature] int NOT NULL
)
GO

ALTER TABLE [History] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [Cut] ADD FOREIGN KEY ([AnimalId]) REFERENCES [Animal] ([Id])
GO

ALTER TABLE [Doneness] ADD FOREIGN KEY ([CutId]) REFERENCES [Cut] ([Id])
GO

ALTER TABLE [History] ADD FOREIGN KEY ([DonenessId]) REFERENCES [Doneness] ([Id])
GO

ALTER TABLE [Note] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO
