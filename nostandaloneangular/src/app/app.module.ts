import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { FormComponent } from './form/form.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { BooksComponent } from './books/books.component';
import { ServerComponent } from './server/server.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    AppMenuComponent,
    AppLoginComponent,
    AppHomeComponent,
    AppFooterComponent,
    FormComponent,
    DynamicformComponent,
    BooksComponent,
    ServerComponent,
    HomeComponent,
    AdminComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
