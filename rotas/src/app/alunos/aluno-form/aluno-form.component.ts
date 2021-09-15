import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AlunosService } from "../alunos.service";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {
  public alunos: any[] = [];
  aluno: any;
  inscricao: Subscription;

  constructor(private alunosService: AlunosService, private route: ActivatedRoute, private router: Router) { } 

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if(this.aluno === null) {
          this.aluno = {};
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
