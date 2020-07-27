DELETE FROM [Animal];
DELETE FROM [Cut];
DELETE FROM [Doneness];
DELETE FROM [History];
DELETE FROM [Note];
DELETE FROM [Tip];
DELETE FROM [User]

SET IDENTITY_INSERT [Animal] OFF
SET IDENTITY_INSERT [Cut] OFF
SET IDENTITY_INSERT [Doneness] OFF
SET IDENTITY_INSERT [History] OFF
SET IDENTITY_INSERT [Note] OFF
SET IDENTITY_INSERT [Tip] OFF
SET IDENTITY_INSERT [User] OFF

SET IDENTITY_INSERT [User] ON
INSERT INTO [User]
  ([Id], [FirstName], [LastName], [Email], [FirebaseUserId])
VALUES 
  (1, 'Daniel', 'Hero', 'hero@email.com', 'LG1eq1ycH9hfBrMYOxP5IJgnXmX2');
SET IDENTITY_INSERT [User] OFF

SET IDENTITY_INSERT [Animal] ON
INSERT INTO [Animal]
  ([Id], [AnimalType])
VALUES
  (1, 'Beef'),
  (2, 'Pork'),
  (3, 'Poultry'),
  (4, 'Seafood')
SET IDENTITY_INSERT [Animal] OFF


SET IDENTITY_INSERT [Cut] ON
INSERT INTO [Cut]
  ([Id], [CutType], [Weight], [AnimalId])
VALUES
  (1, 'Burger', '6 oz', 1),
  (2, 'Flat Iron Steak', '8 oz', 1),
  (3, 'Skirt Steak', '16 oz', 1),
  (4, 'Ribeye', '30 oz', 1),
  (5, 'Top Sirloin', '6 oz', 1),
  (6, 'T-Bone', '20 oz', 1),
  (7, 'Bone-On Pork Chop', '10 oz', 2),
  (8, 'Tenderloin', '16 oz', 2),
  (9, 'Loin', '64 oz', 2),
  (10, 'Breast', '6 oz', 3),
  (11, 'Wings', 'various', 3),
  (12, 'Thigh', 'various', 3),
  (13, 'Whole', '48 oz', 3),
  (14, 'Salmon Fillet', '8 oz', 4),
  (15, 'Swordfish Steak', '6 oz', 4),
  (16, 'Whole Snapper', '22 oz', 4),
  (17, 'Tuna Steak', '16 oz', 4),
  (18, 'Turkey Burger', '6 oz', 3) 
SET IDENTITY_INSERT [Cut] OFF


SET IDENTITY_INSERT [Doneness] ON
INSERT INTO [Doneness]
   ([Id], [DonenessChoice], [CutId], [CookTime], [Temperature])
VALUES
  (1, 'Rare', 1, 6, 125),
  (2, 'Medium Rare', 1, 8, 135),
  (3, 'Medium', 1, 10, 145),
  (4, 'Medium Well', 1, 12, 155),
  (5, 'Well Done', 1, 14, 160),
  (6, 'Rare', 2, 11, 120),
  (7, 'Medium Rare', 2, 12, 130),
  (8, 'Medium', 2, 15, 140),
  (9, 'Medium Well', 2, 17, 150),
  (10, 'Well Done', 2, 19, 160),
  (11, 'Rare', 3, 11, 120),
  (12, 'Medium Rare', 3, 13, 130),
  (13, 'Medium', 3, 16, 140),
  (14, 'Medium Well', 3, 18, 150),
  (15, 'Well Done', 3, 20, 160),
  (16, 'Rare', 4, 11, 120),
  (17, 'Medium Rare', 4, 13, 130),
  (18, 'Medium', 4, 16, 140),
  (19, 'Medium Well', 4, 18, 150),
  (20, 'Well Done', 4, 20, 160),
  (21, 'Rare', 5, 15, 120),
  (22, 'Medium Rare', 5, 17, 130),
  (23, 'Medium', 5, 20, 140),
  (24, 'Medium Well', 5, 22, 150),
  (25, 'Well Done', 5, 24, 160),
  (26, 'Rare', 6, 16, 120),
  (27, 'Medium Rare', 6, 18, 130),
  (28, 'Medium', 6, 19, 140),
  (29, 'Medium Well', 6, 20, 150),
  (30, 'Well Done', 6, 22, 160),
  (31, 'Medium', 7, 8, 150),
  (32, 'Well Done', 7, 10, 160),
  (33, 'Medium', 8, 8, 150),
  (34, 'Well Done', 8, 10, 160),
  (35, 'Done', 9, 60, 150),
  (36, 'Done', 10, 10, 160),
  (37, 'Done', 11, 5, 165),
  (38, 'Done', 12, 15, 165),
  (39, 'Done', 13, 60, 165),
  (40, 'Done', 14, 8, 130),
  (41, 'Done', 15, 10, 130),
  (42, 'Done', 16, 14, 135),
  (43, 'Done', 16, 14, 135),
  (44, 'Rare', 17, 4, 100),
  (45, 'Medium Rare', 17, 5, 105),
  (46, 'Medium', 17, 6, 115),
  (47, 'Well Done', 17, 8, 130),
  (48, 'Done', 18, 16, 165)
SET IDENTITY_INSERT [Doneness] OFF


SET IDENTITY_INSERT [Note] ON
INSERT INTO [Note]
   ([Id], [Text], [UserId])
VALUES
  (1, 'Need to buy new seasonings!', 1)
SET IDENTITY_INSERT [Note] OFF