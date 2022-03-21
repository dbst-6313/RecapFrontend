import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdvertDetailComponent } from './admin-advert-detail.component';

describe('AdminAdvertDetailComponent', () => {
  let component: AdminAdvertDetailComponent;
  let fixture: ComponentFixture<AdminAdvertDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdvertDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdvertDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
