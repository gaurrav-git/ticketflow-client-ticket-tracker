# Database Normalization

## First Normal Form (1NF)

- Every table has a primary key.
- No repeating groups.
- Every column stores atomic values.


## Second Normal Form (2NF)

- All non-key attributes depend on the whole primary key.
- Lookup tables eliminate duplicate values.


## Third Normal Form (3NF)

- No transitive dependencies.
- User roles are stored separately.
- Ticket status, priority and category are separated into lookup tables.
- Ticket assignments are stored independently.
- Audit logs are isolated from operational tables.


## Benefits

- Reduced redundancy
- Better scalability
- Easier maintenance
- Improved consistency