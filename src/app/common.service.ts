import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public subject = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) { }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  updateMessage(obj) {
    this.subject.next(obj);
  }
  getFormData(){
    return this.http.get('./../assets/data/data.json')
  }
}
