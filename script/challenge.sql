INSERT INTO contact (first_name,last_name) VALUES
 ('Sylvester','Stallone'),
 ('Jason','Statham'),
 ('Bruce','Willis'),
 ('Jet','Li'),
 ('Arnold','Schwarzenegger');


UPDATE contact SET phone_number = '(310) 854-8100' WHERE id=3;

DELETE FROM contact WHERE id=2;



CREATE TABLE group (
    -- j'ajoute la définition des colonnes
    id SERIAL, -- le type SERIAL vient incrémenter automatiquement mon id
    "name" TEXT
);

INSERT INTO "group" (name) VALUES
    ('amis'),('professionnel');

-- je viens ajouter Sylvester Stallone (id = 1) à mon groupe "amis"

UPDATE contact SET group_id = 1 WHERE id=1;

SELECT first_name,last_name,name
FROM contact
JOIN "group" ON group_id = "group".id;