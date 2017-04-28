import{Component} from '@angular/core';
import{NavController,NavParams} from 'ionic-angular';


@Component({
    templateUrl:"bienvenido.html"
})
export class Bienvenido{
    public parametros : any;
    
    constructor(
    public navCtrl:NavController,
    public params:NavParams
){

}
}