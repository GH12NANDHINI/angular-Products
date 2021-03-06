import { Component } from '@angular/core';

import { productsFromList } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = productsFromList;

  share() {
    window.alert('The product has been shared!');
  }

  buy() {
    alert('The product has been added to cart.!');
  }
  onNotify() {
    alert('You will be notified when the product goes on sale');
  }
}
