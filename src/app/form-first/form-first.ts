import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-first',
  imports: [
    FormsModule
  ],
  templateUrl: './form-first.html',
  styleUrl: './form-first.css',
})
export class FormFirst {
  status = "Form not submitted";
  defaultName = "";
  user = "";

  onSendForm(email: HTMLInputElement){
    console.log(email.value);
    this.status = "Form submitted";
  }

  onDefaultForm() {
    this.defaultName = "Default Name";
  }
}
