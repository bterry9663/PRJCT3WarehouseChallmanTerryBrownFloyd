CREATE TABLE warehouses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  origin VARCHAR(255),
  time_frame VARCHAR(255),
  aisle_shelf VARCHAR(255),
  `image_link` VARCHAR(1000) NOT NULL
);

CREATE TABLE items(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  origin VARCHAR(255),
  time_frame VARCHAR(255),
  aisle_shelf VARCHAR(255),
  `image_link` VARCHAR(1000) NOT NULL,
  warehouse VARCHAR(255) NOT NULL
  );
INSERT INTO warehouses (id, name, origin, time_frame, aisle_shelf, image_link) VALUES
  ('Warehouse 1'),
  ('Warehouse 2'),
  ('Warehouse 3'),
  ('Warehouse 4');
  
INSERT INTO items (id, name, origin, time_frame, aisle_shelf, image_link,warehouse)
VALUES
  (1,'Lewis Carroll Looking Glass', 'Inspired by Lewis Carroll''s Through the Looking-Glass and Alice''s adventures.', 'Late 19th century', 'Aisle 7 Shelf 3', 'https://static.wikia.nocookie.net/warehouse13/images/c/c1/Warehouse_13_S01E02-15-45-30-.JPG/revision/latest/scale-to-width-down/1000?cb=20130814134610','warehouse 1'),
  (2,'H.G. Well''s Time Machine', 'Based on the concept of the time machine from H.G. Well''s novel The Time Machine.', 'Late 19th century', 'Aisle 12 Shelf 6', 'https://static.wikia.nocookie.net/warehouse13/images/a/a8/Wikia_W13_-_Where_and_When.png/revision/latest?cb=20120706095830','warehouse 2'),
  (3,'Edgar Allan Poe Quill Pen', 'Associated with the renowned writer Edgar Allan Poe.', '19th century', 'Aisle 4 Shelf 2', 'https://static.wikia.nocookie.net/warehouse13/images/1/1b/Edgar_Allan_Poe%27s_Quill_Pen_and_Notebook.png/revision/latest?cb=20120919191130','warehouse 3'),
  (4,'Alice Liddell Mirror Connected to Alice Liddell', 'who inspired Lewis Carroll''s Alice''s Adventures in Wonderland.', '19th century', 'Aisle 8 Shelf 1', 'https://cdn.shopify.com/s/files/1/0961/3216/files/Alice_Through_The_Looking_Glass_Poster_large.jpg?13517802763318709444','warehouse 4'),
  (5,'The Astrolabe', 'Originates from ancient civilizations.', 'Ancient history', 'Aisle 3 Shelf 5', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Mamluk_era_astrolabe%2C_1282.jpg/1920px-Mamluk_era_astrolabe%2C_1282.jpg','warehouse 1'),
  (6,'The Aztec Bloodstone', 'Connected to the Aztec civilization.', 'Ancient history', 'Aisle 10 Shelf 4', 'https://static.wikia.nocookie.net/warehouse13/images/8/83/Warehouse_13_Pilot_Artifact_Aztec_Bloodstone.png/revision/latest?cb=20170617202439','warehouse 2'),
  (7,'Nikola Tesla Electrostatic Cannon', 'Invented by renowned scientist Nikola Tesla.', 'Late 19th to early 20th century', 'Aisle 5 Shelf 8','https://image.jimcdn.com/app/cms/image/transf/none/path/s40c423127565d23a/image/i1976fbfc940d9bef/version/1376427564/image.jpg','warehouse 3'),
  (8,'The Philosopher Stone', 'Linked to alchemical practices and legends.', 'Ancient history', 'Aisle 1 Shelf 9', 'https://static.wikia.nocookie.net/warehouse13/images/e/e3/Philosopher%27s_Stone.PNG/revision/latest?cb=20130625032149','warehouse 1'),
  (9,'Louis XIV Silverware Forks', 'Made during the reign of Louis XIV of France.', '17th century specifically during Louis XIV''s reign 1643-1715', 'Aisle 9 Shelf 7', 'https://static.wikia.nocookie.net/warehouse13/images/5/51/Louis_XIV%27s_Silverware_Fork.png/revision/latest?cb=20140726023411','warehouse 4'),
  (10,'The Tunguska Blast Fragments', 'Related to the Tunguska event in 1908.', 'Early 20th century', 'Aisle 2 Shelf 4', 'https://earthsky.org/upl/2013/05/tunguska-rocks-MIT.png','warehouse 2'),
  (11,'Alexander the Great Helmet', 'Associated with the legendary conqueror Alexander the Great.', '4th century BCE', 'Aisle 11 Shelf 3', 'https://preview.redd.it/t7p23hue6yg81.jpg?auto=webp&s=ca007ccb9b3ed0144d963bb4bc77e14f2aa07e28','warehouse 2'),
  (12,'The Eye of Odin', 'Connected to the Norse god Odin.', 'Ancient Norse mythology', 'Aisle 4 Shelf 7', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWop4RaG-JEjlTd-bfj_4A6C7WqA_iRPKa1Bq0qTVng&usqp=CAU&ec=48665699','warehouse 3'),
  (13,'The Shroud of Turin', 'Believed to be the burial cloth of Jesus Christ.', '1st century CE', 'Aisle 8 Shelf 5', 'https://upload.wikimedia.org/wikipedia/commons/2/23/Turin_shroud_positive_and_negative_displaying_original_color_information_708_x_465_pixels_94_KB.jpg','warehouse 4'),
  (14,'Marie Curie''s Radium Flask', 'Associated with renowned scientist Marie Curie.', 'Late 19th to early 20th century', 'Aisle 12 Shelf 2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Glass_flask_used_by_Marie_Curie%2C_late_19th-early_20th_century._%289663810698%29.jpg/959px-Glass_flask_used_by_Marie_Curie%2C_late_19th-early_20th_century._%289663810698%29.jpg?20130903102456','warehouse 1'),
  (15,'The Scepter of Cleopatra', 'Connected to the last pharaoh of Egypt, Cleopatra.', '1st century BCE', 'Aisle 3 Shelf 8', 'https://media.vanityfair.com/photos/5a973e333c0f45451fecd4cf/master/w_320%2Cc_limit/academy-museum-objects-ss03.jpg','warehouse 2'),
  (16,'The Invisible Cloak of Merlin', 'Believed to be connected to the legendary wizard Merlin.', 'Mythical timeframe (Arthurian legend)', 'Aisle 7 Shelf 1', 'https://1.bp.blogspot.com/-6s378jqovuM/WI3zHdb7SxI/AAAAAAAADvM/32lAikNtXlcWg6NjHDotzswX9Lc2oImnACPcBGAYYCw/s640/king-1507392_1920.jpg','warehouse 3'),
  (17,'The Rosetta Stone', 'An ancient Egyptian artifact with inscriptions in multiple languages.', 'Ancient history (196 BCE)', 'Aisle 2 Shelf 6', 'https://upload.wikimedia.org/wikipedia/commons/2/23/Rosetta_Stone.JPG','warehouse 4'),
  (18,'Isaac Newton Apple', 'Linked to the story of Sir Isaac Newton and the discovery of gravity.', '17th century', 'Aisle 10 Shelf 2', 'https://images.nationalgeographic.org/image/upload/v1638890068/EducationHub/photos/isaac-newton-who-he-was-why-google-apples-are-falling.jpg','warehouse 1'),
  (19,'The Ghostly Gramophone', 'Early recording device imbued with supernatural properties.', 'Late 19th to early 20th century', 'Aisle 5 Shelf 3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsqOVBiIGjnMs0drm0zu1jF0NqGLK_FKnG9CFgqRs4g&usqp=CAU&ec=48665699','warehouse 2'),
  (20,'Pandorah''s Box', 'Greek Mythology.', 'Ancient history', 'Aisle 9 Shelf 1', 'https://static.wikia.nocookie.net/warehouse13/images/0/03/Pandora%27s_Box.png/revision/latest?cb=20130515202355','warehouse 3'),
  (21,'Leonardo da Vinci Flying Machine', 'Designed by the famous artist and inventor Leonardo da Vinci.', '15th century', 'Aisle 11 Shelf 5', 'https://images.theconversation.com/files/272504/original/file-20190503-103045-ahb7af.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip','warehouse 4'),
  (22,'The Sword of Joan of Arc', 'Linked to the French heroine Joan of Arc.', '15th century', 'Aisle 1 Shelf 7', 'https://longshiparmoury.com/wp-content/uploads/2020/08/DSC2709-scaled.jpg','warehouse 1'),
  (23,'Scott Joplin Cigarette Case', 'Owned by Scott Joplin, an American composer and pianist.', 'Late 19th to early 20th century', 'Aisle 6 Shelf 3', 'https://static.wikia.nocookie.net/warehouse13/images/9/97/Scott_Joplin%27s_Cigarette_Case.png/revision/latest?cb=20130501131030','warehouse 2'),
  (24,'The Lunar Rock Sample', 'Collected from the moon during a space mission.', '20th century (specific mission dependent)', 'Aisle 8 Shelf 4', 'https://cdn.britannica.com/26/76826-050-D9D81830/samples-breccia-Basalt-astronauts-sample-Moon-Apollo-1971.jpg','warehouse 3'),
  (25,'The Spirit Radio', 'Experimental radio device for communication with the spirit realm.', 'Late 19th to early 20th century', 'Aisle 2 Shelf 9', 'https://content.instructables.com/F1M/YH1T/G1VDTQM1/F1MYH1TG1VDTQM1.jpg?auto=webp','warehouse 4'),
  (26,'The Atlantean Crystal', 'Linked to the mythical civilization of Atlantis.', 'Mythical timeframe', 'Aisle 12 Shelf 3', 'https://m.media-amazon.com/images/I/91PwjmXmAmL._UF350,350_QL80_.jpg','warehouse 1'),
  (27,'John Logie Baird Scanning Disk', 'Invented by John Logie Baird.', 'Early 20th Century 1920', 'Aisle 4 Shelf 3', 'https://static.wikia.nocookie.net/warehouse13/images/5/5a/John_Logie_Barid%27s_Scanning_Disk.PNG/revision/latest?cb=20130709025210','warehouse 2'),
  (29,'The Hypnotic Pocket Watch', 'Used for hypnotic inductions and mind control.', 'Late 19th to early 20th century', 'Aisle 3 Shelf 4', 'https://st.depositphotos.com/2288675/2453/i/950/depositphotos_24532893-stock-photo-hypnotizing-pocket-watch.jpg','warehouse 3'),
  (30,'The Enigma Machine', 'A cipher machine used during World War II.', '20th century', 'Aisle 10 Shelf 6', 'https://cdn.britannica.com/79/222279-138-B1AAFBB0/The-Enigma-Machine-Explained.jpg?w=800&h=450&c=crop','warehouse 4'),
  (31,'The X-Ray Specs', 'Early x-ray technology and optical illusions.', 'Early 20th century', 'Aisle 5 Shelf 1','https://cdn.shopify.com/s/files/1/0054/3822/products/xray_1024x1024.png?v=1601479579','warehouse 1'),
  (32,'The Crystal Ball of Nostradamus', 'Associated with the renowned seer Nostradamus.', '16th century', 'Aisle 9 Shelf 8', ' https://historyuk.s3.eu-west-2.amazonaws.com/s3fs-public/2021-12/nostradamus-predicts-artwork.jpg','warehouse 2'),
  (33,'The Microbot Swarm', 'Advanced nanotechnology.', 'Modern era', 'Aisle 1 Shelf 3', 'https://media.wired.com/photos/59324a2044db296121d6a21b/3:2/w_1280%2Cc_limit/rubenstein1HR-660.jpg','warehouse 3'),
  (34,'The Etruscan Cursed Ring', 'Linked to the ancient Etruscan civilization.', 'Ancient history', 'Aisle 6 Shelf 5', 'https://miro.medium.com/v2/resize:fit:1000/1*qYu01feMDP200Kaa8gEUDg.jpeg','warehouse 4'),
  (35,'The Ghostly Typewriter', 'Early typewriter imbued with paranormal abilities.', 'Late 19th to early 20th century', 'Aisle 8 Shelf 2', 'https://images.ehive.com/accounts/8301/objects/images/054382d4d8e349528b168617c1533fdc_l.jpg?revision=1','warehouse 1'), 
  (36,'The Mirror of Eratosthenes', 'Named after the ancient Greek mathematician Eratosthenes.', 'Ancient history', 'Aisle 2 Shelf 5', 'https://archive.griffith.ox.ac.uk/uploads/r/null/b/1/7/b17237d5a3518b13098461f9be7714356b5eb1774e714f45114b61371a93c9e7/Bonomi_41_19_res600ppi_141.jpg','warehouse 2'),
  (37,'The Luminescent Butterfly', 'A rare species of butterfly with bioluminescent properties.', 'Varied (existed for centuries)', 'Aisle 11 Shelf 4', 'https://m.media-amazon.com/images/I/51AVZ2hcXBL._AC_UF1000,1000_QL80_.jpg','warehouse 3'),
  (38,'The Singularity Core', 'Prototype energy source related to theoretical physics.', 'Modern era', 'Aisle 4 Shelf 8', 'https://www.startrek.com/sites/default/files/styles/1200x628/public/images/2019-01/7895fc13088ee37f511913bac71fa66f.jpg?itok=HzuE_6qF','warehouse 4'),
  (39,'The Hypersonic Sound Wave Generator', 'Experimental sound technology.', 'Modern era', 'Aisle 7 Shelf 2', 'https://www.amazing1.com/content/Graphics/ht90p-7.jpg','warehouse 1'),
  (40,'The Vitruvian Man Blueprint', 'Inspired by Leonardo da Vinci''s famous Vitruvian Man drawing.', '15th century', 'Aisle 3 Shelf 6','https://images.fineartamerica.com/images-medium-large-5/vitruvian-blueprint-leonardo-da-vinci.jpg','warehouse 2'),
  (41,'The Neural Interface Helmet', 'Experimental brain-computer interface device.', 'Modern era', 'Aisle 10 Shelf 3', 'https://compote.slate.com/images/93db92ba-766b-42a0-9176-9f1885fd3b6d.jpg','warehouse 3'),
  (42,'The Enchanted Fountain Pen', 'Magical pen that brings drawings to life.', 'Ancient history', 'Aisle 5 Shelf 4', 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2MDQ0NjIwMDA4OTI0Mjg5/the-art-of-writing-georginas-enchanted-pen.jpg','warehouse 4'),
  (43,'Chester Moore Hall Achromatic Lens', 'Experimental footwear for simulated weightlessness.', 'Modern era', 'Aisle 9 Shelf 7', 'https://static.wikia.nocookie.net/warehouse13/images/2/2b/Chester_Moore_Hall%27s_Achromatic_Lens.png/revision/latest?cb=20140422211424','warehouse 1'),
  (44,'The Paradox Hourglass', 'Time-altering hourglass with unpredictable effects.', 'N/A (related to time manipulation)', 'Aisle 1 Shelf 8', 'https://f4.bcbits.com/img/a2261887815_10.jpg','warehouse 2'),
  (45,'The Levitating Globe', 'A globe that defies gravity and floats in mid-air.', 'Modern era', 'Aisle 6 Shelf 1', 'https://cdn11.bigcommerce.com/s-l7ha4gtke8/images/stencil/1280x1280/products/1872/8832/SN891574_lg__68610.1574289889.jpg?c=1','warehouse 3'),
  (46,'The Chaos Crystal', 'Ancient gem associated with chaos and unpredictability.', 'Ancient history', 'Aisle 8 Shelf 7', 'https://static.wikia.nocookie.net/legend-of-mystical-heroes/images/0/07/Chaos_Crystals.png/revision/latest?cb=20150124220657','warehouse 4'),
  (47,'The Whispering Seashell', 'Seashell that allows communication over long distances.', 'Varied (existed for centuries)', 'Aisle 2 Shelf 3','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1f-sapXEhPdGIBWu5cJkKZFOFKEl65FEG-hvtTJmaA&usqp=CAU&ec=48665699','warehouse 1'),
  (48,'The Molecular Manipulator', 'Advanced device capable of manipulating matter at the molecular level.', 'Modern era', 'Aisle 11 Shelf 2', 'https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnmat2853/MediaObjects/41563_2010_Article_BFnmat2853_Fig2_HTML.jpg','warehouse 2'),
  (49,'Telegraph from Telegraph Island', 'Telegraph Island Jazirat al Maqlab Strait of Hormuz Persian gulf.', 'Late 19th early 20th century', 'Aisle 4 Shelf 6', 'https://static.wikia.nocookie.net/warehouse13/images/8/8c/Telegraph_Island_Telegraph.PNG/revision/latest?cb=20130508181614','warehouse 3'),
  (50,'The Celestial Compass', 'Ancient navigational instrument used to track celestial bodies.', 'Ancient history', 'Aisle 10 Shelf 6', 'https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl9dzwq2s0702pxox9h8zb11x/public','warehouse 4');


SELECT * FROM items;
SELECT * FROM warehouses;
DESCRIBE ITEMS;
SELECT * FROM items WHERE warehouse = 'Warehouse 1';
SELECT * FROM items WHERE warehouse = 'Warehouse 2';
SELECT * FROM items WHERE warehouse = 'Warehouse 3';
SELECT * FROM items WHERE warehouse = 'Warehouse 4';


