import { TodoApiService } from '../core/services/todoApi/todo-api.service';
import { OnInit, Component } from '@angular/core';
import { map } from 'rxjs/operators';
interface TodoBody {
  id: number;
  name: string;
  description: string;
  data: string;
  status: string;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(private todoApi: TodoApiService) {}
  ngOnInit() {
    this.getData();
  }

  activeData: any;
  pendingData: any;
  doneData: any;

  getData() {
    this.todoApi
      .getTodoData()
      .pipe(map((el: any) => el.filter((el: any) => el.status === 'active')))
      .subscribe((value) => (this.activeData = value));

    this.todoApi
      .getTodoData()
      .pipe(map((el: any) => el.filter((el: any) => el.status === 'pending')))
      .subscribe((value) => (this.pendingData = value));

    this.todoApi
      .getTodoData()
      .pipe(map((el: any) => el.filter((el: any) => el.status === 'done')))
      .subscribe((value) => (this.doneData = value));
  }

  moveTodo(body: TodoBody, type: string) {
    body.status = type;
    this.todoApi.putTodoData(body);
    this.getData();
  }

  updateActiveData(data: any) {
    this.activeData = data;
  }
  updatePendingData(data: any) {
    this.pendingData = data;
  }
  updateDoneData(data: any) {
    this.doneData = data;
  }
}
