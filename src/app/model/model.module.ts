import { NgModule } from "@angular/core";
import { DataSource } from './datasource';
import { Customer } from './customer.model';
import { CustomerRepository } from './customer.repository';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from '../store/store.component';


@NgModule({
    imports:[BrowserModule],
    declarations:[StoreComponent],
    exports:[StoreComponent],
    providers:[DataSource]
})

export class ModelModule{ }