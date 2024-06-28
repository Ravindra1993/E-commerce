import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() selectedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {  }

  // incrementQuantity() {
  //   this.product.quantity++;
  //   this.selectedProduct.emit(this.product);
  // }

  // decrementQuantity() {
  //   if (this.product.quantity > 0) {
  //     this.product.quantity--;
  //     this.selectedProduct.emit(this.product);
  //   }
  // }

  toggleSelection(){
    this.product.selected = !this.product.selected;
    this.selectedProduct.emit(this.product);
  }
}
