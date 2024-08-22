import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  username:string;
  email:string;
  constructor(){
    this.username = " ";
    this.email=" ";
  }
  onSubmit(myform:any){
    console.log(myform.value)
    this.username = myform.value.username;
    this.email = myform.value.email
  }
}
