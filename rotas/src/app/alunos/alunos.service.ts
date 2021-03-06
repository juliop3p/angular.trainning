import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' },
  ];

  constructor() {}

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    return this.alunos.find((aluno) => Number(aluno.id) === Number(id));
  }
}
