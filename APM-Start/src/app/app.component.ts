import { Component } from "@angular/core";
import  { ProductListComponent } from  './products/product-list.component';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <nav class='navbar navbar-default'>
      <div class='container-fluid'>
      
        <a class='navbar-brand'>{{pageTitle}} </a>
        <ul class ='nav navbar-nav'> 
            <li><a [routerLink]="['/welcome']"> Home </a> </li>
            <li><a [routerLink]="['/products']"> Product List </a> </li>
          </ul>
      </div>

      <div class='container'>
        <router-outlet></router-outlet>
      </div>  
    </nav>  
  </div> 
  `,
  providers: [ProductService]
})

export class AppComponent{
  pageTitle: string = "Accolite Product List";
  
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