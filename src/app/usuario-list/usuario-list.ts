import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'bootstrap';

@Component({
  selector: 'app-usuario-list',
  standalone: false,
  templateUrl: './usuario-list.html',
  styleUrls: ['./usuario-list.scss'] // asegúrate de que esté bien escrito: styleUrls y no styleUrl
})
export class UsuarioList {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Datos del formulario:', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
