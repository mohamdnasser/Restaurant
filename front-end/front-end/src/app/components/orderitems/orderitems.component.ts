import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-orderitems',
  templateUrl: './orderitems.component.html',
  styleUrls: ['./orderitems.component.css']
})
export class OrderitemsComponent implements OnInit {

  ordersArray: Order[] = [];

  constructor(
             private orderService: OrderServiceService,
             private route: ActivatedRoute) { }

  ngOnInit(): void {
    let result = this.route.snapshot.paramMap.has('id');
    // alert(result);
    if (result){
      this.getOrdersByCategoryId();
    } else {
      this.getOrders();
    }
      
    
  }

  getOrders(){
    this.orderService.getOrders().subscribe(
      data => { 
        this.ordersArray = data
      }
    )
  }

  getOrdersByCategoryId(){
    let categoryId = this.route.snapshot.paramMap.get('id');
    // alert(categoryId)
    this.orderService.getOrdersByCategoryId(categoryId).subscribe(
      data => { 
        this.ordersArray = data
      }
    )
  }

}
