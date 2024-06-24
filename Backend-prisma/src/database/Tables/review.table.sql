CREATE TABLE Reviews (
    [reviewId] VARCHAR(255) PRIMARY KEY,
    [userId] VARCHAR(255) NOT NULL,
    [tourId] VARCHAR(255) NOT NULL,
    [rating] INT NOT NULL,
    [comment] VARCHAR(255) NOT NULL,
    Foreign Key (userId) REFERENCES Users(userId),
    Foreign Key (tourId) REFERENCES Tours(tourId)
);

SELECT * FROM Reviews

DROP TABLE Review