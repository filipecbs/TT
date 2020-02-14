import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LivroService} from '../../services/livro.service'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  livros;
  Ativo: boolean = true;
  registerForm: FormGroup;

  constructor(public AuthService: AuthService, public router:Router, public formbuilder: FormBuilder, public LivroService: LivroService) {
    this.registerForm = this.formbuilder.group({
    text: [null, [Validators.required, Validators.maxLength(100)]],
    });
    this.ListaLivro();
    this.isActive();
  }

  ngOnInit() {
  }
  voltarPaginaAnterior(){
    this.router.navigate(['tabs/tab3']);
  }
  isActive(): boolean{

    if( this.Ativo == false )
      return false;
    else
      return true;
  }

  registrarComentario( registerForm ) {

    if ( registerForm.status == "VALID") {

      this.AuthService.registrarComentario( registerForm.value ).subscribe(
        ( res ) => {
          console.log( res );
          this.router.navigate(['/tab1']);
        }
      )
    }
  }

  avaliar(){
    this.Ativo = !this.Ativo;
    console.log(this.Ativo);
  }
  ListaLivro():any{
		this.LivroService.livrosCompra().subscribe(
      (res) => {
			  this.livros = res;
			  console.log(res)
		})
	}
}
