create table admin(
	RegID varchar(11), /*student ID*/
	First_Name varchar(30),
	Last_Name varchar(30),
	Contact_No varchar(10),
	Email varchar(50),
	Post varchar(20),
	Password varchar(20),
	constraint Admin_PK PRIMARY KEY(RegID)
);

INSERT INTO admin (RegID,First_Name,Last_Name,Contact_No,Email,Post,Password) VALUES ('S/17/002','Nimal','Rathnayaka','0111111111','nim@gmail.com','Secretary','admin');
INSERT INTO admin (RegID,First_Name,Last_Name,Contact_No,Email,Post,Password) VALUES ('S/17/003','Bimal','karunanayake','0773468260','karubimal@gmail.com','Designer','admin');
INSERT INTO admin (RegID,First_Name,Last_Name,Contact_No,Email,Post,Password) VALUES ('S/17/499','Amith','Rathnayaka','0778401251','amith@gmail.com','Admin','admin');
INSERT INTO admin (RegID,First_Name,Last_Name,Contact_No,Email,Post,Password) VALUES ('S/17/827','Navindu','Kavishka','0701231234','navi@gmail.com','Admin','admin');