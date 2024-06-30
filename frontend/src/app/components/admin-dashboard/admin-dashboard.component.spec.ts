import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;
  let httpTestingController: HttpTestingController;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardComponent ],
      imports: [AdminDashboardComponent, FormsModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all tours', () => {
    const exampleOfTours = [
      {image: 'https://th.bing.com/th/id/OIP.IugR_5yEN0rFQxWkJfihEgHaF7?rs=1&pid=ImgDetMain', tourType: 'Hike', title: 'Water fall', description: 'visiting china falls', destination: 'Nyeri', duration: '4 days', price: '$10000' },
    ];

    component.getAllTours();
    const req = httpTestingController.expectOne('http://localhost:3000/tour/all-destinations');
    expect(req.request.method).toBe('GET');
    req.flush({ Tours: exampleOfTours });

    expect(component.tours.length).toBe(2);
    expect(component.tours[0].title).toEqual('Water fall');
  });
  
  it('should fetch all users', () => {
    const exampleOfUsers = [
      {firstName: 'Naomi',lastName: 'Chege',profileImage: 'https://th.bing.com/th/id/OIP.ybNUEwKEf7WR8VIllTWk0wHaE7?rs=1&pid=ImgDetMain', email: 'naomichege2512@gmail.com',password:'Nakeez2512' },
    ];

    component.getAllUsers();
    const req = httpTestingController.expectOne('http://localhost:3000/user/all-users');
    expect(req.request.method).toBe('GET');
    req.flush({ users: exampleOfUsers });

    expect(component.users.length).toBe(2);
    expect(component.users[0].firstName).toEqual('Naomi');
  });
});
