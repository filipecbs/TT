import { Component, OnInit } from '@angular/core';
import { ProtractorExpectedConditions } from 'protractor';
import {LivroService} from '../../services/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-home',
  templateUrl: './livro-home.component.html',
  styleUrls: ['./livro-home.component.scss'],
})
export class LivroHomeComponent implements OnInit {

  livros: any[]

  constructor(public router: Router, public LivroService: LivroService) {
    this.ListaLivro();
  }

  ngOnInit() {}

  navegar(id){
    console.log(id);
    this.router.navigate(['/tabs/livro/' + id]);
  }

  ListaLivro():any{
		this.LivroService.listaLivro().subscribe(
      (res) => {
			  this.livros = res;
			  console.log(res)
		})
	}

}
