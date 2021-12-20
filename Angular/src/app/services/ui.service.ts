import { Injectable } from '@angular/core';
import {Observable, Subject,Subscriber} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
private hideFooter: boolean = false;
private subject = new Subject<any>();
  constructor() { }

  toggleFooter():void{
    this.hideFooter = true;
    this.subject.next(this.hideFooter);
  }
  onToggleFooter():Observable<any>{
    return this.subject.asObservable();
  }
}
