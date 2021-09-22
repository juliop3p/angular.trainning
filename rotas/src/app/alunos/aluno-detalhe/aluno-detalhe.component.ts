import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  public alunos: any[] = [];
  aluno: any;
  inscricao: Subscription;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.alunos = this.alunosService.getAlunos();

    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   let id = params['id'];

    //   this.aluno = this.alunosService.getAluno(id);
    // });

    this.inscricao = this.route.data.subscribe((info: any) => {
      this.aluno = info.aluno;
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
