CREATE OR ALTER PROCEDURE createUser(
    @userId VARCHAR(255),
    @firstName VARCHAR(255),
    @lastName VARCHAR(255),
    @profileImage VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255),
    @role VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Users(userId,firstName,lastName,profileImage,email,password,role) 
    VALUES(@userId, @firstName, @lastName, @profileImage, @email, @password,@role)
END

