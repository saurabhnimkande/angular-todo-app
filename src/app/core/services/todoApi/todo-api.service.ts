import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class TodoApiService {
  constructor(private http: HttpClient) {}

  public getTodoData() {
    return this.http.get('http://localhost:3000/todos');
  }

  public postTodoData(body: any) {
    return this.http.post('http://localhost:3000/todos', body).subscribe();
  }

  public putTodoData(body: any) {
    return this.http.put(`http://localhost:3000/todos/${body.id}`, body).subscribe();
  }
}
