DROP DATABASE IF EXISTS ticketflow;

CREATE DATABASE ticketflow;

USE ticketflow;

/*Lookup Table for Roles*/

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(50) NOT NULL UNIQUE,

    description VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

/*Lookup Table for Ticket Statuses*/

CREATE TABLE ticket_statuses (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(50) NOT NULL UNIQUE,

    description VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

/*Lookup Table for Ticket Priorities*/

CREATE TABLE ticket_priorities (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(50) NOT NULL UNIQUE,

    description VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

/*Lookup Table for Ticket Categories*/

CREATE TABLE ticket_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL UNIQUE,

    description VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);


