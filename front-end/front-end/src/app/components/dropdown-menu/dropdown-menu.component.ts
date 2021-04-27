import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {

  categoryArray: Category[] = [];
  constructor( private  categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      data => { 
        this.categoryArray = data
      }
    )
  }




}
