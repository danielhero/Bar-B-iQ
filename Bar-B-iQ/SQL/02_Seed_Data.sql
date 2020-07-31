DELETE FROM [History];
DELETE FROM [Doneness];
DELETE FROM [Cut];
DELETE FROM [Animal];
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
  (1, 'Daniel', 'Hero', 'hero@email.com', 'noMYnJXYIAfQlZKLbdyVMwD2k5j2');
SET IDENTITY_INSERT [User] OFF

SET IDENTITY_INSERT [Animal] ON
INSERT INTO [Animal]
  ([Id], [AnimalType], [AnimalImage])
VALUES
  (1, 'Beef', 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Animals-Cow-icon.png'),
  (2, 'Pork', 'https://img.icons8.com/metro/1600/pig.png'),
  (3, 'Poultry', 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Animals-Chicken-icon.png'),
  (4, 'Seafood', 'https://image.flaticon.com/icons/png/512/58/58272.png')
SET IDENTITY_INSERT [Animal] OFF


SET IDENTITY_INSERT [Cut] ON
INSERT INTO [Cut]
  ([Id], [CutType], [Weight], [CutImage], [AnimalId])
VALUES
  (1, 'Burger', '6 oz', 'https://th.bing.com/th/id/OIP.PY31REwoDSA5PfYSgQP6HgHaDt?w=295&h=162&c=7&o=5&dpr=1.5&pid=1.7', 1),
  (2, 'Flat Iron Steak', '8 oz', 'http://chezdesblog.files.wordpress.com/2012/05/steak-flatiron.jpg', 1),
  (3, 'Skirt Steak', '16 oz', 'https://static01.nyt.com/images/2014/03/05/dining/05steak/05steak-mediumThreeByTwo440.jpg', 1),
  (4, 'Ribeye', '30 oz', 'http://www.real-restaurant-recipes.com/images/ribeye-on-grill.png', 1),
  (5, 'Top Sirloin', '6 oz', 'https://i.pinimg.com/originals/08/d6/2e/08d62ec4a06cb46eb8695e030c8d1850.jpg', 1),
  (6, 'T-Bone', '20 oz', 'https://static01.nyt.com/images/2016/05/25/dining/25AFRICA-GRILLED-T-BONE-STEAK/25AFRICA-GRILLED-T-BONE-STEAK-mediumThreeByTwo440.jpg', 1),
  (7, 'Bone-On Pork Chop', '10 oz', 'https://recipes.hastybake.com/wp-content/uploads/2014/09/asianpork-300x300.jpg', 2),
  (8, 'Tenderloin', '16 oz', 'https://corksandknives.com/wp-content/uploads/2016/07/530_IMG_2179.jpg', 2),
  (9, 'Loin', '64 oz', 'https://files.recipetips.com/images/recipe/meat/rotisserie_grilled_pork_loin_2.jpg', 2),
  (10, 'Breast', '6 oz', 'http://ifoodblogger.com/wp-content/uploads/2015/06/Balsamic-Garlic-Grilled-Chicken-Marinade-320.jpg', 3),
  (11, 'Wings', 'various', 'http://www.feedyoursoul2.com/wp-content/uploads/2014/06/How-to-Grill-Chicken-Wings-300x212.jpg', 3),
  (12, 'Thigh', 'various', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/styles/300x300/public/image/recipes/ck/11/06/tequila-chicken-thighs-ck-x.jpg?itok=a5Yd6u2B', 3),
  (13, 'Whole', '48 oz', 'http://theguycancook.com/blog/wp-content/uploads/2010/08/grilled_chicken.jpg', 3),
  (14, 'Salmon Fillet', '8 oz', 'http://theguycancook.com/blog/wp-content/uploads/2010/05/grilled-salmon.jpg', 4),
  (15, 'Swordfish Steak', '6 oz', 'https://i.pinimg.com/originals/a3/82/25/a3822519fd86a94147aab93ae1599333.jpg', 4),
  (16, 'Whole Snapper', '22 oz', 'https://cdn.copymethat.com/media/orig_grilled_whole_fish_with_garlic_and_lemon_20200403153249386000deub9.jpg', 4),
  (17, 'Tuna Steak', '16 oz', 'https://www.seriouseats.com/2019/07/20190620-grilled-tuna-steak-vicky-wasik-8-300x225.jpg', 4),
  (18, 'Turkey Burger', '6 oz', 'http://img.aws.livestrongcdn.com/ls-article-image-400/cme/cme_public_images/www_livestrong_com/photos.demandstudios.com/getty/article/223/117/144231332_XS.jpg', 3) 
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
   ([Id],[Title], [Text], [UserId])
VALUES
  (1, 'Rub Idea', 'Need to buy new seasonings!', 1)
SET IDENTITY_INSERT [Note] OFF