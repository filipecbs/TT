import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    constructor(private router: Router, private location: Location, public authService: AuthService) { }

    voltarPaginaAnterior() {
        this.location.back();
    }

    logout() {
        this.authService.logout().subscribe(
            (res) => {
                console.log('Logout realizado');
                localStorage.removeItem('userToken');
                localStorage.removeItem('userId');
                this.router.navigate(['/tabs/tab1']);
            }
        );
    }
    historico() {
        this.router.navigate(['tabs/historico']);
    }
    listaPerfil() {
        this.router.navigate(['/tabs/list-perfil']);
    };
    clicaPerfil(id) {
        this.router.navigate(['/', id])
    };

}
