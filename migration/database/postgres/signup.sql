
create database signup;

create schema 

CREATE TABLE login.user 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 name VARCHAR(n) NOT NULL,  
 email VARCHAR(n),  
 phone INT,  
 status_id INT NOT NULL,  
 created_at DATE NOT NULL,  
 updated_at DATE,  
 UNIQUE (email)
); 

CREATE TABLE login.user_status 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 name VARCHAR(n) NOT NULL,  
 desc VARCHAR(n) NOT NULL,  
 created_at DATE NOT NULL,  
 updated_at DATE,  
 active INT DEFAULT '1',  
 UNIQUE (name)
); 

ALTER TABLE user ADD FOREIGN KEY(status_id) REFERENCES user_status (status_id)
