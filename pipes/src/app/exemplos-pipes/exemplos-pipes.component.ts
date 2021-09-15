import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co.glgpRP',
  };

  filtro: string;

  livros: string[] = ['Java', 'Angular 2'];

  constructor() {}

  ngOnInit(): void {}

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Valor Assíncrono');
    }, 2000);
  });

  valorAsync2 = interval(2000).pipe(map((valor) => 'Valor assíncrono 2'));

  addCurso(value) {
    this.livros.push(value);
  }

  obterCursos() {
    if (
      this.livros.length === 0 ||
      this.filtro === null ||
      this.filtro === undefined ||
      this.filtro?.trim() === ''
    ) {
      return this.livros;
    }

    return this.livros.filter((v) => {
      console.log(v);
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }
}
