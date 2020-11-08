import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonsearchService {

  constructor(private httpClient: HttpClient) { }

  getQuestions(): any[] {
    const questionList = [
      {
        "question": "What is valid employee conduct?",
        "hint": "No negative behavior",
        "options": ["share data", "cheating", "violence", "honesty"],
        "answer": "honesty"
      },

      {
        "question": "How many timesheet errors is considered noncompliant?",
        "hint": "more than you think",
        "options": [1, 2, 4, 5],
        "answer": 5
      },

      {
        "question": "Which of the following is prohibited at work",
        "hint": "No negative behavior",
        "options": ["drinking alcohol", "taking a break", "talking to manager", "challenging a coworkers idea"],
        "answer": "drinking alcohol"
      }
    ];
    return questionList;
  }

  getQuestions2(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/questions');
  }
}
