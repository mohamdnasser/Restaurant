package com.spring.restaurant.service;


import com.spring.restaurant.dao.OrderRepository;

import com.spring.restaurant.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    public List<Order> getAllOrdersByCategoryId(Long id){
        return orderRepository.findByCategoryId(id);
    }

    public List<Order> getOrdersByKey(String key){
        return orderRepository.findByNameContaining(key);
    }

    public Order getOrderById(Long id){
        return orderRepository.findById(id).get();
    }

}



