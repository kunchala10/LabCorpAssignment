import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FILTER_MODES } from '@app/todos/constants/filter-modes';
import { TodosService } from '@app/todos/services/todos.service';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
})
export class TodoFooterComponent {

   toDoService: TodosService
  constructor(toDoService: TodosService){
    this.toDoService = toDoService;
  }

  doFilter(filter: FILTER_MODES){
    this.toDoService.changeFilterMode(filter);
  }

  clearCompleted(){
    this.toDoService.clearCompleted();
  }
}

