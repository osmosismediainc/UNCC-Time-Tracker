DROP DATABASE IF EXISTS timetracker_db;
CREATE DATABASE timetracker_db;
USE timetracker_db;
CREATE TABLE Employee
(
    userId INTEGER NOT NULL,
    empName VARCHAR(255) NOT NULL,
   	empPassword VARCHAR(255) NOT NULL,
    manager BOOLEAN DEFAULT false,
    PRIMARY KEY (userId)
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
    PRIMARY KEY (TimePunchIid),
	FOREIGN KEY (employeeId) REFERENCES Employee(userId) ON UPDATE CASCADE ON DELETE CASCADE
);
