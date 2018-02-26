import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
// import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    // CommonModule,
    BrowserModule,
    // FormsModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent,
         canActivate: [ProductGuardService] }
    ]),
    SharedModule,

  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    // StarComponent,
    ProductDetailComponent
  ]
  // ,
  // providers: [
  //   ProductGuardService
  // ]
})
export class ProductModule { }
