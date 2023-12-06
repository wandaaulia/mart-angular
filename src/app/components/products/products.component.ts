import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {


  blushsMobile = [];
  blushsWeb = [];
  btnShowMore : boolean = true;

  constructor(
    private productService: ProductsService,
    private router : Router) { }

  ngOnInit(): void {
     this.productService.getConcealer().subscribe((blush) => {
      this.blushsMobile = blush.slice(0,2);
      this.blushsWeb = blush.slice(0,6);

      console.log(this.blushsMobile);

    }
      );


  }


  showMore() {
    this.productService.getConcealer().subscribe((blush) => {

      if(this.blushsMobile.length < 6) {
        this.blushsMobile= blush.slice(0, this.blushsMobile.length + 2);
      } 

      if(this.blushsMobile.length >= 6 ) {
        this.btnShowMore = false
      }

       
      console.log(this.blushsMobile);

    })
  }


  navigateTo(id: String) {
    this.router.navigate(['/products/' + id])
  }


}


