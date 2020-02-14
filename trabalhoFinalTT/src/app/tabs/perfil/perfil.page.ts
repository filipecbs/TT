import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LivroService } from '../../services/livro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.page.html',
    styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

    userId;
    user;

    slides;
    avaliacoes;

    loading = true;

    constructor(public authService: AuthService, public livroService: LivroService, public router: Router, public route: ActivatedRoute) { }

    getUser(id) {
        this.authService.mostraUser(id).subscribe(
            (res) => {
                console.log(res);
                this.user = res[0];
                this.getLivros(this.user.id);
            },
            (error) => {
                console.log(error);
            });
    }

    getLivros(id) {
        this.loading = true;
        this.livroService.mostraOferta(id).subscribe(
            (res) => {
                console.log(res);
                this.slides = res;
                this.loading = false;
            },
            (error) => {
                console.log(error);
            });
    }

    goToLivro(id) {
        this.router.navigate(['/livro', id]);
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.userId = this.route.snapshot.paramMap.get('id');
        this.getUser(this.userId);
    }
}
