--Roles

INSERT INTO roles (name, description)
VALUES
('Admin', 'System administrator'),
('Support Agent', 'Handles customer tickets'),
('Client', 'Creates support tickets');

--Ticket Statuses

INSERT INTO ticket_statuses (name, description)
VALUES
('Open', 'Newly created ticket'),
('In Progress', 'Currently being worked on'),
('Resolved', 'Issue resolved'),
('Closed', 'Ticket closed');

--Ticket Priorities

INSERT INTO ticket_priorities (name, description)
VALUES
('Low', 'Low urgency'),
('Medium', 'Normal priority'),
('High', 'High priority'),
('Critical', 'Requires immediate attention');

--Ticket Categories

INSERT INTO ticket_categories (name, description)
VALUES
('Bug', 'Software defect'),
('Feature Request', 'New functionality request'),
('Technical Support', 'Technical assistance'),
('Billing', 'Payment or invoice related'),
('Account', 'Account related issues');