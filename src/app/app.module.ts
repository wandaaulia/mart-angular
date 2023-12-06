import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PromotionBannerComponent } from './components/promotion-banner/promotion-banner.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { ShopCategoryComponent } from './components/shop-category/shop-category.component';
import { TrendingComponent } from './components/trending/trending.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent,
    PromotionBannerComponent,
    MainPageComponent,
    ProductsComponent,
    NewArrivalComponent,
    ShopCategoryComponent,
    TrendingComponent,
    FooterComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
