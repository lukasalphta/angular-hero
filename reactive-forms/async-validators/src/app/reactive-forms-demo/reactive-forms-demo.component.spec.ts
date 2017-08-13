import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { async, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsDemoComponent } from './reactive-forms-demo.component';

describe('ReactiveFormsDemoComponent', () => {
  let component: ReactiveFormsDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsDemoComponent>;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule],
      declarations: [ ReactiveFormsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsDemoComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize a form', () => {
    expect(component.myForm).toBeDefined();
  });

  it('should define firstName and lastName formControls', () => {
    expect(component.myForm.controls.firstName instanceof FormControl).toBeTruthy();
    expect(component.myForm.controls.lastName instanceof FormControl).toBeTruthy();
  });

  it('should have disabled submit button after initialization', () => {
    const btn = nativeElement.querySelector('#submit');
    expect(btn.disabled).toBeTruthy();
  });

  it('should have invalid form after inserting wrong values', (done) => {
    component.myForm.controls.firstName.setValue('a');
    component.myForm.controls.lastName.setValue('b');

    component.myForm.statusChanges.subscribe((status) => {
      if (status !== 'PENDING') {
        expect(status).toEqual('INVALID');
        done();
      }
    });
  });

  it('should have valid form after inserting proper values', (done) => {
    component.myForm.controls.firstName.setValue('Maximilian');
    component.myForm.controls.lastName.setValue('Mustermann');

    component.myForm.statusChanges.subscribe((status) => {
      if (status !== 'PENDING') {
        expect(status).toEqual('VALID');
        done();
      }
    });
  });
});
