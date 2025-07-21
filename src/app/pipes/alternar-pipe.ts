import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternar', 
  standalone: false 
})
export class AlternarPipe implements PipeTransform { 

 transform(value: string): string { 

    let resultado = ''; 
    let usarMayuscula = true; 

    for (let i = 0; i < value.length; i++) { 
      const char = value.charAt(i); 

      if (/[a-zA-Z]/.test(char)) { 
        resultado += usarMayuscula ? char.toUpperCase() : char.toLowerCase(); 
        usarMayuscula = !usarMayuscula; 
      } else {
        resultado += char; // Si no es una letra, agrega el carácter tal cual al resultado
      }
    }

    return resultado; 
  }

}
