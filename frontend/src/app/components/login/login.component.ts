import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { login_details, user } from '../../interface/interfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!:NgForm

  userLoggedIn!:user;

  constructor (private router:Router){

  }
  setValues(){
    this.loginForm.setValue({ 
      email: 'Enter your email',
      password: 'Enter your password',
      
    })
  }

  remValues(){
    this.loginForm.setValue({
      email: '',
      password: ''
    })
  }
  async loginUser(user: login_details){
    try {
      console.log(user);

      let isValid = (user.email != '' && user.password != '' )

      if (isValid) {
        let result = await fetch('http://localhost:3000/auth/login', {method: 'POST',
          headers:{
            "content-type": "application/json",
          },
          body: JSON.stringify(user)
        }).then(response =>{
          return response.json()
        });
        console.log(result.user);

        this.userLoggedIn = result.user[0];
        console.log(this.userLoggedIn);

        localStorage.setItem("id", this.userLoggedIn.userId);
        setTimeout(() => {
          let role = result.user[0].role;
          console.log(typeof role);
          
          if (role == 'admin') {
            this.router.navigateByUrl('/admin-dashboard');
          }
          else{
            this.router.navigateByUrl('/user-dashboard');
          }
        }, 4000);
      }
      
        
    }catch (error) {
      console.log(error);
      
    }
  }
  
}
