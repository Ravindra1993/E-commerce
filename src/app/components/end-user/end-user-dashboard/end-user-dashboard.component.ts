import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-end-user-dashboard',
  templateUrl: './end-user-dashboard.component.html',
  styleUrls: ['./end-user-dashboard.component.scss']
})

export class EndUserDashboardComponent {

  products: Product[] = [
    { id: 1, title: 'Limca', image: 'assets/limca.jpg', price: 10, quantity: 1, selected: false },
    { id: 2, title: 'Maaza', image: 'assets/maaza.jpg', price: 20, quantity: 1, selected: false },
    { id: 3, title: 'Pepsi', image: 'assets/pepsi.jpg', price: 30, quantity: 1, selected: false },
    { id: 4, title: 'Coca-cola', image: 'assets/Coca-colla.jpg', price: 10, quantity: 1, selected: false },
    { id: 5, title: 'Sprite', image: 'assets/sprite.jpg', price: 20, quantity: 1, selected: false },
    { id: 7, title: 'ThumsUp', image: 'assets/thumsUp.jpg', price: 10, quantity: 1, selected: false },
    { id: 8, title: 'Maaza', image: 'assets/maaza.jpg', price: 20, quantity: 1, selected: false }
  ];

  selectedProducts: Product[] = [];
  orders= [];
  constructor() { }

  ngOnInit(): void {
    
  }

  onProductSelect(product: Product){
    if(product.selected){
    this.selectedProducts.push(product);
    }else{
      const index = this.selectedProducts.findIndex(p => p.id === product.id);
      if(index !== -1){
        this.selectedProducts.splice(index, 1);
      }
    }
    console.log("Check Selected Data => " + JSON.stringify(this.selectedProducts));
  }

  getTotalCost() {
    return this.selectedProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  decrementQuantity(product: Product) {
    if (product.quantity > 0) {
      product.quantity--;
      if (product.quantity === 0) {
        this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id);
      }
    }
  }

  incrementQuantity(product: Product) {
    product.quantity++;
    if (!this.selectedProducts.includes(product)) {
      this.selectedProducts.push(product);
    }
  }

  buyProducts() {
    if (this.selectedProducts.length === 0) {
      alert('No products selected');
      return;
    }
    // Implement your buy logic here, e.g., send selected products to the backend

    alert('Purchased products:\n' + this.selectedProducts.map(p => `${p.title} (x${p.quantity})`).join('\n'));
  }
}
