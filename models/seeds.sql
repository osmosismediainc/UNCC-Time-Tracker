INSERT INTO Employee (userId, empName, empPassword, manager) VALUES  (1928309, "John Bolton", "dsz#190", FALSE);
INSERT INTO Employee (userId, empName, empPassword, manager) VALUES  (2695431, "Robert Wilson", "plk123!", FALSE);
INSERT INTO Employee (userId, empName, empPassword, manager) VALUES  (0856423, "Tom Roberts", "!krx936", TRUE);
INSERT INTO Employee (userId, empName, empPassword, manager) VALUES  (2874901, "Janice Matthews", "t7!pls5", FALSE);
INSERT INTO Employee (userId, empName, empPassword, manager) VALUES  (2079876, "Will Stratford", "123#abc", FALSE);
INSERT INTO Employee (userId, empName, empPassword, manager) VALUES  (3019871, "Martha Jones", "qazxs#3", TRUE);
INSERT INTO Employee (userId, empName, empPassword, manager) VALUES  (4902816, "Pam Washington", "i1d2k#7", FALSE);

INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("John Bolton", "2019-10-28", "07:00:00", "16:00:00", 1928309);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Robert Wilson", "02019-10-28", "07:00:15", "16:32:00", 2695431);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Tom Roberts", "2019-10-28", "07:01:00", "17:09:18", 0856423);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Janice Matthews", "2019-10-28", "06:03:02", "15:29:07", 2874901);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Will Stratford", "2019-10-28", "07:00:48", "16:47:29", 2079876);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Martha Jones", "2019-10-28", "08:00:23", "18:02:09", 3019871);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Pam Washington", "2019-10-28", "09:00:00", "13:52:21", 4902816);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("John Bolton", "2019-10-29", "07:00:00", "15:57:23", 1928309);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Robert Wilson", "02019-10-29", "07:00:15", "14:18:20", 2695431);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Tom Roberts", "2019-10-29", "07:07:13", "17:18:09", 0856423);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Janice Matthews", "2019-10-29", "06:54:22", "15:29:07", 2874901);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Will Stratford", "2019-10-29", "06:48:37", "16:29:58", 2079876);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Martha Jones", "2019-10-29", "07:31:56", "16:02:28", 3019871);
INSERT INTO TimePunch (empName, clockDate, clockIn, clockOut, employee_id) VALUES ("Pam Washington", "2019-10-29", "08:57:29", "19:21:42", 4902816); 

SELECT * FROM TimePunch;