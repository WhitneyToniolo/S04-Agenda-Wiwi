
-- je supprime les tables existantes
DROP TABLE IF EXISTS "group","contact"; -- attention, supprime toutes les lignes de la table !!!

-- je définis ma table group
CREATE TABLE "group" (
    -- j'ajoute la définition des colonnes
    "id" SERIAL PRIMARY KEY, -- le type SERIAL vient incrémenter automatiquement mon id
    "name" TEXT
);

-- je définis ma table contact
CREATE TABLE contact (
    -- j'ajoute la définition des colonnes
    id SERIAL PRIMARY KEY, -- le type SERIAL vient incrémenter automatiquement mon id
    first_name TEXT,
    last_name TEXT,
    phone_number TEXT DEFAULT 'inconnu',
    group_id INT REFERENCES "group"(id) -- foreign key, clef étrangère, référence la colonne id de la table group
);