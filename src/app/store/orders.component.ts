import { Component } from '@angular/core';
import { CustomerRepository } from '../model/customer.repository';
import { Customer } from '../model/customer.model';
import { StoreComponent } from './store.component';


@Component({
    selector: "order",
    templateUrl: "orders.component.html"
})

export class OrderDetailComponent{

    
    
    constructor(private repository: CustomerRepository) {}

    get customers(): Customer[]{
        return this.repository.getCustomers();
    }

}