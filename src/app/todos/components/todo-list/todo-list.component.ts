import { Component } from '@angular/core';
import { ITodo } from '@app/todos/interfaces';
import { TodosService } from '@app/todos/services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  styleUrls: [
    './todo-list.component.scss',
  ],
  templateUrl: './todo-list.component.html'
})
export class TodosListComponent {

  todoService: TodosService;
  allTodos$:  Observable<ITodo[]>;

  constructor(todoService: TodosService){
    this.todoService = todoService;
    this.allTodos$ = this.todoService.allTodos$;
  }

  doComplete(index){
    this.todoService.toggleComplete(index);
  }

  updateTodo(index, text){
    this.todoService.updateTodo(index,text);
  }

  cancelUpdateTodo(todo){
    todo.editing = false;
  }

  remove(index){
    this.todoService.removeTodo(index);
  }

  editTodo(todo){
    todo.editing = true;
  }



}
