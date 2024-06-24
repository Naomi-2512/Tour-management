CREATE TABLE Bookings (
    bookingId VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) NOT NULL,
    tourId VARCHAR(255) NOT NULL,
    booked BIT DEFAULT 0,
    Foreign Key (userId) REFERENCES Users(userId),
    Foreign Key (tourId) REFERENCES Tours(tourId)
);
DROP TABLE Bookings

SELECT * FROM Bookings