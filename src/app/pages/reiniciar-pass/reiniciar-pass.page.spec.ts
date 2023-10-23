import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReiniciarPassPage } from './reiniciar-pass.page';

describe('ReiniciarPassPage', () => {
  let component: ReiniciarPassPage;
  let fixture: ComponentFixture<ReiniciarPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReiniciarPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
