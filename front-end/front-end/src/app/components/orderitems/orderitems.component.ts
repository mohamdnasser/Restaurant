import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-orderitems',
  templateUrl: './orderitems.component.html',
  styleUrls: ['./orderitems.component.css']
})
export class OrderitemsComponent implements OnInit {

  ordersArray: Order[] = [];

  constructor(private orderService: OrderServiceService) { }

  ngOnInit(): void {
    this.getOrders();
  }


  getOrders(){
    this.orderService.getOrders().subscribe(
      data => { 
        this.ordersArray = data
      }
    )
  }

}
