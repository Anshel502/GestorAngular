import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../../services/task';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  eliminarTarea(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    // Si tienes persistencia en backend, puedes llamar al servicio aquí.
  }
}
