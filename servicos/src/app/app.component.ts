import { CursosService } from './cursos/cursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CursosService],
})
export class AppComponent {
  title = 'servicos';
}
