import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  msg:string;
  students:string[];
  showMsg:boolean;
  
  constructor(){
    this.msg = "Angular is updated";
    this.students = ["sreekar","sumith"]
    this.showMsg = true
  }
  sayHello(){
    alert("Hello.. Welcome Angular!")
  }
  toggleshowMsg() {
    this.showMsg = !this.showMsg;
  }
}
