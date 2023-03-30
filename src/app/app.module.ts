import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from  '@angular/common/http';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';
import { DoneComponent } from './done/done.component';
import { TodoApiService } from './core/services/todoApi/todo-api.service';
import { FilterData } from './filterData.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ActiveComponent,
    InactiveComponent,
    DoneComponent,
    FilterData],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TodoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
