import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Category {
  _id: string;
  name: string;
  description: string;
  created_at:Date;
  status:boolean
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  categories: Category[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.http.get<{ categories: Category[] }>('http://localhost:3000/api/v1/categories').subscribe(
      (response) => {
        this.categories = response.categories;
        console.log(this.categories);
      },
      (error) => {
        console.error("Error fetching categories:", error);
      }
    );
  }

}
