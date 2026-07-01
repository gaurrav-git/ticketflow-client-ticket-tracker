--Users

CREATE INDEX idx_users_role
ON users(role_id);

--Tickets

CREATE INDEX idx_tickets_created_by
ON tickets(created_by);

CREATE INDEX idx_tickets_assigned_to
ON tickets(assigned_to);

CREATE INDEX idx_tickets_status
ON tickets(status_id);

CREATE INDEX idx_tickets_priority
ON tickets(priority_id);

CREATE INDEX idx_tickets_category
ON tickets(category_id);

--Comments

CREATE INDEX idx_comments_ticket
ON ticket_comments(ticket_id);

--Attachments

CREATE INDEX idx_attachments_ticket
ON attachments(ticket_id);

--Assignment History

CREATE INDEX idx_assignment_ticket
ON ticket_assignments(ticket_id);

--Audit Logs

CREATE INDEX idx_audit_user
ON audit_logs(user_id);
