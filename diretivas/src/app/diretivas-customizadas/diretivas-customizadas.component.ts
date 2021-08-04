import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css'],
})
export class DiretivasCustomizadasComponent implements OnInit {
  cursos: string[] = [];
  mostrarCursos: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
