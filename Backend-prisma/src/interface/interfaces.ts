export interface user {
    userId     : string    
    firstName  : string 
    lastName   : string 
    profileImage: string
    email      : string 
    password   : string 
    role       : string  
}

export interface tour {
    tourId : string
    image : string
    title : string
    description : string
    destination : string
    duration : string
    price : string
    tourType : string
    isActive : boolean
}

export interface review{
    reviewId : string
    userId : string
    tourId : string
    rating : string
    comment : string
}

export interface booking{
    bookingId : string
    userId : string
    tourId : string
    booked : boolean
}