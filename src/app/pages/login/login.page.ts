import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store/AppState';
import { hide, show } from 'src/app/store/loading/loading.actions';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppStore>) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  forgotEmailPassword(){
    this.store.dispatch(show());

    setTimeout(() => {
    this.store.dispatch(hide());
    }, 3000);
  }
  
  login(){
    this.router.navigate(['home'])
  }

  register(){
    this.router.navigate(['register'])
  }

}
