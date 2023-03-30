import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { TodoApiService } from '../core/services/todoApi/todo-api.service';
@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css'],
})
export class InactiveComponent  {
  @Input() moveTodo: (body: any, type:string) => any;
  @Input() pendingData: any;
  @Output() activeDataEvent = new EventEmitter<any>();
  @Output() pendingDataEvent = new EventEmitter<any>();
  @Output() doneDataEvent = new EventEmitter<any>();
  constructor(private todoApi: TodoApiService) {}
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
  callMoveToDone(body: any) {
    this.moveTodo(body, 'done');
  }
  callMoveToActive(body: any) {
    this.moveTodo(body, 'active');
  }
}
