-- CRUD - contact


-- Create / on ajoute une ligne dans la table contact via INSERT
-- je veux insérer les valeurs 'Chuck' et 'Norris' dans les champs 'first_name' et 'last_name'
INSERT INTO contact (first_name,last_name) VALUES ('Chuck','Norris');
INSERT INTO contact (first_name,last_name) VALUES ('Jean-Claude','Maurice');


INSERT INTO contact (first_name,last_name,phone_number) VALUES ('Dolph','Lundgren','1245876'),('Chuck','Norris','555-555');

-- Read / je sélectionne des lignes dans la table contact via un SELECT
-- je souhaite récupérer les valeurs uniquement des colonnes id,first_name,last_name
SELECT id,first_name,last_name FROM contact;

-- Update / je veux modifier la valeur d'un champ d'une ligne
UPDATE contact SET phone_number = '555-555' WHERE id=1;


-- Delete
DELETE FROM contact WHERE id=3;