import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task';
import 'bootstrap';


@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class FormComponent implements OnInit {
agregarTarea() {
throw new Error('Method not implemented.');
}

  tareaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
  ) {
    this.tareaForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {}

  addTask(event: Event): void {
    event.preventDefault();

    if (this.tareaForm.valid) {
      const titulo = this.tareaForm.value.titulo.trim();
      if (titulo) {
        console.log(`Tarea agregada: ${titulo}`);
        this.taskService.addTasks(titulo);
        this.tareaForm.reset();
      }
    } else {
      this.tareaForm.markAllAsTouched(); // para mostrar los errores
    }
  }

  campoInvalido(campo: string): boolean {
    const control = this.tareaForm.get(campo);
    return !!(control && control.invalid && control.touched);
  }
}
