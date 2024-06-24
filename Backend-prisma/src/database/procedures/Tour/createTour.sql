CREATE OR ALTER PROCEDURE createTour(
    @tourId VARCHAR(255),
    @image VARCHAR(255),
    @title VARCHAR(255),
    @description VARCHAR(20),
    @destination VARCHAR(255),
    @duration VARCHAR(255),
    @price FLOAT(53),
    @tourType VARCHAR(255),
    @isActive BIT
)
AS
BEGIN
    INSERT INTO Tours(tourId,image,title,description,destination,duration,price,tourType,isActive) 
    VALUES(@tourId,@image,@title,@description,@destination,@duration,@price,@tourType,@isActive)
END