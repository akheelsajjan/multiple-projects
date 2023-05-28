import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/users/1/todos';



  constructor(private httpClient:HttpClient) { }

  getTodo(currentPage:number, limit:number):Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.url + `?_page=${currentPage}&_limit=${limit}`)
  }

  addTodo(todo:Todo){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(this.url,todo, { headers })
  }

}
