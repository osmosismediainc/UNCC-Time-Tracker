DROP DATABASE IF EXISTS timetracker_db;
CREATE DATABASE timetracker_db;

USE timetracker_db;

CREATE TABLE Employee
(
	employee_id INTEGER AUTO_INCREMENT NOT NULL,
	userId INTEGER NOT NULL,
	empName VARCHAR(255) NOT NULL,
    empPassword CHAR(7) NOT NULL,
	manager BOOLEAN DEFAULT false,
	PRIMARY KEY (employee_id)
);

CREATE TABLE TimePunch
(	
    employee_id INT,
    TimePunch_id INTEGER AUTO_INCREMENT NOT NULL,
    empName VARCHAR(255) NOT NULL,
    clockDate DATE, 
	clockIn TIME,
    clockOut TIME,	
	PRIMARY KEY (TimePunch_id),
    FOREIGN KEY (employee_id) REFERENCES employee(employee_id) ON UPDATE CASCADE ON DELETE CASCADE
    
);