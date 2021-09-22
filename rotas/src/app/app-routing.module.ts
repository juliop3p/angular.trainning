import { NotFoundComponent } from './not-found/not-found.component';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then((mod) => mod.CursosModule),
    canActivate: [AuthGuardGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuardGuard],
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./alunos/alunos.module').then((mod) => mod.AlunosModule),
    canActivate: [AuthGuardGuard],
    canLoad: [AuthGuardGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
