import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService  {

 constructor(private http: HttpClient){}

  getMessage():Observable<any>{
    return this.http.get('http://localhost:3000/alerts')
  }
}
