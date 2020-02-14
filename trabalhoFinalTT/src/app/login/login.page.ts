import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, public formbuilder: FormBuilder, public AuthService: AuthService) {
    this.loginForm = this.formbuilder.group({
      email:[null, [Validators.required]],
      password:[null,[Validators.required]]
    });
   }

  ngOnInit() {
  }

  cadastro(){
    this.router.navigate(['/cadastro']);
  }

  logarUser( loginForm ){

    if ( loginForm.status == "VALID"){
      this.AuthService.logarUser( loginForm.value ).subscribe(
        (res) => {
          console.log( res );
          console.log( loginForm );
          localStorage.setItem('userToken', res.success.token);
          localStorage.setItem('userId', res.success.id);
          this.router.navigate(['/tabs/tab1']);
        }
      );
    }
  }
}
