import { Component } from '@angular/core';
import { Customer,Orders } from '../model/customer.model';
import { CustomerRepository } from '../model/customer.repository';
import { DataSource } from '../model/datasource';

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})

export class StoreComponent{
    customer: Customer;

    constructor(private repository: CustomerRepository){ 

    this.customer = { id: 0, firstName: "", lastName: "", address: "", city: "", orders: null };

    }



    get customers(): Customer[] {
        return this.repository.getCustomers();
    }
    
     addCustomer(newCustomer: Customer) {
        return this.repository.addCustomers(newCustomer);
                
    }
    

    deleteCustomer(DelCustomer){
        return this.repository.deleteCustomer(DelCustomer);
    }

    
}