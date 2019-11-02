DROP DATABASE IF EXISTS timetracker_db;
CREATE DATABASE timetracker_db;

USE timetracker_db;

CREATE TABLE Employee
(
	user_id INTEGER AUTOINCREMENT NOT NULL,
	userId INTEGER NOT NULL,
	empName VARCHAR(255) NOT NULL,
    empPassword CHAR(7) NOT NULL,
	manager BOOLEAN DEFAULT false,
	PRIMARY KEY (user_id)
);

CREATE TABLE TimePunch
(	
	id INTEGER AUTOINCREMENT NOT NULL
    empName VARCHAR NOT NULL,
    clockDate DATE, 
	clockIn TIME,
    clockOut TIME	
	PRIMARY KEY (id)
	
);