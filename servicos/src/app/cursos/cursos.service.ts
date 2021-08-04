import { LogService } from './../shared/log.service';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Typescript', 'Java'];

  constructor(private logService: LogService) {
    console.log('Construtor iniciado...');
  }
  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos...');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
