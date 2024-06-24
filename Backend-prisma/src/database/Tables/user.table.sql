use Tourism

CREATE TABLE Users(
    userId VARCHAR(255) PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    profileImage VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(255) default 'user'
);

SELECT * FROM Users

DROP TABLE Users;

