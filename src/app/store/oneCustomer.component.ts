import { Component } from '@angular/core';
import { Customer,Orders } from '../model/customer.model';
import { CustomerRepository } from '../model/customer.repository';
import { DataSource } from '../model/datasource';
import { RouterModule, ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: "OneCust",
  templateUrl: "oneCustomer.component.html"
})
export class oneComponent {

  id: number;
  _customer: Customer;
  constructor(private repository: CustomerRepository, private router: Router,
    activeRoute: ActivatedRoute) {

      this._customer = { id: 0, firstName: "", lastName: "", address: "", city: "", orders: null };
    this.id = activeRoute.snapshot.params["id"];
    //this._customer = this.repository.getCustomer(this.id);


  }

  get customer(): Customer {
    return  this.repository.getCustomer(this.id);

  }
  addCustomer(newCustomer: Customer) {
    return this.repository.addCustomers(newCustomer);
            
  }

    get customers(): Customer[] {
      return this.repository.getCustomers();
    }
}
