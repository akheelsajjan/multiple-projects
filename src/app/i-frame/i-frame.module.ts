import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'issueList',
    component: IssueListComponent
  },
  {
    path: 'todoList',
    component: TodoListComponent
  }
]

@NgModule({
  declarations: [
    TodoListComponent,
    IssueListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IFrameModule { }
