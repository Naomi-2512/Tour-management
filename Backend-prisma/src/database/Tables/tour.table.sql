use Tourism
CREATE TABLE Tours (
    tourId VARCHAR(255) NOT NULL PRIMARY KEY,
    image VARCHAR (255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    price FLOAT(53) NOT NULL,
    tourType VARCHAR(255) NOT NULL,
    isActive BIT DEFAULT 0 
)

SELECT * FROM Tours
