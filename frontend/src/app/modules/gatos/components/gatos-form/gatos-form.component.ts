// frontend/src/app/modules/gatos/components/gatos-form/gatos-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GatosService } from '../../../../services/gatos/gatos.service';
import { Gato, GatoCreate } from '../../../../models/gatos/gato.model';

@Component({
  selector: 'app-gatos-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gatos-form.component.html',
  styleUrl: './gatos-form.component.css'
})
export class GatosFormComponent implements OnInit {
  gato: GatoCreate = {
    nombre: '',
    raza: '',
    edad: 0,
    foto: ''
  };
  
  isEdit = false;
  gatoId?: number;

  constructor(
    private gatosService: GatosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gatoId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEdit = !!this.gatoId;
    
    if (this.isEdit) {
      this.cargarGato();
    }
  }

  cargarGato(): void {
    if (this.gatoId) {
      this.gatosService.getGato(this.gatoId).subscribe({
        next: (gato) => {
          this.gato = gato;
        },
        error: (error) => {
          console.error('Error cargando gato:', error);
        }
      });
    }
  }

  guardarGato(): void {
    if (this.isEdit && this.gatoId) {
      this.gatosService.updateGato(this.gatoId, this.gato).subscribe({
        next: () => {
          this.router.navigate(['/gatos']);
        },
        error: (error) => {
          console.error('Error actualizando gato:', error);
        }
      });
    } else {
      this.gatosService.createGato(this.gato).subscribe({
        next: () => {
          this.router.navigate(['/gatos']);
        },
        error: (error) => {
          console.error('Error creando gato:', error);
        }
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/gatos']);
  }
}
