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
  dynamicFormArray = []; //data will stay same, no need to change
  answerArray = [];
  inputAnswers: string[] = []; //need to be cleared on reset
  registrationForm: FormGroup; //need to be reset

  showHints: boolean = false; //need to be reset to false 
  submitted: boolean = false; //need to be reset to false
  passTest: boolean = false; //need to be reset to false
  minPassPct: number = 0.8;


  ngOnInit(): void {


    this.registrationForm = this.fb.group({

    });

    this.contactList = this.qService.getQuestions();
    this.qService.getQuestions2().subscribe(
      data => {
        this.dynamicFormArray = data;

        this.dynamicFormArray.forEach(element => {
          this.answerArray.push(element.Answer);
        });
        console.log(this.answerArray);

        this.createFormControl();
      }
    )
  }

  createFormControl() {
    this.dynamicFormArray.forEach(element => {
      this.registrationForm.addControl(element.ID, new FormControl(''));
    });
    console.log(this.registrationForm);
  }

  changeHints() {
    this.showHints = !this.showHints;
  }

  postData() {

    this.inputAnswers = [];

    Object.keys(this.registrationForm.controls).forEach((key: string) => {
      const abstractControl = this.registrationForm.get(key);
      console.log('Key = ' + key + 'Value =' + abstractControl.value);
      console.log(typeof abstractControl.value);
      this.inputAnswers.push(abstractControl.value);
    });
    console.log(this.inputAnswers);
    console.log(this.answerArray);
    this.submitted = true;





  }

  inputEqual(i: number): boolean {
    return this.inputAnswers[i] == this.answerArray[i];

  }

  getScore(): number {
    let totalCorrect: number = 0;
    for (var index in this.inputAnswers) {
      if (this.inputAnswers[index] == this.answerArray[index]) {
        totalCorrect = totalCorrect + 1;
      }
    }

    let finalScore: number = totalCorrect / this.inputAnswers.length;
    return finalScore;
  }

  passingScore(inputPct: number): boolean {
    return inputPct >= this.minPassPct;
  }

  reset(): void {
    this.submitted = false;
    this.inputAnswers = [];
    this.showHints = false;
    this.passTest = false;
    this.registrationForm.reset();
  }

}
