import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadmissionComponent } from './createadmission.component';

describe('CreateadmissionComponent', () => {
  let component: CreateadmissionComponent;
  let fixture: ComponentFixture<CreateadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateadmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
