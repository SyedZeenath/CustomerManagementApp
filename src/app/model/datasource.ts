import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Customer, Orders } from './customer.model';

@Injectable()
export class DataSource{
private customers: Customer[] = [
    // {
    //     id: 1, firstName: 'Lee', lastName: 'Carroll', address: '1234 Anywhere St.', city: 'Phoenix',
        
    // },
    // {
    //     id: 2, firstName: 'Lee1', lastName: 'Carroll', address: '1234 Anywhere St.', city: 'NewYork',
        
    // }
    {
        id: 1, firstName: 'lee', lastName: 'carroll', address: '1234 anywhere st.', city: 'phoenix',
        orders: [
          { product1: 'basket', price: 29.99, quantity: 1, ordertotal: 29.99 },
          { product1: 'yarn', price: 39.99, quantity: 1, ordertotal: 39.99 },
          { product1: 'needes', price: 5.99, quantity: 1, ordertotal: 5.99 }
        ]
      },
      {
        id: 2, firstName: 'jesse', lastName: 'hawkins', address: '89 w. center st.', city: 'atlanta',
        orders: [
          { product1: 'table', price: 329.99, quantity: 1, ordertotal: 329.99 },
          { product1: 'chair', price: 129.99, quantity: 4, ordertotal: 519.96 },
          { product1: 'lamp', price: 89.99, quantity: 5, ordertotal: 449.95 },
        ]
      },
      {
        id: 3, firstName: 'charles', lastName: 'sutton', address: '455 7th ave.', city: 'quebec',
        orders: [
          { product1: 'call of duty', price: 59.99, quantity: 1, ordertotal: 59.99 },
          { product1: 'controller', price: 49.99, quantity: 1, ordertotal: 49.99 },
          { product1: 'gears of war', price: 49.99, quantity: 1, ordertotal: 49.99 },
          { product1: 'lego city', price: 49.99, quantity: 1, ordertotal: 49.99 }
        ]
      },
      {
        id: 4, firstName: 'albert', lastName: 'einstein', address: '8966 n. crescent dr.', city: 'new york city',
        orders: [
          { product1: 'baseball', price: 9.99, quantity: 5, ordertotal: 49.95 },
          { product1: 'bat', price: 19.99, quantity: 1, ordertotal: 19.99 }
        ]
      },
      {
        id: 5, firstName: 'sonya', lastName: 'williams', address: '55 s. hollywood blvd', city: 'los angeles'
      },
      {
        id: 6, firstName: 'victor', lastName: 'bryan', address: '563 n. rainier st.', city: 'seattle',
        orders: [
          { product1: 'speakers', price: 499.99, quantity: 1, ordertotal: 499.99 },
          { product1: 'ipod', price: 399.99, quantity: 1, ordertotal: 399.99 }
        ]
      },
      {
        id: 7, firstName: 'lynette', lastName: 'gonzalez', address: '25624 main st.', city: 'albuquerque',
        orders: [
          { product1: 'statue', price: 429.99, quantity: 1, ordertotal: 429.99 },
          { product1: 'picture', price: 1029.99, quantity: 1, ordertotal: 1029.99 }
        ]
      },
      {
        id: 8, firstName: 'erick', lastName: 'pittman', address: '33 s. lake blvd', city: 'chicago',
        orders: [
          { product1: 'book: angularjs development', price: 39.99, quantity: 1, ordertotal: 39.99 },
          { product1: 'book: basket weaving made simple', price: 19.99, quantity: 1, ordertotal: 19.99 }
        ]
      },
      {
        id: 9, firstName: 'alice', lastName: 'price', address: '3354 town', city: 'cleveland',
        orders: [
          { product1: 'webcam', price: 85.99, quantity: 1, ordertotal: 85.99 },
          { product1: 'hdmi cable', price: 39.99, quantity: 2, ordertotal: 79.98 }
        ]
      },
      {
        id: 10, firstName: 'gerard', lastName: 'tucker', address: '6795 n. 53 w. bills dr.', city: 'buffalo',
        orders: [
          { product1: 'fan', price: 49.99, quantity: 4, ordertotal: 199.96 },
          { product1: 'remote control', price: 109.99, quantity: 1, ordertotal: 109.99 }
        ]
      }
        // new Customer(1, "Syed", "zee", "bangalore"),
        // new Customer(2, "Syed1", "zee1", "bangalore"),
        // new Customer(3, "Syed2", "zee2", "bangalore"),
         
];


getCustomers(): Observable<Customer[]> {

    return Observable.from([this.customers]);
    
}

}
