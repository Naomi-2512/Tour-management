import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { user } from '../../interface/interfaces';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  @ViewChild('registrationForm') registrationForm!:NgForm
  text_color = {};

  constructor (private router:Router){

  }
  setValues(){
    this.registrationForm.setValue({
      firstName: 'Enter your first name',
      lastName: 'Enter your last name',
      profileImage: 'Enter your profile image',
      email: 'Enter your email',
      password: '',
      Confirmpassword: ''
    })

    this.text_color = {
      color: "red"
    }
  }

  remValues(){
    this.registrationForm.setValue({
      firstName: '',
      lastName: '',
      profileImage: '',
      email: '',
      password: '',
      Confirmpassword: ''
    })
  }
  async registerUser(user: user){
    try {
      console.log(user);

    let isValid = (user.firstName != '' && user.lastName != '' && user.email != '' && user.password != '' && user.profileImage != '' && user.Confirmpassword != '')
    
    if (isValid) {
      let validPassword = (user.password == user.Confirmpassword)
      if (validPassword){
        let result = await fetch('http://localhost:3000/user/create', {method: 'POST',
          headers:{
            "content-type": "application/json",
          },
          body: JSON.stringify(user)
        }).then(response =>{
          return response.json()
        });
        console.log(result);

        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 4000);
      }
    }
    else{
      this.setValues();
      setTimeout(() => {
        this.remValues();
      }, 2000);
    }
      
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
}
