import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tasks } from './tasks';
import { List } from './list/list';
import { FormComponent } from './form/form';
import { UsuarioList } from '../usuario-list/usuario-list';



const routes: Routes = [
  {
    path: '',
    component: Tasks,
    children: [
      { path: '', component: List },
      { path: 'form', component: FormComponent },
      { path: 'usuarioList', component: UsuarioList },
    ]
  }               
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }