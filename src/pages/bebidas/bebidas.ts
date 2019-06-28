import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeADSPage } from '../home-ads/home-ads';
import { BuscarPratoPage } from '../buscar-prato/buscar-prato';
import { BebidasPage } from '../bebidas/bebidas';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html'
})
export class BebidasPage {

  constructor(public navCtrl: NavController) {
  }
  goToHomeADS(params){
    if (!params) params = {};
    this.navCtrl.push(HomeADSPage);
  }goToBuscarPrato(params){
    if (!params) params = {};
    this.navCtrl.push(BuscarPratoPage);
  }goToBebidas(params){
    if (!params) params = {};
    this.navCtrl.push(BebidasPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPage);
  }
}
