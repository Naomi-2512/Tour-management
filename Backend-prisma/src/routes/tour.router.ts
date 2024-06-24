import { Router } from "express";
import { tourController } from "../controller/tour.controller";

const route = Router();
const controller = new tourController;
 
route.post('/new-destination', controller.createTour);
route.get('/all-destinations', controller.getAllTours);
route.put('/modify-destination/:tourId', controller.updateTour);
route.get('/one-destination/:tourId', controller.getOneTour);
route.delete('/delete-destination/:tourId', controller.deleteAnItem);
 
 
export default route;