import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderitemsComponent } from './components/orderitems/orderitems.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { RouterModule, Routes } from '@angular/router';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';

const routes: Routes = [

  // http://localhost:4200/category
  {path: 'category' , component: OrderitemsComponent},

  // http://localhost:4200/category/id
  {path: 'category/:id' , component: OrderitemsComponent},

  // http://localhost:4200/orders
  {path: 'orders' , component: OrderitemsComponent},

  // http://localhost:4200/
  {path: '' , redirectTo: '/orders' , pathMatch: 'full'},

  // http://localhost:4200/anythingDummy
  {path: '**' , redirectTo: '/orders' , pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    OrderitemsComponent,
    CategoryItemsComponent,
    DropdownMenuComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
