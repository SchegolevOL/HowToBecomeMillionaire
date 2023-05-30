import { Component } from '@angular/core';

class Answer{
  constructor(
    public text: string,
    public right: boolean
  ){}
};
class Question{
constructor(
public text:string, 
public anwers: Array<Answer>
){}
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})


export class QuestionComponent {
  indexSelectQuestion: number = 0;
  selectAnswer: any;
  numberOfCorrectAnswers: number =0;

  Question1: Question = 
  new Question
  (
    "Вопрос 1", 
    new Array<Answer>
    (
      new Answer("Ответ 1", true), 
      new Answer("Ответ 2", false), 
      new Answer("Ответ 3", false)
    )
  )  
  Question2: Question = 
  new Question
  (
    "Вопрос 2", 
    new Array<Answer>
    (
      new Answer("Ответ 21", true), 
      new Answer("Ответ 22", false), 
      new Answer("Ответ 23", false)
    )
  )
  Question3: Question = 
  new Question
  (
    "Вопрос 3", 
    new Array<Answer>
    (
      new Answer("Ответ 31", true), 
      new Answer("Ответ 32", false), 
      new Answer("Ответ 33", false)
    )
  )
  Questions=new Array<Question>(this.Question1, this.Question2, this.Question3);
  countQuestion: number = this.Questions.length;
  userAnswers = new Array<boolean>();
  selectQuestion : Question = this.Questions[this.indexSelectQuestion];
  //================================
  onClickAnswer(userAnswer: boolean):void{
    console.log(this.userAnswers);
    this.userAnswers[this.indexSelectQuestion]=userAnswer;
  }
  onClickNextQuestion():void{
    
    
    
      if (this.userAnswers[this.indexSelectQuestion]) {
        this.numberOfCorrectAnswers++;
      }
   
    this.indexSelectQuestion++;
    this.selectQuestion = this.Questions[this.indexSelectQuestion];
    console.log(this.selectQuestion); 
  }
  
}
