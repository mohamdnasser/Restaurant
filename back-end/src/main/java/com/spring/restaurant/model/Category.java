package com.spring.restaurant.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.MappedSuperclass;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
@Entity
@Table(name = "category")
public class Category extends CategoryOrder{



}
