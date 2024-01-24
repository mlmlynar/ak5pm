import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrveSpusteniePage } from './prve-spustenie.page';

describe('PrveSpusteniePage', () => {
  let component: PrveSpusteniePage;
  let fixture: ComponentFixture<PrveSpusteniePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrveSpusteniePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
