package com.spring.restaurant.controller;


import com.spring.restaurant.model.Order;


import com.spring.restaurant.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/")
public class OrderController {


//    http://localhost:4200/api/orderByKey


    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @GetMapping("allOrders")
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }


    @GetMapping("category")
    public List<Order> getOrdersByCategoryId(@RequestParam Long id){
        return orderService.getAllOrdersByCategoryId(id);
    }


    @GetMapping("orderByKey")
    public List<Order> getOrdersByCategoryId(@RequestParam String word){
        return orderService.getOrdersByKey(word);
    }

    //    http://localhost:4200/api/order/id={value}
    @GetMapping("order")
    public Order getOrderById(@RequestParam Long id){
        return orderService.getOrderById(id);

    }


}
