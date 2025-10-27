import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatosListComponent } from './gatos-list.component';

describe('GatosListComponent', () => {
  let component: GatosListComponent;
  let fixture: ComponentFixture<GatosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GatosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
