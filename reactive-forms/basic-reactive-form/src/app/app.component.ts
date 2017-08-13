import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  ordered: boolean;
}

const products: Product[] = [
  { name: 'Website', price: 5000, ordered: false },
  { name: 'Online-Shop', price: 10000, ordered: false }
];

export interface Order {
  firstName: string;
  lastName: string;
  products: string[];
  total: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveForm Beispiel';
  form: FormGroup;
  order: Order;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    const productsGroup = this._fb.array([]);
    products.forEach((product) => {
      const ctrl =  this._fb.group({
          'name': this._fb.control(product.name),
          'price': this._fb.control(product.price),
          'ordered': this._fb.control(product.ordered)
        });
      productsGroup.push(ctrl);
    });

    this.form = this._fb.group({
      'firstName': this._fb.control('', [Validators.required]),
      'lastName': this._fb.control('', [Validators.required]),
      'products': productsGroup
    });
  };

  onSubmit() {
    let total = 0;
    const order = Object.assign({}, this.form.value);
    order.products = order.products
    .filter((ctx: Product, val) => {
      return ctx.ordered;
    })
    .map((product) => {
      total += parseInt(product.price, 10);
      return product.name;
    });

    order.total = total;
    this.order = order;
  }
}
