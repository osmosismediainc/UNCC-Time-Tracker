DROP DATABASE IF EXISTS timetracker_db;
CREATE DATABASE timetracker_db;
USE timetracker_db;

CREATE TABLE Employees
(
	id INTEGER AUTO_INCREMENT NOT NULL,
    userId INTEGER NOT NULL,
    empName VARCHAR(255) NOT NULL,
	empPassword CHAR(25) NOT NULL,
    manager BOOLEAN DEFAULT false,
    createdAt VARCHAR(255) NOT NULL DEFAULT 1000,
    updatedAt VARCHAR(255) NOT NULL DEFAULT 1000,
    PRIMARY KEY (id)
);

CREATE TABLE TimePunches
(    
	id INTEGER AUTO_INCREMENT NOT NULL,
	clockDate DATE,
	clockIn TIME,
	clockOut TIME,
	empLat DECIMAL(9,6),
    empLon DECIMAL(9,6),
    createdAt VARCHAR(255) NOT NULL DEFAULT 1000,
    updatedAt VARCHAR(255) NOT NULL DEFAULT 1000,
	EmployeeId INT,
	INDEX emp_ind (employeeId),
    PRIMARY KEY (id),
	FOREIGN KEY (employeeId) REFERENCES Employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);