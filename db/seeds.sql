USE burgers_db;
TRUNCATE burgers_db.burgers;
INSERT INTO burgers_db.burgers (burger_name,eaten)
VALUES ('cheese burger',false),('bacon cheese burger',false),('double cheese burger',false),
('bacon bleu burger',false);