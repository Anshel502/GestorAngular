import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing-module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Tasks } from './tasks';
import { List } from './list/list';
import { FormComponent } from './form/form';
import { AlternarPipe } from '../pipes/alternar-pipe';



@NgModule({
  declarations: [
    Tasks,
    List,
    FormComponent,
  AlternarPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }