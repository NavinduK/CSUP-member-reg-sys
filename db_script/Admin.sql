create table Admin(
	RegID varchar(11), /*student ID*/
	First_Name varchar(30),
	Last_Name varchar(30),
	Contact_No varchar(10),
	Email varchar(50),
	Post varchar(20),
	Password varchar(20),
	constraint Admin_PK PRIMARY KEY(RegID), 
);

select *
from Admin



insert into Admin values ('S/17/001','Nimal','Disanayake','0774561234','nimal@gmail.com','President','admin');
insert into Admin values ('S/17/002','Saman','Vitharana','0778401251','samanvi@gmail.com','Vice President','admin');
insert into Admin values ('S/17/003','Bimal','karunanayake','0773468260','karubimal@gmail.com','Editor','admin');