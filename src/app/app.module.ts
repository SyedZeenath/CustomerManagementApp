import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { Customer } from './model/customer.model';
import { CustomerRepository } from './model/customer.repository';
import { DataSource } from './model/datasource';
import { oneComponent } from './store/oneCustomer.component';
import { RouterModule } from '@angular/router';
import { OrderDetailComponent } from './store/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    OrderDetailComponent,
    oneComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      {
        path: "customers", component: StoreComponent,
        
      },
      {
        path: "orders", component: OrderDetailComponent,
      },
      {
        path: "customer/:id", component:oneComponent,
      },
      {
        path: "**", redirectTo:"/customers",
      },


      
  ])
  ],
  providers: [CustomerRepository, DataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
