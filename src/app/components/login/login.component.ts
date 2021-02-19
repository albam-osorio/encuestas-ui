import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: FormControl;
  password: FormControl;

  messages: Message[];

  constructor(private app: AppService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForms();
    this.reset();
  }

  buildForms() {
    this.username = new FormControl(null, Validators.nullValidator);
    this.password = new FormControl(null, Validators.nullValidator);

    this.form = this.formBuilder.group({
      username: this.username,
      password: this.password,
    });
  }

  private reset() {
    this.app.invalidateToken();
    this.form.reset();
  }

  login() {
    this.messages = [];

    this.app.authenticate({
      username: this.username.value,
      password: this.password.value
    }, this.handleAuthorized, (error) => {
      this.messages = [{
        severity: 'error', summary: 'Error', detail: error.error.message
      }];
    });

    console.table(this.messages);
  }

  protected handleAuthorized() {
    console.error("Bienvenido");
  }
}
