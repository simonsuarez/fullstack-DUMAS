import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatosFormComponent } from './gatos-form.component';

describe('GatosFormComponent', () => {
  let component: GatosFormComponent;
  let fixture: ComponentFixture<GatosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GatosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
