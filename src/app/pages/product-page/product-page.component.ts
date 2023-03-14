import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';
// import { products as data} from './data/products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  title = 'Shop Angular';
  products: IProduct[] = [];
  loading = false;
  term: '';
  // products$: Observable<IProduct[]>;

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;

    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));

    this.productsService.getAll().subscribe((products: IProduct[]) => {
      this.loading = false;
    });
  }
}
