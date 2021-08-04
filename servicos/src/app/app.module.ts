import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoModule } from './criar-curso/criar.curso.module';
import { LogService } from './shared/log.service';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';

@NgModule({
  declarations: [AppComponent, CursosComponent, ExemplosPipesComponent],
  imports: [BrowserModule, AppRoutingModule, CriarCursoModule],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
