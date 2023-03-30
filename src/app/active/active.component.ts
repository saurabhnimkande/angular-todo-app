import { Component, Input } from '@angular/core';
import { TodoApiService } from '../core/services/todoApi/todo-api.service';
import { Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
})
export class ActiveComponent {
  @Input() moveTodo: (body: any, type: string) => any;
  @Input() activeData: any;
  @Output() activeDataEvent = new EventEmitter<any>();
  @Output() pendingDataEvent = new EventEmitter<any>();
  @Output() doneDataEvent = new EventEmitter<any>();
  constructor(private todoApi: TodoApiService) {}
  callMoveToPending(body: any) {
    this.moveTodo(body, 'pending');
  }

  callMoveToDone(body: any) {
    this.moveTodo(body, 'done');
  }

  getData() {
    this.todoApi
      .getTodoData()
      .pipe(map((el: any) => el.filter((el: any) => el.status === 'active')))
      .subscribe((value) => this.activeDataEvent.emit(value));

    this.todoApi
      .getTodoData()
      .pipe(map((el: any) => el.filter((el: any) => el.status === 'pending')))
      .subscribe((value) => this.pendingDataEvent.emit(value));

    this.todoApi
      .getTodoData()
      .pipe(map((el: any) => el.filter((el: any) => el.status === 'done')))
      .subscribe((value) => this.doneDataEvent.emit(value));
  }
}
