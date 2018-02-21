import { Component } from "@angular/core";
import  { ProductListComponent } from  './products/product-list.component';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
  <div> 
  <h1> {{pageTitle}} </h1>
    <pm-products></pm-products> 
  </div> 
  `,
  providers: [ProductService]
})

export class AppComponent{
  pageTitle: string = "Eat N Treat Product List";
  
}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }
