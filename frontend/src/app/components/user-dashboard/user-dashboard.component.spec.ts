import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardComponent } from './user-dashboard.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashboardComponent, FormsModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardComponent);
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
});
