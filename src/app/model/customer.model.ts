import { Injectable } from "@angular/core";


@Injectable()
export class Customer {

    
    

    constructor(public id: number,
        public firstName?: string,
        public lastName?: string,
        public address?: string,
        public city?: string,
        public orders?: Orders[]
        ) {}
        
}

export class Orders {

    constructor(
        public product1?: string,
        public price?: number,
        public quantity?: number,
        public ordertotal?: number
        ) {}
        
}