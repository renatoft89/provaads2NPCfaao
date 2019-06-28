import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscarPratoPage } from '../buscar-prato/buscar-prato';
import { HomeADSPage } from '../home-ads/home-ads';
import { BebidasPage } from '../bebidas/bebidas';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-home-ads',
  templateUrl: 'home-ads.html'
})
export class HomeADSPage {

  constructor(public navCtrl: NavController) {
  }
  goToBuscarPrato(params){
    if (!params) params = {};
    this.navCtrl.push(BuscarPratoPage);
  }goToHomeADS(params){
    if (!params) params = {};
    this.navCtrl.push(HomeADSPage);
  }goToBebidas(params){
    if (!params) params = {};
    this.navCtrl.push(BebidasPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPage);
  }
}
