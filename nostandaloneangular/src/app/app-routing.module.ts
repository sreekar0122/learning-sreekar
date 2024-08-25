import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { BooksComponent } from './books/books.component';
import { ServerComponent } from './server/server.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
const routes: Routes = [
  {path : "dynamicform",title:"dynamicform",component:DynamicformComponent,},
  {path: "hello-world", title:"hello-world",component:HelloWorldComponent},
  {path:"books/:bookId", title:"Books",component:BooksComponent, data:{pageInfo:"sample book example"}},
  {path:"login", title:"login", component:AppLoginComponent},
  {path:"server",title:"server",component:ServerComponent},
  {path:"admin",title:"admin",component:AdminComponent},
  {path:"home",title:"home",component:HomeComponent},
  {path:"add-product",title:"add-product",component:AddProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
