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

timestamp
- MySQL => defaultTo('NOW()')
- SQLIte/postgres => defaultTo('CURRENT_TIMESTAMP')

These, don't allow the flexibity to work with any database. An alternative is to use `knex.fn.now()`


## Functional requirements
- [X] User must be able to create a new transaction
- [X] User must be able to see an account summary
- [X] User must be able to see all transactions that already happened
- [X] User must be able to see a single transaction

## Business logic
- [X] A transaction can be either credit, adding to the total amount, or debit, subtracting the total amount
- [] It must be possible to identify the user between requests
- [] Users can only see the transaction they created

## Non-Functional requirements

- TBD