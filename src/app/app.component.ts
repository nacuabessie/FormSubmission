import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('f')
  subForm!: NgForm;
  submitted = false;
  genders = ["Male", "Female", "LGBTQ"];

  user = {
      username: '',
      password: '',
      email: '' ,
      phone: '',
      secretQuestion: '',
      answer: '',
      gender: '',
      job: '',
      description: '',
      salary: '',
     
  }

onSubmit(){
  this.submitted = true;
  this.user.username = this.subForm.value.username
  this.user.password= this.subForm.value.password
  this.user.email= this.subForm.value.email
  this.user.phone= this.subForm.value.phone
  
  this.user.gender= this.subForm.value.otherInfo.gender
  this.user.secretQuestion = this.subForm.value.otherInfo.secret
  this.user.answer = this.subForm.value.otherInfo.answer
  
  this.user.job = this.subForm.value.job
  this.user.description = this.subForm.value.description
  this.user.salary = this.subForm.value.salary

  this.subForm.reset();
}

}