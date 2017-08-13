import { AsyncValidators } from './async-validators';
import { Observable } from 'rxjs/Rx';
import { AsyncValidatorFn, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.css']
})
export class ReactiveFormsDemoComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private _fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.buildForm();
    this.myForm.statusChanges.subscribe((status) => {
      console.log('status', status);
    });
  }

  private buildForm(): void {
    this.myForm = this._fb.group({
      'firstName': this._fb.control('', null, <AsyncValidatorFn>AsyncValidators.ValidateFirstName),
      'lastName': this._fb.control('', null, <AsyncValidatorFn>AsyncValidators.ValidateLastName),
    });
  }



}
