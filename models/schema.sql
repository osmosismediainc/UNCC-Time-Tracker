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
	TimePunch_id INTEGER AUTO_INCREMENT NOT NULL,
	empName VARCHAR(255) NOT NULL,
	clockDate DATE,
	clockIn TIME,
	clockOut TIME,
	employee_id INT,
	INDEX emp_ind (employee_id),
    PRIMARY KEY (TimePunch_id),
	FOREIGN KEY (employee_id) REFERENCES Employee(userId) ON UPDATE CASCADE ON DELETE CASCADE
);
