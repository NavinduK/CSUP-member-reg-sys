create table member(
	ID int IDENTITY(1,1) PRIMARY KEY,
	Reg_No varchar(11),
	First_Name varchar(30),
	Last_Name varchar(30),
	Contact_No varchar(10),
	Email varchar(50),
	Skills varchar(200)
);

INSERT INTO member (Reg_No,First_Name,Last_Name,Contact_No,Email,Skills) VALUES ('S/17/001','Nimal','Rathnayaka','0111111111','nim@gmail.com','Graphic Design, Web Design');
INSERT INTO member (Reg_No,First_Name,Last_Name,Contact_No,Email,Skills) VALUES ('S/17/002','Bimal','karunanayake','0773468260','karubimal@gmail.com','MS-Office, Team Work, Event Handling');
