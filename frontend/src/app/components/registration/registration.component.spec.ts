import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { testUser, user } from '../../interface/interfaces';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let httpTestingController: HttpTestingController;
  let router: Router;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [RegistrationComponent,FormsModule, CommonModule, HttpClientTestingModule],
      providers: [
        { provider: Router, value: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register user and navigate to login ', fakeAsync(() => {
    spyOn(component, 'remValues');

    const exampleOfUser:user = {
      firstName: 'Naomi',
      lastName: 'Chege',
      profileImage: 'https://th.bing.com/th/id/OIP.ybNUEwKEf7WR8VIllTWk0wHaE7?rs=1&pid=ImgDetMain',
      email: 'naomichege2512@gmail.com',
      password: 'Nakeez2512',
      Confirmpassword: 'Nakeez2512',
      role: 'admin',
      userId: ''
    };

    component.registerUser(exampleOfUser);
    const req = httpTestingController.expectOne('http://localhost:3000/user/create');
    expect(req.request.method).toBe('POST');
    req.flush({});

    tick(4000);

    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
  }));

  it('should set form values', () => {
    component.setValues();
    expect(component.registrationForm.value).toEqual({
      firstName: 'Enter your first name',
      lastName: 'Enter your last name',
      profileImage: 'Enter your profile image',
      email: 'Enter your email',
      password: '',
      Confirmpassword: ''
    });
    expect(component.text_color).toEqual({ color: "red" });
  });

  it('should reset form values', () => {
    component.remValues();
    expect(component.registrationForm.value).toEqual({
      firstName: '',
      lastName: '',
      profileImage: '',
      email: '',
      password: '',
      Confirmpassword: ''
    });
  });

});
