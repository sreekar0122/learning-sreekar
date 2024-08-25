import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SquareService } from '../square.service';
@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrl: './dynamicform.component.css'
})
export class DynamicformComponent {
  contactForm: FormGroup;
  result : number = 0;
  constructor(private formBuilder : FormBuilder, private squareserviceOb: SquareService){
    this.result = squareserviceOb.doSquare(4)
    this.contactForm = this.formBuilder.group({
      fullName:[""],
      email: [""],
      message: [""],
    })
  }
  onSubmit(){
    console.log("your form data :",this.contactForm.value)
  }
}
