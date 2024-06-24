import { Request, Response } from "express";
import { tourServices } from "../services/tour.services";

const service = new tourServices;
 
export class tourController {
 
  async createTour(req: Request, res: Response) {
    console.log("tour service ");
    try {

        console.log("tour service ");
 
      let response = await service.createTour(req.body);
 
      return res.status(201).json(response)
 
    } catch (error) {
      return res.json({
        error: error
      })
    }
  }
 
  async getAllTours(req: Request, res: Response) {
    try {
      let result = await service.getAllTours();
 
      return res.status(201).json(
          result
      )
    } catch (error) {
        return res.json({
            error: error
        })
    }
  }
 
  async getOneTour(req: Request, res: Response) {
    try {
      let {tourId} = req.params
 
      let response = await service.getOneTour(tourId);
 
      return res.status(201).json(response)
 
    } catch (error) {
        return res.json({
            error: error
        })
    }
  }
 
  async updateTour(req: Request, res: Response) {
    try {
      let tourId = req.params.tourId
 
      let response = await service.updateTour(tourId, req.body);
   
      return res.json(response)
     
 
    } catch (error) {
        return res.json({
            error: error
        })
    }
  }
 
  async deleteAnItem(req: Request, res: Response) {
   
    try {
      let {tourId} = req.params;
 
      let response = await service.deleteAnItem(tourId);
 
      return res.json(response);
    } catch (error) {
      res.json({
        error: error
      })
    }
 
  }
 
}