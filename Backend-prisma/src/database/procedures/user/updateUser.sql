CREATE OR ALTER PROCEDURE updateUser(
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
    UPDATE Users SET userId=@userId,firstName=@firstName ,lastName=@lastName,profileImage=@profileImage,email=@email,password=@password,role=@role WHERE userId=@userId
END

DROP PROCEDURE updateUser