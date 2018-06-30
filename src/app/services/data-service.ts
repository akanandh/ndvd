import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();
  private messageSource1 = new BehaviorSubject("red");
  currentMessage1 = this.messageSource1.asObservable();
  private messageSource2 = new BehaviorSubject("red");
  currentMessage2 = this.messageSource2.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeColor(val: string) {
    this.messageSource1.next(val)
  }

  loginClick(val: string) {
    this.messageSource2.next(val);
  }
}
