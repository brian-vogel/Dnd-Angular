import { CommonModule, Location } from '@angular/common';
import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DummyComponent } from '../helpers/dummy.component'

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
          { path: 'dm', component: DummyComponent },
          { path: 'player', component: DummyComponent }
        ])],
      declarations: [DashboardComponent, DummyComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to the DM page', waitForAsync(inject([Location], (location: Location) => {
    fixture.debugElement.query(By.css('#dm_button')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/dm')
    })
  })));

  it('should redirect to the Player page', waitForAsync(inject([Location], (location: Location) => {
    fixture.debugElement.query(By.css('#player_button')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/player')
    })
  })));
});
