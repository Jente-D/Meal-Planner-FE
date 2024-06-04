import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSuccesDialogComponent } from './registration-succes-dialog.component';

describe('RegistrationSuccesDialogComponent', () => {
  let component: RegistrationSuccesDialogComponent;
  let fixture: ComponentFixture<RegistrationSuccesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationSuccesDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationSuccesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
