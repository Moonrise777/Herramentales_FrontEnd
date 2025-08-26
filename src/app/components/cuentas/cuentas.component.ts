import { Component, OnInit } from '@angular/core';

// Define the usuario interface if not already imported
interface usuario {
  // Add properties as per your actual usuario structure
  num_emp: string;
  nombre: string;
  turno: number;
  estado: number;
  // Add other fields as needed
}

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit{
   users: usuario[] = [];
  filtro: string = '';
  seleccionado: usuario | null = null;

  ngOnInit(): void {

  }
  seleccionar(emp: any) {
    this.seleccionado = emp;
  }
getTurnoTexto(turno: number): string {
    switch (turno) {
      case 1: return 'Noche';
      case 2: return 'Mañana';
      case 3: return 'Tarde';
      case 4: return 'Administrativo';
      default: return 'Desconocido';
    }
  }

  getEstadoTexto(estado: number): string {
    return estado === 1 ? 'Activo' : 'Bloqueado';
  }

  modificarEmpleado() {
    if (this.seleccionado) {
      console.log('Guardando cambios en:', this.seleccionado);
      // Aquí va la lógica para actualizar al empleado
    }
  }
}
