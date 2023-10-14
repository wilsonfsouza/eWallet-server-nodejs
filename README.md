Create migration
```
npm run knex -- migrate:make create-documents

// knex -> new script created
// -- -> signals that the flags used after knex are from knex not regular npm flags
// create-documents -> name of the migration file
```

Run migration all migrations that have not yet been run
```
npm run knex -- migrate:latest
```

> After a migration has been sent to production, we must not edit it afterwards. We need to create a new migration to modify it.

If the migration has not been sent to production (it's only on your machine), you can rollback the change, modify the file, and run the migration again.
```
npm run knex -- migrate:rollback
```
