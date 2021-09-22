import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Resolve,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let id = route.params['id'];

    return this.alunosService.getAluno(id);
  }
}
