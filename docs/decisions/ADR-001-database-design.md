# ADR-001: Database Design

## Status

Accepted


## Context

TicketFlow requires a relational database capable of supporting authentication, ticket lifecycle management, reporting and auditing.


## Decision

MySQL will be used.

The schema follows Third Normal Form (3NF).

Lookup tables are used for:

- Roles
- Ticket Status
- Ticket Priority
- Ticket Category

UUIDs are used for public identifiers.

Auto Increment IDs are used for internal relationships.

Foreign keys enforce referential integrity.

Audit Logs preserve important system events.


## Consequences

### Advantages

- Flexible schema
- Easy reporting
- Strong data integrity
- Easy future expansion

### Trade-offs

- More joins
- Slightly more complex queries