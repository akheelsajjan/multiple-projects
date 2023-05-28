import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { Observable, Subject, map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/kanban/models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
 public todos!:Observable<Todo[]>
 public currentPage: number = 1;
 public itemsPerPage: number = 8;
 public addTask = false;
 public taskForm!:FormGroup
 public task = 'Create'
 public loading = false

  constructor(
    private todoService:TodoService,
    private fb:FormBuilder
    ){

  }

  ngOnInit(): void {
    this.loading = true
    setTimeout(()=>{
      this.loadTodos()
    },2000)

    this.taskForm = this.fb.group({
      id:[21,Validators.required],
      completed:[,Validators.required],
      description:[''],
      title:['',Validators.required]
    })
  }

  loadTodos(): void {

    this.todos =  this.todoService.getTodo(this.currentPage, this.itemsPerPage)
    this.loading = false
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loading = true
      this.loadTodos();
    }
  }

  nextPage(): void {
    this.currentPage++;
    this.loading = true
    this.loadTodos();
  }

  createTask(){
    this.task = 'Create'
    this.addTask = true
  }

  submit(){
    this.loading = true
    this.todoService.addTodo(this.taskForm.value)
    .pipe(
      map((data)=>{
        console.log(data)
      })
    ).subscribe()

    this.taskForm.reset()
    this.loadTodos();
  }

  updateTask(todo:Todo){
    this.task = 'Update'
    this.loading = true
    this.taskForm.setValue({
      id: todo.id,
      completed:false,
      description:'Updated',
      title:todo.title
    })

    this.loadTodos();
  }




}
