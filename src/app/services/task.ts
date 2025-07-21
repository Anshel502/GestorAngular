import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Define the Task interface
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private TaskSubject = new BehaviorSubject<Task[]>([]);
  private CurrentId: number;
  

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.TaskSubject.next(JSON.parse(savedTasks));  
      this.CurrentId = this.getNextId(JSON.parse(savedTasks));  
    }
    const storedTasks = localStorage.getItem('tasks');
    let initialTaks: Task[] = [];

  if(storedTasks){
    initialTaks = JSON.parse(storedTasks);

  }

  this.TaskSubject = new BehaviorSubject<Task[]>(initialTaks);
  this.CurrentId = this.calculateNextId(initialTaks);


  }
private updateLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
  private getNextId(task: Task[]): number {

    const maxId = task.reduce((max, task) => Math.max(max, task.id), 0);
    return maxId + 1;
  }
private calculateNextId(tasks: Task[]): number {
    if (tasks.length === 0) return 1;
    return Math.max(...tasks.map(t => t.id)) + 1;
  }


private saveToLocalStorage(tasks: Task[]): void{
  localStorage.setItem('tasks', JSON.stringify(tasks));

}

  getTasks(): Observable<Task[]> {
    return this.TaskSubject.asObservable();
  }

  getCurrentTasks(): Task[] {
return this.TaskSubject.getValue();
  }

  addTasks(title: string): void {
    const newTasks: Task = {
      id: this.CurrentId++,
      title,
      completed: false
    };
    const uppdateTasks = [...this.TaskSubject.getValue(), newTasks];
    this.TaskSubject.next(uppdateTasks);
    this.saveToLocalStorage(uppdateTasks);
  }

toggleTask(id: number): void {
    const updatedTasks = this.TaskSubject.getValue().map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.TaskSubject.next(updatedTasks);
    this.saveToLocalStorage(updatedTasks);
    this.updateLocalStorage(updatedTasks);
  }
toggleTaskCompletion(id: number): void {
    const updatedTasks = this.TaskSubject.getValue().map((task: Task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.TaskSubject.next(updatedTasks);
    this.saveToLocalStorage(updatedTasks);
  }
}