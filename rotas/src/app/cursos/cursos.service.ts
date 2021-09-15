import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  getCursos() {
    return [
      {
        id: 1,
        nome: 'Angular 2',
      },
      {
        id: 2,
        nome: 'Java',
      },
    ];
  }

  getCursoById(id: number) {
    let cursos = this.getCursos();
    const curso = cursos.filter((curso) => Number(curso.id) === Number(id));
    return curso.length > 0 ? curso[0] : null;
  }
}
