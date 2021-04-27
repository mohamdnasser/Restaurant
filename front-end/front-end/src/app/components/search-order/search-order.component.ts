import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { Order } from 'src/app/model/order';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {

  

  constructor(private orderService: OrderServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }

    // http://localhost:4200/orders/key


  doSearch(value: string){
    this.router.navigateByUrl('/orders/' + value);
  }

 

}
