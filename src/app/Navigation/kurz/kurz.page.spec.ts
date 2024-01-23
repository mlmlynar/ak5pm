import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KurzPage } from './kurz.page';

describe('KurzPage', () => {
  let component: KurzPage;
  let fixture: ComponentFixture<KurzPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KurzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
