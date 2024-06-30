import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { tour, user } from '../../interface/interfaces';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  display: string = 'tours';
  profiles!: user;
  @ViewChild('updateTour') updateTour!:NgForm;
  visible:{} = {
    display: 'none'
  }

  visible1:{} = {
    display: 'none'
  }
  updatedTour:string = '';

  tours: tour[] = [];
  users: user[] = [];
  constructor(){
    this.getAllTours();
    this.getAllUsers();
    this.getOneUser();
  }

  createVisible(){
    this.visible = {
      display: 'flex'
    }
  }

  createVisible1(tourId:string,image:string,tourType:string,title:string,description:string,destination:string,duration:string,price:string){
    this.visible1 = {
      display: 'flex'
    }

    this.setValues(image,tourType,title,description,destination,duration,price);
    this.updatedTour = tourId;
  }

  createInvisible(){
    this.visible = {
      display : 'none'
    }
  }

  createInvisible1(){
    this.visible1 = {
      display : 'none'
    }
  }

  setValues(image:string,tourType:string,title:string,description:string,destination:string,duration:string,price:string){
    this.updateTour.setValue({image,tourType,title,description,destination,duration,price})
  }

  async createNewTour(tour:tour){
    
    try {
      let result = await fetch('http://localhost:3000/tour/new-destination', {method: 'POST',
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify(tour)
      }).then(response =>{
        return response.json()
      });
      console.log(result);

      this.createInvisible();
      this.tours = [];
      this.getAllTours();
      
    } catch (error) {
      console.log(error);
      
    }
  }
  async updateNewTour(tour:tour){
    try {
      let result = await fetch(`http://localhost:3000/tour/modify-destination/${this.updatedTour}`, {method: 'PUT',
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify(tour)
      }).then (response =>{
        return response.json();
      })
    } catch (error) {
      console.log(error);
      
    }
  }
  async getAllTours(){
    try {
      let result = await fetch('http://localhost:3000/tour/all-destinations', {method: 'GET',
        headers:{
          "content-type": "application/json",
        }
      }).then(response =>{
        return response.json()
      });
      console.log(result);
      
      let myTours = result.Tours;
      myTours.forEach((tour:tour) =>{
        this.tours.push(tour)
      })

      console.log(this.tours)
      
    } catch (error) {
      console.log(error)
    }
  }

  async getAllUsers(){
    try {
      let result = await fetch('http://localhost:3000/user/all-users', {method: 'GET',
        headers:{
          "content-type": "application/json",
        }
      }).then(response =>{
        return response.json()
      });
      console.log(result.users);
      
      let myUsers = result.users;
      myUsers.forEach((user:user) =>{
        this.users.push(user)
      })

      // console.log(this.tours)
      
    } catch (error) {
      console.log(error)
    }
  }

  async getOneUser(){
    try {
      const userId = localStorage.getItem("id");
      let result = await fetch(`http://localhost:3000/user/one-user/${userId}`, {method: 'GET',
        headers:{
          "content-type": "application/json",
        }
      }).then(response =>{
        return response.json()        
      });

      console.log(result.user);

      this.profiles = result.user;
      
    } catch (error) {
      console.log(error);
      
    }
  }
}
