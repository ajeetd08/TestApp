import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  constructor(public questionsService: QuestionsService) { }

  //public questionsList: any;

  //public testStr: string = "hi";


}
