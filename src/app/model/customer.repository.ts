import { Injectable } from "@angular/core";
import { Customer, Orders } from './customer.model';
import { DataSource } from './datasource';


@Injectable()
export class CustomerRepository{
    private customers: Customer[] = [];
    
    private locator = (p:Customer, id:number) => p.id == id;

    constructor(private datasource: DataSource){
        datasource.getCustomers().subscribe(data => {
            this.customers = data;
        });
    }

    getCustomers(category: string = null): Customer[] {
        return this.customers;
        
    }
    getCustomer(id: number): Customer{
        return this.customers.find(p => p.id == id);
        
    }
    addCustomers(newCustomers) {
       if(newCustomers.id == 0 || newCustomers.id == null){
            newCustomers.id = this.generateID();
            this.customers.push(new Customer(newCustomers.id, newCustomers.firstName, newCustomers.lastName, newCustomers.address, newCustomers.city, newCustomers.orders));
            
        }
    }
    private generateID(): number {
        let candidate = 100;
        while (this.getCustomer(candidate) != null) {
            candidate++;
        }
        return candidate;
    }

    deleteCustomer(id: number) {
        let index = this.customers.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.customers.splice(index, 1);
        }
    }

}