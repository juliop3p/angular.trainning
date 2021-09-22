import { CursosGuard } from './guards/cursos.guard';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { AlunosGuard } from './guards/alunos.guard';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [AuthService, AuthGuardGuard, CursosGuard, AlunosGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
