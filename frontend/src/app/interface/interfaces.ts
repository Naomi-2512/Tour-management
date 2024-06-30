export interface user {
    userId     : string    
    firstName  : string 
    lastName   : string 
    profileImage: string
    email      : string 
    password   : string
    Confirmpassword:string 
    role       : string  
}

export interface testUser {
    firstName  : string 
    lastName   : string 
    profileImage: string
    email      : string 
    password   : string
    Confirmpassword:string 
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
    isActive : string
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
export interface login_details{
    email:string,
    password:string
}