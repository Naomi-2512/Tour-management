import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ResetComponent } from './components/reset/reset.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {path:'', component:LandingPageComponent },
    {path:'register',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'reset',component:ResetComponent},
    {path:'user-dashboard',component:UserDashboardComponent},
    {path:'admin-dashboard', component:AdminDashboardComponent}
];
