# Etapes

Pour mettre en place une base de données, on va tout d'abord créer un nouvel utilisateur dans PostgreSQL :

```sql
CREATE ROLE admin_agenda;
```

Ce nouvel utilisateur va être placé comme propriétaire de ma BDD, c'est à dire qu'il aura le droit de tout faire.

Tout faire ? oui ! c'est à dire le CRUD !

- Create : pour tout ce qui est action de création/ajout
- Read : pour tout ce qui est lecture/récupération
- Update : pour tout ce qui est mise à jour
- Delete : pour tout ce qui est suppression

Pour faire cela :

```sql
CREATE DATABASE agenda OWNER admin_agenda;
```

Pour avoir le droit de me connecter en tant que admin_agenda, je dois lui ajouter le droit de LOGIN.

```sql
ALTER ROLE admin_agenda WITH LOGIN;
```

Je viens préciser un mot de passe pour admin_agenda :

```sql
ALTER ROLE admin_agenda WITH PASSWORD 'agenda';
```

Il est possible d'ajouter les droits de login et password à la création du rôle :

```sql
CREATE ROLE admin_agenda WITH LOGIN PASSWORD 'agenda';
```

Dernière étape, je lnce mon script de création des tables :

```bash
psql -U admin_agenda -d agenda -f init.sql
```