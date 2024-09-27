import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService<T extends Record<string, any>> {
  private subject!: BehaviorSubject<T>;
  private isCompleted: boolean = false;
  constructor() {
    this.initializeState();
  }

  private initializeState() {
    this.subject = new BehaviorSubject<T>({} as T);
  }

  getState() {
    if(this.isCompleted) this.initializeState();
    return this.subject.asObservable();
  }

  getValue(): T {
    return this.subject?.getValue();
  }

  setState(state: T) {
    if(this.isCompleted) this.initializeState();
    this.subject.next({...this.getValue(), ...state});
  }

  clearState() {
    this.subject = new BehaviorSubject<T>({} as T);
  }

  resetState() {
    this.subject.complete();
    this.isCompleted = true;
  }
}
