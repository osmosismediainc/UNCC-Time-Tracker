DROP DATABASE IF EXISTS timetracker_db;
CREATE DATABASE timetracker_db;
USE timetracker_db;
CREATE TABLE Employee
(
	id INTEGER AUTO_INCREMENT NOT NULL,
    userId INTEGER NOT NULL,
    empName VARCHAR(255) NOT NULL,
	empPassword CHAR(7) NOT NULL,
    manager BOOLEAN DEFAULT false,
    createdAt VARCHAR(255) NOT NULL DEFAULT 1000,
    updatedAt VARCHAR(255) NOT NULL DEFAULT 1000,
    PRIMARY KEY (id)
);

CREATE TABLE TimePunch
(    
	TimePunchId INTEGER AUTO_INCREMENT NOT NULL,
	empName VARCHAR(255) NOT NULL,
	clockDate DATE,
	clockIn TIME,
	clockOut TIME,
	employeeId INT,
	INDEX emp_ind (employeeId),
    PRIMARY KEY (TimePunchId),
	FOREIGN KEY (employeeId) REFERENCES Employee(id) ON UPDATE CASCADE ON DELETE CASCADE
);
