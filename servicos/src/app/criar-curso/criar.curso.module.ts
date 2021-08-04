import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponenteComponent } from './../receber-curso-criado-componente/receber-curso-criado-componente.component';

@NgModule({
  declarations: [CriarCursoComponent, ReceberCursoCriadoComponenteComponent],
  imports: [CommonModule],
  exports: [CriarCursoComponent],
})
export class CriarCursoModule {}
