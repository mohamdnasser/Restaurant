package com.spring.restaurant.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.MappedSuperclass;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
@Entity
@Table(name = "order")
public class Order extends CategoryOrder{

    @Column(name = "price")
    private int price;

    @Column(name = "img")
    private String img;

    @Column(name = "description")
    private String description;



}
