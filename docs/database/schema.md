# TicketFlow Database Schema

## Database Design Principles

- Follow Third Normal Form (3NF).
- Use surrogate primary keys (`id`) for relationships.
- Use UUIDs for public-facing identifiers.
- Use foreign keys to maintain referential integrity.
- Store timestamps for auditing.
- Prefer lookup tables over ENUMs for flexibility.

---

# 1. Roles

## Purpose

Stores all available user roles within the system.

## Columns

- id
- role_name
- description
- created_at

## Primary Key

- id

## Foreign Keys

None

## Relationships

- One Role can have many Users.

---

# 2. Users

## Purpose

Stores all registered users including Clients, Support Agents and Administrators.

## Columns

- id
- uuid
- role_id
- first_name
- last_name
- email
- password_hash
- phone
- is_active
- created_at
- updated_at

## Primary Key

- id

## Foreign Keys

- role_id → roles.id

## Relationships

- One User belongs to one Role.
- One User can create many Tickets.
- One User can write many Comments.
- One User can upload many Attachments.
- One User can receive many Ticket Assignments.

---

# 3. Ticket Statuses

## Purpose

Stores all possible ticket statuses.

## Columns

- id
- status_name
- description

## Primary Key

- id

## Foreign Keys

None

## Relationships

- One Status can be assigned to many Tickets.

---

# 4. Ticket Priorities

## Purpose

Stores ticket priority levels.

## Columns

- id
- priority_name
- description

## Primary Key

- id

## Foreign Keys

None

## Relationships

- One Priority can belong to many Tickets.

---

# 5. Ticket Categories

## Purpose

Stores predefined ticket categories.

## Columns

- id
- category_name
- description

## Primary Key

- id

## Foreign Keys

None

## Relationships

- One Category can belong to many Tickets.

---

# 6. Tickets

## Purpose

Stores all customer support tickets.

## Columns

- id
- uuid
- title
- description
- created_by
- assigned_to
- status_id
- priority_id
- category_id
- created_at
- updated_at
- resolved_at

## Primary Key

- id

## Foreign Keys

- created_by → users.id
- assigned_to → users.id
- status_id → ticket_statuses.id
- priority_id → ticket_priorities.id
- category_id → ticket_categories.id

## Relationships

- One Ticket belongs to one Client.
- One Ticket is assigned to one Support Agent.
- One Ticket has one Status.
- One Ticket has one Priority.
- One Ticket has one Category.
- One Ticket can have many Comments.
- One Ticket can have many Attachments.
- One Ticket can have many Assignment History records.

---

# 7. Ticket Comments

## Purpose

Stores communication between clients and support agents.

## Columns

- id
- ticket_id
- user_id
- comment
- created_at

## Primary Key

- id

## Foreign Keys

- ticket_id → tickets.id
- user_id → users.id

## Relationships

- One Ticket can have many Comments.
- One User can create many Comments.

---

# 8. Attachments

## Purpose

Stores files uploaded with tickets.

## Columns

- id
- ticket_id
- uploaded_by
- original_name
- stored_name
- mime_type
- file_size
- uploaded_at

## Primary Key

- id

## Foreign Keys

- ticket_id → tickets.id
- uploaded_by → users.id

## Relationships

- One Ticket can have many Attachments.
- One User can upload many Attachments.

---

# 9. Ticket Assignments

## Purpose

Stores the assignment history of tickets.

## Columns

- id
- ticket_id
- assigned_to
- assigned_by
- assigned_at

## Primary Key

- id

## Foreign Keys

- ticket_id → tickets.id
- assigned_to → users.id
- assigned_by → users.id

## Relationships

- One Ticket can have multiple Assignment History records.
- One Support Agent can receive many Ticket Assignments.
- One Administrator can assign many Tickets.

---

# 10. Audit Logs

## Purpose

Stores important system activities for auditing and monitoring.

## Columns

- id
- user_id
- action
- entity_type
- entity_id
- description
- created_at

## Primary Key

- id

## Foreign Keys

- user_id → users.id

## Relationships

- One User can generate many Audit Logs.

---

# Summary of Relationships

Roles (1) -------- (N) Users

Users (1) -------- (N) Tickets (Created By)

Users (1) -------- (N) Tickets (Assigned To)

Ticket Statuses (1) -------- (N) Tickets

Ticket Priorities (1) -------- (N) Tickets

Ticket Categories (1) -------- (N) Tickets

Tickets (1) -------- (N) Ticket Comments

Users (1) -------- (N) Ticket Comments

Tickets (1) -------- (N) Attachments

Users (1) -------- (N) Attachments

Tickets (1) -------- (N) Ticket Assignments

Users (1) -------- (N) Ticket Assignments

Users (1) -------- (N) Audit Logs