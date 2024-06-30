import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { tour, user } from '../../interface/interfaces';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  display: string = 'tours';
  tours: tour[] = [];
  profiles!: user;

  constructor(){
    this.getAllTours();
    this.getOneUser();
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
 
