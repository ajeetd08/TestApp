import { Component, OnInit } from '@angular/core';
import { JsonsearchService } from '../jsonsearch.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-testarea',
  templateUrl: './testarea.component.html',
  styleUrls: ['./testarea.component.css']
})
export class TestareaComponent implements OnInit {

  constructor(private qService: JsonsearchService, private fb: FormBuilder) { }

  contactList = [];
  dynamicFormArray = [];
  registrationForm: FormGroup;
  ngOnInit(): void {
    this.registrationForm = this.fb.group({

    });

    this.contactList = this.qService.getQuestions();
    this.qService.getQuestions2().subscribe(
      data => {
        this.dynamicFormArray = data;

        this.createFormControl();
        console.log(this.dynamicFormArray);
      }
    )
  }

  createFormControl() {
    this.dynamicFormArray.forEach(element => {
      this.registrationForm.addControl(element.ID, new FormControl(''));
    });
    console.log(this.registrationForm);
  }

  postData() {
    /*
    console.log(this.registrationForm);
    console.log(this.registrationForm.value);



    let correctAnswers: string[];

    for (var i = 0; i < this.dynamicFormArray.length; i++) {
      correctAnswers.push(this.dynamicFormArray.answer);
    }



    this.dynamicFormArray.forEach(element => {
      console.log(element.ID);
      console.log(this.registrationForm.value;
    })
*/
    let correctAnswers: string[] = [];
    this.dynamicFormArray.forEach(element => {
      correctAnswers.push(element.Answer);
    });

    console.log(correctAnswers);

    let inputAnswers: string[] = [];
    Object.keys(this.registrationForm.controls).forEach((key: string) => {
      const abstractControl = this.registrationForm.get(key);
      console.log('Key = ' + key + 'Value =' + abstractControl.value);
      console.log(typeof abstractControl.value);
      inputAnswers.push(abstractControl.value);
    });
    console.log(inputAnswers);



  }

}
