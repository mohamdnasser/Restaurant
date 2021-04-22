package com.spring.restaurant.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order extends BaseEntity{

    private int price;
    private String img;
    private String description;



}
