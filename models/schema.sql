DROP DATABASE IF EXISTS timetracker_db;
CREATE DATABASE timetracker_db;

USE timetracker_db;

CREATE TABLE Employee
(
	userId INTEGER NOT NULL,
	empName VARCHAR(255) NOT NULL,
    empPassword CHAR(7) NOT NULL,
	manager BOOLEAN DEFAULT false,
	PRIMARY KEY (userId)
);

CREATE TABLE TimePunch
(	
	id INTEGER AUTO_INCREMENT NOT NULL
    empName VARCHAR(255) NOT NULL,
    clockDate DATE, 
	clockIn TIME,
    clockOut TIME,	
	PRIMARY KEY (id),
	FOREIGN KEY (empName) REFERENCES Employee(empName)
);