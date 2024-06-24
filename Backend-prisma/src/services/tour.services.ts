import { v4 } from "uuid";
import { tour } from "../interface/interfaces";
import DbHelper from "../dbHelpers/helper";
import lodash from "lodash";

export class tourServices {
 
    async createTour(tour: tour) {

        console.log("tour service ");
        
   
      let tourId = v4();
   
      let result = (await DbHelper.execute("createTour", {
        tourId: tourId, image: tour.image, title: tour.title,
        description: tour.description, destination: tour.destination, duration: tour.duration, price: tour.price,tourType:tour.tourType, 
        isActive:tour.isActive
      })).rowsAffected
   
      if (result[0] < 1) {
        return {
          error: "Unable to create tour"
        }
      }
   
      else {
        return {
          message: "Tour created successfully."
        }
      }
   
    }
   
    async updateTour(tourId: string, tour: tour) {
     
      let result = (await DbHelper.query(`SELECT * FROM Tours WHERE tourId = '${tourId}' `)).recordset;
   
      if (result.length < 1) {
        return {
          error: "No tour of that id was found"
        }
      }
      else {
       
        let results = (await DbHelper.execute("updateTour", {
            tourId: result[0].tourId, image: tour.image, title: tour.title,
            description: tour.description, destination: tour.destination, duration: tour.duration, price: tour.price,tourType:tour.tourType, 
            isActive:tour.isActive
        })).rowsAffected;
   
        if (results[0] == 1) {
          return {
            message: "Tour updated successfully."
          }
        }
   
        else {
          return {
            error: "Unable to update tour"
          }
        }
   
      }
   
    }
   
    async getOneTour(tourId: string) {
   
      let result = (await DbHelper.query(`SELECT * FROM Tours WHERE tourId = '${tourId}'`)).recordset;
   
      if (!lodash.isEmpty(result)) {
        return {
          message: "Tour fetched successfully.",
          Tours: result[0]
        }
      }
   
      else {
        return {
          error: "UTour of that id not found"
        }
      }
   
    }
   
    async getAllTours() {
     
      let result = (await DbHelper.query("SELECT * FROM Tours")).recordset;
   
      if (!lodash.isEmpty(result)) {
       
        return {
          message: "Tours fetched succefully",
          Tours: result
        }
   
      }
   
      else {
        return {
          error: "Unable to fetch the tours"
        }
      }
   
    }
   
    async deleteAnItem(tourId: string) {
   
      let result = (await DbHelper.query(`DELETE FROM Tours where tourId = '${tourId}'`)).rowsAffected;
   
      if (result[0] == 1) {
        return {
          message: "Tour deleted successfully."
        }
      }
      else {
        return {
          error: "Unable to delete tour"
        }
      }
   
    }
   
  }