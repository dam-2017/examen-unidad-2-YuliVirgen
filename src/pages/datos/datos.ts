import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    templateUrl:"datos.html"
})
export class Datos{
    formulario: FormGroup;
  public param:any;
  public datos: any = Datos;

  constructor(public navCtrl: NavController,public fb: FormBuilder) {
      this.formulario = this.createformulario();
  }
  private createformulario(){
    return this.fb.group({
    'nombre': ['', Validators.required],
    'apeM': ['', Validators.required],
    'apeP': ['', Validators.required],
    'fecNac': ['', Validators.required],
}
  )};
  }