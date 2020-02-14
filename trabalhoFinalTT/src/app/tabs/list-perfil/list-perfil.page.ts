import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-perfil',
    templateUrl: './list-perfil.page.html',
    styleUrls: ['./list-perfil.page.scss'],
})
export class ListPerfilPage implements OnInit {

    perfis: any[]
    userId;

    constructor(public AuthService: AuthService, public router: Router) {

    }

    listaUser(): any {
        this.AuthService.listaUser().subscribe(
            (res) => {
                this.perfis = res;
                console.log(res);
            });
    }
    voltarPaginaAnterior() {
        this.router.navigate(['tabs/tab3']);
    }

    goToPerfil(id) {
        if (id == this.userId) {
            this.router.navigate(['tabs/tab1']);
        }
        else {
            this.router.navigate(['tabs/perfil', id]);
        }
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.userId = localStorage.getItem('userId')
        this.listaUser();

    }

}
