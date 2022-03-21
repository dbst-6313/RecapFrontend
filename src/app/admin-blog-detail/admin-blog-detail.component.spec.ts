import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogDetailComponent } from './admin-blog-detail.component';

describe('AdminBlogDetailComponent', () => {
  let component: AdminBlogDetailComponent;
  let fixture: ComponentFixture<AdminBlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
