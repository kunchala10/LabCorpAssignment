import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodosService } from '@app/todos/services/todos.service';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
})
export class TodoHeaderComponent {

  todosService:  TodosService;
  toDoItem:  string;

	constructor(todosService: TodosService) {
    this.todosService = todosService;
    this.toDoItem = '';
	}

  addTodo(){
    this.todosService.addTodo(this.toDoItem);
  }


}

