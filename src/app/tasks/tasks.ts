import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: false,
  template: `
    <!-- Barra superior -->
    <nav class="navbar navbar-dark bg-primary shadow-sm">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
<p class="navbar-brand fw-bold fs-4">{{ 'angularapp' | alternar }}</p>
          <span class="text-white ms-3">
            <p><strong>Fecha actual:</strong> {{ fechaActual | date:'fullDate' }}</p>
          </span>
        </div>
<button class="btn btn-outline-light btn-sm" (click)="cerrarSesion()">
  Cerrar Sesión
</button>
      </div>
    </nav>

    <!-- Contenido principal -->
    <div class="container my-5 d-flex justify-content-center">
      <div class="card shadow-sm w-100" style="max-width: 700px;">
        <div class="card-header bg-white d-flex justify-content-between align-items-center">
          <h5 class="mb-0">Gestión de Tareas</h5>
          <div class="d-flex gap-2">
            <button (click)="goHome()" class="btn btn-outline-primary btn-sm">
              <i class="bi bi-house-door"></i> Inicio
            </button>

            <button *appIfRoute="'/form'" routerLink="/form" class="btn btn-success btn-sm">
              <i class="bi bi-plus-circle"></i> Agregar Nueva Tarea
            </button>
          </div>
        </div>

        <div class="card-body">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class Tasks {
  fechaActual = new Date();

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['']);
  }

 cerrarSesion() {
    const confirmacion = confirm('¿Seguro que quieres cerrar sesión?');
    if (confirmacion) {
      this.router.navigate(['/usuarioList']); 
    }
  }
}
