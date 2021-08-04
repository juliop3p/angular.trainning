import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso-criado-componente',
  templateUrl: './receber-curso-criado-componente.component.html',
  styleUrls: ['./receber-curso-criado-componente.component.css'],
})
export class ReceberCursoCriadoComponenteComponent implements OnInit {
  curso: string;

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.emitirCursoCriado.subscribe((curso: string) => {
      this.curso = curso;
    });
  }
}
