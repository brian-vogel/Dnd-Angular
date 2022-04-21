import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmScreenComponent } from './dm-screen.component';

describe('DmScreenComponent', () => {
  let component: DmScreenComponent;
  let fixture: ComponentFixture<DmScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
