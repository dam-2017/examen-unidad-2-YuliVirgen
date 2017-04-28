import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Bienvenido } from '../bienvenido/bienvenido';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
formulario: FormGroup;
  public param:any;
  public bienvenido: any = Bienvenido;

  constructor(public navCtrl: NavController,public fb: FormBuilder) {
      this.formulario = this.createformulario();
  }
  private createformulario(){
    return this.fb.group({
    'usuario': ['', [Validators.required,Validators.minLength(6)]],
        'contraseña': ['', [Validators.required,Validators.minLength(8)]],
    //'contraseña': ['', [Validators.required,Validators.minLength(8)], [Validators.pattern(/(([0-9]{1,}[A-Za-z]{1,})|[0-9]$)/g)]],

  }


    )};
}
