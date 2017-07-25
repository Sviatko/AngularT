import {Component, EventEmitter} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from './product-service.service';

/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];
  searchStr:string = '';
  product:Product = new Product('','','',[''],0);
  departments:string;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  addProduct(): boolean {
    // console.log(`Adding article title: ${title.value} , sku:${sku.value} and link: ${image.value}`);
    // let product:Product = new Product( sku.value, title.value, image.value, department.value.split(' '),price.value);
    this.product.department = this.departments.split(' ');
    this.productService.addProduct(this.product);
    return false;
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

  getProduct(){
    return this.products.filter(product => product.name.toLowerCase().includes(this.searchStr.toLowerCase()))
  }
}
