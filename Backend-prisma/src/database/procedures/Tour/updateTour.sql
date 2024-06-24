CREATE OR ALTER PROCEDURE updateTour(
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
    UPDATE Tours SET tourId=@tourId,image=@image,title=@title,description=@description,destination=@destination,duration=@duration,price=@price,tourType=@tourType,isActive=@isActive WHERE tourId = @tourId
END