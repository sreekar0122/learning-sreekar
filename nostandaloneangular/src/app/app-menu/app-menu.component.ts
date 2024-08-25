import { Component } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css'
})
export class AppMenuComponent {
  items = [{title:"Home",path:"/home"},{title:"Admin",path:"/admin"},{title:"add-product",path:"/add-product"}];
  
}
