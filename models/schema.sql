DROP DATABASE IF EXISTS timetracker_db;
CREATE DATABASE timetracker_db;
USE timetracker_db;
CREATE TABLE Employees
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

CREATE TABLE TimePunchs
(    
	TimePunch_id INTEGER AUTO_INCREMENT NOT NULL,
	empName VARCHAR(255) NOT NULL,
	clockDate DATE,
	clockIn TIME,
	clockOut TIME,
	employee_id INT,
	INDEX emp_ind (employee_id),
    PRIMARY KEY (TimePunch_id),
	FOREIGN KEY (employee_id) REFERENCES Employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);